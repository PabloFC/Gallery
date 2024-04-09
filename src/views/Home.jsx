import { useGaleryContext } from "../contexts/GaleryContext";


const Home = () => {
    const { gallery, setGallery } = useGaleryContext();
    

    const changeCategory = (category) => {
		const filterGalery = gallery.filter(photo => photo.category === category);
        setGallery(filterGalery);
	};

  return (
    <div>
      <h2>Galería </h2>
      <div>
        <button onClick={() => changeCategory("perros")}>Perros</button>
        <button onClick={() => changeCategory("gatos")}>Gatos</button>
        <button onClick={() => changeCategory("conejos")}>Conejos</button>
      </div>
      <div>
        {gallery.map((photo, index) => (
          <img key={index} src={photo.img} alt={`Imagen ${index}`} />
        ))}
      </div>
    </div>
  )
}

export default Home
