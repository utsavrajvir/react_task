import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageSideBar,
  EuiTitle,
  EuiLink,
} from "@elastic/eui";
import Table from "./userTable";
import { bindActionCreators } from "redux";
import * as actions from "../store/action";
import { connect } from "react-redux";
import AddUser from "./addUser";

class Dashboard extends React.Component {
  render() {
    return (
      <EuiPage>
        <EuiPageSideBar>
          <EuiLink href="#">Dashboard</EuiLink>
        </EuiPageSideBar>
        <EuiPageBody component="div">
          <EuiPageHeader>
            <AddUser />
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiPageContentHeaderSection>
                <EuiTitle>
                  <h2>User Details</h2>
                </EuiTitle>
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <Table
                record={
                  this.props.userList.length > 0 ? this.props.userList : []
                }
              ></Table>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
