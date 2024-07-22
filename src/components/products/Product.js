import { Card, CardBody, CardTitle, CardSubtitle, Col } from "reactstrap";
import "./product.css"
function Product(props) {
    const {pro, selectedCategory} = props
    return (
            <Col key={pro.id} lg={3} md={4} sm={6} xs={6} className="product-col mt-3">
                <Card className={selectedCategory === pro.category?"product-card bounce":"product-card"}>
                    <img
                        alt={pro.title}
                        src={pro.img}
                    />
                    <CardBody className="card-body">
                        <p><i class="fa-solid fa-location-crosshairs"></i>{pro.category}</p>
                        <CardTitle tag="h5">
                            {pro.title}
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            From <span>${pro.price.toFixed(2)}</span>
                        </CardSubtitle>
                        <div className="star-icons">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </CardBody>
                </Card>
            </Col>
    )
}

export default Product;