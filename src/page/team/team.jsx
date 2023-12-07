import { Box , useTheme, Typography} from "@mui/material";
import Titre from "../../component/titre/titre";
import { DataGrid ,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { dataTeam } from "../../data/dataTeam";
import { AdminPanelSettingsOutlined , LockOpenOutlined , SecurityOutlined , UndoOutlined} from "@mui/icons-material";

export default function TeamPage(){
    const theme= useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field: "id" , headerName:"ID"},
        {field: "nom" , headerName:"First Name" , flex :1 , classNameColumn: "column-name"},
        {field: "prenom" , headerName:"Name" , flex :1 , classNameColumn: "column-name"},
        {field: "telephone" , headerName:"Phone Number" , flex :1 },
        {field: "email" , headerName:"Email" , flex :1 },
        {field: "sexe" , headerName:"Sexe" , type: "number" ,headerAlign: "left", align: "left"},
        {
            field: "niveau" , 
            headerName:"Acces Level" , 
            flex :1 ,
            renderCell: ({row})=>{
                const acces = row.niveau
                return <Box
                    m="0 auto"
                    p="2px"
                    display="flex"
                    justifyContent="center"
                    sx={{
                        backgroundColor: acces === "Mairie"? colors.greenAccent[600]:colors.greenAccent[700]
                    }}
                    borderRadius="4px"
                >
                    {acces === "Mairie" && <AdminPanelSettingsOutlined/>}
                    {acces === "Adjoint" && <AdminPanelSettingsOutlined/>}
                    {acces === "Manager" && <SecurityOutlined/>}
                    {acces === "Secretaire" && <UndoOutlined/>}
                    {acces === "User" && <LockOpenOutlined/>}
                    <Typography
                        color={colors.grey[700]}
                        sx={{

                        }}
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
                <Titre title="Team" subtitle="your coequipier"/> 
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
                    rows={dataTeam}
                    columns={columns}
                    components={{
                        Toolbar: GridToolbar 
                        
                    }}
                />
            </Box>
        </Box>
    )
}  