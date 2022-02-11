import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class AddPost extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          editorState: "",
        };
      }
    
      onEditorStateChange = (editorState) =>{
        this.setState({
            editorState,
          });
      }
    
      render() {
            const { editorState } = this.state;
        return (
            
            <div className='editor'>
                <Editor
                    initialEditorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onChange={this.onEditorStateChange}
                />

                <div>
                    {this.state.editorState}
                </div>

            </div>
          


          
        )
      }
    }

export default AddPost;