import React from 'react'
import { Layout , Menu} from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ContentLayout } from './ContentLayout'
import { MenuRoot } from './constants'
const {Sider} =Layout


export const MenuLayout = () =>{
  

      return(
        <>
            <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
              <Switch>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} >
                  
                    {MenuRoot.map((menu) =>{
                      return(

                    <Menu.Item key={ menu.id } icon= {menu.icon}>
                      <Link to={menu.path}>{menu.name}</Link>
                    </Menu.Item>
                
                    );

                    } )}

                </Menu>
              </Switch>
          </Sider>
          
          </>
          )

}


