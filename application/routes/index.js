var express = require('express');
var router = express.Router();

const auth = (req,res,next) => {
  console.log(req.query)
  if(req.session.loggedIn && req.session.user===req.query.user){
      next()
  }else{
    res.redirect('/')
  }
}

const loggedIn = (req,res,next) => {
  if(req.session.loggedIn && req.session.user){
    console.log("all good")
    next()
  }
}


/* GET home page. */
router.get('/',function(req, res, next) {
   res.status(200).sendFile(__basedir  + '/build/index.html');
});


router.get('/Bio', (request, response, next) => {
  console.log(request.cookies)

  console.log("Hello from bio")
  response.redirect("/?user=rkisog")
});
router.get('/Contact', (request, response, next) => {
  console.log("Hello from contact")
  response.status(200).sendFile(__basedir  + '/build/index.html');
});
router.get('/Clientprof',auth,(request, response, next) => {

  response.status(200).sendFile(__basedir  + '/build/index.html');
  
  
});

router.get('/sitterApplicationInfo', (request, response, next) => {
  console.log("Hello from contact")
  response.status(200).sendFile(__basedir  + '/build/index.html');
});
router.get('/showingsearch', (request, response, next) => {
  console.log("Hello from contact")
  response.status(200).sendFile(__basedir  + '/build/index.html');
});

router.get('/petInfo',(request, response, next) => {
  console.log(request.session)
  response.status(200).sendFile(__basedir  + '/build/index.html');
});

router.get('/faq',(request, response, next) => {
  console.log(request.session)
  response.status(200).sendFile(__basedir  + '/build/index.html');
});

router.get('/adminLogin',(request, response, next) => {
  console.log(request.session)
  response.status(200).sendFile(__basedir  + '/build/index.html');
});


router.get('/login', (request, response, next) => {

  response.status(200).sendFile(__basedir  + '/build/index.html');
 
});
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.send("Logout")
})
router.get('/clientApp', (request, response, next) => {

  response.status(200).sendFile(__basedir  + '/build/index.html');
});

router.get('/sitterpro', auth,(request, response, next) => {

    response.status(200).sendFile(__basedir  + '/build/index.html');
    
  
});

router.get('/sitterApplication', (request, response, next) => {
  console.log("Hello from sitterApplicaiton")
  response.status(200).sendFile(__basedir  + '/build/index.html');
});



router.get('/signUp', (request, response, next) => {
  console.log("Hello from signUp")
  response.status(200).sendFile(__basedir  + '/build/index.html');
});

router.get('/privateinfo', (request, response, next) => {
  console.log("Hello from privateInfo")
  response.status(200).sendFile(__basedir  + '/build/index.html');
});




module.exports = router;
