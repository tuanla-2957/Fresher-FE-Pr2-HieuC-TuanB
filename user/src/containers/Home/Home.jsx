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
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


const Home = () => {
    const { t } = useTranslation();
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
                        <span className='text__title text__title--bold'>{t("FREE SHIPPING")}<span className='text__title ms-2'>{t("FOR ORDERS OVER $49")}</span></span>
                        <span className='text__title--gray mt-2'>{t("Full width banner about GEMSHOP")}</span>
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
                    <span className='text__title text__title--bold'>{t("HOT VOUCHERS")}</span>
                    <span className='text__title--gray mt-2'>{t("Over 500 new pieces every week")}</span>
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
                    <Link to={'/product'} className='button button-base'>{t("SEE MORE HOT VOUCHERS")}</Link>
                </div>
            </div>
            <div className='home__new'>
                <div className='container'>
                    <div className='home__title'>
                        <span className='text__title text__title--bold'>{t("NEWS POST")}</span>
                        <span className='text__title--gray mt-2'>{t("Over 500 new pieces every week")}</span>
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
                    <Link to={'./post'} className='button button-base'>{t("SEE MORE NEW POST")}</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
