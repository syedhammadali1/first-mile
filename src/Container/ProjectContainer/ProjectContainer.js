import React from 'react'
import BasicTabs from '../../Components/CustomTab/CustomTab';
import Project from './Project/Project';
import Contract from './Contract/Contract';
import CustomCardModal from '../../Components/CustomCardModal/CustomCardModal';
import { useLocation } from 'react-router-dom';
import CustomNestedAndDualNestedDialog from '../../Components/CustomNestedAndDualNestedDialog/CustomNestedAndDualNestedDialog';
import AllParentDialogBoxs from '../../Components/AllParentDialogBoxs/AllParentDialogBoxs';



const tabs = [
  {
    label: "PROJECT",
    Component: <Project/>
  },
  {
    label: "CONTRACT",
    Component: <Contract/>
  }
];




function ProjectContainer() {
  
  const location = useLocation();
  const selectedTab = location?.state?.tabIndex;

    return (
        <>
          <BasicTabs tabs={tabs} selected={selectedTab}/>
          <CustomCardModal></CustomCardModal>
          <CustomNestedAndDualNestedDialog/>
          <AllParentDialogBoxs/>

        </>
    )
}

export default ProjectContainer