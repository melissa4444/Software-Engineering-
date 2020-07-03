//all imports
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import '@progress/kendo-theme-default/dist/all.css';




import './components/pages/style.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import NavBar from './components/layout/NavBar'
import Footer from "./components/layout/Footer";

class App extends Component {
    render() {
        
        return (
           <div className="demo-big-content landing-grid" >
               <Layout>
               <Content>
                   <NavBar/>
                   <Footer/>
               </Content>
               </Layout>
            </div>
        );
    }
}
export default App;