import React from 'react';
import './UserListItem.scss';
import { calculateAge, isAdult } from '../../../models/AgeCalculator';
import { useHistory } from "react-router-dom";

type Props = {
    data: any,
    id: number,
}


const UserListItem: React.FC<Props> = ({
    data,
    id,
}) => {
    const isAgeAdult = isAdult(calculateAge(data.birthdate));
    const history = useHistory();

    const navigateToDetails = () => {
        history.push("/users/" + id);
    }

    return (
        <tr className="User-List-Item" onClick={navigateToDetails}>
            <td className="item name">
                {data.firstname}
            </td>
            <td className="item name">
                {data.surname}
            </td>
            <td className={"item age " + (isAgeAdult ? "" : "isNotAdult")}>
                {calculateAge(data.birthdate).toString()}
            </td>
            <td className="item mail">
                {data.email}
            </td>
        </tr>
    );
}

export default UserListItem;
