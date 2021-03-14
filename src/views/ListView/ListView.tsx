import React from 'react';
import './ListView.scss';

import SearchInput from '../../components/SearchInput/SearchInput';
import IconButton from '../../components/IconButton/IconButton';

import AddIcon from '../../assets/add_icon.svg';

const addUserHandle = () => {
    console.log("Add User")
}

const ListView = () => {
    return (
        <div className="List-View">
            <header>
                <div className="row">
                    <SearchInput />
                    <IconButton icon={AddIcon} onPress={addUserHandle} />
                </div>
            </header>
            <main>

            </main>
        </div>
    );
}

export default ListView;

