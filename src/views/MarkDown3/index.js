import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider } from 'antd';
import { Icon } from 'antd';
import './index.css' 
import ISimpleMDE from 'react-simplemde-v1';
import 'simplemde/dist/simplemde.min.css';
// import SimpleMDE from 'react-markdown-editor'
// var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;
class MarkDown extends React.Component {

    constructor(props) {
        super(props);
        code: "# Markdown"
        this.state = {
          textValue:'222'
        }
    }
  componentWillMount () {
    
    console.log('MarkDown',MarkDown)
   }
  componentDidMount (){
      
  }
  handleChange = (content) => {
    console.log('ssss',content)
  }
  render() {
    const option = {
      
    };

const onReady = function(instance) {
  console.log(instance.value());
};

const onEvents = {
  'change': function() {
    // the 'this' variable can get SimpleMDE instance
    console.log(this.value());
  }
};
    return (
      <div>
        <Divider >this is MarkDown3</Divider>
        <div className='markdown'>
        <ISimpleMDE
    option={option}
    text={'Hello World!!!'}
    onReady={onReady}
    onEvents={onEvents}
  />
        </div>
      </div>
    );
  }
}
export default MarkDown;
