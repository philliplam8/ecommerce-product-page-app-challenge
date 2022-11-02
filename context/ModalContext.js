import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <ModalContext.Provider value={[isOpen, setOpen]}>
            {props.children}
        </ModalContext.Provider>
    )
}
