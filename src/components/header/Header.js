import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from '../modal/Modal';
import TextInput from '../textInput/TextInput';
import EmailForm from '../emailForm/EmailForm';

import menuIcon from '../../assets/icons/menu.svg'
import loupeIcon from '../../assets/icons/loupe.svg'
import GetCompLogo from '../../core/appAPI/GetCompLogoAPI';
import './Header.scss';

const Header = ({setLeftNavIsOpen, title, contentsId}) => {

    const [searchText, setSearchText] = useState('');
    const [logoUrl, setLogoUrl] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(async ()=>{
        const res = await GetCompLogo();
        res && setLogoUrl(res);
    }, []);

    return (
        <div className="header">
            <div className="header-container container">
                <div className="header-start">
                    {showModal && <Modal close={()=>setShowModal(false)}>
                        <EmailForm/>
                    </Modal>}
                    <div className="header-start-menu">
                        <img src={menuIcon} alt="menu" onClick={()=>setLeftNavIsOpen(isOpen => !isOpen)}/>
                    </div>
                    <div className="header-start-logo">
                        <Link to="/">
                            {logoUrl && <img src={logoUrl} alt='logo'/>}
                        </Link>
                    </div>
                    <div className="header-start-title">
                        {title && <h4>{title}</h4>}
                    </div>
                </div>
                <div className="header-end">
                    <div className="header-end-search">
                        <TextInput value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                        <Link to= {{
                                pathname: "/search",
                                state: {searchText}
                            }}
                        >
                            <img src={loupeIcon} alt="loupe"/>
                        </Link>
                    </div>
                    <div className="header-end-email">
                        <button 
                            className="btn-def green" 
                            onClick={()=>setShowModal(true)}
                            disabled={!contentsId.length}
                        >
                            EMAIL  
                        <span> {contentsId.length}</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    contentsId: state
})

export default connect(mapStateToProps)(memo(Header));
