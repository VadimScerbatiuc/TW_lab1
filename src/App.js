import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import React , { useEffect } from 'react'
import {Layout} from 'antd'
import {MenuLayout} from './MenuLayout'
import {HeaderLayout} from './HeaderLayout'
import {ContentLayout} from './ContentLayout'
import {FooterLayout} from './FooterLayout'
import {funtionexample} from './functions'
import { home_path, about_path, users_path } from './constants'
import {About } from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {


  return (
    <>
      <Router>
        <Layout >
            <MenuLayout/>
            <HeaderLayout/>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
             
              <FooterLayout/>
          </Layout>
        </Layout>

        <Switch>
          <Route path={home_path}>
          <ContentLayout/>
          </Route>
          <Route path={about_path}>
           <About/>
          </Route>
          <Route path={users_path}>
           
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
