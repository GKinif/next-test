import React from 'react'
import css from 'next/css'

import PageHeader from '../components/PageHeader';
import Menu from '../components/Menu';
import UserList from '../components/Users/UserList';

export default () => (
    <div>
        <PageHeader title="Next - Users" />
        <Menu />
        <div>
            <h1>Users</h1>
            <UserList />
        </div>
    </div>
);