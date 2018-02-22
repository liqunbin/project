import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider } from 'antd';
import { Icon } from 'antd';
import './index.css'
import LzEditor from 'react-lz-editor';
import ReactMarkdown from 'react-markdown'
class MarkDown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           importContent:"# This is a header\n\nAnd this is a paragraph",
           content:''
        }
    }
  componentWillMount () { }
  componentDidMount (){
    
  }
  cbReceiver = (content) => {
      console.log('cosss',content)
    this.setState({importContentCurr:content})
  }
  render() {
    
    return (
      <div>
        <Divider >this is MarkDown</Divider>
        <div className='markdown'>
        <LzEditor
                  active={true}
                  image={false}
                  video={false}
                  audio={false}
                  autoSave={false}
                  fullScreen={false}
                  color={false}
                  cbReceiver={this.cbReceiver}
                  importContent={this.state.importContent}
                  convertFormat='markdown'
                />
        </div>
        <br />
        <div className='markdown'>
        <ReactMarkdown source={this.state.importContent} />
        </div>
      </div>
    );
  }
}
export default MarkDown;
