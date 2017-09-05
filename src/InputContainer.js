import React, { Component } from "react"
import { connect } from "react-redux"
import InputWrapper from "./styled-components/InputWrapper"
import InputField from "./styled-components/InputField"
import InputButton from "./styled-components/InputButton"
import { addListItem } from "./reducer/listItems"

class InputContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      localItemName: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.sendOnSubmit(this.state.localItemName)
    this.setState({ localItemName: "" })
  }

  render() {
    return (
      <InputWrapper>
        <InputField
          type="text"
          name="localItemName"
          value={this.state.localItemName}
          onChange={this.handleChange}
        />
        <InputButton
          onClick={this.handleSubmit}
          disabled={this.state.localItemName ? false : "disabled"}>
          Add Item
        </InputButton>
      </InputWrapper>
    )
  }
}

// container

let mapState

const mapDispatch = dispatch => ({
  sendOnSubmit: item => {
    dispatch(addListItem(item))
  },
})

export default connect(mapState, mapDispatch)(InputContainer)
