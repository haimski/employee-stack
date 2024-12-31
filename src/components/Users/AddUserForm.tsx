import {FC} from 'react';
import {InputField} from '../../common';
import {Button} from '@mui/material';
import React from 'react';

export interface AddUserFormProps {
    setNewName: (value: string) => void;
    setNewUserName: (value: string) => void;
    setNewUserPhone: (value: string) => void;
    setNewUserWebsite: (value: string) => void;
    setNewUserEmail: (value: string) => void;
    setNewUserCity: (value: string) => void;
    setNewUserCompany: (value: string) => void;
    setShowAddUserForm: (value: boolean) => void;
    handleAddUser: () => void;
    errorMessage: string;
    newName: string;
    newUserName: string;
    newUserPhone: string;
    newUserWebsite: string;
    newUserEmail: string;
    newUserCity: string;
    newUserCompany: string;
}

const AddUserForm:FC<AddUserFormProps> = ({
    setNewName,
    setNewUserName,
    setNewUserPhone,
    setNewUserWebsite,
    setNewUserCompany,
    setShowAddUserForm,
    handleAddUser,
    errorMessage,
    newName,
    newUserName,
    newUserPhone,
    newUserWebsite,
    setNewUserEmail,
    newUserEmail,
    setNewUserCity,
    newUserCity,
    newUserCompany
}) => {
    return (
        <div>
            <InputField
                onChange={setNewName}
                error={(errorMessage !== '' && newName === '' && errorMessage) || ''}
                placeholder={`add user full name`}
                value={newName}
            />
            <InputField
                onChange={setNewUserName}
                error={(errorMessage !== '' && newUserName === '' && errorMessage) || ''}
                placeholder={`add user username`}
                value={newUserName}
            />
            <InputField
                onChange={setNewUserEmail}
                error={(errorMessage !== '' && newUserEmail === '' && errorMessage) || ''}
                placeholder={`add user email`}
                value={newUserEmail}
            />
            <InputField
                onChange={setNewUserCity}
                error={(errorMessage !== '' && newUserCity === '' && errorMessage) || ''}
                placeholder={`add user city`}
                value={newUserCity}
            />
            <InputField
                onChange={setNewUserPhone}
                error={(errorMessage !== '' && newUserPhone === '' && errorMessage) || ''}
                placeholder={`add user phone`}
                value={newUserPhone}
            />
            <InputField
                onChange={setNewUserWebsite}
                error={(errorMessage !== '' && newUserWebsite === '' && errorMessage) || ''}
                placeholder={`add user website`}
                value={newUserWebsite}
            />
            <InputField
                onChange={setNewUserCompany}
                error={(errorMessage !== '' && newUserCompany === '' && errorMessage) || ''}
                placeholder={`add user company`}
                value={newUserCompany}
            />
            <Button variant="contained" onClick={() => handleAddUser()}>Add User</Button>
            <Button variant="outlined" onClick={() => setShowAddUserForm(false)}>Cancel</Button>
        </div>
    );
}

export default AddUserForm;
