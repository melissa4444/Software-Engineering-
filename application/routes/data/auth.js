const connection = require('./db').con

const bcrypt = require('bcryptjs')



const getPassword = (user,type) => {
    

    return new Promise((resolve, reject) => {
        if(type==="client"){type="Client"}
        else{type="Worker"}
        const sql = `SELECT password FROM ${type} where user = '${user}';`
        connection.query(sql,(error, result) => {
            if(error) {reject("User not Found")}
            else if(result[0] === undefined) reject("User not Found")
            else {
                    console.log(result[0].password)
                    resolve(result[0].password)
            }
        })

    })
}

const changePassword = (user,type,password) => {
    return new Promise((resolve,reject) => {
        const sql = `update ${type} set password = '${password}' where user='${user}';`
        console.log(sql)
        connection.query(sql,(error, result) => {
            if(error) {reject("User not Found")}
            else {
                   
                    resolve('Password Changed')
            }
        })
    })
}

const adminSearch = (user,type) => {
    console.log("Here")
    return new Promise((resolve,reject) => {
        if(type==="client"){type="Client"}
        else{type="Worker"}
        const sql = `SELECT * FROM ${type} where user = '${user}'; `
        console.log(sql)
        connection.query(sql,(e,result) => {
            if(result.length <= 0 ) {reject("User Not found")}
            resolve(result)
        })
    })
}


const removeUser = (user,type) => {
    return new Promise((resolve,reject) => {
        if(type==="client"){type="Client"}
        else{type="Worker"}
        const sql = `delete from ${type} where user = '${user}';`
        connection.query(sql,(e,result) => {
            if(e) {console.log(e)}
            resolve('User Banned and Deleted from our Database')
        })
    })
}

module.exports.getPassword = getPassword
module.exports.adminSearch = adminSearch
module.exports.removeUser = removeUser
module.exports.changePassword = changePassword