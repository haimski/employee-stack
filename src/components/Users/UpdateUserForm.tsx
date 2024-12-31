import React, {FC} from 'react';
import {Button, Card, CardContent} from '@mui/material';
import {InputField} from '../../common';

export interface UpdateUserFormProps {
    setUpdatedName: (value: string) => void;
    setUpdatedUserName: (value: string) => void;
    setUpdatedUserEmail: (value: string) => void;
    setUpdatedUserPhone: (value: string) => void;
    setUpdatedUserWebsite: (value: string) => void;
    setUpdatedUserCompany: (value: string) => void;
    setUpdatedUserCity: (value: string) => void;
    handleUpdateUser: () => void;
    errorMessage: string;
    updatedName: string;
    updatedUserName: string;
    updatedUserEmail: string;
    updatedUserPhone: string;
    updatedUserWebsite: string;
    updatedUserCompany: string;
    updatedUserCity: string;
}

const UpdateUserForm:FC<UpdateUserFormProps> = ({
    setUpdatedName,
    setUpdatedUserName,
    setUpdatedUserEmail,
    setUpdatedUserPhone,
    setUpdatedUserWebsite,
    setUpdatedUserCompany,
    setUpdatedUserCity,
    handleUpdateUser,
    errorMessage,
    updatedName,
    updatedUserName,
    updatedUserEmail,
    updatedUserPhone,
    updatedUserWebsite,
    updatedUserCompany,
    updatedUserCity
}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <h3>
                    Update User
                </h3>
                <InputField
                    onChange={setUpdatedName}
                    error={(errorMessage !== '' && updatedName === '' && errorMessage) || ''}
                    placeholder={`update user full name`}
                    value={updatedName}
                />
                <InputField
                    onChange={setUpdatedUserName}
                    error={(errorMessage !== '' && updatedUserName === '' && errorMessage) || ''}
                    placeholder={`update user username`}
                    value={updatedUserName}
                />
                <InputField
                    onChange={setUpdatedUserEmail}
                    error={(errorMessage !== '' && updatedUserEmail === '' && errorMessage) || ''}
                    placeholder={`update user email`}
                    value={updatedUserEmail}
                />
                <InputField
                    onChange={setUpdatedUserPhone}
                    error={(errorMessage !== '' && updatedUserPhone === '' && errorMessage) || ''}
                    placeholder={`update user phone`}
                    value={updatedUserPhone}
                />
                <InputField
                    onChange={setUpdatedUserWebsite}
                    error={(errorMessage !== '' && updatedUserWebsite === '' && errorMessage) || ''}
                    placeholder={`update user website`}
                    value={updatedUserWebsite}
                />
                <InputField
                    onChange={setUpdatedUserCompany}
                    error={(errorMessage !== '' && updatedUserCompany === '' && errorMessage) || ''}
                    placeholder={`update user company`}
                    value={updatedUserCompany}
                />
                <InputField
                    onChange={setUpdatedUserCity}
                    error={(errorMessage !== '' && updatedUserCity === '' && errorMessage) || ''}
                    placeholder={`update user city`}
                    value={updatedUserCity}
                />
                <Button variant="outlined" onClick={() => handleUpdateUser()}>Update User</Button>
            </CardContent>
        </Card>
    );
}

export default UpdateUserForm;
