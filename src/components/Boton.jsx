import React, { Fragment } from "react";
import { useState } from "react";

const Boton = () => {
    const [click,sumar] = useState(0);

    return (
        <Fragment>
            <div class="position-absolute top-50 start-50 translate-middle">
                <h1>Sumador de click's</h1>
                <button type="button" class="btn btn-light" onClick={() => sumar(click+1)}>¡CLICK AQUÍ!</button>
                <h4>Cantidad de veces que el boton fue clickeado: <strong>{click}</strong></h4>
            </div>
        </Fragment>

    );
}

export default Boton;