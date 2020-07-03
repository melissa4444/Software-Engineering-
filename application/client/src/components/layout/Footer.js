import React, {Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component{
    render(){
        return(
            <div>
                <MDBFooter className="font-small  footer-color">
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a> CatDog Team </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        )
    }
}
export default Footer;