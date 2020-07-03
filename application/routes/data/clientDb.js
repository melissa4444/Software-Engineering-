const connection = require('./db').con


const addClient = (user,firstName,lastName,street,city,zipCode,email,password) => {

    return new Promise((resolve,reject) => {
        const sql = `INSERT INTO Client (user,firstName,lastName`
        +`,Street,City,ZipCode,email,password) VALUES ('${user}','${firstName}','${lastName}' `
        +`, '${street}', '${city}' ,'${zipCode}', '${email}', '${password}')`
        connection.query(sql,(error,result) => {
            if(error) reject (error)
            console.log(result)
            resolve("Success added to database")
        })
        
    })


}


const addPet = (user,name,description) => {


    return new Promise((resolve,reject) => {
        const sql = `insert into Pet (clientUser,name,description) values('${user}','${name}','${description}');`
        connection.query(sql,(error,result) => {
            if(error) reject (error)
            console.log(result)
            resolve("Success added to database")
        })
    })




}

const getInfo = (user) => {
    return new Promise((resolve,reject) => {
        const sql =`select * from Client where user='${user}';`
        connection.query(sql,(error,result) => {
            if(error) reject (error)
          
            resolve(result)
        })
    })
}

const getPet = (user) => {
    return new Promise((resolve,reject) => {
        const sql =`select * from Pet where clientUser='${user}';`
        connection.query(sql,(error,result) => {
            if(error) reject (error)
            console.log(result)
            resolve(result)
        })
    })
}

const makePost = (user,start,end,location,active,type,name) => {
    return new Promise((resolve,reject) => {
        const sql = "INSERT INTO `catdog`.`Post` (`clientUser`, `datePosted`, `dateRequested`, `location`, `active`, `type`, `name`)"
        + `VALUES ('${user}', '${start}', '${end}', '${location}', ${active}, '${type}', '${name}');`
        connection.query(sql,(error,result) => {
            if(error) reject (error)
            console.log(result)
            resolve(result)
        })
    })
    
}

const getPost = (user) => {
    return new Promise((resolve,reject) => {
        const sql = `select * from Post where clientUser='${user}' and active=0;`
        connection.query(sql,(error,result) => {
            if(error) reject (error)
            console.log(result)
            resolve(result)
        })
    })

}

const getBooking = (user) => {
    return new Promise((resolve,reject) => {
        const sql = `select * from Post where clientUser='${user}' and active=1;`
        connection.query(sql,(error,result) => {
            if(error) reject (error)
            console.log(result)
            resolve(result)
        })
    })

}



















module.exports.addClient = addClient;


module.exports.addPet = addPet;
module.exports.getInfo = getInfo;

module.exports.getPet = getPet;
module.exports.makePost = makePost;
module.exports.getPost = getPost
module.exports.getBooking = getBooking