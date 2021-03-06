import React from 'react';

import './businessList.css';
import Business from '../Business/business';

class BusinessList extends React.Component {
    render() {
        return (
            <div>
                <div className="BusinessList">
                    {this.props.busy.map(x => (
                        <Business business={x} />
                    ))}
                </div>
            </div>
        )
    }
}

export default BusinessList;
