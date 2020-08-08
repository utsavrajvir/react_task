import React from "react";
import { EuiFieldText, EuiButton } from "@elastic/eui";
import { bindActionCreators } from "redux";
import * as actions from "../store/action";
import { connect } from "react-redux";

class AddUser extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  save(e) {
    let { firstName, lastName } = this.state;
    if (firstName && lastName) {
      this.props.actions.addUser(this.state, this.props.userList || []);
      this.setState({
        firstName: "",
        lastName: "",
      });
    }
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <EuiFieldText
          name="firstName"
          type="text"
          value={this.state.firstName}
          onChange={(e) => this.change(e)}
          placeholder="Enter first name"
        ></EuiFieldText>
        <EuiFieldText
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={(e) => this.change(e)}
          placeholder="Enter last name"
        ></EuiFieldText>
        <EuiButton type="submit" onClick={(e) => this.save(e)} fill>
          Submit
        </EuiButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
