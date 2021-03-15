import data from '../assets/response.json';

export const getUsers = () => {
    let myUsers: Array<Object> = [];
    data.forEach((usr) => {
        myUsers.push(usr);
    });
    return myUsers;
}

export const removeUser = (users: any, id: number) => {
    let myUsers: Array<Object> = [];

    users.forEach((usr: any) => {
        if(usr.id.toString() === id) {
            console.log("REMOVING ID: ", id);
        }
        else {
            myUsers.push(usr);
        }
    });
    return myUsers;
}