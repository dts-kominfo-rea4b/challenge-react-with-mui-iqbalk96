// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function SpacingBar() {
    return (
        <Box
            sx={{
                height: 20,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? 'rgb(255 255 255 / 10%)'
                        : 'rgb(255 255 255 / 10%)',
            }}
        />
    );
}

const ContactForm = () => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    return (
        <React.Fragment>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <TextField fullWidth label="Name" variant="filled" required />
                    <SpacingBar />
                    <TextField fullWidth label="Phone" variant="filled" required />
                    <SpacingBar />
                    <TextField fullWidth label="Email" variant="filled" required />
                    <SpacingBar />
                    <TextField fullWidth label="Photo Url" variant="filled" required />
                </CardContent>
                <CardActions>
                    <Button size="small">Add New</Button>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}

export default ContactForm;