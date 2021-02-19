import React, { Fragment, memo, useEffect, useState } from 'react';
import GetCategories from '../../core/appAPI/CategoriesAPI';
import Content from '../content/Content';
import './CategoryInfo.scss';

const CategoryInfo = ({match}) => {
    const {name} = match.params;
    const pathName = name.replaceAll('_', ' ');
    
    const [categoriesData, setCategoriesData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(async ()=>{
        setLoading(true);
        const res = await GetCategories();
        res && setCategoriesData(res);
        setLoading(false);
    }, []);
    
    const {contents} = categoriesData;
    const activeCat = contents && contents.find(cat => cat.catName === pathName) || {};
    const {catName, contentInf, description} = activeCat;

    return (
        <div className="category-info">
            {loading ? <h3>Loading...</h3> : <Fragment>
                <div className="category-info-title">
                    <h2>{catName}</h2>
                </div>
                <div className="category-info-desc">
                    <p>{description}</p>
                </div>
                <div className="category-info-contents">
                    {contentInf && contentInf.length && contentInf.map((content, index) => <Content content={content} key={index}/>)}
                </div>
            </Fragment>}
        </div>
    )
}

export default memo(CategoryInfo);
