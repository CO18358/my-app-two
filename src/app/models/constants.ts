export enum FormMethod {
    REGISTER = 0,
    UPDATE = 1
}

export const REGEX = {
    number: new RegExp('^[0-9]*$'),
    mobileNumber: new RegExp("^[0-9]{6,14}$"),
    postalCode: new RegExp("^[0-9]{4,6}$"),
}