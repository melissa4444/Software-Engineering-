import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";
import {Grid, Image, Rating, Segment} from "semantic-ui-react";
import melissa from "../images/melissa.png";
import amir from "../images/amir.png";
import tahar from "../images/tahar.png";
import ivan from "../images/ivan.png";
import xio from "../images/xia.png";

class Bio extends Component{
    render(){
        return(
            <div>
                <div className={"header-text"}>
                    <Container fluid >
                        <Header  as='h1' textAlign={'center'} >Our Team  </Header>


                        <h1>
                            We are a team of five that came together to solve a problem. As animal lovers we
                            found a need for a service that lacked in the market this service is Pet Care.

                        </h1>

                    </Container>



                </div>




                    <Grid.Column width={50}>
                        <Segment>

                            <div className="ui grid">
                                <div className="four wide column">
                                    <div className="ui card">
                                        <div className="image">
                                            <img src={amir}/>
                                        </div>
                                        <div className="content">
                                            <h1 className="header">Amir</h1>
                                            <div className="meta">
                                                <span className="date">Developer</span>
                                            </div>
                                            <div className="description">
                                                Back-end Lead
                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div className="four wide column">
                                    <div className="ui card">
                                        <div className="image">
                                            <img src={melissa}/>
                                        </div>
                                        <div className="content">
                                            <h1 className="header">Melissa</h1>
                                            <div className="meta">
                                                <span className="date">Developer</span>
                                            </div>
                                            <div className="description">
                                                Front-end Lead
                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div className="four wide column">

                                    <div className="ui card">
                                        <div className="image">
                                            <img src={tahar}/>
                                        </div>
                                        <div className="content">
                                            <h1 className="header">Tahar</h1>
                                            <div className="meta">
                                                <span className="date">Developer</span>
                                            </div>
                                            <div className="description">
                                                Lead
                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div className="four wide column">
                                    <div className="ui card">
                                        <div className="image">
                                            <img src={ivan}/>
                                        </div>
                                        <div className="content">
                                            <h1 className="header">Ivan</h1>
                                            <div className="meta">
                                                <span className="date">Developer</span>
                                            </div>
                                            <div className="description">
                                                Front-end
                                            </div>
                                        </div>

                                    </div>


                                </div>


                                <div className="four wide column">
                                    <div className="ui card">
                                        <div className="image">
                                            <img src={xio}/>
                                        </div>
                                        <div className="content">
                                            <h1 className="header">Xiaopeng</h1>
                                            <div className="meta">
                                                <span className="date">Developer</span>
                                            </div>
                                            <div className="description">

                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>


                        </Segment>

                    </Grid.Column>







            </div>
        )
    }
}
export default Bio;