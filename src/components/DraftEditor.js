import { EditorState, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import draftjsToHtml from 'draftjs-to-html';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function DraftEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlString, setHtmlString] = useState('');

  const updateTextDescription = async (state) => {
    await setEditorState(state);
    const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlString(html);
  };

  const uploadCallback = () => {
    console.log('이미지 업로드');
  };

  return (
    <>
      <div>Draft</div>
      <Editor
        placeholder="게시글을 작성해주세요"
        editorState={editorState}
        onEditorStateChange={updateTextDescription}
        toolbar={{
          image: { uploadCallback: uploadCallback },
        }}
        localization={{ locale: 'ko' }}
        editorStyle={{
          height: '400px',
          width: '100%',
          border: '3px solid lightgray',
          padding: '20px',
        }}
      />
      <div>
        <p dangerouslySetInnerHTML={{ __html: htmlString }} />
        <p>{htmlString}</p>
      </div>
    </>
  );
}

export default DraftEditor;
