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

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
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
        <Card variant="elevation">
            <CardHeader title="Contact Form" />
                
            <CardContent>
                <Box 
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}>
                    <FormGroup row >
                        <FormLabel htmlFor="name">Name: </FormLabel>
                        <Input autoFocus variant="filled" type="text" id="name" required />
                    </FormGroup>
                    <FormGroup row >
                        <FormLabel htmlFor="email">Email: </FormLabel>
                        <Input variant="filled" type="email" id="email" required />
                    </FormGroup>
                    <FormGroup row >
                        <FormLabel htmlFor="message">Message: </FormLabel>
                        <TextField 
                            multiline 
                            variant="filled"
                            type="text"
                            defaultValue="How may we assist?"
                            rows={6} id="message" required />
                    </FormGroup>
                    <Button 
                        startIcon={<SendRoundedIcon />}
                        variant="contained" type="submit" style={{backgroundColor: "lightgreen"}}>{status}</Button>
                </Box>
            </CardContent>
    </Card>
    );
};

export default ContactForm;

