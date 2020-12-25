import React, { useState } from "react";
import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import { useExportData } from "react-table-plugins";
import PapaParse from "papaparse";
import Button from '@material-ui/core/Button';

import "./Table.css";

export default function Table({ columns, data }) {

  const [filterInput, setFilterInput] = useState("");
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,

    // Pagination features
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    setFilter,
    exportData
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      getExportFileBlob,
    },
    useFilters,
    useSortBy,
    usePagination,
    useExportData
  );

  function handleFilterChange(e) {
    const value = e.target.value || undefined;
    setFilter("name", value);
    setFilterInput(value);
  };

  function getExportFileBlob({ columns, data }) {
    const headerNames = columns.map(col => col.exportValue);
    const csvString = PapaParse.unparse({ fields: headerNames, data });
    return new Blob([csvString], { type: "text/csv" });
  }

  return (
    <>
      <input
        id="searchBar"
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search player name"}
      />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? "sort-desc"
                          : "sort-asc"
                        : ""
                    }
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      <div className="pagination" id="footer">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <span id="downloadCsv">
          <Button size="small" variant="contained" color="primary" disableElevation onClick={() => exportData("csv")}>
            Download CSV
          </Button>
        </span>
      </div>
    </>
  );
}