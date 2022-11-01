export const transformAsset = (asset) => {
    return {
        ...asset,
        installation_date: new Date(asset.installation_date),
        activation_date: new Date(asset.activation_date),
    };
}