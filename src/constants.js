import {UserOutlined,VideoCameraOutlined,UploadOutlined,BarChartOutlined,CloudOutlined,AppstoreOutlined,TeamOutlined,ShopOutlined} from '@ant-design/icons'

export const home_path = '/Home'
export const about_path = '/About'
export const users_path = '/Users'

export const MenuRoot =[

    {
        id: 0,
        name:"Home",
        icon:<UserOutlined/>,
        path: home_path
    },
    {
        id: 1,
        name:"About",
        icon:<BarChartOutlined/>,
        path: about_path
    },
    {
        id: 2,
        name:"Users",
        icon:<UploadOutlined/>,
        path: users_path
    }
    ]


