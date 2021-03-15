import React from 'react';
import './ListView.scss';
import { Link } from 'react-router-dom';

import SearchInput from '../../components/SearchInput/SearchInput';
import IconButton from '../../components/IconButton/IconButton';
import UsersList from '../../components/UsersList/UsersList';
import SelectInput from '../../components/SelectInput/SelectInput';

import AddIcon from '../../assets/add_icon.svg';

const ListView: React.FC = (props: any) => {
    return (
        <div className="List-View">
            <header>
                <div className="row">
                    <SearchInput />
                    <Link to="/add">
                        <IconButton icon={AddIcon} onPress={() => {}} />
                    </Link>
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

