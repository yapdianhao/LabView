import * as React from 'react';
import CommonSummary from '../CommonSummary/CommonSummary';

const Repair = (props) => {
    const { asset } = props;

    return (
        <div>
            <CommonSummary asset={asset} />
            Repair
        </div>
    )
}

export default Repair;