import { Button, Card, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from "reactstrap";
import "./product.css"
function Product(props) {
    const {pro} = props
    return (
            <Col key={pro.id} lg={3} md={4} sm={6} xs={12} data-aos="fade-up">
                <Card style={{ width: '100%' }}>
                    <img
                        alt={pro.title}
                        src={pro.img}
                    />
                    <CardBody>
                        <p>{pro.category}</p>
                        <CardTitle tag="h5">
                            {pro.title}
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            From <span>${pro.price.toFixed(2)}</span>
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
    )
}

export default Product;