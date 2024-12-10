import dotenv from "dotenv";

dotenv.config();

const serverSettings = {
  port: process.env.PORT || 3000,
};

const dbSettings = {
  database: process.env.DB || "null",
  user: process.env.DB_USER || "null",
  password: process.env.DB_PASS || "null",
  server: process.env.DB_SERVER || "null",
};

const oktaSettings = {
  clientId: process.env.OKTA_CLIENT_ID,
  clientSecret: process.env.OKTA_CLIENT_SECRET,
  url: process.env.OKTA_URL_BASE,
  appBaseUrl: process.env.OKTA_APP_BASE_URL,
};

// module.exports = Object.assign(
//   {},
//   { dbSettings, serverSettings, oktaSettings }
// );

export default Object.assign({}, { dbSettings, serverSettings, oktaSettings });
