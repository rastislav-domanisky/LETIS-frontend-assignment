import React from 'react';
import { connect } from 'react-redux';
import './SelectInput.scss';
import SortOptions from '../../models/SortOptions';
import * as actionTypes from '../../store/actionTypes';

const SelectInput: React.FC = (props: any) => {

    const handleOnChange = (event: any) => {
        if(event.target.value === SortOptions.ByFirstname.toString()) {
            props.onSelectHandle(SortOptions.ByFirstname);
        }
        if(event.target.value === SortOptions.BySurname.toString()) {
            props.onSelectHandle(SortOptions.BySurname);
        }
        if(event.target.value === SortOptions.ByAge.toString()) {
            props.onSelectHandle(SortOptions.ByAge);
        }
    };

    return (
        <select name="sortSelect" className="Select-Input" id="sortSelect" value={props.sortedBy} onChange={handleOnChange}>
            <option value={SortOptions.ByFirstname}>Firstname</option>
            <option value={SortOptions.BySurname}>Surname</option>
            <option value={SortOptions.ByAge}>Age</option>
        </select>
    );
}

const mapStateToProps = (state: any) => {
    return {
        sortedBy: state.sortedBy,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSelectHandle: (data: SortOptions) => dispatch({ type: actionTypes.CHANGE_SORT_OPTION, payload: data }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectInput);
