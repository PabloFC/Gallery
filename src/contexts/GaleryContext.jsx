import { createContext, useContext, useState } from "react";

import perro from "../assets/img/perro.jfif";
import perro1 from "../assets/img/perro1.jfif";
import conejo from "../assets/img/conejo.jfif";
import conejo1 from "../assets/img/conejo1.jfif";
import gato from "../assets/img/gato.jfif";
import gato1 from "../assets/img/gato1.jfif";



export const GalleryContext = createContext({
	gallery: [],
	setGallery: () => {},
});


export default function GalleryContextProvider({ children }) {
	const [gallery, setGallery] = useState([
    { id: 1, category: "perros", img: perro },
    { id: 2, category: "perros", img: perro1 },
    { id: 3, category: "gatos", img: gato },
    { id: 4, category: "gatos", img: gato1 },
    { id: 5, category: "conejos", img: conejo },
    { id: 6, category: "conejos", img: conejo1 },
]);
	
	return (
		<GalleryContext.Provider
			value={{ gallery, setGallery }}
		>
			{children}
		</GalleryContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useGaleryContext() {
	return useContext(GalleryContext);
}