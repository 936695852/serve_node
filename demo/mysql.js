const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'cdb-172td2xa.bj.tencentcdb.com',
  user: 'root',
  password: '&W5281k404',
  port: '10061',
  database: 'myblog',
})

con.connect()

const sql = 'select * from users'
con.query(sql, (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
})

con.end()
