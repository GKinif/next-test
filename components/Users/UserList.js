import React from 'react';
import UserServices from '../../services/UserServices';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userList: [] };
        this.userServices = new UserServices();
        this.updateList();
    }

    updateList() {
        this.userServices.getUsers(5)
        .then(response => {
            const results = JSON.parse(response).results;
            this.setState({ userList: results });
        })
        .catch(error => console.log('Unable to get Users: ', error));
    }

    render() {
        const userList = this.state.userList.map(user => (
            <li key={`${user.id.value}-${user.name.first}-${user.name.last}`}>
                {user.name.first} {user.name.last}
            </li>
        ));

        return (
            <ul>
                {userList}
            </ul>
        );
    }
}