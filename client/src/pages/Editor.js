import React from 'react';
import ReactQuill from 'react-quill';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],

    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],

    ['link', 'image', 'video'],
    [{ color: [] }, { background: [] }],

    ['clean'],
  ],
};

const Editor = ({ value, onChange }) => {
  return <ReactQuill value={value} modules={modules} onChange={onChange} />;
};

export default Editor;
