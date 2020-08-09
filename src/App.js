import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MenuLateral from './components/MenuLateral';
import Seccion1Reporte1 from './components/dashboards/Seccion1Reporte1';
import Seccion1Reporte2 from './components/dashboards/Seccion1Reporte2';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container fluid={true} className="p-0 m-0">
          <Row className="p-0 m-0">
            <Col xs={1} md={1} className="menulateral p-0 m-0">
              <MenuLateral />
            </Col>
            <Col xs={11} md={11} className="p-4 m-0">
              <Switch>
                <Route exact path="/" component={Seccion1Reporte1} />
                <Route exact path="/seccion-uno-reporte-dos" component={Seccion1Reporte2} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
