import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/UI/Button";
import {
  getProductByIdRequest,
  updateProductsRequest,
} from "../../../../actions";
import axios from "../../../../helper/axios";
import Input from "../../../../components/UI/Input";
import { BsXSquare, BsSearch } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./style.scss";
import { Spinner } from "../../../../components/UI/Spinner";

const schema = yup
  .object({
    name: yup.string().required("Do not leave blank"),
    listedPrice: yup
      .number()
      .positive("Number must > 0")
      .required("Do not leave blank"),
    discountPrice: yup
      .number()
      .positive("Number must > 0")
      .required("Do not leave blank"),
    quantity: yup
      .number()
      .positive("Number must > 0")
      .required("Do not leave blank"),
  })
  .required();

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { selectedProduct, loading } = useSelector((state) => state.products);

  const [isHot, setIsHot] = useState(false);
  const [inSlider, setInslider] = useState(false);
  const [tags, setTags] = useState([]);
  const [imgUrl, setUrl] = useState("");
  const [photos, setPhotos] = useState([]);
  const imageInputRef = useRef();
  const tagRef = useRef();

  let { productId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    dispatch(getProductByIdRequest(productId));
  }, []);

  useEffect(() => {
    if (selectedProduct && selectedProduct.product) {
      setIsHot(selectedProduct.product.is_hot);
      setInslider(selectedProduct.product.in_slider);
      setTags(selectedProduct.product.tags);
      setPhotos(selectedProduct.product.photos);
      setUrl(selectedProduct.product.avatar);
    }
  }, [selectedProduct]);

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file, file.name);

    try {
      const res = await axios.post("/image", formData);
      if (res.data.success) {
        setUrl(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePhotosInput = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file, file.name);

    try {
      const res = await axios.post("/image", formData);

      if (res.data.success) {
        setPhotos([...photos, res.data.data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removePhoto = (value) => {
    setPhotos([...photos].filter((photo) => photo !== value));
  };

  const handleTagsInput = () => {
    if (tagRef.current.value == "") return;
    setTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
  };

  const removeTag = (value) => {
    setTags([...tags].filter((tag) => tag !== value));
  };

  const updateProduct = (data) => {
    let product = { ...data };
    product = {
      ...product,
      productId: selectedProduct.product._id,
      tags,
      photos,
      is_hot: isHot,
      in_slider: inSlider,
      avatar: imgUrl,
    };
    dispatch(updateProductsRequest({ updateProduct: product }));
  };

  if (loading) {
    return (
      <Layout sidebar>
        <Spinner />
      </Layout>
    );
  }

  return (
    <Layout sidebar>
      {selectedProduct.product && (
        <form className='productdetail' onSubmit={handleSubmit(updateProduct)}>
          <div className='product-image'>
            <h4>Avatar</h4>
            <input
              type='file'
              className='custom-file-input'
              onChange={handleFileInput}
              ref={imageInputRef}
            />
            <div>
              {imgUrl && <img className='avatar' alt='avatar' src={imgUrl} />}
            </div>
          </div>
          <div className='product-image'>
            <h4>Photos</h4>
            <input
              type='file'
              className='custom-file-input'
              onChange={handlePhotosInput}
            />
            <div style={{ display: "flex" }}>
              {photos.map((photo) => (
                <img
                  className='avatar'
                  alt='photo'
                  src={photo}
                  onClick={() => removePhoto(photo)}
                />
              ))}
            </div>
          </div>
          <label>
            Name
            <input
              defaultValue={selectedProduct.product.name}
              {...register("name")}
            />
            <p className='error-message'>{errors.name?.message}</p>
          </label>
          <div className='product-checkbox'>
            <label>
              Is hot
              <input
                type='checkbox'
                checked={isHot ? true : false}
                onChange={() => {
                  setIsHot(!isHot);
                }}
                className='form-control-sm'
              />
            </label>
            <label>
              Inslider
              <input
                type='checkbox'
                checked={inSlider ? true : false}
                onChange={() => setInslider(!inSlider)}
                className='form-control-sm'
              />
            </label>
          </div>

          <label>
            List Price
            <input
              defaultValue={selectedProduct.product.listedPrice}
              {...register("listedPrice")}
            />
            <p className='error-message'>{errors.listedPrice?.message}</p>
          </label>

          <label>
            Discount Price
            <input
              defaultValue={selectedProduct.product.discountPrice}
              {...register("discountPrice")}
            />
            <p className='error-message'>{errors.discountPrice?.message}</p>
          </label>

          <label>
            Quantity
            <input
              defaultValue={selectedProduct.product.quantity}
              {...register("quantity")}
            />
            <p className='error-message'>{errors.quantity?.message}</p>
          </label>
          <div>
            <label>
              Add tag
              <div>
                <input type='text' ref={tagRef} />
                <Button onClick={handleTagsInput}>Add </Button>
              </div>
            </label>

            <div className='tag-list'>
              {tags.map((tag) => (
                <span className='tag' onClick={() => removeTag(tag)}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className='product-description'>
            <label>Description</label>
            <textarea
              defaultValue={selectedProduct.product.description}
              {...register("description")}
            />
          </div>

          <Button type='submit'>Update</Button>
        </form>
      )}
    </Layout>
  );
}
