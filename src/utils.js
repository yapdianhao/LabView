import { MONTHS } from "./constants";

export const transformAsset = (asset) => {
    return {
        ...asset,
        installation_date: new Date(asset.installation_date),
        activation_date: new Date(asset.activation_date),
    };
}

export const transformDateTime = (date) => {
    return new Date(date);
}

export const transformUtil = (util) => {
    return {
        ...util,
        used_from: new Date(util.used_from),
        used_to: new Date(util.used_to),
    };
}

export const transformRepair  = (repair) => {
    return {
        problem: repair.problem,
        solution: repair.solution,
        firstVisitComplete: repair.first_visit_complete === 1,
        costs: {
            labor: repair.labor_cost,
            part: repair.part_cost,
        },
        reported: transformDateToStringDDMMYYHHMM(transformDateTime(repair.reported_on)),
        recovered: transformDateToStringDDMMYYHHMM(transformDateTime(repair.recovered_on)),
    }
}

export const transformDateToStringYYMMDD = (date) => {
    if (date === null || date === undefined) return '';
    const year = '' + date.getFullYear();
    const month = date.getMonth() < 10 ? '0' + date.getMonth() : '' + date.getMonth();
    const day = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate();
    return `${year}-${month}-${day}`;
  }

export const transformDateToStringDDMMYYHHMM = (date) => {
    if (!date) return undefined;
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return `${day} ${MONTHS[month]} ${year} ${hour}${minute}`;
}

export const exportToCSV = (data) => {
    return;
}