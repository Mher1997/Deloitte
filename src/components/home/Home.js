import React, { useEffect, useState } from 'react'
import GetThumbnails from '../../core/appAPI/ContentThumbnailAPI';
import Content from '../content/Content';
import './Home.scss';

const Home = () => {
    const [thumbnails, setThumbnails] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(async ()=>{
        setLoading(true);
        const res = await GetThumbnails();
        res && setThumbnails(res);
        setLoading(false);
    }, []);

    return (
        <div className="home">
            {loading ? <h3>Loading...</h3> : <div className="home-content">
                {thumbnails.map((content, index) => <Content content={content} key={index}/> )}
            </div>}
        </div>
    )
}

export default Home;
