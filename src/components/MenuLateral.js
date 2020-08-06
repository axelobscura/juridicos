import React from 'react';
import { Link } from "react-router-dom";

import './MenuLateral.css';

function MenuLateral() {
    return (
        <>
            <ul className="MenuLateral">
                <li><Link to="/"><b>Reporte 1</b><br />Análisis de calidad de datos documento individual</Link></li>
                <li><Link to="/seccion-uno-reporte-dos"><b>Reporte 2</b><br />Análisis de calidad de datos documentos en batch</Link></li>
            </ul>
        </>
    );
}

export default MenuLateral;
