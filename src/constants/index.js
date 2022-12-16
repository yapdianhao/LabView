import { transformDateToStringDDMMYYHHMM } from "../utils";

export const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'September',
    'October',
    'Nov',
    'Dec'
];

export const TABLE_SIZE_LIST = [
    { value: 6, label: 6},
    { value: 12, label: 12 },
    { value: 24, label: 24 },
    { value: 48, label: 48 },
    { value: 96, label: 96 }
]

export const navContents = [
    'Overview',
    'Utilization',
    'Repair',
    'PM/Cal/OQ',
    'Consumables',
    'Schedule',
];

export const assetSchema = [{
    title: 'Asset ID',
    dataIndex: 'id',
    render: (text) => text,
}, {
    title: 'Brand', 
    dataIndex: 'brand',
    render: (text) => text,
}, {
    title: 'Model', 
    dataIndex: 'model',
    render: (text) => text,
}, {
    title: 'Serial', 
    dataIndex: 'serial',
    render: (text) => text,
}, {
    title: 'Age', 
    dataIndex: 'age',
    render: (text) => text,
}, {
    title: 'Activation Date', 
    dataIndex: 'activation_date',
    render: (date) => new Date(date).toLocaleDateString(),
}, {
    title: 'Level', 
    dataIndex: 'asset_level',
    render: (text) => text,
}, {
    title: 'PM/Cal Vendor', 
    dataIndex: 'pm_vendor',
    render: (text) => text,
}, {
    title: 'Repair Vendor', 
    dataIndex: 'calc_vendor',
    render: (text) => text,
}, {
    title: 'Instrument Description', 
    dataIndex: 'instrument_description',
    render: (text) => text,
}, {
    title: 'USP1058', 
    dataIndex: 'usp1058',
    render: (text) => text,
}];

export const REPAIR_SCHEMA = [{
    title: 'Asset ID',
    dataIndex: 'assetId',
    render: (text) => text,
}, {
    title: 'Brand',
    dataIndex: 'brand',
    render: (text) => text,
}, {
    title: 'Model',
    dataIndex: 'model',
    render: (text) => text,
}, {
    title: 'Serial',
    dataIndex: 'serial',
    render: (text) => text,
}, {
    title: 'Problem',
    dataIndex: 'problem',
    render: (text) => text,
}, {
    title: 'Solution',
    dataIndex: 'solution',
    render: (text) => text,
}, {
    title: 'Reported on',
    dataIndex: 'reportedOn',
    render: (text) => text,
}, {
    title: 'Down time',
    dataIndex: 'downTime',
    render: (text) => text,
}, {
    title: 'Repair Vendor',
    dataIndex: 'repairVendor',
    render: (text) => text,
}, {
    title: '1st Visit Complete',
    dataIndex: 'firstVisitComplete',
    render: (firstVisitComplete) => {
        return firstVisitComplete ? 'Yes' : 'No';
    },
}, {
    title: 'Cost on parts ($)',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Cost on labor ($)',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Total Cost ($)',
    dataIndex: '',
    render: (text) => text,
}];

export const utilSchema = [{
    title: 'Asset ID',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Brand',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Model',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Serial',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'From',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'To',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Total hours',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Remarks',
    dataIndex: '',
    render: (text) => text,
}];

export const pmCalOqSchema = [{
    title: 'Asset ID',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Brand',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Model',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Serial',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Type',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Routine',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Remarks',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Scheduled',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Completed',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Vendor',
    dataIndex: '',
    render: (text) => text,
}];

export const consumableSchema = [{
    title: 'Asset ID',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Brand',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Model',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Serial',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Description',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Part No.',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Cost',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Consumed on',
    dataIndex: '',
    render: (text) => text,
}];

export const assetRepairSchema = [{
    title: 'Problem',
    dataIndex: 'problem',
    render: (text) => text,
}, {
    title: 'Solution',
    dataIndex: 'solution',
    render: (text) => text,
}, {
    title: 'Cost',
    dataIndex: 'part_cost',
    render: (text) => text,
}, {
    title: '1st Visit Complete',
    dataIndex: 'first_visit_complete',
    render: (text) => text,
}, {
    title: 'Reported on',
    dataIndex: 'reported_on',
    render: (text) => text,
}, {
    title: 'Recovered on',
    dataIndex: 'recovered_on',
    render: (text) => text,
}];

export const assetPmCalOqSchema = [{
    title: 'Type',
    dataIndex: 'type',
    render: (text) => text,
}, {
    title: 'Routine',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'Remarks',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'From',
    dataIndex: '',
    render: (text) => text,
}, {
    title: 'To',
    dataIndex: '',
    render: (text) => text,
}];

export const assetConsumableSchema = [{
    title: 'Description',
    dataIndex: '',
    render: (text) => text
}, {
    title: 'Part No',
    dataIndex: '',
    render: (text) => text
}, {
    title: 'Cost ($)',
    dataIndex: '',
    render: (text) => text
}, {
    title: 'Consumed on',
    dataIndex: '',
    render: (text) => text
}];

export const EDIT_UTIL_SCHEMA = [{
    title: 'From',
    dataIndex: 'used_from',
    render: (date) => transformDateToStringDDMMYYHHMM(date),
}, {
    title: 'To',
    dataIndex: 'used_to',
    render: (date) => transformDateToStringDDMMYYHHMM(date),
}, {
    title: 'Duration',
    dataIndex: 'diff',
    render: (text) => text,
}];

export const EDIT_REPAIR_SCHEMA = [{
    title: 'Problem',
    dataIndex: 'problem',
    render: (text) => text
}, {
    title: 'Solution',
    dataIndex: 'solution',
    render: (text) => text,
}, {
    title: 'Cost ($)',
    dataIndex: 'costs',
    render: (cost) => {
        const partsCost = cost.part;
        const laborCost = cost.labor;
        return (
            <>
                <div>{partsCost} (parts)</div>
                <div>{laborCost} (labor)</div>
            </>
        );
    }
}, {
    title: '1st Visit Complete',
    dataIndex: 'firstVisitComplete',
    render: (firstVisitComplete) => {
        return firstVisitComplete ? 'Yes' : 'No';
    }
}, {
    title: 'Reported',
    dataIndex: 'reported',
    render: (text) => text,
}, {
    title: 'Recovered',
    dataIndex: 'recovered',
    render: (text) => text,
}]