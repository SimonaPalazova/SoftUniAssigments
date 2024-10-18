const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    port: process.env.PORT || 3000,
    dbURL: "mongodb://localhost:27017/cocktails",
    origin: ["http://localhost:5555", "http://127.0.0.1:5173/"],
    
    
  },
  production: {
    port: process.env.PORT || 3000,
    dbURL: process.env.DB_URL_CREDENTIALS,
    origin: ["http://localhost:5555", "http://127.0.0.1:5173/"],
  },
};

module.exports = config[env];