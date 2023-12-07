// import NavBarGauche from "./component/navBarGauche/navBarGauche";
import {colorModeContext, useMode} from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./component/header/header";
import Accueil from "./page/accueil/accueil";
import TeamPage from "./page/team/team";
import Peuple from "./page/peuple/peuple";
import Line from "./page/line/line";
import FormPage from "./page/form/form";
import BarPage from "./page/bar/bar";
import PiePage from "./page/pie/pie";
import FaqPage from "./page/faq/faq";
import Geography from "./page/geography/geography";
import CalendarPage from "./page/calendar/calendar";
import NavBarGauche from "./component/navBarGauche/navBarGauche";
// import { Calendar } from "@fullcalendar/core";


function App() {

  const [theme, colorMode] = useMode()

  return (
    <colorModeContext.Provider value= {colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <div className="app">
              <NavBarGauche />
              <main className="content">
                <Header/>
                <Routes>
                  <Route path="/" element={<Accueil/>}/>
                  <Route path="/team" element={<TeamPage/>}/>
                  <Route path="/peuple" element={<Peuple/>}/>
                  <Route path="/form" element={<FormPage/>}/>
                  <Route path="/bar" element={<BarPage/>}/>
                  <Route path="/pie" element={<PiePage/>}/>
                  <Route path="/line" element={<Line/>}/>
                  <Route path="/faq" element={<FaqPage/>}/>
                  <Route path="/geography" element={<Geography/>}/>
                  <Route path="/calendar" element={<CalendarPage/>}/>
                </Routes>

              </main>
          </div>
        </Router>
      </ThemeProvider>
    </colorModeContext.Provider>
  )
}

export default App;
