import React from 'react';
import Link from 'next/link'

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li><Link href="/index"><a>Index</a></Link></li>
                <li><Link href="/users"><a>Users</a></Link></li>
            </ul>
        );
    }
}