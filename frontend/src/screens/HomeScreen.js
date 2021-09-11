import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";
import { PRODUCT_DETAILS_RESET } from "../constants/productConstants";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, err, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
    dispatch({ type: PRODUCT_DETAILS_RESET });
  }, [dispatch]);

  return (
    <>
      <h1>LATEST PRODUCTS</h1>
      {loading ? (
        <Loader />
      ) : err ? (
        <Message variant="danger">{err}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
