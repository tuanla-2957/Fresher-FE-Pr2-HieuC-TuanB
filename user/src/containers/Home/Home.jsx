import './Home.scss'
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Categoty';
import Product from '../../components/Product/Product';
import Post from '../../components/Post/Post';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getProductHotRequest } from '../../actions/products.action';
import { getPostRequest } from '../../actions/posts.action';
import { categories } from './data';


const Home = () => {
    const dispatch = useDispatch();
    const { hotProducts } = useSelector((state) => state.products);
    const { posts } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getProductHotRequest({}));
        dispatch(getPostRequest({
            page: 1,
            perPage: 6
        }));
    }, [dispatch]);

    return (
        <div className='home'>
            <Banner />
            <div className='advertisement'>
                <div className='container'>
                    <div className='home__title'>
                        <span className='text__title text__title--bold'>FREE SHIPPING <span className='text__title'>FOR ORDERS OVER $49</span></span>
                        <span className='text__title--gray mt-2'>Full width banner about GEMSHOP</span>
                    </div>
                </div>
            </div>
            <div className='home__category row'>
                {
                    categories?.map((category,index) => {
                        return (
                            <div className='col-12 col-sm-6 col-lg-3 p-0' key={index}>
                                <Category category={category} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='home__hot-product container'>
                <div className='home__title'>
                    <span className='text__title text__title--bold'>HOT VOUCHERS</span>
                    <span className='text__title--gray mt-2'>Over 500 new pieces every week</span>
                </div>
                <div className='product-list row'>
                    {
                        hotProducts?.map((product) => {
                            return (
                                <div className='col-12 col-md-6' key={product._id}>
                                    <Product product={product} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='btn__see-more'>
                    <button className='button button-base'>SEE MORE HOT VOUCHERS</button>
                </div>
            </div>
            <div className='home__new'>
                <div className='container'>
                    <div className='home__title'>
                        <span className='text__title text__title--bold'>NEWS</span>
                        <span className='text__title--gray mt-2'>Over 500 new pieces every week</span>
                    </div>
                    <div className='product-list row'>
                    {
                        posts?.map((post) => {
                            return (
                                <div className='col-12 col-md-6 col-lg-4' key={post._id}>
                                    <Post post={post} />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className='btn__see-more'>
                    <button className='button button-base'>SEE MORE HOT PRODUCTS</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
