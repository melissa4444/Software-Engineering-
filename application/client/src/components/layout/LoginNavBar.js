import React, {Component} from "react";
import {Content} from "react-mdl";
import logo from '../images/logo.png';
import axios from 'axios';

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

class LoginNavBar extends Component {


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



    render() {


        const{searchValue}=this.state;
        const first = <p>First Name: {this.state.firstName}</p>;

        return(
            <div>
                <Router>
                    <header>
                        <MDBNavbar  dark expand="md" scrolling fixed="top" className={"header-color"}>
                            <MDBNavbarBrand href="/">
                                <img
                                    src={logo}
                                    width={"30"}
                                    height={"30"}
                                    lassName="d-inline-block align-top"
                                    alt="catdog  logo"

                                />

                                {/* <MDBIcon icon={"paw"}/>*/}


                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={ this.onClick } />

                            <MDBCollapse isOpen = { this.state.collapse } navbar>
                                <MDBNavbarNav left>




                                    <MDBNavItem onSubmit={this.onSubmit}>
                                        <MDBFormInline waves >
                                            <div className="md-form my-0" >

                                                <input className="form-control mr-sm-2"
                                                       type="text"
                                                       placeholder="Search Sitters"
                                                       aria-label="Search"
                                                       name={"searchValue"}
                                                       value={searchValue}
                                                       onChange={event => this.onChange(event)}

                                                />
                                            </div>
                                            {this.state.firstName ? first : ''}

                                        </MDBFormInline>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem >
                                        <MDBNavLink to="login">login<MDBIcon icon="paw"/></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="Bio">Bio<MDBIcon icon="paw"/></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="Contact"><MDBIcon icon={"question"} /> Help</MDBNavLink>
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
export default LoginNavBar;

export {test};