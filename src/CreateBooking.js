import React, { Component } from "react";
import ViewBooking from './ViewBooking'


class CreateBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      customerData: [],
      form: {
        firstName: "",
        lastName: "",
        title: "",
        age: "",
        bookingDate:""
      },
      formErrorMessage: {
        firstNameError: "",
        lastNameError: "",
        ageError: ""
      },
      formValid: {
        firstName: false,
        lastName: false,
        age: false,
        buttonActive: false
      },
      errorMessage: "",
      successMessage: "",
    goback:true
    };
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    this.setState({successMessage:"Successfully booked your Seat!!"})
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const { form } = this.state;
    this.setState({ form: { ...form, [name]: value } });
    this.validateField(name, value);
  };
  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrorMessage;
    let formValid = this.state.formValid;

    switch (fieldName) {
      case "firstName":
        const firstNameRegex = /^[A-Za-z]{1,15}$/
        if (value === "") {
          fieldValidationErrors.firstNameError = "field required";
          formValid.firstName = false;
        } else if (!value.match(firstNameRegex)) {
          fieldValidationErrors.firstNameError = "Please enter a valid first name";
          formValid.firstName = false;
        } else {
          fieldValidationErrors.firstNameError = "";
          formValid.firstName = true;
        }
        break;
      case "lastName":
        const lastNameRegex = /^[A-Za-z]{1,15}$/
        if (value === "") {
          fieldValidationErrors.lastNameError = "field required";
          formValid.lastName = false;
        } else if (!value.match(lastNameRegex)) {
          fieldValidationErrors.lastNameError = "Please enter a valid last name";
          formValid.lastName = false;
        } else {
          fieldValidationErrors.lastNameError = "";
          formValid.lastName = true;
        }
        break;
      case "age":
        if (value === "") {
          fieldValidationErrors.ageError = "field Required";
          formValid.age = false;
        } else if (value < 1 || value > 70) {
          fieldValidationErrors.ageError = "Sorry, age should be more than 1 year and less than 70 years";
          formValid.age = false;
        } else {
          fieldValidationErrors.ageError = "";
          formValid.age = true
        }
        break;
      default:
        break;
    }
    formValid.buttonActive =
      formValid.firstName &&
      formValid.lastName &&
      formValid.age
    this.setState({ formErrorMessage: fieldValidationErrors, formValid: formValid, successMessage: "" })
  };
 


render() {

      return (
        <React.Fragment>
          <div className="card bg-card text-light mb-4">
            <div className="card-body">
              <h6>Passenger {this.state.customerData.length + 1}</h6>
              <div className="row">
                <div className="col-md-8">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <select className="btn btn-light" name="title" id="title" onChange={this.handleChange} value={this.state.form.title}>
                        <option value="" disabled>Title</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                      </select>
                    </div>
                    <input type="text" className="form-control" name="firstName" id="firstName" autoComplete="off" value={this.state.form.firstName} onChange={this.handleChange} placeholder="First Name" />
                    <input type="text" className="form-control" name="lastName" id="lastName" autoComplete="off" value={this.state.form.lastName} onChange={this.handleChange} placeholder="Last Name" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <input type="number" className="form-control" name="age" id="age" autoComplete="off" value={this.state.form.age} onChange={this.handleChange} placeholder="Age" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <input type="date" className="form-control" name="bookingDate" id="bookingDate" autoComplete="off" value={this.state.form.bookingDate} onChange={this.handleChange} placeholder="Booked On" />
                  </div>
                </div>
                <div className="col-md-2 text-center">
                  <button name="addPassenger" className="btn btn-primary font-weight-bolder" disabled={!this.state.formValid.buttonActive} onClick={this.handleSubmit}>Add</button>
                </div>
              </div>
              <div className="text-danger">
                <div name="firstNameError">{this.state.formErrorMessage.firstNameError}</div>
                <div name="lastNameError">{this.state.formErrorMessage.lastNameError}</div>
                <div name="ageError">{this.state.formErrorMessage.ageError}</div>
              </div>
              <div className="text text-success" >{this.state.successMessage}</div>
            </div>
          </div>
        </React.Fragment>
      )
    
  }
 
 
}

export default CreateBooking;