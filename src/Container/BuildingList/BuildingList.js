import React, { useState } from 'react'
import { BuildingListData, buildingList } from '../../Utils/dummyData'
import { Box, Typography } from '@mui/material'
import CustomToggleButton from '../../Components/CustomToggleButton/CustomToggleButton'
import GridView from '../../Components/GridView/GridView'
import { CardWithImage } from '../../Components/CustomCard/CustomCard'
import { UtilService } from '../../Utils/util.service'

function BuildingList() {
    const [tableView, setTableView] = useState(true)
    const handleGridView = (state) => {
        setTableView(state);
      }
    return (
        <>
            <Box className={'d-flex justify-content-between py-2 border-top-bottom '}>
                <Typography className='second-title-bold-text align-self-center pl-3'>Building List under project</Typography>
                <CustomToggleButton className='pr-2' handleGridView={handleGridView}></CustomToggleButton>
            </Box>
            {
                tableView
                    ?
                    <Box>
                        <GridView checkboxSelection rows={buildingList.rows} columns={buildingList.columns} dialogType='edit-building-list' sdIcon={'CreateIcon'} />
                    </Box>
                    :
                    <Box>
                        <Box className='d-flex mt-4 ml-4'>
                            <CardWithImage data={{ image: UtilService.addBaseUrl('/images/building.jpg'), details: BuildingListData, title: 'Tower A' }} className={'mx-2'} />
                            <CardWithImage data={{ image: UtilService.addBaseUrl('/images/building.jpg'), details: BuildingListData, title: 'Tower A' }} className={'mx-2'} />
                            <CardWithImage data={{ image: UtilService.addBaseUrl('/images/building.jpg'), details: BuildingListData, title: 'Tower A' }} className={'mx-2'} />
                            <CardWithImage data={{ image: UtilService.addBaseUrl('/images/building.jpg'), details: BuildingListData, title: 'Tower A' }} className={'mx-2'} />
                        </Box>

                    </Box>
            }



        </>
    )
}

export default BuildingList