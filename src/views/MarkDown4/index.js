import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider } from 'antd';
import { Icon } from 'antd';
import './index.css'
class MarkDown extends React.Component {

    constructor(props) {
        super(props);
        code: "# Markdown"
        this.state = {
          divF:100
        }
    }
  componentWillMount () {

    console.log('MarkDown',MarkDown)
   }

   onWheel = (event) => {
      const {deltaY} = event;
      const {divF} = this.state;
      if(100<divF<150){
        let num = divF + deltaY;
        if(num>150) num = 150;
        if(num<100) num = 100;
        this.setState({divF:num})
      }




   }
  render() {
    const {divF} = this.state;


    return (
      <div>
        <Divider >Wheel</Divider>
        <div className='markdown'  style={{overflow:'scroll'}}>
          <div  className='wheelImg' onWheel={this.onWheel} style={{width:`${divF}%`,height:`${divF}%`}}>
            <div style={{width:35,height:35,background:'red',position:'absolute',top:'25%',left:'30%'}}></div>
           </div>
        </div>
      </div>
    );
  }
}
export default MarkDown;
