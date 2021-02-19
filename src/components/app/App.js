import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import GetContent from '../../core/appAPI/ContentAPI';
import contentsReducer from '../../core/store/reducers/contentsReducer';
import Header from '../header/Header';
import Main from '../main/Main';
import './App.scss';

const store = createStore(contentsReducer, []);

const App = () => {

	const [leftNavIsOpen, setLeftNavIsOpen] = useState(true);
	const [contentData, setContentData] = useState({});

    useEffect(async ()=>{
        const res = await GetContent();
        res && setContentData(res);
    }, []);

	const {title, cats} = contentData;

	return (
		<div className="app">
			<Provider store={store}>
				<Header setLeftNavIsOpen={setLeftNavIsOpen} title={title}/>
				<Main leftNavIsOpen={leftNavIsOpen} cats={cats}/>
			</Provider>
		</div>
	)
}

export default App;
