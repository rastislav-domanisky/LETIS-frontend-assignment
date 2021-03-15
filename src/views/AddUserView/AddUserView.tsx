import React, { useState } from 'react';
import './AddUserView.scss';
import { Link, useHistory } from 'react-router-dom';
import * as actionTypes from '../../store/actionTypes';
import { connect } from 'react-redux';
import { getNextUid } from '../../models/User';

import Avatar from '../../components/Avatar/Avatar';
import IconButton from '../../components/IconButton/IconButton';

import CrossIcon from '../../assets/cross_icon.svg';

const AddUserView: React.FC = (props: any) => {

    const history = useHistory();

    const nextId = getNextUid(props.users);

    const [state, setState] = useState({
        imgUrl: "",
        firstname: "",
        surname: "",
        email: "",
        birthdate: "",
    });

    const handleSave = () => {
        props.onSave({
            firstname: state.firstname,
            surname: state.surname,
            birthdate: state.birthdate,
            email: state.email,
            avatar: state.imgUrl,
            id: nextId,
        });
        history.push("/");
    }

    const handleImageUrl = (event: any) => {
        setState((current) => {
            return {
                ...current,
                imgUrl: event.target.value,
            }
        });
    }

    const handleFirstname = (event: any) => {
        setState((current) => {
            return {
                ...current,
                firstname: event.target.value,
            }
        });
    }

    const handleSurname = (event: any) => {
        setState((current) => {
            return {
                ...current,
                surname: event.target.value,
            }
        });
    }

    const handleEmail = (event: any) => {
        setState((current) => {
            return {
                ...current,
                email: event.target.value,
            }
        });
    }

    const handleBirthDate = (event: any) => {
        setState((current) => {
            return {
                ...current,
                birthdate: event.target.value,
            }
        });
    }

    return (
        <div className="Add-User-View">
            <header>
                <Link to="/">
                    <IconButton icon={CrossIcon} onPress={() => { }} />
                </Link>
                <h1>Add new user</h1>
                <div className="empty" />
            </header>
            <Avatar img={state.imgUrl} />
            <div className="input-div">
                <h2>Image URL:</h2>
                <input type="url" name="img-url" id="img-url" value={state.imgUrl} className="input-field" onChange={handleImageUrl} />
            </div>
            <div className="input-div">
                <h2>Firstname:</h2>
                <input type="text" name="firstname" id="firstname" value={state.firstname} className="input-field" onChange={handleFirstname} />
            </div>
            <div className="input-div">
                <h2>Surname:</h2>
                <input type="text" name="surname" id="surname" value={state.surname} className="input-field" onChange={handleSurname} />
            </div>
            <div className="input-div">
                <h2>E-mail:</h2>
                <input type="email" name="email" id="email" value={state.email} className="input-field" onChange={handleEmail} />
            </div>
            <div className="input-div">
                <h2>Birthdate:</h2>
                <input type="date" name="birthdate" id="birthdate" value={state.birthdate} className="input-field" onChange={handleBirthDate} />
            </div>
            <div className="btn-area">
                <div className="submit-btn" onClick={handleSave}>
                    Save
                </div>
            </div>
            <footer />
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        users: state.users,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSave: (data: Map<String, any>) => dispatch({ type: actionTypes.ADD_USER, payload: data }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserView);
