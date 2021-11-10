import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormGroup from '@mui/material/FormGroup';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import 'fontsource-roboto';

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message, datetime } = e.target.elements;
        
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
            datetime: datetime,
        };
        let response = await fetch("http://localhost:5000/contactform", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    
    return (
        <Box sx={{textAlign: 'justify', bgcolor: 'background.paper', color: 'black', backgroundColor: 'white', padding: '20px', margin: '10px auto 10px auto', width: '60vw'}}
                    component="form"
                   
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}>
            <Card variant="elevation">
                <CardHeader title="Contact Form" />
                    
                <CardContent>
                
                    <FormGroup row sx={{paddingBottom: 5}}>
                        <FormLabel htmlFor="name">Name: </FormLabel>
                        <Input autoFocus variant="filled" type="text" id="name" required />
                    </FormGroup>
                    <FormGroup row sx={{paddingBottom: 5}}>
                        <FormLabel htmlFor="email">Email: </FormLabel>
                        <Input variant="filled" type="email" id="email" required />
                    </FormGroup>
                    <FormGroup row sx={{paddingBottom: 5}}>
                        <FormLabel htmlFor="message">Message: </FormLabel>
                        <TextField 
                            multiline 
                            variant="filled"
                            type="text"
                            placeholder="How may we assist?"
                            rows={6} id="message" required />
                    </FormGroup>
                    <FormGroup>
                    <FormLabel >Schedule a Meeting: </FormLabel>
                        <TextField 
                            id="datetime"
                            variant="outlined"
                            color="secondary"
                            type="datetime-local"
                        />
                    </FormGroup>
                    <Button 
                        startIcon={<SendRoundedIcon />}
                        variant="contained" type="submit" style={{backgroundColor: "lightgreen", padding: 5, marginTop: 10 }}>{status}</Button>
             
            </CardContent>
        </Card>
    </Box>
    );
};

export default ContactForm;

