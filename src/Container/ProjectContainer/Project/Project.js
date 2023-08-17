import React from 'react'
import { GridToolbar } from '@mui/x-data-grid';
import GridView from '../../../Components/GridView/GridView';
import {  projectData } from '../../../Utils/dummyData';
import BasicTabs from '../../../Components/CustomTab/CustomTab';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReorderIcon from '@mui/icons-material/Reorder';
import './project.css'





function Project() {
  const tabs = [
    {
      label: "MapView",
      Component: <div>Hello, I am tab 2</div>,
      icon: <LocationOnIcon />,
      disabled: true,
      style: { marginLeft: '3rem' }
    },
    {
      label: "Overview",
      icon: <ReorderIcon />,
      Component: <GridView checkboxSelection rows={projectData.rows} columns={projectData.columns} slots={{ toolbar: GridToolbar }} gridType='project' dialogType='add-project'/>,
      style: { marginLeft: '6rem' }
    }
  ];
  return (
    <>
      <BasicTabs tabs={tabs} selected={1} toggleButton={true} />   
    </>
  )
}

export default Project