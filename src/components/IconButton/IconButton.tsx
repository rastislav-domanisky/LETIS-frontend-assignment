import React from 'react';
import './IconButton.scss';

type Props = {
    icon: string;
    onPress: () => void;
}

const IconButton: React.FC<Props> = ({
    icon,
    onPress,
}) => (
    <div className="Icon-Button" onClick={onPress}>
        <img src={icon} alt="IconButtonImg" className="btn-icon" />
    </div>
);

export default IconButton;
