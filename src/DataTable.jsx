/* eslint-disable react/jsx-key */
import { React, useMemo } from "react";
import mockData from "./localization.json";
import { useTable } from "react-table";
import './DataTable.css';

const DataTable = () => {
  const data = useMemo(() => mockData["Sheet1"].slice(0,100), []);
  const columns = useMemo(
    () => [
      { Header: "Year", accessor: "Year" },
      { Header: "Season Type", accessor: "Season_type" },
      { Header: "Player ID", accessor: "PLAYER_ID" },
      { Header: "Rank", accessor: "RANK" },
      { Header: "Player", accessor: "PLAYER" },
      { Header: "Team", accessor: "TEAM" },
      { Header: "Games Played", accessor: "GP" },
      { Header: "Minutes", accessor: "MIN" },
      { Header: "Field Goals Made", accessor: "FGM" },
      { Header: "Field Goals Attempted", accessor: "FGA" },
      { Header: "Field Goal Percentage", accessor: "FG_PCT" },
      { Header: "Three-Point Field Goals Made", accessor: "FG3M" },
      { Header: "Three-Point Field Goals Attempted", accessor: "FG3A" },
      { Header: "Three-Point Field Goal Percentage", accessor: "FG3_PCT" },
      { Header: "Free Throws Made", accessor: "FTM" },
      { Header: "Free Throws Attempted", accessor: "FTA" },
      { Header: "Free Throw Percentage", accessor: "FT_PCT" },
      { Header: "Offensive Rebounds", accessor: "OREB" },
      { Header: "Defensive Rebounds", accessor: "DREB" },
      { Header: "Total Rebounds", accessor: "REB" },
      { Header: "Assists", accessor: "AST" },
      { Header: "Steals", accessor: "STL" },
      { Header: "Blocks", accessor: "BLK" },
      { Header: "Turnovers", accessor: "TOV" },
      { Header: "Personal Fouls", accessor: "PF" },
      { Header: "Points", accessor: "PTS" },
      { Header: "Efficiency", accessor: "EFF" },
      { Header: "Assist to Turnover Ratio", accessor: "AST_TOV" },
      { Header: "Steal to Turnover Ratio", accessor: "STL_TOV" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="Container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
