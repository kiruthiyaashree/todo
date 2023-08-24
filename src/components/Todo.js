import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';
 function Todo()
{
    const [value,setValue]=React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

        
    return (
        <div className='flex items-center justify-center'>
        <div className="m-[10%]  border bg-gradient-to-br from-pink-300 to-blue-400/70 shadow-2xl rounded-2xl p-5">
            <div className="grid grid-cols-[1fr_5fr]">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                   <DateCalendar  />
            </LocalizationProvider>
            <div className=''>
                    <TabContext value={value}>
                        <Box >
                            <TabList onChange={handleChange}>
                                <Tab label="Todo" value="1"/>
                                <Tab label="In Progress" value="2"/>
                                <Tab label="Completed" value="3"/>
                            </TabList>
                        </Box>
                        <TabPanel value="1" className='flex justify-start'>
                            <button className='border border-cyan-950 px-2 py-1 rounded-md'>+</button>
                        </TabPanel>
                        <TabPanel value="2">Item two</TabPanel>
                        <TabPanel value="3">Item three</TabPanel>

                    </TabContext>
            </div>
            </div>
        </div>
        </div>
    );
}
export default Todo;