import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="displar-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  // name={contact.name}
                  // email={contact.email}
                  // phone={contact.phone}
                  contact={contact}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
