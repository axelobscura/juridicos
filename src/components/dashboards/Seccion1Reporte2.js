import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Dona from './Graficas/Dona';
import Linear from './Graficas/Linear';
import Barras from './Graficas/Barras';
import RadialLine from './Graficas/RadialLine';
import Tabla from './Graficas/Tabla';

function Seccion1Reporte2() {
    return (
        <>
            <Titulo texto="REPORTE 2 - Análisis de calidad de datos documentos en batch" />
            <Container fluid={true}>
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
                    <Col>
                        <RadialLine />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                        <Barras />
                    </Col>
                    <Col>
                        <hr />
                        <Tabla />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Seccion1Reporte2;