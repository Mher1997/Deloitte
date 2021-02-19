import React, { memo } from 'react'
import Router from '../../router/router';
import Footer from '../footer/Footer';
import LeftNav from '../leftNav/LeftNav';
import './Main.scss';

const Main = ({leftNavIsOpen, cats}) => {
    return (
        <div className="main">
            {leftNavIsOpen && <LeftNav cats={cats}/>}
            <div className="main-content">
                <div className="main-content-body">
                    <Router/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default memo(Main);
