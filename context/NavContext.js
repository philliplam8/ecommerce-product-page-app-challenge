import { createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = (props) => {
    const [cart, setCart] = useState({});
    const [menu, showMenu] = useState(false);

    return (
        <NavContext.Provider value={{
            cartValue: [cart, setCart],
            menuValue: [menu, showMenu]
        }}>
            {props.children}
        </NavContext.Provider>
    )
}
