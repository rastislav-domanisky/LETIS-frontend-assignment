export const calculateAge = (birthdate: string): number => {
    let today = new Date();
    let bd = new Date(birthdate);
    let age = today.getFullYear() - bd.getFullYear();
    var m = today.getMonth() - bd.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < bd.getDate())) {
        age--;
    }
    return age;
}

export const isAdult = (age: number):boolean => {
    if(age<18) {
        return false;
    } else {
        return true;
    }
};