import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import RadialLine from './Graficas/RadialLine';
import Tabla from './Graficas/Tabla';

function Seccion1Reporte1() {
    return (
        <>
            <Titulo texto="REPORTE 1 - Análisis de calidad de datos documento individual" />
            <Container fluid={true}>
                <Row>
                    <Col>
                        <h4><span className="lnr lnr-chevron-right"></span> Estudio de calidad de imágenes (vista de la red neuronal)</h4>
                        <hr />
                    </Col>
                    <Col>
                        <RadialLine />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <Tabla />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Seccion1Reporte1;