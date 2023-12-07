import { Box , useTheme, Typography} from "@mui/material";
import Titre from "../../component/titre/titre";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { peuple } from "../../data/peuple";
import { LockOpenOutlined } from "@mui/icons-material";

export default function Peuple(){
    const theme= useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field: "id" , headerName:"ID"},
        {field: "nom" , headerName:"First Name" , flex :1 , classNameColumn: "column-name"},
        {field: "prenom" , headerName:"Name" , flex :1 , classNameColumn: "column-name"},
        {field: "telephone" , headerName:"Phone Number" , flex :1 },
        {field: "cin" , headerName:"CIN" , flex :1 },
        {field: "email" , headerName:"Email" , flex :1 },
        {field: "adresse" , headerName:"Adresse"  ,headerAlign: "left", align: "left"},
        {field: "sexe" , headerName:"Sexe" , type: "number" ,headerAlign: "left", align: "left"},
        {
            field: "profession" , 
            headerName:"Profession" , 
            flex :1 ,
            renderCell: ({row})=>{
                const acces = row.Profession
                return <Box
                    // width="100%"
                    m="0 auto"
                    p="2px"
                    display="flex"
                    justifyContent="space-between"
                    sx={{
                        backgroundColor: acces === "Mairie"? colors.greenAccent[600]:colors.greenAccent[700]
                    }}
                    borderRadius="4px"
                >
                   <LockOpenOutlined/>  
                    <Typography
                        color={colors.grey[100]}
                    >
                        {acces}
                    </Typography>
                </Box>
            }
        },
    ]
    return (
        <Box margin="20px"
            position="relative"
        >
            <Box display="flex" justifyContent="Space-between">
                <Titre title="People" subtitle="The people in this commune"/> 
            </Box>
            <Box
                margin="40px 0 0 0"
                height="75vh"
    
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        border: "none"
                    },
                    "& .column-name": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[800],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        // color: colors.greenAccent[700]

                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: colors.blueAccent[700],
                        borderTop: "none"
                    },

                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`
                    },
                    
                    
                
                }}  
            >
                <DataGrid
                    rows={peuple}
                    columns={columns}
                    components={{
                        Toolbar: GridToolbar 
                    }}
                />
    
            </Box>
        </Box>
    )
}  