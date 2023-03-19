import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import { NavbarComponent } from "../components/organisms";

const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const handleBackToProductPage = () => navigate("/create-product");

  useEffect(() => {
    const storedProduct =
      JSON.parse(localStorage.getItem("productCollection")) || [];

    const filteredProduct = storedProduct.filter(
      (product) => product.productUUID === params.id
    );

    setProduct(filteredProduct);
  }, []);

  console.log(product);

  return (
    <>
      <NavbarComponent />
      <Container>
        <div className="mt-5 pt-5">
          {product.map((value, idx) => {
            return (
              <Card key={idx}>
                <Card.Header>
                  <div className="d-flex justify-content-between align-items-center">
                    Detail Product
                    <Button onClick={handleBackToProductPage}>
                      Back To Product
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <h3>Product Name : {value.productName}</h3>
                  </Card.Title>
                  <Card.Text>
                    Product description : {value.productDescription}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Product Category : {value.productCategory}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Product Freshness : {value.productFreshness}
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>ID : {value.productUUID}</Card.Body>
                <Card.Footer>
                  <Card.Text>Product Price : {value.productPrice}</Card.Text>
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
