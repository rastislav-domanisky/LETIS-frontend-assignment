import React from 'react';
import './ListView.scss';

import SearchInput from '../../components/SearchInput/SearchInput';
import IconButton from '../../components/IconButton/IconButton';
import UsersList from '../../components/UsersList/UsersList';
import SelectInput from '../../components/SelectInput/SelectInput';

import AddIcon from '../../assets/add_icon.svg';

const addUserHandle = () => {
    console.log("Add User")
}

const ListView: React.FC = (props: any) => {
    return (
        <div className="List-View">
            <header>
                <div className="row">
                    <SearchInput />
                    <IconButton icon={AddIcon} onPress={addUserHandle} />
                </div>
                <div className="row">
                    <SelectInput />
                </div>
            </header>
            <main>
                <UsersList />
            </main>
        </div>
    );
}

export default ListView;

