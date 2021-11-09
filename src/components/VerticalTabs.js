import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { getServices } from '../shared/servicesList';
import { Link, Outlet } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  let services = getServices();
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="General Admin" {...a11yProps(0)} />
        <Tab label="Social Media & Marketing" {...a11yProps(1)} />
        <Tab label="Bookkeeping & AR/AP" {...a11yProps(2)} />
        <Tab label="Digital Media Editing" {...a11yProps(3)} />
        <Tab label="Web-based Application/Site Building" {...a11yProps(4)} />
       
      </Tabs>
      {services.map(service => (
                        <TabPanel 
                            value={value} 
                            index={service.number}
                            style={{ display: "block", margin: "1rem" }}
                            to={`/services/${service.number}`}
                            key={service.number}
                            >
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {service.nameLong}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                    
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {service.rate}
                                    </Typography>
                                    <Typography variant="body2">
                                    {service.description}
                                    <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Link 
                                    style={{ display: "block", margin: "1rem" }}
                                    to={'/contact'}
                                    key={service.number}
                                    ><Button size="small">Request a Quote</Button>
                                    </Link>
                                    <Outlet />
                                </CardActions>
                                </Card>
                        
                            </TabPanel>
                    ))}
      
    </Box>
  );
}
