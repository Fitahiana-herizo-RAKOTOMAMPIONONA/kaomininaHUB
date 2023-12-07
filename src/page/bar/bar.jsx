import { Box } from "@mui/material";
import Titre from "../../component/titre/titre";
import { ResponsiveBar } from "@nivo/bar";
export default function BarPage(){

    return (
        <Box margin="20px">
            <Box display="flex" justifyContent="Space-between">
                <Titre title="Barchart" subtitle="Stat with barChart"/> 
                <ResponsiveBar
                    data={["h","h"]}
                    keys={[
                        'Charbon',
                        'oignon',
                        "Riz",
                        "tomate",
                        "lamande",
                    ]}
                    indexBy="country"
                    margin={{top : 50 ,right: 130 , bottom: 50 , left: 60}}
                    padding={0.3}
                    valueScale={{type : "linear"}}
                    indexScale={{type: "band" , round: true}}
                    colors={{scheme: "nivo"}}
                    defs={[
                        {
                            id: "dots",
                            type : "patternDots",
                            background: "inherit",
                            color : "#30bcb2",
                            size :4,
                            padding: 1,
                            stagger :true
                        }
                    ]}
                >

                </ResponsiveBar>
            </Box>
        </Box>
    )
}  