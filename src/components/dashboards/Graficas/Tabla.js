import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function Tabla() {
    return (
        <>
            <Container>
                <Row>
                    <Col style={{ maxHeight: '250px', overflow: 'auto' }}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nombre del Archivo</th>
                                    <th>Dimensiones pixeles por pulgada</th>
                                    <th>Evaluación de acuerdo a la NOM Paso o No Pasa según NOM</th>
                                    <th>Calidad según modelo</th>
                                    <th>Número de páginas analizadas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Grupo.pdf</b></td>
                                    <td><b>200x200</b></td>
                                    <td><b>Pasa</b></td>
                                    <td><b>Buena</b></td>
                                    <td><b>62</b></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tabla;