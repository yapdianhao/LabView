const domain = process.env.NODE_ENV === 'production' ? 'https://backend-equ57uepxq-as.a.run.app/' : 'http://localhost:5000/';

console.log('domain', domain);

export const POST_USER_DETAIL = `${domain}api/users`;

export const GET_ALL_ASSETS = `${domain}api/assets`;

export const GET_AN_ASSET = `${domain}api/get-asset`;

export const GET_ALL_VENDORS = `${domain}api/vendors`;

export const GET_ALL_FREQUENCIES = `${domain}api/frequencies`;

export const EDIT_ASSSET = `${domain}api/edit-asset`;

export const GET_A_VENDOR = `${domain}api/get-vendor`;
