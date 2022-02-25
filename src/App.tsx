import React from 'react';
import Home from "./components/Home";
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"
import ContextProvider from "./components/App-context-provider";
import PersonProfile from "./components/Person-profile";
import Footer from "./components/Footer";
import Title from "./elements/text/Title";
import { Box } from "@mui/material";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Box sx={{paddingY: '3rem'}}>
          <Title align="center" title="Welcome to SWAPI..." />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/people/:personName' element={<PersonProfile  />} />
          </Routes>
          <Footer />
         </Box>
      </ContextProvider>
    </Router>
  );
}

export default App;
