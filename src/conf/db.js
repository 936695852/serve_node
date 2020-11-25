const env = process.env.NODE_ENV

let MYSQL_CONF

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'cdb-172td2xa.bj.tencentcdb.com',
    user: 'root',
    password: '&W5281k404',
    port: '10061',
    database: 'myblog',
  }
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'cdb-172td2xa.bj.tencentcdb.com',
    user: 'root',
    password: '&W5281k404',
    port: '10061',
    database: 'myblog',
  }
}

module.exports = {
  MYSQL_CONF,
}
