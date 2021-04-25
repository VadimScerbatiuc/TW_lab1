import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import React , { useEffect ,useState} from 'react'
import {Layout} from 'antd'
import {MenuLayout} from './MenuLayout'
import {HeaderLayout} from './HeaderLayout'
import {ContentLayout} from './ContentLayout'
import {FooterLayout} from './FooterLayout'
import {contentmock} from './content'
import { home_path, about_path, users_path } from './constants'
import {About } from "./About";
import {Users } from "./Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const[initialState , setInitialState]
 = useState(contentmock)
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
          <ContentLayout initialState={initialState} setInitialState={setInitialState}/>
          </Route>

          <Route path={about_path}>
           <About/>
          </Route>
          
          <Route path={users_path}>
            <Users/>
          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
