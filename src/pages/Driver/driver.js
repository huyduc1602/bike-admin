import { Link } from 'react-router-dom';
import Table from '~/components/Table';
import { listDriver } from '~/data/data';

function Driver() {
    return (
        <div>
            <h1>List Customers</h1>
            <Table data={listDriver} driver></Table>
        </div>
    );
}

export default Driver;
