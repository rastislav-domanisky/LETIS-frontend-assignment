export const searchFilter = (users: Array<any>, txt: string):Array<Map<string, any>> => {
    let newUsers:Array<Map<string, any>> = [];

    users.forEach((usr) => {
        const firstname:string = usr.firstname;
        const surname:string = usr.surname;
        const email:string = usr.email;
        if(firstname.toUpperCase().includes(txt.toUpperCase())) {
            newUsers.push(usr);
            return;
        }
        if(surname.toUpperCase().includes(txt.toUpperCase())) {
            newUsers.push(usr);
            return;
        }
        if(email.toUpperCase().includes(txt.toUpperCase())) {
            newUsers.push(usr);
            return;
        }
    });

    return newUsers;
}