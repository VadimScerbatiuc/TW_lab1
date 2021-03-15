import React from 'react'
import {Layout} from 'antd';
import Home from './Home';
import About from './About';
import Users from './Users';
import { contentmock } from './content'
import {ContentStory} from './ContentStory'
import './style.css'
const { Content} = Layout 

export const ContentLayout = () =>{


  return(
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
     <div class="content">
       {contentmock.map(({description ,img,title,index}) =>{

        return(
          <ContentStory description={description} title={title} img={img} index={index}/>
        );

       }) }

       
       </div>
    </Content>
    );
}