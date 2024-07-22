import { Button, Card, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from "reactstrap";
function Product(props) {
    const {pro} = props
    return (
            <Col key={pro.id} lg={3} md={4} sm={6} xs={12} >
                <Card style={{ width: '18rem' }}>
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
                            From ${pro.price.toFixed(2)}
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
    )
}

export default Product;