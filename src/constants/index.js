import React from 'react';
import { transformDateToStringDDMMYYHHMM } from "../utils";

export const PM_CAL_OQ = {
  PM: 'PM',
  CAL: 'CAL',
  OQ: 'OQ'
};

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "September",
  "October",
  "Nov",
  "Dec",
];

export const TABLE_SIZE_LIST = [
  { value: 6, label: 6 },
  { value: 12, label: 12 },
  { value: 24, label: 24 },
  { value: 48, label: 48 },
  { value: 96, label: 96 },
];

export const navContents = [
  "Overview",
  "Utilization",
  "Repair",
  "PM/Cal/OQ",
  "Consumables",
  "Schedule",
];

export const ASSET_SCHEMA = [
  {
    title: "Asset ID",
    dataIndex: "assetId",
    render: (text) => text,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    render: (text) => text,
  },
  {
    title: "Model",
    dataIndex: "model",
    render: (text) => text,
  },
  {
    title: "Serial",
    dataIndex: "serial",
    render: (text) => text,
  },
  {
    title: "Age",
    dataIndex: "age",
    render: (text) => text,
  },
  {
    title: "Activation Date",
    dataIndex: "activationDate",
    render: (date) => new Date(date).toLocaleDateString(),
  },
  {
    title: "Level",
    dataIndex: "assetLevel",
    render: (text) => text,
  },
  {
    title: "PM/Cal Vendor",
    dataIndex: "pmCalOqVendor",
    render: (text) => text,
  },
  {
    title: "Repair Vendor",
    dataIndex: "repairVendor",
    render: (text) => text,
  },
  {
    title: "Instrument Description",
    dataIndex: "instrumentDescription",
    render: (text) => text,
  },
  {
    title: "USP1058",
    dataIndex: "usp1058",
    render: (text) => text,
  },
];

export const VENDOR_SCHEMA = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => text,
  },
  {
    title: 'Phone 1',
    dataIndex: 'phone1',
    render: (text) => text,
  },
  {
    title: 'Email 1',
    dataIndex: 'email1',
    render: (text) => text,
  },
  {
    title: 'Phone 2',
    dataIndex: 'phone2',
    render: (text) => text || 'NA'
  },
  {
    title: 'Email 2',
    dataIndex: 'email2',
    render: (text) => text || 'NA'
  },
  {
    title: 'Remarks',
    dataIndex: 'remarks',
    render: (text) => text,
  }
];

export const REPAIR_SCHEMA = [
  {
    title: "Asset ID",
    dataIndex: "assetId",
    render: (text) => text,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    render: (text) => text,
  },
  {
    title: "Model",
    dataIndex: "model",
    render: (text) => text,
  },
  {
    title: "Serial",
    dataIndex: "serial",
    render: (text) => text,
  },
  {
    title: "Problem",
    dataIndex: "problem",
    render: (text) => text,
  },
  {
    title: "Solution",
    dataIndex: "solution",
    render: (text) => text,
  },
  {
    title: "Reported on",
    dataIndex: "reported",
    render: (text) => text,
  },
  {
    title: "Recovered on",
    dataIndex: "recovered",
    render: (text) => text,
  },
  {
    title: "Down time",
    dataIndex: "diff",
    render: (text) => text,
  },
  {
    title: "Repair Vendor",
    dataIndex: "repairVendor",
    render: (text) => text,
  },
  {
    title: "1st Visit Complete",
    dataIndex: "firstVisitComplete",
    render: (firstVisitComplete) => {
      return firstVisitComplete ? "Yes" : "No";
    },
  },
  {
    title: "Cost on parts ($)",
    dataIndex: "partCost",
    render: (text) => text,
  },
  {
    title: "Cost on labor ($)",
    dataIndex: "laborCost",
    render: (text) => text,
  },
  {
    title: "Total Cost ($)",
    dataIndex: "totalCost",
    render: (text) => text,
  },
];

export const UTIL_SCHEMA = [
  {
    title: "Asset ID",
    dataIndex: "assetId",
    render: (text) => text,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    render: (text) => text,
  },
  {
    title: "Model",
    dataIndex: "model",
    render: (text) => text,
  },
  {
    title: "Serial",
    dataIndex: "serial",
    render: (text) => text,
  },
  {
    title: "From",
    dataIndex: "usedFrom",
    render: (text) => text,
  },
  {
    title: "To",
    dataIndex: "usedTo",
    render: (text) => text,
  },
  {
    title: "Total hours",
    dataIndex: "diff",
    render: (text) => text,
  },
  // {
  //     title: 'Remarks',
  //     dataIndex: '',
  //     render: (text) => text,
  // }
];

export const PM_CAL_OQ_SCHEMA = [
  {
    title: "Asset ID",
    dataIndex: "assetId",
    render: (text) => text,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    render: (text) => text,
  },
  {
    title: "Model",
    dataIndex: "model",
    render: (text) => text,
  },
  {
    title: "Serial",
    dataIndex: "serial",
    render: (text) => text,
  },
  {
    title: "Remarks",
    dataIndex: "remarks",
    render: (text) => {
      if (!!text) return text;
      return "NA"
    }
  },
  {
    title: "Type",
    dataIndex: "type",
    render: (text) => text,
  },
  {
    title: "Completed",
    dataIndex: "completedTime",
    render: (text) => text,
  },
  {
    title: "Scheduled",
    dataIndex: "scheduledTime",
    render: (text) => text,
  }
]

export const CONSUMABLE_SCHEMA = [
  {
    title: "Asset ID",
    dataIndex: "assetId",
    render: (text) => text,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    render: (text) => text,
  },
  {
    title: "Model",
    dataIndex: "model",
    render: (text) => text,
  },
  {
    title: "Serial",
    dataIndex: "serial",
    render: (text) => text,
  },
  {
    title: "Description",
    dataIndex: "description",
    render: (text) => text,
  },
  {
    title: "Part No.",
    dataIndex: "partNumber",
    render: (text) => text,
  },
  {
    title: "Cost",
    dataIndex: "cost",
    render: (text) => text,
  },
  {
    title: "Consumed on",
    dataIndex: "consumedOn",
    render: (text) => text,
  },
];

export const assetRepairSchema = [
  {
    title: "Problem",
    dataIndex: "problem",
    render: (text) => text,
  },
  {
    title: "Solution",
    dataIndex: "solution",
    render: (text) => text,
  },
  {
    title: "Cost",
    dataIndex: "part_cost",
    render: (text) => text,
  },
  {
    title: "1st Visit Complete",
    dataIndex: "first_visit_complete",
    render: (text) => text,
  },
  {
    title: "Reported on",
    dataIndex: "reported_on",
    render: (text) => text,
  },
  {
    title: "Recovered on",
    dataIndex: "recovered_on",
    render: (text) => text,
  },
];

export const assetPmCalOqSchema = [
  {
    title: "Type",
    dataIndex: "type",
    render: (text) => text,
  },
  {
    title: "Routine",
    dataIndex: "",
    render: (text) => text,
  },
  {
    title: "Remarks",
    dataIndex: "",
    render: (text) => text,
  },
  {
    title: "From",
    dataIndex: "",
    render: (text) => text,
  },
  {
    title: "To",
    dataIndex: "",
    render: (text) => text,
  },
];

export const assetConsumableSchema = [
  {
    title: "Description",
    dataIndex: "",
    render: (text) => text,
  },
  {
    title: "Part No",
    dataIndex: "",
    render: (text) => text,
  },
  {
    title: "Cost ($)",
    dataIndex: "",
    render: (text) => text,
  },
  {
    title: "Consumed on",
    dataIndex: "",
    render: (text) => text,
  },
];

export const EDIT_UTIL_SCHEMA = [
  {
    title: "From",
    dataIndex: "used_from",
    render: (date) => transformDateToStringDDMMYYHHMM(date),
  },
  {
    title: "To",
    dataIndex: "used_to",
    render: (date) => transformDateToStringDDMMYYHHMM(date),
  },
  {
    title: "Duration",
    dataIndex: "diff",
    render: (text) => text,
  },
];

export const EDIT_REPAIR_SCHEMA = [
  {
    title: "Problem",
    dataIndex: "problem",
    render: (text) => text,
  },
  {
    title: "Solution",
    dataIndex: "solution",
    render: (text) => text,
  },
  {
    title: "Cost ($)",
    dataIndex: "costs",
    render: (cost) => {
      const partsCost = cost.part;
      const laborCost = cost.labor;
      return (
        <>
          <div>{partsCost} (parts)</div>
          <div>{laborCost} (labor)</div>
        </>
      );
    },
  },
  {
    title: "1st Visit Complete",
    dataIndex: "firstVisitComplete",
    render: (firstVisitComplete) => {
      return firstVisitComplete ? "Yes" : "No";
    },
  },
  {
    title: "Reported",
    dataIndex: "reported",
    render: (text) => text,
  },
  {
    title: "Recovered",
    dataIndex: "recovered",
    render: (text) => text,
  },
];


