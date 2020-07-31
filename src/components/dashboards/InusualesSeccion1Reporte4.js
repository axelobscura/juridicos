import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Titulo from './Titulo/Titulo';
import Form from 'react-bootstrap/Form';
import Dona from './Graficas/Dona';
import Multilineas from './Graficas/Multilineas';
import StackedBar from './Graficas/StackedBar';
import Tabla from './Graficas/Tabla';
import Barras from './Graficas/Barras';

function InusualesSeccion1Reporte4() {
    return (
        <>
            <Titulo texto="Reporte 4- Validación de Registros con consecutivo de cuentas/ personas relacionadas" />
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
                </Row>
            </Container>
        </>
    )
}

export default InusualesSeccion1Reporte4;