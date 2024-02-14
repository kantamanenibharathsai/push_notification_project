import React, { useState } from "react";
import addNotification, { Notifications } from "react-push-notification";
import notificationStyles from "./PushNotifications.Styles"
import { Box, Button, TextField, Typography } from "@mui/material";

interface IState {
    name: string,
    email: string,
    password: string
}


const PushNotification = () => {
    const [name, setName] = useState<IState["name"]>("");
    const [email, setEmail] = useState<IState["email"]>("");
    const [password, setPassword] = useState<IState["password"]>("");

    const warningNotification = () => {
        addNotification({
            title: "Warning",
            subtitle: "Please fill it",
            message: "You have to enter name",
            theme: "red",
            closeButton: "X",
        });
    }

    const successNotification = () => {
        addNotification({
            title: "Success",
            subtitle: "You have successfully submitted",
            message: "Welcome to GeeksforGeeks",
            theme: "light",
            closeButton: "X",
            backgroundTop: "green",
            backgroundBottom: "yellowgreen",
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(name, email, password)
        if (name === "" || email === "" || password === "") warningNotification();
        else successNotification();
    }

    return (
        <Box sx={notificationStyles.mainContainer}>
            <Notifications />
            <Box sx={notificationStyles.childContainer}>
                <Typography component="p" sx={notificationStyles.notificationText}>Notifications</Typography>
                <Box sx={notificationStyles.formBoxContainer}>
                    <Box sx={notificationStyles.form} onSubmit={handleSubmit} component="form">
                        <TextField
                            label="Enter Name"
                            sx={notificationStyles.textField}
                            value={name}
                            onChange = {(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Enter Email"
                            sx={notificationStyles.textField}
                            type="email"
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Enter Password"
                            type="password"
                            sx={notificationStyles.textField}
                            value={password}
                            onChange = {(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit">Notify</Button>   

                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default PushNotification;