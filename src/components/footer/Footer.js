import React, { memo } from 'react';
import './Footer.scss';

import homeIcon from '../../assets/icons/home.svg';
import tileIcon from '../../assets/icons/tile.svg';
import listIcon from '../../assets/icons/list.svg';
import refreshIcon from '../../assets/icons/refresh.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container container">
                <div className="footer-left">
                    <div className="footer-left-home">
                        <Link to="/">
                            <img src={homeIcon} alt="home"/>
                        </Link>
                    </div>
                </div>
                <div className="footer-center">
                    <div className="footer-center-tile">
                        <img src={tileIcon} alt="home"/>
                    </div>
                    <div className="footer-center-list">
                        <img src={listIcon} alt="home"/>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-right-refresh">
                        <img src={refreshIcon} alt="home"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer);
