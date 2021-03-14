import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Fcomponent from './Fcomponent';
import {Layout} from 'antd'
import {MenuLayout} from './MenuLayout'
import {HeaderLayout} from './HeaderLayout'
import {ContentLayout} from './ContentLayout'
import {FooterLayout} from './FooterLayout'

function App() {
  return (
    
    <Layout >
        <MenuLayout/>
        <HeaderLayout/>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <ContentLayout/>
          <FooterLayout/>
      </Layout>
    </Layout>

  );
}

export default App;
