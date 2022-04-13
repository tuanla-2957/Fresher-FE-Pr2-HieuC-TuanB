import React from "react";
import styled from "styled-components";
import { useTable, usePagination, useRowSelect } from "react-table";

import FormatDate from "../../../../components/UI/FormatDate";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import Button from "../../../../components/UI/Button";

import "./style.scss";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect
  );

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} className='products-table'>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className='table-row'>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className='pagination'>
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </Button>
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <BsArrowBarLeft />
        </Button>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          <BsArrowBarRight />
        </Button>
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </Button>
        <span>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to page:
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>
      </div>
    </>
  );
}

function App(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: " Select",
            accessor: "select",
          },
          {
            Header: " OrderBy",
            accessor: "orderBy",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Total Amount",
            accessor: "totalAmount",
          },
          {
            Header: "Total Item",
            accessor: "totalItem",
          },
          {
            Header: "Type",
            accessor: "paymentType",
          },
        ],
      },
      {
        Header: "Update",
        columns: [
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: (
              <div style={{ padding: "0 50px", boxSizing: "border-box" }}>
                <p>CreatedAt</p>
                <select
                  onClick={(e) => console.log(e.target.value)}
                  style={{ border: "0.5px solid gray", borderRadius: "4px" }}
                >
                  <option value={""}>Sort by</option>
                  <option value={-1}>Newest</option>
                  <option value={1}>Oldest</option>
                </select>
              </div>
            ),
            accessor: "createdAt",
          },
          {
            Header: "UpdatedAt",
            accessor: "updatedAt",
          },
          {
            Header: "Details",
            accessor: "details",
          },
        ],
      },
    ],
    []
  );

  const renderStatus = (status) => {
    if (status === "completed") {
      return <p className='order-status order-status--complete'>{status}</p>;
    } else if (status === "in_progress") {
      return <p className='order-status order-status--progress'>{status}</p>;
    } else if (status === "ordered") {
      return <p className='order-status order-status--ordered'>{status}</p>;
    } else if (status === "cancelled") {
      return <p className='order-status order-status--cancelled'>{status}</p>;
    }
  };
  const makeData = (data) => {
    return data.map((order) => {
      return {
        ...order,
        select: (
          <input
            type='checkbox'
            id={order._id}
            name={order._id}
            value={order._id}
            onChange={console.log("as")}
          />
        ),
        status: renderStatus(order.status),
        orderBy: order.user.email,
        totalItem: order.items
          .map((item) => item.purchaseQty)
          .reduce((a, b) => a + b),
        details: (
          <Button onClick={() => props.getDetails(order)}>Details</Button>
        ),
        updatedAt: <FormatDate date={order.updatedAt} />,
        createdAt: <FormatDate date={order.createdAt} />,
      };
    });
  };

  return <Table columns={columns} data={makeData(props.data)} />;
}

export default App;
