import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { getServices } from '../servicesList';


export default function Services () {
   let services = getServices();
        return(
            <div style={{ display: "flex" }}>
                <nav 
                    style={{
                        borderRight: 'solid 1px',
                        padding: "1rem"
                    }}>
                    {services.map(service => (
                        <Link 
                            style={{ display: "block", margin: "1rem" }}
                            to={`/services/${service.number}`}
                            key={service.number}
                            >
                            {service.name}<br />
                            
                            </Link>
                    ))}
                </nav>
                <Outlet />
            </div>
            
        );
};