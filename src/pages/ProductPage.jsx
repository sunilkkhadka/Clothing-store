import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";

//IMPORTING PRAGES COMPONENET
import ProductDesc from "../components/ProductDescription/ProductDesc";
import { getProductById } from "../features/clotheStore/ClotheStore";

const ProductPage = () => {
  const { productID } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(productID));
  }, [dispatch]);

  return (
    <div>
      <ProductDesc />
    </div>
  );
};

export default ProductPage;
