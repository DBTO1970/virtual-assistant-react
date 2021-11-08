import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { getServices } from '../shared/servicesList';


export default function Services () {
   let services = getServices();
        return(
            <div style={{ display: "flex" }}>
                <nav 
                    style={{
                        borderRight: 'solid 1px',
                        padding: "1rem",
                        
                    }}><ul style={{ listStyleType: 'none' }}>
                    {services.map(service => (
                        <li><Link 
                            style={{ display: "block", margin: "1rem" }}
                            to={`/services/${service.number}`}
                            key={service.number}
                            >
                            {service.name}
                            
                            </Link></li>
                    ))}
                    </ul>
                </nav>
                <Outlet />
            </div>
            
        );
};