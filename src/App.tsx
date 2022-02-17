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

function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/people/:name' element={<PersonProfile  />} />
        </Routes>
         
      </ContextProvider>
    </Router>
  );
}

export default App;
