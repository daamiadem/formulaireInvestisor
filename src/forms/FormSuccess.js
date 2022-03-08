import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core/';

export const FormSuccess = (formikProps) => {
  const { firstName, lastName, email,gender,DateOfBirth, city, state,status,accreditationform,accountType } = formikProps.values;
  return (
    <>
      <div>
        <List>
          <ListItem>
            <ListItemText
              primary='First Name'
              secondary={firstName}
            />
          </ListItem>
          
          <ListItem>
            <ListItemText
              primary='Last Name'
              secondary={lastName}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Email'
              secondary={email}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary='Gender'
              secondary={gender}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary='Date Of Birth'
              secondary={DateOfBirth}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary='City'
              secondary={city}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='State'
              secondary={state}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary='status'
              secondary={status}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary='accreditation form'
              secondary={accreditationform}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary='account Type'
              secondary={accountType}
            />
          </ListItem>


        </List>
      </div>
    </>
  );
};