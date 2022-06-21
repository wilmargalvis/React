import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';

export default function App(props) {

  return (
    <PageWrapper>
      
        <Pelicula Titulo="oblivion (2012)" Calificacion ="8.1"
        Director="Joss Whedon" Actores="" Fecha="1 May 2015" Duracion="2h21"
         Director="Robert Downey Jr., Chris Evans,Chris Hemsworth" img="images/uploads/mv1.jpg">
            Earth's mightiest heroes must come together and learn to fight as a team if they are to stop 
            the mischievous Loki and his alien army from enslaving humanity... 
         </Pelicula>

         <Pelicula Titulo="into the wild (2014)" Calificacion ="7.8"
        Director="Joss Whedon" Actores="Anthony Russo, Joe Russo" Fecha="1 May 2015" Duracion="2h 21 minutos"
         Director="Chris Evans, Samuel L. Jackson, Scarlett Johansson" img="images/uploads/mv2.jpg">
            As Steve Rogers struggles to embrace his role in the modern world, he teams up with a 
            fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...
         </Pelicula>

    </PageWrapper>

  );
}