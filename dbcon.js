var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_farolr',
  password        : '2667',
  database        : 'cs290_farolr'
});

module.exports.pool = pool;
