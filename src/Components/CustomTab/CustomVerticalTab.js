import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './CustomTab.css'
import { Chip, Grid } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function CustomVerticalTab({ tabs }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChipColor = (count) => {
        if(count < 9){
            return 'error';
        }else if(count > 9 && count < 99){
            return 'warning';
        }else if(count > 99 && count < 999){
            return 'secondary';
        }else if(count > 999 && count < 1999){
            return 'info';
        }
        return 'success';
    }

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto' }}
        >

            <Grid container spacing={0}>
                <Grid item xs={3}>
                    {/* <Item> */}
                    <Tabs
                        orientation="vertical"
                        // variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', paddingTop:'24px' }}
                    >
                        {tabs.map((tab, i) => {
                            return (
                                <Tab label={<div>{tab.label}<Chip label={tab.count} color={handleChipColor(`${tab.count}`)} size="small" /></div>} key={i} className='vertical-tab-css' sx={tab.style} />
                            )
                        })}
                    </Tabs>

                </Grid>
                <Grid item xs={9}>
                    {tabs.map(({ Component }, i) => (
                        <TabPanel value={value} index={i} key={i}>
                            {Component}
                        </TabPanel>
                    ))}
                </Grid>
            </Grid>

        </Box>
    );
}
