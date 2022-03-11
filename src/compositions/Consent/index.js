import React from "react";
import Loader from "react-loader";

export default function ConsentComposition() {
  return (
    <div>
      <Loader loaded={false} options={{ scale: 0.6 }} />
    </div>
  );
}
