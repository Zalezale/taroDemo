import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'


const title = () => (
    <div>
        <img src="./img/5bed1aa7N94e96b00.jpg"></img>
    </div>
)

class Index extends Component {
    config: Config = {
        navigationBarTitleText: '首页'
    }

}


export default Index as ComponentClass