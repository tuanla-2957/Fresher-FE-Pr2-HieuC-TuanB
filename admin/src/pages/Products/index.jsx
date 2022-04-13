import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import {
  getProductsRequest,
  updateProductsRequest,
  addProductsRequest,
  deleteProductRequest,
} from "../../actions";
import DataTable from "./components/DataTable";
import NewModal from "../../components/UI/Modal";
import axios from "../../helper/axios";
import { BsXSquare, BsSearch } from "react-icons/bs";
import "./style.scss";

/**
 * @author
 * @function Home
 **/

const Products = (props) => {
  const dispatch = useDispatch();
  const { products, loading, query } = useSelector((state) => state.products);
  const [showAddModal, setShowAddModal] = useState(false);
  const [name, setName] = useState("");
  const [listedPrice, setListedPrice] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(null);

  const [tags, setTags] = useState([]);
  const [imgUrl, setUrl] = useState(null);
  const [photos, setPhotos] = useState([]);

  const imageInputRef = useRef();
  const tagRef = useRef();

  useEffect(() => {
    dispatch(getProductsRequest({ query }));
  }, []);

  const addProductForm = () => {
    const product = {
      name,
      discountPrice,
      listedPrice,
      description,
      quantity,
      tags,
      avatar: imgUrl,
      photos,
    };
    setShowAddModal(false);
    dispatch(addProductsRequest(product));
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProductRequest({ productId }));
  };

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

  const removeTag = (value) => {
    setTags([...tags].filter((tag) => tag !== value));
  };

  const removePhoto = (value) => {
    setPhotos([...photos].filter((photo) => photo !== value));
  };

  const handleTagsInput = () => {
    if (tagRef.current.value == "") return;
    setTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
  };

  const submitModal = (e) => {
    e.preventDefault();
    addProductForm();
    setShowAddModal(false);
  };

  const closeModal = () => {
    setShowAddModal(false);
  };

  const renderAddProductModal = (
    <NewModal
      title={"Add new Product"}
      visible={showAddModal}
      onOk={submitModal}
      onCancel={closeModal}
    >
      <div className='addproduct-modal'>
        <input
          type='file'
          className='custom-file-input'
          onChange={handleFileInput}
          ref={imageInputRef}
        />
        <div>
          {imgUrl && <img className='avatar' alt='avatar' src={imgUrl} />}
        </div>
        <label>
          Name
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='form-control-sm'
          />
        </label>
        <label>
          List Price
          <Input
            value={listedPrice}
            onChange={(e) => setListedPrice(e.target.value)}
            className='form-control-sm'
          />
        </label>
        <label>
          Discount Price
          <Input
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
            className='form-control-sm'
          />
        </label>

        <label>
          Description
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='form-control-sm'
          />
        </label>
        <label>
          Quantity
          <Input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className='form-control-sm'
          />
        </label>
        <label>
          Add tag
          <div>
            <input type='text' ref={tagRef} />
            <button onClick={handleTagsInput}>Add </button>
          </div>
        </label>

        <div style={{ marginTop: "4px" }}>
          {tags.map((tag) => (
            <span className='tag'>
              {tag}
              <BsXSquare onClick={() => removeTag(tag)} />
            </span>
          ))}
        </div>
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
    </NewModal>
  );

  if (loading) {
    return (
      <Layout sidebar>
        <h3>Loading ...</h3>
      </Layout>
    );
  }

  return (
    <Layout sidebar>
      <Button onClick={() => setShowAddModal(true)}>Add new Product</Button>
      <DataTable data={products} deleteProduct={handleDeleteProduct} />
      {renderAddProductModal}
    </Layout>
  );
};

export default Products;
