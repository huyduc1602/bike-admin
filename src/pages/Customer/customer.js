import { Link } from 'react-router-dom';
import Table from '~/components/Table';
import { listCustomers } from '~/data/data';

function Customer() {
    return (
        <div>
            <h1>List Customers</h1>
            <Table data={listCustomers} customer></Table>
        </div>
    );
}

export default Customer;
