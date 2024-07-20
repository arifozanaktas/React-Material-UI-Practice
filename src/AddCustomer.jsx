import { Autocomplete, Button, Stack, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AddCustomer() {

    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")
    const [categories, setcategories] = useState([])


    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/categories")
            .then(res => setcategories(res.data))

    }, [])



    const add = () => {

    }

    let cities = [
        {
            label: "İzmir",
            id: 1
        },
        {
            label: "İstanbul",
            id: 2
        },
        {
            label: "Ankara",
            id: 3
        },
        ,
        {
            label: "Trabzon",
            id: 4
        },
        ,
        {
            label: "Diyarbakır",
            id: 5
        },
        ,
        {
            label: "Edirne",
            id: 6
        }
    ]

    return <>
        <Stack spacing={2}>
            <Stack>
                <TextField
                    name="companyName"
                    label="Company Name"
                    onChange={(e) => setcompanyName(e.target.value)}
                    sx={{ width: '50%' }}
                />
            </Stack>
            <Stack>
                <TextField
                    name="contactName"
                    label="Contact Name"
                    onChange={(e) => setcontactName(e.target.value)}
                    sx={{ width: '50%' }}
                />
            </Stack>
            <Stack>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={cities}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="City" />}
                />




                

                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={categories}
                    getOptionLabel={item => item.name}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Categories" />}
                />
            </Stack>
            <Stack>
                <Button
                    variant="contained"
                    onClick={add}
                    sx={{ width: '50%' }}>
                    Add
                </Button>
            </Stack>
        </Stack>
    </>
}

export default AddCustomer