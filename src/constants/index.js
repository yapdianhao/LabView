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
}]