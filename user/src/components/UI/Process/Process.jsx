import React, { Fragment } from 'react';
import './Process.scss';
import { useTranslation } from "react-i18next";

const Process = (props) => {
    const { t } = useTranslation();
    const { currentStep, steps } = props
    return (
        <div className='process'>
            <div className='container'>
                <div className='process__title'>
                    {
                        steps.map((step, index) => {
                            return (
                                <Fragment  key={index}>
                                    <span className={index+1 === currentStep ? 'process__text--active' : ''}>{t(step)}</span>
                                    <i className="fas fa-long-arrow-right"></i>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Process;
