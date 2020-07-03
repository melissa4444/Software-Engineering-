var express = require('express');



const router = express()

const session = require('express-session')
const search = require('./data/db').search

const client = require('./data/clientDb')

const worker = require('./data/workerDb')


const addSub = require('./data/db').addSub

const dbConnect = require('./data/db').connect
const dbDisconnect = require('./data/db').disconnect

const bcrypt = require('bcryptjs')

const uuid = require('uuid/v4')

const nodeMailer = require('nodemailer')
const authjs = require('./data/auth')

dbConnect()


const sender = 'catdogsfsu@gmail.com'
const password = 'Catdog648'
const transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
      user: sender,
      pass: password
    }
  });



const auth = (req,res,next) => {
    console.log(req.session)
    if(req.session.loggedIn){
        next()
    }
}







router.post('/db/addClient', async (req,res) => {

    try{
    const user = req.body.userName;
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const street = req.body.street
    const city = req.body.city
    const zipCode = req.body.zipCode
    const email = req.body.email

    const password = req.body.password

    const hashPassword = await bcrypt.hash(password, 3)
    console.log(hashPassword)

    
    client.addClient(user,firstName, lastName,street, city,zipCode,email,hashPassword).then((result)=>{

        req.session.loggedIn = true;
        req.session.user = user;
        const mailOptions = {
            from: sender,
            to: email,
            subject: 'Welcome to Catdog',
            text: `Welcome to our website ${firstName +' ' + lastName} and we are happy to have you!` + '\n\n\n\n' + '-CatDog Team Support'
          };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });  

        res.status(201).send("Created")

    }).catch((e) => {
        res.send(e)
    })

    }catch(error){

         console.log(error)

    }
    
})  


router.post('/db/addPet' ,async(req,res) => {
    try{
        await client.addPet(req.body.user,req.body.name,req.body.description)
        res.status(201).send('All good')
    }catch(error){
        res.status(200).send('User Taken')
    }
    
})

router.post('/db/addWorker', async(req,res) => {
    try{
    const user = req.body.user;
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const address = req.body.address
    const phone = req.body.phone
    const credential = req.body.credential
    const email = req.body.email
    const hashPassword = await bcrypt.hash(req.body.password, 3)
    await worker.addWorker(user,firstName,lastName,address,credential,phone,email,hashPassword)
    req.session.loggedIn = true;
    req.session.user = user;
    res.status(201).send('Created')
    }catch(error){
        console.log(error)
        res.status(200).send('User Already taken')
    }
})

router.post('/db/createPost', async (req,res) => {

    await client.makePost(req.body.user,req.body.start,req.body.end,req.body.location,0,req.body.type,req.body.petName)
    res.status(201).send("Created")
    
})

router.post('/login', async (req,res) => {
  
    const user = req.body.user
    const password = req.body.password
    const type = req.body.type
    authjs.getPassword(user,type).then(async(result) =>{
        const hashPassword = result;
        const isMatch = await bcrypt.compare(password,hashPassword)
        if(isMatch) {
            req.session.loggedIn = true;
            req.session.user = user;
            req.session.type = type;
            console.log(req.session)
            res.status(201).send("Ok")
		//res.redirect(`/clientprof?user=${req.session.user}`)        
}
        else {
            req.session.destroy()
            res.send('User/Password Incorrect')
        }
    }).catch((e)=>{
        req.session.destroy()
        res.send('User/Password Incorrect')
    })

})


router.post('/db/petInfo', async (req,res) => {
    res.send(await client.getPet(req.body.user))
})

router.post('/changePassword', async (req,res) => {
    try{
    let hashPassword = await authjs.getPassword(req.body.user,req.body.type)
    const isMatch = await bcrypt.compare(req.body.oldpass,hashPassword)
    if(!isMatch){
        res.json({error: 'Old Password did not Match'})
    }else{
    hashPassword = await bcrypt.hash(req.body.newpass, 3)
    res.send(await authjs.changePassword(req.body.user,req.body.type,hashPassword))
    }

    }catch(e){
        console.log(e)
        res.json({error: 'Database problem'})
    }
})

router.post('/db/getPost', async (req,res) => {
    //Pending Post
   res.send(await client.getPost(req.body.user))
})

router.post('/db/getbooking', async (req,res) => {
    try{
        res.send(await client.getBooking(req.body.user))

    }catch(e){

    }
})

router.post('/db/clientInfo',async (req,res) => {
    res.send(await client.getInfo(req.body.user))
})
router.post('/db/workerInfo', async (req,res) => {
    console.log(req.body)
   res.send(await worker.getWorker(req.body.user))
})
router.post('/db/jobs', async (req,res) => {
    res.send(await worker.jobs())
})
router.post('/db/acceptedJobs', async (req,res) => {
    worker.acceptedJobs(req.body.worker).then(async (allJobs) => {
    const acceptedJobs = allJobs
    
    for(let i=0; i<allJobs.length; i++){
      console.log(allJobs[i].clientUser)
      const user= await client.getInfo(allJobs[i].clientUser)
      acceptedJobs[i].email = user[0].email
      acceptedJobs[i].useraddy = user[0].Street + ', ' + user[0].City
    }
    setTimeout(() => {
        console.log(acceptedJobs)
        res.send(acceptedJobs)
    },2000)
    }).catch((e) => {

    })
    
})


router.post('/adminSearch', (req,res) => {
    authjs.adminSearch(req.body.user,req.body.type).then((r) => {
        res.json(r)
    }).catch((e) => {
        res.status(204).send(e)

    })
})

router.post('/removeuser', (req,res) => {
    authjs.removeUser(req.body.user,req.body.type).then((r) => {
        res.send(r)
    }).catch((e) => {
        
    })
})

router.post('/changePassword',(req,res) => {
    console.log(req.body)

})



router.get('/', (req, res, next) => {
    
    req.session.loggedIn = true
    res.render('index');
  });

router.post('/db/booking', (req,res) => {
    worker.booking(req.body.id,req.body.user).then((result) => {
        res.send(result)
    }).catch((e) => {
        res.send("Error")
    })
})

router.post('/db/search', (req,res) => {
    console.log(req.body.searchValue)
    search(req.body.searchValue).then((result)=>{
        res.json(result)
    }).catch((e) => {
        console.log(e)
    })
})  

router.post('/db/addSub', (req,res) => {
    console.log(req.body)
    addSub(req.body.firstName,req.body.lastName,req.body.email).then((result) => {
        res.send(result)
    }).catch((e) => {
        res.send("Already added")
    })
    
})



    
  module.exports = router;
