import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';

import './SearchInput.scss';

const SearchInput = (props: any) => {
    const handleChange = (event: any) => {
        props.onType(event.target.value);
    }

    return (
        <input type="text" className="Search-Input" placeholder="Search" value={props.searchText} onChange={handleChange} />
    );
}

const mapStateToProps = (state: any) => {
    return {
        searchText: state.searchText,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onType: (data: string) => dispatch({ type: actionTypes.UPDATE_SEARH_TEXT, payload: data.trim() }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
