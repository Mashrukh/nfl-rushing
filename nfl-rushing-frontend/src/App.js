import React, { useMemo, useState, useEffect } from "react";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

import Table from "./components/Table";
import "./css/App.css";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Players",
        isVisible: true,
        hideHeader: true,
        columns: [
          {
            Header: "Name",
            accessor: "name",
            disableSortBy: true
          },
          {
            Header: "Team",
            accessor: "team",
            disableSortBy: true
          },
          {
            Header: "Position",
            accessor: "pos",
            disableSortBy: true
          },
          {
            Header: "Att",
            accessor: "att",
            disableSortBy: true
          },
          {
            Header: "Att/G",
            accessor: "attPerG",
            disableSortBy: true
          },
          {
            Header: "Total Yards",
            accessor: "yds"
          },
          {
            Header: "Average",
            accessor: "average",
            disableSortBy: true
          },
          {
            Header: "Yards/G",
            accessor: "ydsPerG",
            disableSortBy: true
          },
          {
            Header: "Touchdowns",
            accessor: "td"
          },
          {
            Header: "Longest Rush",
            accessor: "lng"
          },
          {
            Header: "First Down",
            accessor: "first",
            disableSortBy: true
          },
          {
            Header: "First Down %",
            accessor: "firstPercent",
            disableSortBy: true
          },
          {
            Header: "20+ Yards",
            accessor: "twentyPlus",
            disableSortBy: true
          },
          {
            Header: "40+ Yars",
            accessor: "fortyPlus",
            disableSortBy: true
          },
          {
            Header: "Fumbles",
            accessor: "fum",
            disableSortBy: true
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  // Fetch data from backend server
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8090/players");
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <div id="header">
        <ThemeProvider theme={theme}>
          <Typography variant="h3">NFL Rushing</Typography>
        </ThemeProvider>
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;