import React, { memo } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Content.scss';

const Content = ({content, saveContent, contentsId}) => {

    const handleAddContent = () => saveContent([...contentsId, content.id]);

    const handleRemoveContent = () => {
        const filteredContentsID = contentsId.filter(id => id!==content.id);
        saveContent([...filteredContentsID]);
    };

    return (
        <div className="content">
            <div className="content-img">
                <Link to={`/preview/${content.id}`}>
                    <img src={content.image || content.url} alt={content.categoryString}/>
                </Link>
            </div>
            <div className="content-bottom">
                <div className="content-bottom-name">
                    <p>{content.name}</p>
                </div>
                {
                    contentsId.includes(content.id) 
                    ? <button className="btn-def" onClick={handleRemoveContent}>Remove</button> 
                    : <button className="btn-def" onClick={handleAddContent}>Add</button> 
                }
                
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    contentsId: state
})

const mapDispatchToProps = dispatch => ({
    saveContent: content => dispatch({type: 'SAVE_CONTENT', content}),
})

export default connect(mapStateToProps, mapDispatchToProps )(memo(Content));
