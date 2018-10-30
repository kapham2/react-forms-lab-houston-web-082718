import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: this.props.maxChars,
      message: ''
    };
  }

  handleChange = (event) => {
    // event.persist()
    let message = event.target.value
    this.setState({
      chars: this.props.maxChars - message.length,
      message: message
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} />{this.state.chars}
      </div>
    );
  }
}

export default TwitterMessage;
