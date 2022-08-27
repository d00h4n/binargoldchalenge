import { Container, Row, Col, Button } from "react-bootstrap";

function Carsewa(){
    return(
        <Container id="carsewa">
            <Row>
                <Col md={12} className="car-sewa my-auto text-center">
                <h2 className="text-sewa-h2">Sewa Mobil di (Lokasimu) Sekarang</h2>
                <p className="text-sewa-p">Sekarang </p>
                <Button type="button" class="tbl-sewa">
                    Sewa Mobil
                </Button>
                </Col>
            </Row>
        </Container>
    );
}
export default Carsewa;