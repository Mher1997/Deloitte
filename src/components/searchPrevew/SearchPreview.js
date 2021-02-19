import React, { useEffect, useState } from 'react';
import getCategories from '../../core/appAPI/CategoriesAPI';
import Content from '../content/Content';
import './SearchPreview.scss';

const SearchPreview = ({location}) => {
    const [categoriesData, setCategoriesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const {searchText} = location.state;
    
    useEffect(async ()=>{
        setLoading(true);
        const res = await getCategories();
        res && setCategoriesData(res);
        setLoading(false);
    }, []);
    
    const {contents} = categoriesData;

    const contentData = contents && contents.reduce((acc, content) => [...acc, ...content.contentInf], []);
    const filteredData = contentData && contentData.filter(content => content.name.toLowerCase().indexOf(searchText.toLowerCase())!==-1 && content);

    return (
        <div className="search-preview">
            {loading ? <h3>Loading...</h3> : <div className="search-preview-content">
                {filteredData && filteredData.map((content, index) => <Content content={content} key={index}/> )}
            </div>}
        </div>
    )
}

export default SearchPreview;
