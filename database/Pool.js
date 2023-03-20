const { Pool } = require("pg");
const dotenv = require("dotenv");

// configure the env vars to attach them to Process.env.[...]
dotenv.config();

// setup the configurations
const db_config = {
  connectionString: process.env.DB_URL,

  // number of milliseconds to wait before timing out when connecting a new client
  // by default this is 0 which means no timeout
  connectionTimeoutMillis: 300,

  // number of milliseconds a client must sit idle in the pool and not be checked out
  // before it is disconnected from the backend and discarded
  // default is 10000 (10 seconds) - set to 0 to disable auto-disconnection of idle clients
  idleTimeoutMillis: 200,

  // maximum number of clients the pool should contain
  // by default this is set to 10.
  max: 20,
};

// instantiate a pool instance from the Pool class
const db_pool = new Pool(db_config);

//! check the connection
// if the client is connected without any problems
db_pool.on("connect", (client) => {
  console.log("database client is connected");
});

// if the client is removed or closed ..
db_pool.on("remove", (client) => {
  console.log("database client is removed or closed");
});

exports.db_pool = db_pool;
