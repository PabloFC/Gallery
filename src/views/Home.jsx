import { useState } from "react";
import { useGaleryContext } from "../contexts/GaleryContext";

const Home = () => {
    const { gallery, setGallery } = useGaleryContext();
    const [category, setCategory] = useState("todos");

    const filterGallery = category === "todos" ? gallery : gallery.filter(photo => photo.category === category);
    

    const changeCategory = (category) => {
        setCategory(category);
		// const filterGalery = gallery.filter(photo => photo.category === category);
        // setGallery(filterGalery);
	};

  return (
    <div>
      <h2>Galería </h2>
      <div>
        <button onClick={() => changeCategory("perros")}>Perros</button>
        <button onClick={() => changeCategory("gatos")}>Gatos</button>
        <button onClick={() => changeCategory("conejos")}>Conejos</button>
        <button onClick={() => changeCategory("todos")}>Todos</button>
        
      </div>
      <div>
        {filterGallery.map((photo, index) => (
          <img key={index} src={photo.img} alt={`Imagen ${index}`} />
        ))}
      </div>
    </div>
  )
}

export default Home
