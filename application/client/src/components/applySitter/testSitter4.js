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
import '../../stylesheets/sitterAppInfo.css';
import '../../App.css';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Window } from '@progress/kendo-react-dialogs';
import categories from '../../jsonFiles/categories.json';
import options from '../../jsonFiles/options.json';
import '@progress/kendo-theme-default/dist/all.css';
import Button from "react-bootstrap/Button";
import { Upload } from '@progress/kendo-react-upload';
import '../../style-func/fileUpload';
import { MaskedTextBox, NumericTextBox, Input, Switch, Slider, SliderLabel, ColorGradient, ColorPalette, ColorPicker } from '@progress/kendo-react-inputs';


const fileStatuses = [
    'UploadFailed',
    'Initial',
    'Selected',
    'Uploading',
    'Uploaded',
    'RemoveFailed',
    'Removing'
];


class testSitter4 extends Component{


    state = {
        dropdownlistCategory: null,
        dropdownlistOptions: null
    }

    handleDropDownChange = (e) => {
        this.setState({
            dropdownlistCategory: e.target.value.CategoryID,
            dropdownlistOptions: e.target.value.OptionID
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            files: [],
            events: [],
            filePreviews: {}
        };
    }

    onAdd = (event) => {
        const afterStateChange = () => {
            event.affectedFiles
                .filter(file => !file.validationErrors)
                .forEach(file => {
                    const reader = new FileReader();

                    reader.onloadend = (ev) => {
                        this.setState({
                            filePreviews: {
                                ...this.state.filePreviews,
                                [file.uid]: ev.target.result
                            }
                        });
                    };

                    reader.readAsDataURL(file.getRawFile());
                });
        };

        this.setState({
            files: event.newState,
            events: [
                ...this.state.events,
                `File selected: ${event.affectedFiles[0].name}`
            ]
        }, afterStateChange);
    }

    onRemove = (event) => {
        const filePreviews = {
            ...this.state.filePreviews
        };

        event.affectedFiles.forEach(file => {
            delete filePreviews[file.uid];
        });

        this.setState({
            files: event.newState,
            events: [
                ...this.state.events,
                `File removed: ${event.affectedFiles[0].name}`
            ],
            filePreviews: filePreviews
        });
    }

    onProgress = (event) => {
        this.setState({
            files: event.newState,
            events: [
                ...this.state.events,
                `On Progress: ${event.affectedFiles[0].progress} %`
            ]
        });
    }

    onStatusChange = (event) => {
        const file = event.affectedFiles[0];

        this.setState({
            files: event.newState,
            events: [
                ...this.state.events,
                `File '${file.name}' status changed to: ${fileStatuses[file.status]}`
            ]
        });
    }



    render(){
        return(

            <div className={"position-t"} id={"menuDrop"}>
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


                    </section>
                </MDBContainer>
                <h1>Start Application</h1>
                <h2>Fill Out All Required Fields</h2>
                <MDBBtn id={"button"}rounded color="primary" size="lg" href={"testSiiter3"}>Start Creating Your Profile</MDBBtn>
                <div className={'drop-down'} id={'dropdown'}>
                    <p>Why Are You Interested In Becoming A Sitter?</p>
                    <p>
                        <DropDownList
                            data={categories}
                            dataItemKey="CategoryID"
                            textField="CategoryName"
                            defaultItem={{CategoryID: null, CategoryName: "Category"}}
                            onChange={this.handleDropDownChange}
                        />
                        &nbsp; Category: <strong>{this.state.dropdownlistCategory}</strong>
                    </p>
                    <p>Do You Have Any Pets?</p>
                    <p>
                        <DropDownList
                            data={options}
                            dataItemKey="OptionID"
                            textField="OptionName"
                            defaultItem={{OptionID: null, OptionName: "Options"}}
                            onChange={this.handleDropDownChange}
                        />
                        &nbsp; Options: <strong>{this.state.dropdownlistOptions}</strong>
                    </p>





                </div>
                <div className="row example-wrapper sitter-form">
                    <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                        <div className="card">
                            <div className="card-block">
                                <form className="k-form">
                                    <label className="k-align-content-center"><h1> Welcome!</h1> </label>
                                    <label className="k-align-content-center"> <h2>Let's Start With The Basics</h2></label>

                                    <fieldset>
                                        <legend>Personal Information</legend>

                                        <label className="k-form-field ">
                                            <span>First Name<span className={'k-required'}>*</span></span>
                                            <input className="k-textbox"
                                                   placeholder="Your Name"
                                                   name={"input"}
                                                   required={true}

                                            />
                                        </label>
                                        <label className="k-form-field">
                                            <span>Last Name<span className={'k-required'}>*</span></span>
                                            <input className="k-textbox"
                                                   placeholder="Your Last Name"
                                                   required={true}

                                            />
                                        </label>
                                        <label className="k-form-field">
                                            <span>Address<span className={'k-required'}>*</span></span>
                                            <input className="k-textbox"
                                                   placeholder="Address"
                                                   required={true}

                                            />
                                        </label>
                                        <div className="k-form-field">


                                        </div>
                                        <label className="k-form-field">
                                            <span>Email <span className="k-required">*</span></span>
                                            <input type="email" className="k-textbox" placeholder="Your Email"/>
                                        </label>

                                    </fieldset>
                                    <div>
                                        <Upload
                                            batch={false}
                                            multiple={true}
                                            files={this.state.files}
                                            onAdd={this.onAdd}
                                            onRemove={this.onRemove}
                                            onProgress={this.onProgress}
                                            onStatusChange={this.onStatusChange}
                                            withCredentials={false}
                                            saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
                                            removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}
                                        />
                                        <div className={'example-config'} style={{ marginTop: 20 }}>
                                            <ul className={'event-log'}>
                                                {
                                                    this.state.events.map(event => <li>{event}</li>)
                                                }
                                            </ul>
                                        </div>
                                        {
                                            this.state.files.length ?
                                                <div className={'img-preview example-config'}>
                                                    <h3>Preview selected images</h3>
                                                    {
                                                        Object.keys(this.state.filePreviews)
                                                            .map((fileKey) => (<img
                                                                src={this.state.filePreviews[fileKey]}
                                                                alt={'image preview'}
                                                                style={{ width: 200, margin: 10 }}
                                                            />))
                                                    }
                                                </div> : undefined
                                        }
                                    </div>
                                    <div>
                                        <p>Enter phone number</p>
                                        <MaskedTextBox mask="(999) 000-00-00-00" defaultValue="(359) 884-12-33-21" />
                                    </div>


                                    <fieldset>
                                        <legend>Credentials</legend>
                                        <label className="k-form-field">
                                            <span>Username</span>
                                            <input className="k-textbox" placeholder="Your username"/>
                                        </label>
                                        <label className="k-form-field">
                                            <span>Password</span>
                                            <input type="password" className="k-textbox" placeholder="Your password"/>
                                        </label>
                                        <label className="k-form-field">
                                            <input type="checkbox" id="auth-2fa" className="k-checkbox"/>
                                            <label className="k-checkbox-label" htmlFor="auth-2fa">Enable two-factor
                                                authentication</label>
                                        </label>
                                    </fieldset>

                                    <div className="text-right">
                                        <Button type="button" className="k-button" type={"submit"}
                                                primary = {true}
                                        >Cancel</Button>
                                        &nbsp;
                                        <Button type="button" className="k-button btn-outline-dark-green"
                                                type={"submit"}
                                                primary={true}

                                        >
                                            Finish</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        )
    }

}



export default testSitter4;