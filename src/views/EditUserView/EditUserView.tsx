import React, { useState } from 'react';
import './EditUserView.scss';
import { Link, useHistory } from 'react-router-dom';
import * as actionTypes from '../../store/actionTypes';
import { connect } from 'react-redux';

import Avatar from '../../components/Avatar/Avatar';
import IconButton from '../../components/IconButton/IconButton';

import CrossIcon from '../../assets/cross_icon.svg';

const EditUserView: React.FC = (props: any) => {

    const history = useHistory();

    const uid:number = props.match.params.id;
    let userIndex: any = undefined;

    props.users.forEach((usr: any, index: number) => {
        if (usr.id.toString() === uid) {
            userIndex = index;
        }
    });

    const usrData = props.users[userIndex];

    const [state, setState] = useState({
        imgUrl: usrData.avatar,
        firstname: usrData.firstname,
        surname: usrData.surname,
        email: usrData.email,
        birthdate: usrData.birthdate,
    });

    if(userIndex === undefined) {
        return (
            <div>
                <h1>User with ID {uid} doesn't exist</h1>
            </div>
        );
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

    const handleSave = () => {
        props.onSave({
            firstname: state.firstname,
            surname: state.surname,
            birthdate: state.birthdate,
            email: state.email,
            avatar: state.imgUrl,
            id: uid,
        },userIndex);
        history.push("/");
    }

    return (
        <div className="Add-User-View">
            <header>
                <Link to="/">
                    <IconButton icon={CrossIcon} onPress={() => { }} />
                </Link>
                <h1>Edit user</h1>
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
        onSave: (data: any, index: number) => dispatch({ type: actionTypes.EDIT_USER, payload: {userData: data, idx: index} }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserView);
