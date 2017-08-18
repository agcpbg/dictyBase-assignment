import React from 'react'
import { connect } from 'react-redux';
import InputWrapper from './InputWrapper'
import InputField from './InputField'
import InputButton from './InputButton'
import { addListItem } from './reducer/listItems'

class InputContainer extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      localItemName: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.sendOnSubmit(this.state.localItemName)
    this.setState({ localItemName: '' })
  }

  render() {
    return(
      <InputWrapper>
        <InputField type="text" name="localItemName" value={this.state.localItemName} onChange={this.handleChange} />
        <InputButton onClick={this.handleSubmit}>Add Item</InputButton>
      </InputWrapper>
    )
  }
}

// container

let mapState

const mapDispatch = dispatch => ({
  sendOnSubmit: (item) => {
    dispatch(addListItem(item))
  }
})

export default connect(mapState, mapDispatch)(InputContainer)
