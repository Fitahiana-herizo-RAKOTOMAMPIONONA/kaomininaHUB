import { Box } from "@mui/material";
import Titre from "../../component/titre/titre";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonBaseActions from "@mui/material/CardActions";

export default function Geography(){
    const [fenetre, setFenetre]= useState('nonActive')
    return (
        <Box margin="20px">
            <Box display="flex" justifyContent="Space-between">
                <Titre title="Geography" subtitle="the geography"/> 
                <Box display="flex" justifyContent="center" alignItems="center" color="#f1f1f1">
                    <Button 
                        sx={{
                            backgroundColor :"red",
                            color:"#f1f1f1",
                            zIndex: 5
                        }}
                        onClick={()=>{setFenetre("active")}}
                        >
                        depense
                    </Button>
                    <Button 
                        sx={{
                            backgroundColor: "green",
                            color:"#f1f1f1",
                            zIndex: 5
                        }}
                        onClick={()=>{setFenetre("nonActive")}}
                    >
                        Benefice
                    </Button>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                   {(fenetre==="nonActive") && (
                    <Box> depense </Box>
                   )}
                   {(fenetre==="active") && (
                    <Box position="absolute" top="0" left="0" width="100%" height="100%" backgroundColor="black" color="white"> 
                        active le izy
                    </Box>
                   )}
            </Box>
        </Box>
    )
}  