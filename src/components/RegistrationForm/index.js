import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstnameInput: '',
    lastnameInput: '',
    showingFirstnameError: false,
    showingLastnameError: false,
    isSubmittedForm: false,
  }

  onBlurLastname = () => {
    const isValidLastname = this.validLastname()
    this.setState({
      showingLastnameError: !isValidLastname,
    })
  }

  onChangeLastname = event => {
    const {target} = event
    const {value} = target
    this.setState({
      lastnameInput: value,
    })
  }

  renderLastnameInput = () => {
    const {lastnameInput} = this.state
    return (
      <div className="input-element-outer-container">
        <label htmlFor="lastname" className="label-text">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className="input-element"
          placeholder="Last Name"
          onChange={this.onChangeLastname}
          value={lastnameInput}
          onBlur={this.onBlurLastname}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstname = this.validFirstname()
    this.setState({
      showingFirstnameError: !isValidFirstname,
    })
  }

  onChangeFirstname = event => {
    const {target} = event
    const {value} = target
    this.setState({
      firstnameInput: value,
    })
  }

  renderFirstnameInput = () => {
    const {firstnameInput} = this.state
    return (
      <div className="input-element-outer-container">
        <label htmlFor="firstname" className="label-text">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          className="input-element"
          placeholder="First Name"
          onChange={this.onChangeFirstname}
          value={firstnameInput}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  validFirstname = () => {
    const {firstnameInput} = this.state
    return firstnameInput !== ''
  }

  validLastname = () => {
    const {lastnameInput} = this.state
    return lastnameInput !== ''
  }

  onSubmittedForm = event => {
    event.preventDefault()

    const isValidFirstname = this.validFirstname()
    const isValidLastname = this.validLastname()

    const {isSubmittedForm} = this.state

    if (isValidFirstname && isValidLastname) {
      this.setState({
        isSubmittedForm: true,
      })
    } else {
      this.setState({
        showingFirstnameError: !isValidFirstname,
        showingLastnameError: !isValidLastname,
        isSubmittedForm: false,
      })
    }
  }

  renderFormContainer = () => {
    const {showingFirstnameError, showingLastnameError} = this.state
    return (
      <forn className="form-container" onSubmit={this.onSubmittedForm}>
        {this.renderFirstnameInput()}
        {showingFirstnameError && <p className="error-message">Required</p>}
        {this.renderLastnameInput()}
        {showingLastnameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </forn>
    )
  }

  clickOnSuccessButton = () => {
    this.setState(prevState => ({
      isSubmittedForm: !prevState.isSubmittedForm,
      firstnameInput: '',
      lastnameInput: '',
    }))
  }

  renderFormSuceessContainer = () => (
    <div className="success-container">
      <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
      <p className="success-paragraph">Submitted Successfully</p>
      <button
        type="submit"
        className="success-button"
        onClick={this.clickOnSuccessButton}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {
      firstnameInput,
      lastnameInput,
      showingFirstnameError,
      showingLastnameError,
      isSubmittedForm,
    } = this.state
    return (
      <div>
        <h1 className="main-heading">Registration</h1>
        {isSubmittedForm
          ? this.renderFormSuceessContainer()
          : this.renderFormContainer()}
      </div>
    )
  }
}

export default RegistrationForm
