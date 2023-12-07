import { useState } from "react"
import {Sidebar, Menu , MenuItem} from "react-pro-sidebar"
import { Box, IconButton,Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import {tokens} from "../../theme"
import HomeOutlinedIcon  from "@mui/icons-material/HomeOutlined"
import PeopleOutlinedIcon  from "@mui/icons-material/PeopleOutlined"
import PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined"
import CalendarTodayOutlinedIcon  from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutlinedIcon  from "@mui/icons-material/HelpOutlined"
import { BarChartOutlined } from "@mui/icons-material"
import { PieChartOutlineOutlined } from "@mui/icons-material"
import { TimelineOutlined } from "@mui/icons-material"
import MenuOutlinedIcon  from "@mui/icons-material/MenuOutlined"
import MapOutlinedIcon  from "@mui/icons-material/MapOutlined"

const Item  = ({title , icon , to, selected , setSelected}) =>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return   <Link to={to}> 
        <MenuItem
            active={selected === title}
            style={{color: colors.grey[100]}}
            onClick={()=>{setSelected(title)}}
            icon={icon}
        >
            <Typography>
                {title}
            </Typography>
        </MenuItem>
    </Link>
}

const HeaderSideBar=({photoProfil,nom, poste})=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (<>
            <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
                <img 
                    src={photoProfil}
                    alt="profile-user" 
                    width="100px"
                    height="100px"
                    style={{cursor: "pointer" , borderRadius: "50%"}}
                />
            </Box>
            <Box textAlign="center">
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{m: "10px 0 0 0"}}
                >
                    {nom}
                </Typography>
                <Typography variant="h5" color={colors.grey[100]} >
                    {poste}
                </Typography>
            </Box>
        </Box>
    </>
    )
}

export default function NavBarGauche(){
    const [isCollapsed, setIsCollapsed] =useState(false)
    const [selected, setSelected] =useState('Dashboard')
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper" : {
                    background : `transparent !important`   
                },
                "& .pro-inner-item" : {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover" : {   
                    color: "#868dfb !important"
                }
            }}
        >
            <Sidebar 
                collapsed={isCollapsed}
                style={{
                    width: "100px",
                    height : "100vh"
                    
                }}
                backgroundColor={colors.primary[700]}
            >
                <Menu iconShape="square">
                    <MenuItem
                        onClick={()=> setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed?<MenuOutlinedIcon/> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {
                            !isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    ml="15px"
                                >
                                    <Typography variant="h3" color={colors.grey[100]}>
                                        COMMUNE
                                    </Typography>
                                    <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon/>
                                    </IconButton>
                                </Box>
                            )
                        }
                    </MenuItem>

                    {
                        !isCollapsed && (
                            <HeaderSideBar photoProfil="./assets/image/herizo.jpg" nom="herizo" poste="mairie"/>
                        )
                    }
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title={ isCollapsed ? "": "dashboard"}
                            to="/"
                            icon={<HomeOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography 
                            variant="h6"
                            color= {colors.grey[300]}
                            sx={{
                                m: "15px 0 15px 20px"
                            }}
                        >
                            Data
                        </Typography>
                        <Item
                            title={ isCollapsed ? "": "Manage team"}
                            to="/team"
                            icon={<PeopleOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            />
                        <Item
                            title={ isCollapsed ? "": "People"}
                            to="/peuple"
                            icon={<PeopleOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            />
                        <Typography 
                            variant="h6"
                            color= {colors.grey[300]}
                            sx={{
                                m: "15px 0 15px 20px"
                            }}
                            >
                            Pages 
                        </Typography>
                        <Item
                            title={ isCollapsed ? "": "Profile form"}
                            to="/form"
                            icon={<PersonOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            />
                        <Item
                            title={ isCollapsed ? "": "Calendar"}
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            />
                        <Item
                            title={ isCollapsed ? "": "Faq page"}
                            to="/faq"
                            icon={<HelpOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                            />
                        <Typography 
                            variant="h6"
                            color= {colors.grey[100]}
                            sx={{
                                m: "15px 0 15px 20px"
                            }}
                            >
                            Chart
                        </Typography>
                        <Item
                            title={ isCollapsed ? "": "Bar chart"}
                            to="/bar"
                            icon={<BarChartOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                            />
                        <Item
                            title={ isCollapsed ? "": "Pie chart"}
                            to="/pie"
                            icon={<PieChartOutlineOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                            />
                        <Item
                            title={ isCollapsed ? "": "Line chart"}
                            to="/line"
                            icon={<TimelineOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                            />
                        <Item
                            title={ isCollapsed ? "": "Geography chart"}
                            to="/geography"
                            icon={<MapOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    )
}