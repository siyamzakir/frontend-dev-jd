import React from "react";
import TableHeaderItem from "../(table)/TableHeaderItem";
import TableItem from "../(table)/TableItem";

const MenuTable: React.FC<{
    tableHeaders: string[];
    tableBodies: object[];
}> = ({ tableBodies, tableHeaders }) => {
    return (
        <div className="wg-table table-product-list">
            <ul className="table-title flex gap20 mb-14">
                {tableHeaders.map((title, index) => (
                    <TableHeaderItem title={title} key={index} />
                ))}
            </ul>
            <ul className="flex flex-column">
                {tableBodies.map((data, index) => (
                    <TableItem key={index} />
                ))}
            </ul>
        </div>
    );
};

export default MenuTable;
