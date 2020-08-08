import React from "react";
import { EuiBasicTable } from "@elastic/eui";

class Table extends React.Component {
  render() {
    const columns = [
      {
        field: "firstName",
        name: "First Name",
      },
      {
        field: "lastName",
        name: "Last Name",
      },
    ];

    return <EuiBasicTable items={this.props.record} columns={columns} />;
  }
}

export default Table;
