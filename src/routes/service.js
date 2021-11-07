import { useParams } from "react-router-dom";
import { getService } from "../servicesList";

export default function Service() {
    let params = useParams();
    let service = getService(parseInt(params.serviceId, 10));
    return (
        <main 
            style={{ padding: "1rem" }}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p>{service.rate}</p>
        </main>
        
        )
}