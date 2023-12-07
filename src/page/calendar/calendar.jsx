import { Box,List ,ListItem,ListItemText, Typography,useTheme } from "@mui/material";
import Titre from "../../component/titre/titre";
import { tokens  } from "../../theme";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import TimeGridPLugin from "@fullcalendar/timegrid"
import listPlugin from "@fullcalendar/list"
// import { InteractionPlugin } from "@fullcalendar/core/internal";
import { formatDate } from "@fullcalendar/core";
import  InteractionPlugin from "@fullcalendar/interaction"

export default function CalendarPage(){
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [evenement , setEvenement] = useState([])
    const handleDateClick = (selected)=>{
        const title = prompt("Please enter a new event")
        const calendarApi = selected.view.calendar
        calendarApi.unselect()
        if (title){
            calendarApi.addEvent({
                id : `${selected.datestr}-${title}`,
                title,
                start : selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }


    const handleEventClick = (selected )=>{
        if (window.confirm(`are you sure to delele this event '${selected.event.title}'`)){
            return selected.event.remove
        }
        // return 0;
    }
    return (
        <Box margin="20px">
            <Titre title="Calendar" subtitle="search in the calendar" /> 
            <Box display="flex" justifyContent="Space-between">
                <Box
                    flex="1 1 20%"
                    sx={{
                        backgroundColor :colors.primary[400],
                        padding: "15px",
                        borderRadius :"4px",
                        maxHeight:"75vh",
                        overflowY: "auto"
                    }}
                >
                    <Typography variant="h5" >
                        events
                    </Typography>
                    <List 
                    >
                        {evenement.map((event)=>(
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius :"2px"
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary = {
                                        <Typography>
                                            {formatDate(event.start, {
                                                year : "numeric",
                                                month : "short" ,
                                                day: "numeric"
                                            })}
                                        </Typography>
                                    }
                                >

                                </ListItemText>
                            </ListItem>
                        ))
                        }
                    </List>
                </Box>
                <Box flex="1 1 100%" ml="15px" width="100%">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            TimeGridPLugin,
                            InteractionPlugin,
                            listPlugin,

                        ]}
                        headerToolbar= {{
                            left: 'prev,next, today',
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay, listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(event)=>setEvenement(event)}
                        initialEvents={[
                            {
                                id: 1,
                                title : "All Days" ,
                                date: "2022-09-14"
                            },
                            {
                                id: 1235,
                                title : "time event" ,
                                date: "2023-11-14"
                            },
                          
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    )
}  