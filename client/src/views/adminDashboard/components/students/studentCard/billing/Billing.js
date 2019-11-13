import React from 'react';
import Invoices from './Invoices';
import Receipts from './Receipts'
import { Tab } from 'semantic-ui-react';
import './billing.scss'

const Billing = props => {
    
    const billingPanes = [
        {
            menuItem: 'Invoices',
            render: () => <Tab.Pane attached={false}>{<Invoices />}</Tab.Pane>,
        },
        {
            menuItem: 'Receipts',
            render: () => <Tab.Pane attached={false}>{<Receipts />}</Tab.Pane>,
        }
    ]
    return (
        <>
            <Tab className="billing-tab" menu={{ secondary: true, pointing: true }} panes={billingPanes} />
        </>
    )
}

export default Billing;