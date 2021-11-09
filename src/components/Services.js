import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { getServices } from '../shared/servicesList';
import Button from "@mui/material/Button";
import VerticalTabs from './VerticalTabs';

export default function Services () {
   let services = getServices();
        return(
            <div style={{ display: "flex" }}>
            <VerticalTabs />
                
            
            </div>
            
        );
};