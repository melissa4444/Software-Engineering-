import React from 'react';
import {Switch, Route} from "react-router";
import landingPage from "./landingPage";
import Bio from "./Bio";
import Contact from "./Contact";
import worker from "./worker";
import login from "../loginEveryone/login";
import adminLogin from "../loginEveryone/adminLogin";
import sitterApplication from "../applySitter/sitterApplication";
import sitterApplicationInfo from "../applySitter/sitterApplicationInfo";
import clientApp from "../signupClient/clientApp";
import SignUP from "../signupClient/SignUP";
import petInfo from "../signupClient/petInfo";
import clientprof from "../creatingClient/clientprof";
import inbox from "../creatingClient/inbox";
import publicClientPro from "../creatingClient/publicClientPro";
import petProfile from "../creatingClient/petProfile";
import sitterPro from "../creatingSitterProfile/sitterPro";
import sitterPublicPro from "../creatingSitterProfile/sitterPublicPro";
import faq from "../pages/faq";
import postpage from "../posts/postpage";
import showingSearch from "../show/showingSearch"
import adminpage from "../pages/adminpage"
import changepass from '../pages/changepass';
import loginNav from '../layout/LoginNavBar'


const Main = () => (
    <Switch>
            <Route exact path="/" component={landingPage}/>
            <Route path="/Bio" component={Bio} />
            <Route path="/Contact" component={Contact} />
            <Route path="/worker" component={worker} />
            <Route path="/login" component={login} />
            <Route path="/sitterApplication" component={sitterApplication} />
            <Route path="/sitterApplicationInfo" component={sitterApplicationInfo} />
            <Route path="/clientApp" component={clientApp} />
            <Route path="/SignUp" component={SignUP} />
            <Route path="/petInfo" component={petInfo}/>
            <Route path="/clientprof" component={clientprof}/>
            <Route path ="/inbox" component={inbox}/>
            <Route path ="/publicClientPro" component={publicClientPro} />
            <Route path ="/petProfile" component={petProfile}/>
            <Route path ="/sitterPro" component={sitterPro}/>
            <Route path ="/sitterPublicPro" component={sitterPublicPro}/>
            <Route path ="/faq" component={faq}/>
            <Route path ="/postpage" component={postpage}/>
            <Route path ="/showSearch" component={showingSearch}/>
            <Route path ="/showingSearch" component={showingSearch}/>   
            <Route path ="/adminLogin" component={adminLogin}/>   
            <Route path ="/adminpage" component={adminpage}/>   
            <Route path ="/changepass" component={changepass}/>   
    </Switch>
)


export default Main