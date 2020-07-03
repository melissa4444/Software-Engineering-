import React, {Component} from "react";
import {Content} from "react-mdl";
import logo from '../images/logo.png';
import axios from 'axios';
import { MDBTypography } from 'mdbreact'
import '../layout/navstyle.css';

import { BrowserRouter as Router } from 'react-router-dom';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBIcon,
    MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from 'mdbreact';

import Main from "../pages/main";


let test = ''

/**
 * 
                                    <MDBNavItem onSubmit={this.onSubmit}>
                                        <MDBFormInline waves >
                                            <div className="md-form my-0" >

                                                <input className="form-control mr-sm-2 "
                                                       size="lg"
                                                       type="text"
                                                       placeholder="Search Sitters"
                                                       aria-label="Search"
                                                       name={"searchValue"}
                                                       value={searchValue}
                                                       onChange={event => this.onChange(event)}

                                                />
                                            </div>
                                           
                                            
                                        </MDBFormInline>
                                    </MDBNavItem>
 */

class NavBar extends Component {
    state = {
        loggedIn: false,
        type: ''
    }

    componentDidMount() {
        console.log(window.location.pathname)
        if(window.location.pathname === '/clientprof'){
           this.setState({loggedIn: true,
            type: 'Client'})
        }else if(window.location.pathname === '/sitterpro'){
            this.setState({loggedIn: true,
            type: 'Worker'})
        }
        else{
            this.setState({loggedIn: false,
            type: ''})
        }

       
    }

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            form: {
                searchValue: ''
            }

        };
        this.onClick = this.onClick.bind(this);
    }


    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }
   

    onSubmit=(event)=>{
        // event.preventDefault();
        //get our form data
        const {searchValue,firstName,lastName,email}=this.state;
        axios.post('/api/db/search',{searchValue})
            .then((result)=>{
                console.log(result.data)
                this.setState({
                    firstName: result.data[0].firstName,
                    lastName: result.data[0].lastName,
                    email: result.data[0].email
                })
                test = this.state.firstName
            })
    }

    update = async()=>{
        await axios.get('/logout')
        if(localStorage.loggedIn){
            this.setState({
                loggedIn: true
            })
        }else{
        this.setState({
            loggedIn: false
        })

        }  
    } 
    
   



    render() {


        const{searchValue}=this.state;
        const first = <p>First Name: {this.state.firstName}</p>;

        const login = <MDBNavLink to="login" className="black-text" ><MDBTypography tag='h2'> Login<MDBIcon size="1x" icon="paw" className="black-text"/> </MDBTypography></MDBNavLink>
        const logout = <MDBNavLink to="/" className="black-text" onClick={localStorage.clear(), this.update} ><MDBTypography tag='h2'> Logout<MDBIcon size="1x" icon="paw" className="black-text"/> </MDBTypography></MDBNavLink>
        

       

        return(
            <div>
                <Router>
                    <header>
                        <MDBNavbar  dark expand="md" scrolling fixed="top" className={"header-color"}>
                            <MDBNavbarBrand href="/">
                                <img
                                    src={logo}
                                    width={"50"}
                                    height={"50"}
                                    lassName="d-inline-block align-top"
                                    alt="catdog logo"

                                />

                                {/* <MDBIcon icon={"paw"}/>*/}


                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={ this.onClick } />

                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                                <MDBNavbarNav left>




                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem >
                                        {this.state.loggedIn ? logout : login}
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="Bio" className="black-text"><MDBTypography tag='h2'>Bio<MDBIcon size="1x" icon="paw" className="black-text"/></MDBTypography></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="Contact" className="black-text"><MDBTypography tag='h2'>Support <MDBIcon size="1x" icon={"question"} className="black-text"/></MDBTypography></MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                        <Content className={"landing-grid"}>
                            <div className="page-content "/>
                            <Main/>
                        </Content>
                    </header>
                </Router>


            </div>
        );
    }


}
export default NavBar;

export {test};

