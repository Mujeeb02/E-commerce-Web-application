import { ReactElement, useState} from "react";

import { Column } from "react-table";
import TableHOC from "../components/admin/TableHOC";

type DataType = {
    _id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action: ReactElement;
};

const column: Column<DataType>[] = [
    {
        Header: "ID",
        accessor: "_id",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Action",
        accessor: "action",
    },
];
const Orders = () => {
    const [rows, setRows] = useState<DataType[]>([
        {
            _id: "1",
            amount: 100,
            quantity: 2,
            discount: 10,
            status: <span>Pending</span>,
            action: <button>Edit</button>,
        }
    ]);
    const Table = TableHOC<DataType>(
        column,
        rows,
        "dashboard-product-box",
        "Orders",
        rows.length > 6
    )();
    return (
        <div className="container">
            <h1>My Orders</h1>
            {Table}
        </div>
    )
}

export default Orders
