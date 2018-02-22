import React  from 'react';
import {
  Link
} from 'react-router-dom';
import { Divider } from 'antd';
import { Icon } from 'antd';
import './index.css' 
import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js'
class MarkDown extends React.Component {

    constructor(props) {
        super(props);
        code: "# Markdown"
        this.state = {
          markCentent:'',
          markCententCode:''
        }
    }
  componentWillMount () {
    

   }
  componentDidMount (){
      const self = this;
      new SimpleMDE({
      element: document.getElementById('editor').childElementCount,  
      autofocus: true,
      autosave: true,
      previewRender: function(plainText) {
        console.log('plainText',plainText)
        self.setState({markCentent:plainText})
              return marked(plainText,{
                      renderer: new marked.Renderer(),
                      gfm: true,
                      pedantic: false,
                      sanitize: false,
                      tables: true,
                      breaks: true,
                      smartLists: true,
                      smartypants: true,
                      highlight: function (code) {
                        console.log('code',code)
                        self.setState({markCententCode:code})
                              return highlight.highlightAuto(code).value;
                      }
              });
      },
})
// console.log('rrrr2',this.smde.value)
  }
  updateCode = (content) => {
    console.log('ssss',content,'markCententCode',markCententCode)
  }
  render() {
    console.log('markCentent',this.state.markCentent)
    return (
      <div>
        <Divider >this is MarkDown2</Divider>
        <div className='markdown'>
        <textarea id="editor"></textarea>
        </div>
      </div>
    );
  }
}
export default MarkDown;
