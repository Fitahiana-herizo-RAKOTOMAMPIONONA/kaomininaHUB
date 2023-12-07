import { Box } from "@mui/material";
import Titre from "../../component/titre/titre";
import "@mui/material/CssBaseline"
export default function Line(){

    return (
        <Box margin="20px">
            <Box display="flex" justifyContent="Space-between">
                <Titre title="Line chart" subtitle="stat with lineChart"/> 

            </Box>
        </Box>
    )
}  