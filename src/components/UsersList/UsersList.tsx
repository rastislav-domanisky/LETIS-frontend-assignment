import React from 'react';
import './UsersList.scss';
import { connect } from 'react-redux';
import SortOptions from '../../models/SortOptions';
import { sortByAge, sortByFirstname, sortBySurname } from '../../models/sortFunctions';
import { searchFilter } from '../../models/SearchFilter';

import UserListItem from './UserListItem/UserListItem';

const UsersList: React.FC = (props: any) => {

    const loadUsers = () => {
        let users: Array<Map<string, any>> = props.users;

        users = searchFilter(users, props.searchText);

        if (props.sortedBy === SortOptions.ByFirstname) {
            users = sortByFirstname(users);
        }

        if (props.sortedBy === SortOptions.BySurname) {
            users = sortBySurname(users);
        }

        if (props.sortedBy === SortOptions.ByAge) {
            users = sortByAge(users);
        }

        let items: Array<JSX.Element> = [];
        users.forEach((el: any, index) => {
            items.push(<UserListItem key={index} data={el} id={el.id} />);
        })
        return items;
    };

    return (
        <div className="Users-List">
            <table className="Users-List-Table">
                <thead>
                    <tr className="User-List-Title-Item">
                        <th className="title-item">
                            Firstname
                    </th>
                        <th className="title-item">
                            Surname
                    </th>
                        <th className="title-item">
                            Age
                    </th>
                        <th className="title-item">
                            E-mail
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loadUsers()
                    }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        sortedBy: state.sortedBy,
        users: state.users,
        searchText: state.searchText,
    }
};

export default connect(mapStateToProps)(UsersList);


