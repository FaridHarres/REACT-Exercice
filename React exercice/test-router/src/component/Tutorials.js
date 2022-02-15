import React from "react";

const Tutorial = (props) => {
    //via ce props on a eu acces a 3 objet uniquement si cest route
    //au bout de 5 seconde si la page ne se charge pas il sera redirigé
    setTimeout(() => {
        props.history.push('/')
    }, 5000)

    return (

        <div classNameName="container mt-3 ">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>OUPSSSSSS</strong> This page is under construction you will be redirected to the docs page in 5 seconds
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <h1>Tutoriel : intro à React</h1>
        </div>
    )
}

export default Tutorial;