import React from 'react';
import './Avatar.scss';

import UserIcon from '../../assets/user_icon.svg';

type Props = {
    img: string;
}

const Avatar:React.FC<Props> = ({
    img,
}) => {
    const isEmpty = (img.trim().length <= 0);
    return (
        <div className="Avatar">
            <img src={isEmpty ? UserIcon : img} alt="UserImage" className={isEmpty ? "usr-icon" : "usr-img"}/>
        </div>
    );
}

export default Avatar;
