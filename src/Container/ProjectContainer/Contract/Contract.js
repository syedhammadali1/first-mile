import React from 'react'
import BasicTabs from '../../../Components/CustomTab/CustomTab';
import ReorderIcon from '@mui/icons-material/Reorder';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CustomVerticalTab from '../../../Components/CustomTab/CustomVerticalTab';
import { verticalTabsLabel } from '../../../Utils/tabs';





const tabs = [
  {
    label: "Overview",
    icon: <ReorderIcon />,
    Component: <CustomVerticalTab tabs={verticalTabsLabel} />,
    style: { marginLeft: '3rem' }
  },
  {
    label: "Renewal Date",
    Component: <div>Hello, I am tab 2</div>,
    icon: <DateRangeIcon />,
    disabled: true,
    style: { marginLeft: '6rem' }
  }

];






function Contract() {

  return (
    <>
      <BasicTabs tabs={tabs} toggleButton={true} />

    </>
  )
}

export default Contract