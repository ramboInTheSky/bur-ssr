/* eslint-disable no-useless-escape */
const passwordRegex = /(?=^.{8,18}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?\/&gt;.&lt;,])(?!.*\s).*$/;

export default { passwordRegex };
