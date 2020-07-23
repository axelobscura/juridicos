import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Dona from './Graficas/Dona';
import Linear from './Graficas/Linear';
import Tabla from './Graficas/Tabla';

function Seccion1Reporte1() {
    return (
        <>
            <Titulo texto="Reporte 1: Validación de Estructura del Reporte" />
            <Container>
                <Row>
                    <Col>
                        <Form.Group style={{ width: '100%' }}>
                            <Form.Control as="select" size="lg" custom>
                                <option>Seleccionar periodo</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Número de Errores de Estructura por etiqueta en reporte</h4>
                        <hr />
                        <Dona />
                    </Col>
                    <Col>
                        <h4><span class="lnr lnr-chevron-right"></span> Tendencia de errores de estructura por etiqueta</h4>
                        <hr />
                        <Linear />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <h4><span class="lnr lnr-chevron-right"></span> Errores de estructura por etiqueta en reporte</h4>
                        <hr />
                        <Tabla />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Seccion1Reporte1;