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
        if (usr.id.toString() === id) {
            console.log("REMOVING ID: ", id);
        }
        else {
            myUsers.push(usr);
        }
    });
    return myUsers;
}

export const getNextUid = (users: any): number => {
    let max = 0;

    users.forEach((usr: any) => {
        if (usr.id > max) {
            max = usr.id;
        }
    });

    return (max + 1);
}

export const addUser = (users: any, newUsr: any) => {
    let myUsers = users;
    myUsers.push(newUsr);
    return myUsers;
}