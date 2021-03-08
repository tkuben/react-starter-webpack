import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'Actions/userActions';

export default () => {
    const dispatch = useDispatch();
    const usersListData = useSelector(state => state.userReducer) || [];
    const {loading, error, users} = usersListData
     useEffect(() => {
        dispatch(getUsers()) 
     }, [dispatch]);

     return (
         <>
            {loading ? "Loading..." : error ? error.message : users.map(u => <h3 key={u.first_name}>{u.first_name} ({u.email})</h3>)}
         </>
     );
};