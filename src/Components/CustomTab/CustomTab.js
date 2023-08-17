import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomToggleButton from "../CustomToggleButton/CustomToggleButton";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



export default function BasicTabs({ tabs, selected, toggleButton }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Get the active tab value from localStorage when the component mounts
    if (selected) {
      setValue(parseInt(selected));
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab, i) => {
            return (
              <Tab label={tab.label} key={i} icon={tab.icon && tab.icon} disabled={tab.disabled && tab.disabled} sx={tab.style} className={tab.class} />
            )
          })}

          {
            toggleButton &&
            <Box sx={{
              alignSelf: 'center',
              textAlign: 'end',
              marginLeft: 'auto'
            }}>
              <CustomToggleButton></CustomToggleButton>
            </Box>
          }

        </Tabs>

      </Box>
      {tabs.map(({ Component }, i) => (
        <TabPanel value={value} index={i} key={i}>
          {Component}
        </TabPanel>
      ))}
    </Box>
  );
}
