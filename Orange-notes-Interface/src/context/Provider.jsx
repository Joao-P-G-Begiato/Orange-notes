import { useState } from "react";
import { Context } from "./context";

export const Provider = ({children}) => {
    const [activeUser, setActiveUser] = useState({})

    return(
        <Context.Provider value={{activeUser, setActiveUser}}>
            {children}
        </Context.Provider>
    )
}