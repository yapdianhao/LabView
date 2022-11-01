import * as React from 'react';
import CommonSummary from '../CommonSummary/CommonSummary';

const Utilization = (props) => {

    const { asset } = props;

    return (
        <div>
            <CommonSummary asset={asset} />
            Utilization
        </div>
    )
}

export default Utilization;