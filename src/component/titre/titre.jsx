import { Box, Typography,colors,useTheme } from "@mui/material";
import { tokens } from "../../theme";
const Titre=({title, subtitle}) =>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box>
            <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{m:"5px"}}
            >
                {title}
            </Typography>
            <Typography
                variant="h4"
                color={colors.greenAccent[400]}
                fontWeight="bold"
            >
                {subtitle}
            </Typography>
        </Box>
    )
 }
 export default Titre