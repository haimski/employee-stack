import React, { useEffect, useState, FC} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Paper, Table, Button } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {addUser, fetchUsers, deleteUser, updateUser} from '../../features/usersSlice';
import AddUserForm from './AddUserForm';
import UpdateUserForm from './UpdateUserForm';

interface UserListProps {
    users: any;
    loading: boolean;
    error: any;
    showAddUserForm: boolean;
    setShowAddUserForm: (value: boolean) => void;
    newName: string;
    setNewName: (value: string) => void;
    newUserName: string;
    setNewUserName: (value: string) => void;
    newUserPhone: string;
    setNewUserPhone: (value: string) => void;
    newUserWebsite: string;
    setNewUserWebsite: (value: string) => void;
    errorMessage: string;
    setErrorMessage: (value: string) => void;
    clearForm: () => void;
    handleAddUser: () => void;
    handleDeleteUser: (userId: string|number) => void;
    handleUpdateUser: () => void;
    handleEditUser: (userId: any) => void;
    tdStyle: string;
    updatedName: string;
    setUpdatedName: (value: string) => void;
    updatedUserName: string;
    setUpdatedUserName: (value: string) => void;
    updatedUserId: any;
    setUpdatedUserId: (value: any) => void;
    updatedUserPhone: string;
    setUpdatedUserPhone: (value: string) => void;
    updatedUserWebsite: string;
    setUpdatedUserWebsite: (value: string) => void;
    updatedUserCompany: string;
    setUpdatedUserCompany: (value: string) => void;
    updatedUserCity: string;
    setUpdatedUserCity: (value: string) => void;
    updatedUserEmail: string;
    setUpdatedUserEmail: (value: string) => void;
    editUser: boolean;
    setEditUser: (value: boolean) => void;
    currentUser: Object;
}

const UserList: FC<UserListProps> = () => {
    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [newName, setNewName] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [newUserPhone, setNewUserPhone] = useState('');
    const [newUserWebsite, setNewUserWebsite] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserCity, setNewUserCity] = useState('');
    const [newUserCompany, setNewUserCompany] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [editUser, setEditUser] = useState(false);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedUserName, setUpdatedUserName] = useState('');
    const [updatedUserId, setUpdatedUserId] = useState(null);
    const [updatedUserPhone, setUpdatedUserPhone] = useState('');
    const [updatedUserWebsite, setUpdatedUserWebsite] = useState('');
    const [updatedUserCompany, setUpdatedUserCompany] = useState('');
    const [updatedUserCity, setUpdatedUserCity] = useState('');
    const [updatedUserEmail, setUpdatedUserEmail] = useState('');
    const dispatch:any = useDispatch();
    const { users, loading, error } = useSelector((state:any) => state.items);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const clearForm = () => {
        setErrorMessage('');
        setShowAddUserForm(false);
        setNewName('');
        setNewUserName('');
        setNewUserPhone('');
        setNewUserWebsite('');
        setNewUserEmail('');
        setNewUserCompany('');
        setNewUserCity('');
    }

    const handleAddUser = () => {
        let userData: {
            name: string;
            username: string,
            email: string;
            address: { city: string },
            phone: string;
            website: string,
            company: { name: string };
        } = { name: '', username: '', email: '', address: {city: ''}, phone: '', website: '', company: { name: '' } };
        if (newUserName !== '' && newUserPhone !== '' && newUserWebsite !== '') {
            userData.name = newName;
            userData.username = newUserName;
            userData.email = newUserEmail;
            userData.address.city = newUserCity;
            userData.phone = newUserPhone;
            userData.website = newUserWebsite;
            userData.company.name = newUserCompany;
            dispatch(addUser(userData));
            clearForm();
        } else {
            setErrorMessage('please enter all the user details requested')
        }
    }

    const handleDeleteUser = (userId: string|number) => {
        dispatch(deleteUser(userId));
    }

    const handleUpdateUser = () => {
        const currentUser = {
            id: updatedUserId,
            name: updatedName,
            username: updatedUserName,
            email: updatedUserEmail,
            address: {
                city: updatedUserCity
            },
            phone: updatedUserPhone,
            website: updatedUserWebsite,
            company: {
                name: updatedUserCompany
            }
        }

        if (updatedName === ''
            || updatedUserName === ''
            || updatedUserEmail === ''
            || updatedUserPhone === ''
            || updatedUserWebsite === ''
            || updatedUserCompany === ''
            || updatedUserCity === '') {
            setErrorMessage('please enter all the user details requested')
            return;
        }

        dispatch(updateUser(currentUser));
        setEditUser(false);
    }

    const updateExistingUserDetails = (userId: any) => {
        let currentUser = users?.find((user: any) => {
            return user.id === userId
        });

        setUpdatedName(currentUser?.name);
        setUpdatedUserName(currentUser?.username);
        setUpdatedUserEmail(currentUser?.email);
        setUpdatedUserPhone(currentUser?.phone);
        setUpdatedUserWebsite(currentUser?.website);
        setUpdatedUserCompany(currentUser?.company?.name);
        setUpdatedUserCity(currentUser?.address?.city);
    }

    const handleEditUser = (userId: any) => {
        updateExistingUserDetails(userId);

        if (editUser) {
            setEditUser(false);
            setUpdatedUserId(null);
            return;
        }
        setUpdatedUserId(userId);
        setEditUser(!editUser);
    }

    const tdStyle = "border px-8 py-4";

    return (
        <div>
            <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Customers List
            </h1>
            {editUser &&
                <UpdateUserForm
                    updatedName={updatedName}
                    setUpdatedName={setUpdatedName}
                    updatedUserName={updatedUserName}
                    setUpdatedUserName={setUpdatedUserName}
                    updatedUserPhone={updatedUserPhone}
                    setUpdatedUserPhone={setUpdatedUserPhone}
                    updatedUserWebsite={updatedUserWebsite}
                    setUpdatedUserWebsite={setUpdatedUserWebsite}
                    updatedUserCompany={updatedUserCompany}
                    setUpdatedUserCompany={setUpdatedUserCompany}
                    updatedUserCity={updatedUserCity}
                    setUpdatedUserCity={setUpdatedUserCity}
                    updatedUserEmail={updatedUserEmail}
                    setUpdatedUserEmail={setUpdatedUserEmail}
                    handleUpdateUser={handleUpdateUser}
                    errorMessage={errorMessage}
                />}
            {!showAddUserForm &&
                <Button variant="contained" onClick={() =>
                {
                    setShowAddUserForm(!showAddUserForm);
                    setEditUser(false);
                }
                }>Add User</Button>}
            {showAddUserForm && !editUser &&
                <AddUserForm
                    newName={newName}
                    setNewName={setNewName}
                    newUserName={newUserName}
                    setNewUserName={setNewUserName}
                    newUserPhone={newUserPhone}
                    setNewUserPhone={setNewUserPhone}
                    newUserWebsite={newUserWebsite}
                    setNewUserWebsite={setNewUserWebsite}
                    errorMessage={errorMessage}
                    handleAddUser={handleAddUser}
                    newUserEmail={newUserEmail}
                    setNewUserEmail={setNewUserEmail}
                    newUserCity={newUserCity}
                    setNewUserCity={setNewUserCity}
                    newUserCompany={newUserCompany}
                    setNewUserCompany={setNewUserCompany}
                    setShowAddUserForm={setShowAddUserForm}
                />}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth:650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                users.length ? Object.keys(users[0]).map((key) => (
                                    key !== 'id' && <TableCell key={key} className="bg-blue-100 border text-left px-8 py-4">{key}</TableCell>
                                )) : null}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((item:any) => (
                            <TableRow key={uuidv4()}>
                                <TableCell className={tdStyle}>{item?.name || ""}</TableCell>
                                <TableCell className={tdStyle}>{item?.username || ""}</TableCell>
                                <TableCell className={tdStyle}>{item?.email || ""}</TableCell>
                                <TableCell className={tdStyle}>{item?.address?.city || ""}</TableCell>
                                <TableCell className={tdStyle}>{item?.phone || ""}</TableCell>
                                <TableCell className={tdStyle}>{item?.website || ""}</TableCell>
                                <TableCell className={tdStyle}>{item?.company?.name || ""}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleDeleteUser(item.id)} variant="contained">Delete</Button>
                                    <Button onClick={() => handleEditUser(item.id)} variant="outlined">Update</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UserList;
