import React, { useState } from 'react';
import './DetailsView.scss';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as actionTypes from '../../store/actionTypes';

import { calculateAge } from '../../models/AgeCalculator';

import '../../components/IconButton/IconButton';
import IconButton from '../../components/IconButton/IconButton';
import Avatar from '../../components/Avatar/Avatar';

import ArrowLeftIcon from '../../assets/arrow_left_icon.svg';
import TrashIcon from '../../assets/trash_icon.svg';
import EditIcon from '../../assets/edit_icon.svg';
import CheckIcon from '../../assets/check_icon.svg';
import CrossIcon from '../../assets/cross_icon.svg';

const DetailsView: React.FC = (props: any) => {
    const [state, setState] = useState({
        isDialogOpen: false,
    });

    const history = useHistory();

    const uid = props.match.params.id;

    let userExist = false;
    let userIndex: any = undefined;

    props.users.forEach((usr: any, index: number) => {
        if (usr.id.toString() === uid) {
            userExist = true;
            userIndex = index;
        }
    });

    if (!userExist || userIndex === undefined) {
        return (
            <main className="err-page">
                <p className="err-msg">
                    User with ID {uid}<br /> doesn't exist.
                </p>
            </main>
        );
    }

    const usrData: any = props.users[userIndex];

    const age = calculateAge(usrData.birthdate);

    const handleOpenDialog = () => {
        setState((current) => {
            return {
                ...current,
                isDialogOpen: true,
            }
        });
    }

    const handleCloseDialog = () => {
        setState((current) => {
            return {
                ...current,
                isDialogOpen: false,
            }
        });
    }

    const handleRemoveUser = () => {
        props.onRemoveUser(uid);
        handleCloseDialog();
        history.push("/");
    }

    return (
        <div className="Details-View">
            <div className={"remove-dialog " + (state.isDialogOpen ? "isOpen" : "")}>
                <p>
                    Remove user {usrData.firstname} ?
                </p>
                <div className="dialog-buttons">
                    <IconButton icon={CrossIcon} onPress={handleCloseDialog} />
                    <IconButton icon={CheckIcon} onPress={handleRemoveUser} />
                </div>
            </div>
            <header>
                <Link to="/">
                    <IconButton icon={ArrowLeftIcon} onPress={() => { }} />
                </Link>
                <div className="right">
                    <IconButton icon={EditIcon} onPress={() => { }} />
                    <IconButton icon={TrashIcon} onPress={handleOpenDialog} />
                </div>
            </header>
            <main>
                <Avatar img={usrData.avatar} />
                <div className="details">
                    <p>
                        {usrData.firstname}
                    </p>
                    <p>
                        {usrData.surname}
                    </p>
                    <p>
                        {usrData.birthdate} ({age})
                    </p>
                    <p>
                        {usrData.email}
                    </p>
                </div>
            </main>
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
        onRemoveUser: (data: number) => dispatch({ type: actionTypes.REMOVE_USER, payload: data }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView);

