import React from 'react';
import { Link } from "react-router-dom";

import './MenuLateral.css';

function MenuLateral() {
    return (
        <>
            <ul className="MenuLateral">
                <h5 className="p-3 m-0" style={{ background: '#333', color: '#fff' }}>TIF</h5>
                <li>
                    <h3>SECCIÓN I</h3>
                    <ul>
                        <li><Link to="/"><b>Reporte 1</b><br />Validación de Estructura del Reporte</Link></li>
                        <li><Link to="/seccion-uno-reporte-dos"><b>Reporte 2</b><br />Validación de Etiquetas</Link></li>
                        <li><Link to="/seccion-uno-reporte-tres"><b>Reporte 3</b><br />Errores en CURP / RFC</Link></li>
                        <li><Link to="/seccion-uno-reporte-cuatro"><b>Reporte 4</b><br />Etiquetas relacionadas y reglas especiales</Link></li>
                        <li><Link to="/seccion-uno-reporte-cinco"><b>Reporte 5</b><br />Visualizador de etiquetas y registros</Link></li>
                    </ul>
                </li>

            </ul>
        </>
    );
}

export default MenuLateral;
