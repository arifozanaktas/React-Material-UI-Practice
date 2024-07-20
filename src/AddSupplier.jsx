import { Button, Grid, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

function AddSupplier() {
    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")
    const [contactTitle, setcontactTitle] = useState("")


    const Add = () => {
        axios.post("https://northwind.vercel.app/api/suppliers", {
            companyName,
            contactName,
            contactTitle
        }).then(res => {
            alert("Kayıt başarıyla tamamlandı.")
        })
    }



    return <>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
                <TextField id="outlined-basic" label="Company Name" variant="outlined" fullWidth onChange={(e) => setcompanyName(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <TextField id="outlined-basic" label="Contact Name" variant="outlined" fullWidth onChange={(e) => setcontactName(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <TextField id="outlined-basic" label="Contact Title" variant="outlined" fullWidth onChange={(e) => setcontactTitle(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Button size="small" variant="contained" onClick={Add}>Add</Button>
            </Grid>
        </Grid>

    </>

    return <>
        <Stack direction={"column"} spacing={2}>
            <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="Company Name" variant="outlined" fullWidth onChange={(e) => setcompanyName(e.target.value)} />
                <TextField id="outlined-basic" label="Contact Name" variant="outlined" fullWidth onChange={(e) => setcontactName(e.target.value)} />
                <TextField id="outlined-basic" label="Contact Title" variant="outlined" fullWidth onChange={(e) => setcontactTitle(e.target.value)} />
            </Stack>
            <Stack>
                <Button size="small" variant="contained" onClick={Add}>Add</Button>
            </Stack>
        </Stack></>
}

export default AddSupplier