import { useParams } from "react-router-dom";
import { getService } from "../shared/servicesList";
// import Box from '@mui/material/Box';
import { Link, Outlet } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Service() {
    let params = useParams();
    let service = getService(parseInt(params.serviceId, 10));
    return (
        <main 
            style={{ padding: "1rem" }}>
            
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
                
            </CardActions>
            </Card>
            <Outlet />
        </main>
        
        )
}