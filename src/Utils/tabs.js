import { GridToolbar } from "@mui/x-data-grid";
import GridView from "../Components/GridView/GridView";
import { projectData,contractData } from "./dummyData";

export const verticalTabsLabel = [
    {
        label: "Active Contract  ",
        count:1,
        Component:<GridView checkboxSelection  rows={contractData.rows} columns={contractData.columns} slots={{ toolbar: GridToolbar }} dialogType={'add-contract'} gridType='contract' />,
    },
    {
        label: "Unexpired contract  ",
        count: 10,
        Component:'sdqd66',
    },
    {
        label: "expired contract  ",
        count: 100,
        Component:'sdqd77',
    },
    {
        label: "expired this month  ",
        count: 1000,
        Component:'sdqd77',
    },
    {
        label: "expired next month  ",
        count: 600,
        Component:'sdqd77',
    },
    {
        label: "expired next after month  ",
        count: 2000,
        Component:'sdqd77',
    },
    {
        label: "expired this year  ",
        count: 2000,
        Component:'sdqd77',
    },
    {
        label: "terminated contract  ",
        count: 2000,
        Component:'sdqd77',
    },
    {
        label: "All Contract  ",
        count: 2000,
        Component:'sdqd77',
    },


  ];