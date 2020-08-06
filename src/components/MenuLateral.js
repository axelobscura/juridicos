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
                        <li><Link to="/"><b>Reporte 1</b><br />Análisis de calidad de datos documento individual</Link></li>
                        <li><Link to="/seccion-uno-reporte-dos"><b>Reporte 2</b><br />Análisis de calidad de datos documentos en batch</Link></li>
                    </ul>
                </li>

            </ul>
        </>
    );
}

export default MenuLateral;
