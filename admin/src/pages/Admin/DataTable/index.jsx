import React from "react";
import styled from "styled-components";
import { BsPin, BsFillCheckCircleFill } from "react-icons/bs";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { useTable, usePagination, useRowSelect } from "react-table";
import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button";
import { useTranslation } from "react-i18next";
import FormatDate from "../../../components/UI/FormatDate";

import "./style.scss";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type='checkbox' ref={resolvedRef} {...rest} />
      </>
    );
  }
);

function Table({ columns, data }) {
  const { t } = useTranslation();
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
        </Button>{" "}
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <BsArrowBarLeft />
        </Button>{" "}
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          <BsArrowBarRight />
        </Button>{" "}
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </Button>{" "}
        <span>
          {t("Page")}{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | {t("Go to page")}:{" "}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
      </div>
    </>
  );
}

function App(props) {
  const { t } = useTranslation();
  const columns = [
    {
      Header: `${t("Admin")}`,
      columns: [
        {
          Header: `${t("UseName")}`,
          accessor: "userName",
        },
        {
          Header: `${t("First Name")}`,
          accessor: "firstName",
        },
        {
          Header: `${t("Last Name")}`,
          accessor: "lastName",
        },
        {
          Header: `${t("Email")}`,
          accessor: "email",
        },
        {
          Header: `${t("Phone Number")}`,
          accessor: "phone",
        },
        {
          Header: `${t('Created At')}`,
          accessor: "createdAt",
        },
        {
          Header: `${t("Updated At")}`,
          accessor: "updatedAt",
        },
        {
          Header: `${t("Update")}`,
          accessor: "update",
        },
        {
          Header: `${t("Delete")}`,
          accessor: "delete",
        },
      ],
    },
  ];

  const handleDefault = (value) => {
    if (value === "default") {
      return <p className='account--danger'>{t('not created yet')}</p>;
    }
    return value
  }

  const makeData = (data) => {
    return data.map((account) => {
      return {
        ...account,
        firstName: handleDefault(account.firstName),
        lastName: handleDefault(account.lastName),
        email: handleDefault(account.email),
        phone: handleDefault(account.phone),
        updatedAt: <FormatDate date={account.updatedAt} />,
        createdAt: <FormatDate date={account.createdAt} />,
        update: (
          <Button className='table-btn--detail'>
            <Link to={`/products/${account._id}`}>{t("Edit")}</Link>
          </Button>
        ),
        delete: (
          <Button
            className='table-btn--delete'
            onClick={() => props.onDeleteAccount(account._id)}
          >
            {t("Delete")}
          </Button>
        ),
      };
    });
  };

  return <Table columns={columns} data={makeData(props.data)} />;
}

export default App;
