import React, {useMemo} from 'react';
import ReactDOM from 'react-dom';
import Table from './../Table'

const data = [
    {
        "id": 1,
        "name": "Joe Banyard",
        "team": "JAX",
        "pos": "RB",
        "att": "2",
        "attPerG": "2",
        "yds": "7",
        "average": "3.5",
        "ydsPerG": "7",
        "td": "0",
        "lng": "7",
        "first": "0",
        "firstPercent": "0",
        "twentyPlus": "0",
        "fortyPlus": "0",
        "fum": "0"
    }
  ]

function App() {
    const columns = React.useMemo(
      () => [
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
      ],
      []
    )
  
    return <Table columns={columns} data={data} />
  }

it("Able to render table without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App></App>, div);
    ReactDOM.unmountComponentAtNode(div);
})