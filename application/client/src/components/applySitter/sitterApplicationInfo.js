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
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { TreeView, processTreeViewItems, handleTreeViewCheckChange, moveTreeViewItem, TreeViewDragAnalyzer, TreeViewDragClue } from '@progress/kendo-react-treeview'
import '@progress/kendo-react-animation';
import SignatureCanvas from 'react-signature-canvas';
import styles from '../../stylesheets/sitterAppInfo.css';
import SignaturePad from 'react-signature-canvas';
import cats from '../images/cats.png';

import profilePic from '../images/empty.png'
import axios from "axios";

//Amir
let signupValues = {
    firstName: undefined,
    lastName: undefined,
    user: undefined,
    address: undefined,
    email: undefined,
    date: undefined,
    phone: undefined,
    credential: undefined,
    agreement: undefined,
    password: undefined,
    driver: undefined
}

const labelStyle = {
    width: '20px',
}


const formChange = (event)=>{ 
    if(event.target.placeholder === "YYYY-M-D"){
        signupValues.date = event.target.value
        console.log(signupValues)
    }else{
    signupValues[event.target.name] = event.target.value
    console.log(event.target)
    console.log(signupValues)
    }   
}











/*File Upload*/
const fileStatuses = [
    'UploadFailed',
    'Initial',
    'Selected',
    'Uploading',
    'Uploaded',
    'RemoveFailed',
    'Removing'
];

/*checkbox*/
const tree = [{
    text: 'Walks', expanded: true, items: [
       ]
},
    {
    text: 'Boarding', expanded: true, items: [
]
},{
    text: 'Visits', expanded: true, items: [
]
},
    {
    text: 'Daycare', expanded: true, items: [
       ]

}];


class sitterApplicationInfo extends Component{
    /*Signature pad*/
    sigPad = {}
    clear = () => {
        this.sigPad.clear()
    }

    /* Dropwdown */
    state = {
        dropdownlistCategory: null,
        dropdownlistOptions: null,
        error: ''
    }

    handleDropDownChange = (e) => {
        this.setState({
            dropdownlistCategory: e.target.value.CategoryID,
            dropdownlistOptions: e.target.value.OptionID
        });
    }

    /*User Informaation*/
    userState = {
        userName: ' ',
        userLastName: ' ',
        userEmail: ' ',
        userAddress: ' '
    }

    /*Drivers License*/
    licenseState = {
        licenseNumber: ''
    }

    /*Calendar*/
    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.state = {
            selectedDay: undefined,
            isEmpty: true,
            isDisabled: false,
        };

    /*File Upload States*/
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
               /* `File selected: ${event.affectedFiles[0].name}` */
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
              /*  `File removed: ${event.affectedFiles[0].name}` */
            ],
            filePreviews: filePreviews
        });
    }

    onProgress = (event) => {
        this.setState({
            files: event.newState,
            events: [
                ...this.state.events,
             /*   `On Progress: ${event.affectedFiles[0].progress} %` */
            ]
        });
    }

    onStatusChange = (event) => {
        const file = event.affectedFiles[0];

        this.setState({
            files: event.newState,
            events: [
                ...this.state.events,
              /*  `File '${file.name}' status changed to: ${fileStatuses[file.status]}` */
            ]
        });
    }

    handleDayChange(selectedDay, modifiers, dayPickerInput) {
        const input = dayPickerInput.getInput();
        this.setState({
            selectedDay,
            isEmpty: !input.value.trim(),
            isDisabled: modifiers.disabled === true,
        });
    }
    onSubmit = (event)=>{
        event.preventDefault();
       
        if(signupValues.agreed === 'false') {
            this.setState({
                error: 'Please Accept the Agreement'
            })
            return;
        }
        axios.post('/api/db/addWorker', signupValues).then((result) => {
                console.log('called')
            
                if(result.status === 201) {
                    localStorage.setItem('user',signupValues.user)
                    localStorage.setItem('loggedIn', true)
                    this.props.history.push(`/sitterpro?user=${signupValues.user}`)}
                if(result.status === 200) {this.setState({error: 'Username Already Taken' })}
            
        })
    }
    


    render(){
        const { selectedDay, isDisabled, isEmpty } = this.state;

        return(

            <div className={"position-t"} id={"menuDrop"}>
            <MDBContainer>
                <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5 ">
                        Why is it so great?
                        <p className="lead w-responsive mx-auto mb-5">
                            CatDog Provides the best service
                        </p>
                    </h2>



                </section>


            </MDBContainer>
                <h1>Start Application</h1>
                <h2>Fill Out All Required Fields</h2>
                <p><font color="red"  >{ this.state.error ? this.state.error : '' }</font></p>
                <div className="row example-wrapper sitter-form">
                    <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                        <div className="card">
                            <div className="card-block">
                                <form className="k-form" onChange={formChange} onSubmit={this.onSubmit}>
                                    <label className="k-align-content-center"><h1> Welcome!</h1> </label>
                                    <label className="k-align-content-center"> <h2>Let's Start With The Basics</h2></label>

                                    <fieldset>
                                        <legend>Personal Information</legend>
                                        <label className="k-form-field ">
                                            <span>User Name<span className={'k-required'}>*</span></span>
                                            <input className="k-textbox"
                                                   placeholder="User Name"
                                                   name="user"
                                                   required={true}

                                            />
                                        </label>
                                        <label className="k-form-field ">
                                            <span>First Name<span className={'k-required'}>*</span></span>
                                            <input className="k-textbox"
                                                   placeholder="Your Name"
                                                   name="firstName"
                                                   required={true}

                                            />
                                        </label>
                                        <label className="k-form-field">
                                            <span>Last Name<span className={'k-required'}>*</span></span>
                                            <input className="k-textbox"
                                                   placeholder="Your Last Name"
                                                   name="lastName"
                                                   required={true}

                                            />
                                        </label>
                                        <label className="k-form-field">
                                            <span>Password<span className={'k-required'}>*</span></span>
                                            <input className="k-textbox"
                                                   placeholder="Password"
                                                   name="password"
                                                   required={true}

                                            />
                                        </label>
                                        <label className="k-form-field">
                                            <span>Address<span className={'k-required'}>*</span></span>
                                            <input className="k-textbox"
                                                   placeholder="Address"
                                                   name= "address"
                                                   required={true}

                                            />
                                        </label>
                                        <div className="k-form-field">


                                        </div>
                                        <label className="k-form-field">
                                            <span>Email <span className="k-required">*</span></span>
                                            <input type="email" className="k-textbox" placeholder="Your Email" name="email"/>
                                        </label>

                                        <div className={'phoneNumber'}>
                                            <p>Enter phone number</p>
                                            <MaskedTextBox mask="(999) 000-0000" defaultValue="(359) 884-1233" />
                                        </div>
                                        <div className={'calendar'}>
                                            <p>
                                                {isEmpty && 'Enter Birthday'}
                                                {!isEmpty && !selectedDay && 'Please Enter Your Birthday'}
                                                {selectedDay && isDisabled && 'This day is disabled'}
                                                {selectedDay &&
                                                !isDisabled &&
                                                `You chose ${selectedDay.toLocaleDateString()}`}
                                            </p>
                                            <DayPickerInput
                                                value={selectedDay}
                                                onDayChange={this.handleDayChange}
                                                dayPickerProps={{
                                                    selectedDays: selectedDay,
                                                    disabledDays: {
                                                        daysOfWeek: [0, 6],
                                                    },
                                                }}
                                            />
                                        </div>
                                    </fieldset>

                                    <label className="k-form-field">
                                            <span>Phone Number <span className="k-required">*</span></span>
                                            <input type="Phone Number" className="k-textbox" placeholder="Phone Number" name="phone"/>
                                        </label>
                              
                                    <div>
                                        <h2>Let's Get You Verified</h2>
                                        <h3>Input Pet Sitter Credential Number</h3>
                                        <h4>In Order to Complete the Application Process A Pet Sitter Certificaite
                                        is Required</h4>
                                        <label className="k-form-field">
                                            <span>Credential Number <span className="k-required">*</span></span>
                                            <input type="Credential Number" className="k-textbox" placeholder="Credential Number" name="credential"/>
                                        </label>
                                    </div>
                                    <div className={'license'}>
                                        <h2>Background Check Information</h2>
                                        <h3>Drivers License</h3>
                                        <label className="k-form-field">
                                            <span>Driver Licence <span className="k-required">*</span></span>
                                            <input type="driver" className="k-textbox" placeholder="######" name="drive"/>
                                        </label>

                                    </div>
                                    <div>
                                    Terms & Conditions  <input style={labelStyle} type="checkbox" name="agreement" placeholder="Terms & Conditions"/>
                                        

                                    </div>

                                   



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

    } onCheckChange = (event) => {
        event.item.checked = !event.item.checked;
        this.forceUpdate();
    }

}



export default sitterApplicationInfo;