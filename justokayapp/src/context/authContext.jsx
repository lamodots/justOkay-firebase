import { createContext, useState } from "react";

export const AuthContext = createContext()

const GlobalAuthContextProvider = ({children}) => {
    const [isLoggedOut, setIsLoggedOut] = useState(true)

   return (

    <AuthContext.Provider value={{isLoggedOut, setIsLoggedOut}}>
        {children}
    </AuthContext.Provider>
   )
}

export default GlobalAuthContextProvider;