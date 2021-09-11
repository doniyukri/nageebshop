import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright {currentYear} &copy; NageebShop.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
