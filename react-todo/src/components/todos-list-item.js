import React from 'react';

export default class TodosListItem extends React.Component {
  render() {
      return (
        <tr>
          <td>
            {this.props.text}
          </td>
          <td>
            <button>Save</button>
            <button>Delete</button>
          </td>
        </tr>
    );
  }
}