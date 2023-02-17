import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Signin from "./components/Signin"
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import logo from "./logo.png"

function App() {
  return (
    <div>
     <a className="max-w-full" href="/"><img src={logo}></img> </a>
     <AuthContextProvider>
     <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Account' element={<Account />} />
     </Routes>
     </AuthContextProvider>
    </div>
  );
}

export default App;
