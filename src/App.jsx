import './App.css'
import GalleryContextProvider from './contexts/GaleryContext'
import Home from './views/Home'

function App() {

  return (
    <>
     <GalleryContextProvider>
      <Home />
     </GalleryContextProvider>
    </>
  )
}

export default App
