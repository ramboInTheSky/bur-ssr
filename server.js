import Crypto from "crypto";
import express from "express";
import fs from "fs";
import helmet from "helmet";
import https from "https";
import nextjs from "next";
import utf8 from "utf8";


const dev = process.env.NODE_ENV !== "production";
// Create the Express-Next App
const app = nextjs({ dev });
const handle = app.getRequestHandler();

// Start the app
app
  .prepare()
  // Start Express server and serve the app
  .then(() => {
    const server = express();
    server.use(helmet({
      frameguard: false
    }));
    const options = {
      key: fs.readFileSync("./keys/key.pem"),
      cert: fs.readFileSync("./keys/cert.pem"),
      passphrase: "amido"
    };

    https.createServer(options, server).listen(3000);

    server.get("/consent", (req, res) => {
      const constructSignature = (consentObj, secretKey) => {
        const binaryKey = Buffer.from(secretKey, "base64");
        const baseStringEncoded = utf8.encode(consentObj);
        const binarySignature = Crypto.createHmac("sha1", binaryKey)
          .update(baseStringEncoded)
          .digest("base64");
        return binarySignature;
      };

      const search = req.query;
      const consentObj = JSON.stringify({
        scope: search.scope.replace(/\+/g, " "),
        clientID: search.clientID,
        context: search.context,
        UID: search.UID,
        consent: true
      });
      const sanitisedSignature = encodeURIComponent(
        constructSignature(consentObj, "Zx+xNOZJT6VM3l4V9n34yLv6lSBXbZpMIsqDHAjaAic=")
          .replace(/=/g, "")
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
      );
      res.redirect(
        `/proxy?mode=afterConsent&consent=${consentObj}&sig=${sanitisedSignature}`
      );
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });
  })
  .catch(() => {
    process.exit(1);
  });
