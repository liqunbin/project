import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider, Button } from 'antd';
import { Icon } from 'antd';
import './index.css' 
// require('codemirror/lib/codemirror.css') // codemirror
// require('tui-editor/dist/tui-editor.css'); // editor ui
// require('tui-editor/dist/tui-editor-contents.css'); // editor content
// require('highlight.js/styles/github.css'); // code block highlight
// import 'codemirror/lib/codemirror.css';
// import Editor from 'tui-editor';
import Editor from 'tui-editor';
import('tui-editor/dist/tui-editor.min.css');
import('tui-editor/dist/tui-editor-contents.min.css');
import('codemirror/lib/codemirror.css');
import('tui-editor/dist/tui-editor-extScrollSync.min.js');
import('tui-editor/dist/tui-editor-extColorSyntax.min.js');
import('tui-color-picker/dist/tui-color-picker.min.css');
import('tui-editor/dist/tui-editor-extTable.min.js');
import('tui-editor/dist/tui-editor-extUML.min.js');
// import('plantuml-encoder/dist/plantuml-encoder.js');
import('raphael/raphael.js');
import('tui-chart/dist/tui-chart.min.js');
import('tui-editor/dist/tui-editor-extChart.min.js');
import('tui-chart/dist/tui-chart.min.css');
class MarkDown extends React.Component {

    constructor(props) {
        super(props);
        code: "# Markdown"
        this.state = {
          textValue:'',
          content:''
        }
    }
  componentWillMount () {
    
   }
  componentDidMount (){
    const self = this;
    var editor = new Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      language: 'zh_CN',
      height: 'auto',
      exts: ['scrollSync', 'colorSyntax', 'table', 'uml', 'chart'],
      useCommandShortcut: true,
      getValue:(content)=>{self.setState({textValue:content})}

  });
  
  console.log('editor',editor.getValue)
  }
  getValue = (content) => {
    this.setState({content:'222'})
    console.log('getValue',content)
  }
  handleChange = (content) => {
    console.log('ssss',content)
  }
  render() {
    console.log('content',this.state.textValue)

    return (
      <div>
        <Divider >this is MarkDown5</Divider>
        <div className='markdown'>
          <div id='editSection'></div>
        </div>
        <Button onClick={this.getValue}>提交</Button>
      </div>
    );
  }
}
export default MarkDown;
