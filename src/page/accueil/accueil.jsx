import { Box } from "@mui/material";
import Titre from "../../component/titre/titre";

export default function Accueil(){

    return (
        <Box margin="20px">
            <Box display="flex" justifyContent="Space-between">
                <Titre title="Dashboard" subtitle="welcome to your dashboard"/> 

            </Box>
        </Box>
    )
}  