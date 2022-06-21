export default function Pelicula(props) {
    return(
        <div className="movie-item-style-2">
        <img src={props.img} alt=""/>
        <div className="mv-item-infor">
            <h6>
                <a href="moviesingle.html">
                    {props.Titulo}
                </a>
            </h6>
            <p className="rate">
                <i className="ion-android-star"></i>
                <span>{props.Calificacion}</span> /10
            </p>
            <p className="describe">{props.children}</p>
            <p className="run-time"> Duración: {props.Duracion}    .     <span>MMPA: PG-13 </span>    .     <span>Fecha: {props.Fecha}</span></p>
            <p>Director: <a href="#">{props.Director}</a></p>
            <p>Stars: <a href="#"> {props.Actores}</a></p>
        </div>
    </div>
    )
    
}