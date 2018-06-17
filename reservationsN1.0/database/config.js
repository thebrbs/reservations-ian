var key = {
  endpoint: process.env.RDS_HOSTNAME,
  rdsport: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD
};

module.exports = key; 