import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import MainLayout from "./commonComponents/mainLayout/component/MainLayout";
import RoutesPage from "./routes/RoutesPage";
import store from "./redux/redux-store/reduxStore";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MainLayout>
                <RoutesPage/>
            </MainLayout>
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

