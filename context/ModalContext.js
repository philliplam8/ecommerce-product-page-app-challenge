import { createContext, useState } from "react";

// Images for demo product
export const productImages = [
    {
        productId: 1,
        main: "/images/image-product-1.jpg",
        thumbnail: "/images/image-product-1-thumbnail.jpg",
    },
    {
        productId: 2,
        main: "/images/image-product-2.jpg",
        thumbnail: "/images/image-product-2-thumbnail.jpg",
    },
    {
        productId: 3,
        main: "/images/image-product-3.jpg",
        thumbnail: "/images/image-product-3-thumbnail.jpg",
    },
    {
        productId: 4,
        main: "/images/image-product-4.jpg",
        thumbnail: "/images/image-product-4-thumbnail.jpg",
    },
];

export const ModalContext = createContext();

export const ModalProvider = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <ModalContext.Provider value={[isOpen, setOpen]}>
            {props.children}
        </ModalContext.Provider>
    )
}
