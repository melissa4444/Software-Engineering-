const connection = require('./db').con

const addWorker = (user,firstName,lastName,address,certification,phone,email,password) => {

    return new Promise((resolve,reject) => {
        const sql = `INSERT INTO Worker (user, firstName, lastName, address, password, email, certification, phone)` 
       + `VALUES ('${user}', '${firstName}',' ${lastName}', '${address}', '${password}', '${email}', '${certification}', '${phone}');`
       console.log(sql)
        connection.query(sql,(error,result) => {
            if(error) reject (error)
            console.log(result)
            resolve("Success added to database")
        })
        
    })


}

const booking = (id,user) => {
    return new Promise((resolve,reject) => {
        const sql = `update Post set active=1, worker='${user}' where id=${id}`
        connection.query(sql,(error,result) => {
            if (error) reject(error)
            console.log(result)
            resolve("Booking was Made")
        })
    })
}

const getWorker = (user) => {
    return new Promise((resolve,reject) => {
        const sql = `select * from Worker where user='${user}';`
        connection.query(sql,(error,result) => {
            if(error) console.log(error)
            console.log(result)
            resolve(result)
        })
    })
}

const jobs = () => {
    return new Promise((resolve,reject) => {
        const sql = `select * from Post where active=0 and location='San Francisco';`
        connection.query(sql,(error,result) => {
            if(error) reject (error)
            console.log(result)
            resolve(result)
        })
    })
}

const acceptedJobs = (worker) => {
    return new Promise((resolve,reject) => {
        const sql = `select * from Post where active=1 and worker='${worker}';`
        connection.query(sql,(error,result) => {
            if(error) reject (error)
            resolve(result)
        })
    })
}






module.exports.addWorker = addWorker;
module.exports.booking = booking;
module.exports.getWorker = getWorker;
module.exports.jobs = jobs;
module.exports.acceptedJobs = acceptedJobs;