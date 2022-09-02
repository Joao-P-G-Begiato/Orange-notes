import { useState } from "react";
import { Context } from "./Context";

export const Provider = ({children}) => {
    const [activeUser, setActiveUser] = useState({})

    return(
        <Context.Provider value={{activeUser, setActiveUser}}>
            {children}
        </Context.Provider>
    )
}