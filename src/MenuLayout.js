import {UserOutlined,VideoCameraOutlined,UploadOutlined,BarChartOutlined,CloudOutlined,AppstoreOutlined,TeamOutlined,ShopOutlined} from '@ant-design/icons'
import React from 'react'
import { Layout , Menu} from 'antd'
// import {Userss} from './ContentLayout'
// import {Aboutt} from './ContentLayout'
// import {Homee} from './ContentLayout'
import { ContentLayout } from './ContentLayout'

const {Sider} =Layout


export const MenuLayout = () =>{
  

      return(
            <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" >
              
              
              <Menu.Item key="1" icon={<UserOutlined />}  >
              Home
              </Menu.Item>
              
              
              <Menu.Item key="2" icon={<VideoCameraOutlined />} >
                Aboute
              </Menu.Item>
              
              
              <Menu.Item key="3" icon={<UploadOutlined />} >
                Users
              </Menu.Item>

            </Menu>
          </Sider>
        )

}


