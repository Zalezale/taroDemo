import  { Component, Config } from '@tarojs/taro'
import { View, Button, Text, ScrollView } from '@tarojs/components'
import  './menu'


class Menu extends Component{
    config: Config = {
        navigationBarTitleText: '菜单页'
    }
 render(){
     return (
         <ScrollView>
             <View><Text>test</Text></View>
         </ScrollView>
     )
 }
}


export default Menu 