import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card'

function App() {
  const imgunicorns = [
    {
      name: "Unicornio 1",
      description: "Unicornio 1er plano",
      picture: 'https://images.pexels.com/photos/4887163/pexels-photo-4887163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: "Unicornio 2",
      description: "Unicornio en la cama",
      picture: 'https://images.pexels.com/photos/4887157/pexels-photo-4887157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

    },
    {
      name: "Unicornio 3",
      description: "Unicornio en la almohada",
      picture: 'https://images.pexels.com/photos/4887081/pexels-photo-4887081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },

  ]
  return (
    <div className="App container">
      <Header
        title="Galería de Imágenes con React"
      />
      <div className='row square justify-content-center'>
        {imgunicorns.map(img => {
          return <Card
            imgname={img.name}
            imgdescr={img.description}
            imgpicture={img.picture}
          />
        })
        }
      </div>
      <Footer
        description="Imágenes de Unicornios    "
      />
    </div>

  );
}
export default App;
