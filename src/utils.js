import { MONTHS } from "./constants";

export const transformAsset = (asset) => {
  return {
    assetId: asset.id,
    age: asset.age,
    assetLevel: asset.asset_level,
    brand: asset.brand,
    defaultVendor: asset.default_vendor_name,
    instrumentDescription: asset.instrument_description,
    model: asset.model,
    pmCalOqVendor: asset.pm_cal_oq_vendor_name,
    repairVendor: asset.repair_vendor_name,
    serial: asset.serial,
    usp1058: asset.usp1058,
    intallationDate: transformStringToDateYYYYMMDD(asset.installation_date),
    activationDate: transformStringToDateYYYYMMDD(asset.activation_date),
    contractStartDate: transformStringToDateYYYYMMDD(
      asset.contract_start_date
    ),
    contractEndDate: transformStringToDateYYYYMMDD(asset.contract_end_date),
  };
};

export const transformStringToDateYYYYMMDD = (dateStr) => {
  if (!dateStr) return null;
  const tIndex = dateStr.indexOf("T");
  const dateStrYYYYMMDD = dateStr.substring(0, tIndex);
  return new Date(dateStrYYYYMMDD);
};

export const transformDateTime = (date) => {
  if (!!date === false) return null;
  return new Date(date);
};

export const transformUtil = (util) => {
  return {
    ...util,
    used_from: new Date(util.used_from),
    used_to: new Date(util.used_to),
  };
};

export const transformRepair = (repair) => {
  return {
    problem: repair.problem,
    solution: repair.solution,
    firstVisitComplete: repair.first_visit_complete === 1,
    costs: {
      labor: repair.labor_cost,
      part: repair.part_cost,
    },
    reported: transformDateToStringDDMMYYHHMM(
      transformDateTime(repair.reported_on)
    ),
    recovered: transformDateToStringDDMMYYHHMM(
      transformDateTime(repair.recovered_on)
    ),
  };
};

export const transformVendor = (vendor) => {
  return {
    name: vendor.name,
    email: vendor.email_1 || vendor.email_2 || '',
    phone: vendor.phone_1 || vendor.phone_2 || '',
  }
}

export const transformFullRepair = (repair) => {
  return {
    id: repair.id,
    assetId: repair.asset_id,
    brand: repair.brand,
    model: repair.model,
    serial: repair.serial,
    problem: repair.problem,
    solution: repair.solution,
    originalReported: transformDateTime(repair.reported_on),
    originalRecovered: transformDateTime(repair.recovered_on),
    reported: transformDateToStringDDMMYYHHMM(
      transformDateTime(repair.reported_on)
    ),
    recovered: transformDateToStringDDMMYYHHMM(
      transformDateTime(repair.recovered_on)
    ),
    diff: repair.diff,
    repairVendor: repair.vendor_name,
    repairVendorPhone: repair.vendor_phone,
    repairVendorEmail: repair.vendor_email,
    firstVisitComplete: repair.first_visit_complete,
    laborEntitled: repair.labour_entitlement,
    partsEntitled: repair.parts_entitlement,
    partCost: repair.part_cost,
    laborCost: repair.labor_cost,
    totalCost: repair.total_cost,
  };
};

export const transformFullUtil = (util) => {
  const utilizeDays = Math.floor(util.diff / 24);
  const utilizeHours = util.diff % 24;
  return {
    assetId: util.asset_id,
    brand: util.brand,
    model: util.model,
    serial: util.serial,
    usedFrom: transformDateToStringDDMMYYHHMM(
      transformDateTime(util.used_from)
    ),
    usedTo: transformDateToStringDDMMYYHHMM(transformDateTime(util.used_to)),
    diff: `${utilizeDays > 0 ? utilizeDays + "d " : ""}${
      utilizeHours > 0 ? utilizeHours + "h" : ""
    }`,
    usedFromDate: transformDateTime(util.used_from),
    usedToDate: transformDateTime(util.used_to),
  };
};

export const transformFullConsumable = (consumable) => {
  return {
    id: consumable.id,
    assetId: consumable.asset_id,
    brand: consumable.brand,
    model: consumable.model,
    serial: consumable.serial,
    cost: consumable.cost,
    description: consumable.description,
    partNumber: consumable.part_number,
    consumedOn: transformDateToStringDDMMYYHHMM(transformDateTime(consumable.consumed_on)),
    consumedOnDate: transformDateTime(consumable.consumed_on)
  };
};

export const transformFullPmCalOq = (pmCalOq) => {
  return {
    assetId: pmCalOq.asset_id,
    brand: pmCalOq.brand,
    model: pmCalOq.model,
    serial: pmCalOq.serial,
    remarks: pmCalOq.remarks,
    type: pmCalOq.type,
    pmCalOqId: pmCalOq.pm_cal_oq_id,
    pmCalOqVendor: pmCalOq.vendor_name,
    pmCalOqVendorId: pmCalOq.vendor_id,
    pmCalOqVendorPhone: pmCalOq.vendor_phone,
    pmCalOqVendorEmail: pmCalOq.vendor_email,
    isRoutine: pmCalOq.is_routine,
    completedTime: transformDateToStringDDMMYYHHMM(transformDateTime(pmCalOq.completed_time)),
    completedDateTime: transformDateTime(pmCalOq.completed_time),
    scheduledTime: transformDateToStringDDMMYYHHMM(transformDateTime(pmCalOq.scheduled_time)),
    scheduledDateTime: transformDateTime(pmCalOq.scheduled_time),
  };
};

export const transformDateToStringYYMMDD = (date) => {
  if (date === null || date === undefined) return "";
  if (typeof(date) === 'string') {
    date = new Date(date);
  }
  const year = "" + date.getFullYear();
  const realMonth = date.getMonth() + 1;
  const month = realMonth < 10 ? "0" + realMonth : "" + realMonth;
  const day = date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate();
  return `${year}-${month}-${day}`;
};

export const transformDateToStringHHMM = (date) => {
  if (date === null || !date) return "";
  const hour =
    date.getHours() < 10 ? "0" + date.getHours() : "" + date.getHours();
  const minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : "" + date.getMinutes();
  return `${hour}:${minute}`;
};

export const transformDateToStringDDMMYYHHMM = (date) => {
  if (!!date === false) return null;
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return `${day} ${MONTHS[month]} ${year} ${hour}${minute}`;
};

// TODO
export const exportToCSV = (data) => {
  return;
};
