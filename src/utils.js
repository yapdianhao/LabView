import { MONTHS } from "./constants";

export const transformAsset = (asset) => {
    return {
        ...asset,
        installation_date: transformStringToDateYYYYMMDD(asset.installation_date),
        activation_date: transformStringToDateYYYYMMDD(asset.activation_date),
        contract_start_date: transformStringToDateYYYYMMDD(asset.contract_start_date),
        contract_end_date: transformStringToDateYYYYMMDD(asset.contract_end_date),
    };
}

export const transformStringToDateYYYYMMDD = (dateStr) => {
    if (!dateStr) return null;
    const tIndex = dateStr.indexOf('T');
    const dateStrYYYYMMDD = dateStr.substring(0, tIndex);
    return new Date(dateStrYYYYMMDD);
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

export const transformFullRepair = (repair) => {
    return {
        assetId: repair.asset_id,
        brand: repair.brand,
        model: repair.model,
        serial: repair.serial,
        problem: repair.problem,
        solution: repair.solution,
        reported: transformDateToStringDDMMYYHHMM(transformDateTime(repair.reported_on)),
        recovered: transformDateToStringDDMMYYHHMM(transformDateTime(repair.recovered_on)),
        diff: repair.diff,
        repairVendor: repair.name,
        firstVisitComplete: repair.first_visit_complete === 1,
        partCost: repair.part_cost,
        laborCost: repair.labor_cost,
        totalCost: repair.total_cost
    }
}

export const transformDateToStringYYMMDD = (date) => {
    if (date === null || date === undefined) return '';
    const year = '' + date.getFullYear();
    const realMonth = date.getMonth() + 1;
    const month = realMonth < 10 ? '0' + realMonth : '' + realMonth;
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