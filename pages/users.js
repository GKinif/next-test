import React from 'react'
import css from 'next/css'

import PageHeader from '../components/PageHeader';
import Menu from '../components/Menu';

export default () => (
    <div>
        <PageHeader title="Next - Users" />
        <Menu />
        <div>
            Users
        </div>
    </div>
);