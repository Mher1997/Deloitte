import React, { memo, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import GetContentView from '../../core/appAPI/GetContentViewAPI';
import './ContentPreview.scss';

const ContentPreview = ({match}) => {
    const {id} = match.params;

    const [content, setContent] = useState({});
    const [loading, setLoading] = useState(false);

    const {title, link, file_type} = content;
    
    useEffect(async ()=>{
        setLoading(true);
        const res = await GetContentView(id);
        res && setContent(res);
        setLoading(false);
    }, []);

    const showContentType = () => {
        switch (file_type) {
            case 'pdf':
                return <embed src={link} width="100%" height="100%" /> 
            case 'website':
                return <iframe src={link} width="98%" height="100%"/>
            case 'youtube':
                return <ReactPlayer url={link} width="100%" height="100%"/>
            default:
                return null
        }
    }

    return (
        <div className="content-view">
            {loading ? <h3>Loading...</h3> : <div className="content-view">
                <div className="content-view-title">
                    <h3>{title}</h3>
                </div>
                <div className="content-view-show">
                    {showContentType()}
                </div>
            </div>}
        </div>
    )
}

export default memo(ContentPreview);
