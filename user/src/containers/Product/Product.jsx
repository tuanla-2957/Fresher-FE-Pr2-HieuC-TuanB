import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getProductRequest, changeFilterProduct, selectProductTag } from '../../actions/products.action';
import './Product.scss'
import Product from "../../components/Product/Product";
import Pagination from "../../components/UI/Pagination/Pagination";
import Select from "../../components/UI/Select/Select";
import { Tag } from "../../components/UI/Button/Button";
import { Formik, Form } from 'formik';
import TextField from "../../components/UI/Input/Input-group/TextField";


const ProductPage = () => {
    const sortPrice = ["Price desc", "Price asc"];
    const tags = ["germany", "euro", "land", "ocean", "paccific", "japanse", "australia", "ocean", "travel", "belgium", "italia", "america", "island"]
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { products, pagination, query, selectTags } = useSelector((state) => state.products);
    const [ranger, setRanger] = useState(
        {
            minPrice: Number(query.minPrice),
            maxPrice: Number(query.maxPrice)
        }
    )
    useEffect(() => {
        dispatch(getProductRequest(
            query
        ));
        goToTop()
    }, [query, selectTags]);

    const handlePageChange = (newPage) => {
        dispatch(changeFilterProduct({
            page: Number(newPage)
        }))
    }

    const handleClearFilter = () => {
        dispatch(changeFilterProduct({
            page: 1,
            perPage: 6,
            name: null,
            minPrice: 0,
            maxPrice: 30000,
            tag: []
        }))
        dispatch(selectProductTag([]))
        window.location.reload()
    }

    const goToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth', }); };

    return (
        <div className='products'>
            <div className='container-fluid'>
                <div className='products-wrapper'>
                    <div className='products__filter'>
                        <div className="filter filter__price">
                            <div className="filter__title">{t('FILTER BY PRICE')}</div>
                            <div className="price__item">
                                <div className="price__range my-1">
                                    <Formik
                                        initialValues={
                                            ranger
                                        }
                                        onSubmit={(value) => {
                                            dispatch(changeFilterProduct({
                                                minPrice: value.minPrice,
                                                maxPrice: value.maxPrice
                                            }))
                                        }}
                                    >
                                        {({
                                            resetForm
                                        }) => {
                                            return (
                                                <Form>
                                                    <TextField label={t('Min Price')} name="minPrice" type="number" />
                                                    <TextField label={t('Max Price')} name="maxPrice" type="number" />
                                                    <button className="button button--success">{t('Filter')}</button>
                                                </Form>
                                            )
                                        }}

                                    </Formik>
                                </div>
                            </div>
                        </div>

                        <div className="filter filter__tag">
                            <div className="filter__title">{t('FILTER BY TAG')}</div>
                            <div className="tag__list">
                                {tags.map((tag, index) => {
                                    return (
                                        <Tag title={tag} key={index}
                                        />
                                    )
                                })}
                            </div>
                        </div>

                    </div>

                    <div className="products__content">
                        <div className="products__top row">
                            <div className="col-auto">
                                <button className="button button-base" onClick={handleClearFilter}>
                                    {t('Clear filter')}
                                </button>
                            </div>
                            <div className="products__sort col-auto">
                                <Select title="Price Sorting" data={sortPrice} />
                            </div>
                        </div>
                        <div className='products__list row'>
                            {
                                products.length > 0 ?
                                    products.map((product) => {
                                        return (
                                            <div className='products__item col-12 col-lg-6' key={product._id}>
                                                <Product product={product} />
                                            </div>
                                        )
                                    }) : <div>{t('no result')}</div>
                            }
                        </div>
                        <div className="products__pagination">
                            <Pagination
                                pagination={pagination}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
