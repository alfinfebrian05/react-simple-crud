import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { LinkComponent } from "../atoms";

const TableProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts =
      JSON.parse(localStorage.getItem("productCollection")) || [];
    setProducts(loadProducts);
  }, []);

  console.log("loadProducts", products);

  const handleDeleteProduct = (idx) => {
    const productUpdated = [...products];
    productUpdated.splice(idx, 1);
    console.log("updatedProducts", productUpdated);
    localStorage.setItem("productCollection", JSON.stringify(productUpdated));
    window.location.reload();
  };

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Product Image</th>
          <th>Product Freshness</th>
          <th>Product Description</th>
          <th>Product Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, idx) => {
          return (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productImage}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productDescription}</td>
              <td>{product.productPrice}</td>
              <td>
                <div className="d-flex flex-row gap-2">
                  <LinkComponent
                    linkClassName="btn btn-success"
                    linkToPage={`/product/${product.productUUID}`}
                  >
                    View
                  </LinkComponent>
                  <Button
                    className="btn btn-danger"
                    onClick={() => handleDeleteProduct(idx)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableProducts;
