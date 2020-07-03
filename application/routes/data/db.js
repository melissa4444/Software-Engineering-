const mysql = require('mysql');

const con = mysql.createConnection({
    host: "35.188.213.30",
    user: "root",
    password: "catdog",
    database: 'catdog'
  });


  const connect = () => {
    con.connect((err) => {
      if (err)
      console.log(err);
      else
      console.log("Connected")
    });
  }

  const disconnect = () => {
    con.end(function(err) {
      if (err) {
        return console.log('error:' + err.message);
      }
      console.log('Close the database connection.');
    });
  }

  const search = (username) => {
    return new Promise((resolve,reject) => {

      con.query("SELECT * from Client where user = '"+username+"'",(error,result)=>{
        if(error) reject(error)
        resolve(result)
      })
    })
  }


  const addSub = (firstName,lastName,email) => {
    return new Promise((resolve,reject) => {
      con.query(`insert into subscription (firstName,lastName,email) values ('${firstName}','${lastName}','${email}')`,(error,result) => {
        if(error) reject(error)
        resolve("Added to Subscription")
      })
    })
  }

  




module.exports.search = search;
module.exports.connect = connect;
module.exports.addSub = addSub;

module.exports.con = con;

module.exports.disconnect = disconnect;

