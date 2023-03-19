import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { NavbarComponent } from "../components/organisms";
import { FormComponent, TableProducts } from "../components/molecules";
import { InputComponent, SelectComponent } from "../components/atoms";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [isSwitched, setIsSwitched] = useState(false);
  const [formData, setFormData] = useState({
    productUUID: "",
    productName: "",
    productCategory: "",
    productImage: "",
    productFreshness: "",
    productDescription: "",
    productPrice: "",
  });
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const location = useLocation();
  const pageName = location.pathname;

  const article = {
    title: {
      id: "Buat Produk",
      en: "Create Product",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  const productCategories = [
    "stationary",
    "clothes",
    "electronic",
    "cosmetic",
    "kitchen",
  ];

  // function generate product uuid
  const generateUUID = () => {
    const timeStamp = new Date().getTime().toString(16);
    const randomString = Math.random().toString(16).substring(2, 8);
    const uniqueId = `${randomString}${timeStamp}`;
    return uniqueId;
  };

  // Welcome user with alert
  useEffect(() => {
    var alreadyShown =
      localStorage.setItem("alreadyShown", true) ||
      localStorage.getItem("alreadyShown");

    if (pageName && alreadyShown) {
      alert(
        `Welcome to ${location.pathname.replace(/[/-]/g, " ").trim()} page!`
      );
    }
  }, []);

  // automatically generate product uuid and put on formData when page loaded
  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, productUUID: generateUUID() }));
  }, []);

  // retrieve product data from localStorage when page loaded
  useEffect(() => {
    const StoredProducts =
      JSON.parse(localStorage.getItem("productCollection")) || [];
    setProducts(StoredProducts);
  }, []);

  // handle change content language
  const handleSwitchLanguage = (event) => {
    setIsSwitched(event.target.checked);
  };

  // handle input any type except radio change
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "productName") {
      let count = 0;

      for (let i = 0; i < value.length; i++) {
        count += 1;
      }

      if (value.length > 25) {
        setMessage('"Maaf nama produk tidak boleh lebih dari 25 Karakter"');
        setShowMessage(false);
      } else {
        setShowMessage(true);
        setMessage(`Panjang karakter nama produk yang di input ${count}`);
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleInputImageChange = (event) => {
    let { name, files } = event.target;
    // console.log(files[0].name);
    setFormData({ ...formData, [name]: files[0].name });
    console.log(formData.productImage);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (
      !formData.productName ||
      !formData.productCategory ||
      !formData.productImage ||
      !formData.productFreshness ||
      !formData.productDescription ||
      !formData.productPrice
    ) {
      alert("Please fill all fields");
    } else {
      const product =
        JSON.parse(localStorage.getItem("productCollection")) || [];

      const newProduct = { ...formData };

      products.push(...product, ...products, newProduct);

      localStorage.setItem("productCollection", JSON.stringify(products));

      setFormData({
        productUUID: "",
        productName: "",
        productCategory: "",
        productImage: "",
        productFreshness: "",
        productDescription: "",
        productPrice: "",
      });
    }
  };

  return (
    <>
      {/* {navigate(-1)} */}
      <NavbarComponent />
      <section className="mt-5 pt-4">
        <Container>
          <Form.Check
            type="switch"
            id="custom-switch"
            label={isSwitched ? "EN" : "ID"}
            onChange={handleSwitchLanguage}
            checked={isSwitched}
          />
          <div className="d-flex py-5 px-2 px-lg-0 mx-2 mx-lg-0 align-items-center flex-column">
            <Image
              src="./img/logo/bootstrap-logo.svg"
              style={{ width: "5em" }}
            />
            <h1 className="pt-3" style={{ fontFamily: "'Roboto', sans-serif" }}>
              {isSwitched ? article.title.en : article.title.id}
            </h1>
            <p className="text-center d-block d-md-none">
              {isSwitched ? article.description.en : article.description.id}
            </p>
            <p
              className="d-none d-md-block text-center"
              style={{ padding: "0 7em", fontSize: 20 }}
            >
              {isSwitched ? article.description.en : article.description.id}
            </p>
          </div>
          <FormComponent onSubmitFormEvent={handleSubmitForm}>
            <h3 className="mb-4">Detail Product</h3>
            <Form.Control readOnly value={formData.productUUID} hidden />
            <Col md={4} className="mb-3">
              <InputComponent
                labelName="Product Name"
                value={formData.productName}
                inputName="productName"
                onInputChange={handleInputChange}
                inputPlaceholder="Input product name here"
              />
              {showMessage ? (
                <div className="d-block valid-feedback">{message}</div>
              ) : (
                <div className="d-block invalid-feedback">{message}</div>
              )}
            </Col>
            <Col md={3} className="mb-3">
              <SelectComponent
                options={productCategories}
                selectLabelName="Product Category"
                selectName="productCategory"
                selectedOption="Choose Category"
                onSelectChange={handleInputChange}
                selectValue={formData.productCategory}
              />
            </Col>
            <Col md={3} className="mb-3">
              <InputComponent
                inputType="file"
                labelName="Product Image"
                inputName="productImage"
                onInputChange={handleInputImageChange}
              />
            </Col>
            <Col md={3} className="mb-3">
              <Form.Label>Product Freshness</Form.Label>
              <Form.Check
                type="radio"
                label="Brand New"
                value="Brand New"
                name="productFreshness"
                checked={formData.productFreshness === "Brand New"}
                onChange={handleInputChange}
              />
              <Form.Check
                type="radio"
                label="Second Hand"
                value="Second Hand"
                name="productFreshness"
                checked={formData.productFreshness === "Second Hand"}
                onChange={handleInputChange}
              />
              <Form.Check
                type="radio"
                label="Refurbrished"
                value="Refurbrished"
                name="productFreshness"
                checked={formData.productFreshness === "Refurbrished"}
                onChange={handleInputChange}
              />
            </Col>
            <Col md={12} className="mb-3">
              <Form.Group>
                <Form.Label>Additional Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={12} className="mb-3">
              <InputComponent
                labelName="Product Price"
                inputName="productPrice"
                inputType="number"
                inputPlaceholder="123,456,789"
                inputValue={formData.productPrice}
                onInputChange={handleInputChange}
              />
            </Col>
            <div className="text-center">
              <Button type="submit" className="mb-4 mt-2 w-75">
                Add Product
              </Button>
            </div>
          </FormComponent>
        </Container>
      </section>
      <section className="mb-5">
        <Container className="table-responsive">
          <TableProducts
            productsArr={products}
            // handleDelete={() => handleDeleteProduct(idx)}
          />
        </Container>
      </section>
    </>
  );
};

export default CreateProduct;
