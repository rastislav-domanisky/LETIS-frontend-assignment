import { calculateAge } from './AgeCalculator';

export const sortByFirstname = (users: Array<Map<string, any>>): Array<Map<string, any>> => {
    return users.sort((a: any, b: any) => {
        if (a.firstname < b.firstname) { return -1; }
        if (a.firstname > b.firstname) { return 1; }
        return 0;
    });
};

export const sortBySurname = (users: Array<Map<string, any>>): Array<Map<string, any>> => {
    return users.sort((a: any, b: any) => {
        if (a.surname < b.surname) { return -1; }
        if (a.surname > b.surname) { return 1; }
        return 0;
    });
};

export const sortByAge = (users: Array<Map<string, any>>): Array<Map<string, any>> => {
    return users.sort((a: any, b: any) => {
        if (calculateAge(a.birthdate) < calculateAge(b.birthdate)) { return -1; }
        if (calculateAge(a.birthdate) > calculateAge(b.birthdate)) { return 1; }
        return 0;
    });
};