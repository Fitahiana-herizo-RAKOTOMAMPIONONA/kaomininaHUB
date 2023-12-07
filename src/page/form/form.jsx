import { Box,Button, TextField, useTheme } from "@mui/material";
import Titre from "../../component/titre/titre";
import {Formik} from "formik" 
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../theme";


const initialValues ={
    firstname: "",
    lastname: "",
    email : "",
    contact: "",
    adress: "",
    cin: "",

}

const phoneExemple= /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/ 

const userSchema = yup.object().shape({
    firstname : yup.string().required("required"),
    lastname : yup
        .string()
        .required("required"),
    email : yup
        .string()
        .email("invalid Email")
        .required("required"),
    contact : yup
        .string()
        .matches(phoneExemple, "phone is not valid")
        .required("required"),
    adress : yup.string().required("required"),
    cin : yup.string().required("required"),
})

export default function FormPage(){
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const isNOnMobile =useMediaQuery("(min-width : 600px)")
    const envoyerSubmit = (value) =>{
        
    }

    return (
        <Box margin="20px">
            <Box display="flex" justifyContent="Space-between">
                <Titre title="Profile" subtitle="Create new user profile"/> 
                <Formik
                    onSubmit={envoyerSubmit}
                    initialValues={initialValues}
                    validationSchema={userSchema}
                >
                    {({values, errors, touched, handleblur, handlechange, handlesubmit}) =>{
                        <form onSubmit={handlesubmit}>
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0,1fr))"
                                sx={{
                                    "& > div" : {
                                        gridColumn: isNOnMobile?undefined:"span 4"
                                    }
                                }}
                            >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="First name"
                                    onBlur={handleblur}
                                    onChange={handlechange}
                                    value={values.firstname}
                                    name="firstname"
                                    error={!!touched.firstname && !!errors.firstname}
                                    helperText={touched.firstname && errors.firstname}
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Last name"
                                    onBlur={handleblur}
                                    onChange={handlechange}
                                    value={values.lastname}
                                    name="lastname"
                                    error={!!touched.lastname && !!errors.lastname}
                                    helperText={touched.lastname && errors.lastname}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Email"
                                    onBlur={handleblur}
                                    onChange={handlechange}
                                    value={values.email}
                                    name="email"
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Phone Number"
                                    onBlur={handleblur}
                                    onChange={handlechange}
                                    value={values.contact}
                                    name="contact"
                                    error={!!touched.contact && !!errors.contact}
                                    helperText={touched.contact && errors.contact}
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Adress"
                                    onBlur={handleblur}
                                    onChange={handlechange}
                                    value={values.adress}
                                    name="adress"
                                    error={!!touched.adress && !!errors.adress}
                                    helperText={touched.adress && errors.adress}
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="CIN"
                                    onBlur={handleblur}
                                    onChange={handlechange}
                                    value={values.cin}
                                    name="cin"
                                    error={!!touched.cin && !!errors.cin}
                                    helperText={touched.cin && errors.cin}
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                            </Box>
                            <Box>
                                <Button>
                                    create
                                </Button>
                            </Box>
                        </form>
                    }}
                </Formik>
            </Box>
        </Box>
    )
}  