"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
  render: function () {
    return (
      <form>
        <h1>Manage Author</h1>
        <Input
          name="firstName"
          label="First Name"
          value={this.props.author.firstName}
          onChange={this.props.onChange}
          placeholder="First name"
        />
        <Input
          name="lastName"
          label="Last Name"
          value={this.props.author.lastName}
          onChange={this.props.onChange}
          placeholder="Last Name"
        />

        <input type="submit" value="Save" className="btn btn-success" onClick={this.props.onSave}/>

      </form>
    );
  }
});

module.exports = AuthorForm;
