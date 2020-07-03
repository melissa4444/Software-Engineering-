import React, {Component} from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer, MDBIcon,
    MDBRow
} from "mdbreact";
import {Container} from "react-bootstrap";
import cats from '../images/cats.png'
import '../../stylesheets/sitterAppInfo.css';
import '../../App.css';

class sitterApplication extends Component{
    render(){
        return(
    <div>
        <div className={"sitter-top"} id={"top"}>
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <MDBCard wide className="mx-auto w-100 ">
                        <MDBCardImage cascade className="img-fluid rounded mx-auto d-block z-depth-0" src={cats}/>
                        <MDBCardBody cascade>
                            <MDBCardTitle>MDBCard title</MDBCardTitle>
                            <MDBCardText className="mb-4">
                                <h2>Get Paid to Play with Furry Animals!</h2>
                            <h4>
                                CatDog Makes it Easy By Connecting Your Animal Lover Spirit To The Best Pet Parents!
                            </h4>
                                <p>
                                    Work Around Your Own Schedule!
                                </p>
                            </MDBCardText>
                            <MDBBtn id={"button"}rounded color="primary" size="lg" href={"#middle"}>Find Out More!</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        </div>
        <div className={'sitter-middle'} id={"middle"}>
        <MDBContainer>
            <section className="text-center my-5">
                <h2 className="h1-responsive font-weight-bold my-5">
                    Why is it so great?
                </h2>
                <p className="lead grey-text w-responsive mx-auto mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam.
                </p>
                <MDBRow>
                    <MDBCol md="3" className="mx-auto">
                        <MDBIcon icon="chart-area" size="3x" className="red-text" />
                        <h5 className="font-weight-bold my-4">Flexibility Puts You In Control</h5>

                        <p className="grey-text mb-md-0 mb-5">
                            <MDBIcon icon="check" size="2x" className="red-text mr-3"/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                        <p className="grey-text mb-md-0 mb-5 mt-3">
                            <MDBIcon icon="check" size="2x" className="red-text mr-3"/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                    </MDBCol>

                    <MDBCol md="3" className="mx-auto">
                        <MDBIcon far icon="comments" size="3x" className="orange-text" />
                        <h5 className="font-weight-bold my-4">Tools To Succeed</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            <MDBIcon icon="check" size="2x" className="red-text mr-3"/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                        <p className="grey-text mb-md-0 mb-5 mt-3">
                            <MDBIcon icon="check" size="2x" className="red-text mr-3"/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                    </MDBCol>
                </MDBRow>
            </section>
        </MDBContainer>
        </div>

        <MDBContainer>
            <div className="sitter-reviews">
                <MDBRow className="mx-auto">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card&apos;s content.
                                </MDBCardText>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card&apos;s content.
                                </MDBCardText>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </MDBContainer>


        <div className="md-stepper-horizontal ">
            <div className="md-step active done">
                <div className="md-step-circle"><span>1</span></div>
                <div className="md-step-title">Create Your Profile</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
            </div>
            <div className="md-step active editable">
                <div className="md-step-circle"><span>2</span></div>
                <div className="md-step-title">Verify</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
            </div>
            <div className="md-step active">
                <div className="md-step-circle"><span>3</span></div>
                <div className="md-step-title">Accept Request</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
            </div>
            <div className="md-step">
                <div className="md-step-circle"><span>4</span></div>
                <div className="md-step-title">Get Paid</div>
                <div className="md-step-bar-left"></div>
                <div className="md-step-bar-right"></div>
            </div>
        </div>
        <div className={'button-startApp'}>
            <MDBBtn id={"button"}rounded color="primary"  size="lg" href={"sitterApplicationInfo"}>Start Creating Your Profile</MDBBtn>
        </div>

</div>


        )
    }
}

export default sitterApplication;