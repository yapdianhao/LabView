const domain =
  process.env.NODE_ENV === "production"
    ? "https://backend-equ57uepxq-as.a.run.app/"
    : "http://localhost:5000/";

export const POST_USER_DETAIL = `${domain}api/users`;

export const GET_ALL_ASSETS = `${domain}api/assets`;

export const GET_AN_ASSET = `${domain}api/get-asset`;

export const GET_ALL_VENDORS = `${domain}api/vendors`;

export const GET_ALL_FREQUENCIES = `${domain}api/frequencies`;

export const EDIT_ASSET = `${domain}api/edit-asset`;

export const GET_A_VENDOR = `${domain}api/get-vendor`;

export const GET_UTILS_BY_ASSET = `${domain}api/get-utils`;

export const GET_REPAIRS_BY_ASSET = `${domain}api/get-repair`;

export const GET_ALL_REPAIRS = `${domain}api/repairs`;

export const EDIT_REPAIR = `${domain}api/edit-repair`;

export const GET_ALL_UTILS = `${domain}api/utils`;

export const GET_ALL_CONSUMABLES = `${domain}api/consumables`;

export const EDIT_CONSUMABLE = `${domain}api/edit-consumable`;