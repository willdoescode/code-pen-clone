import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled } from "react-codemirror2";
import { faExpandAlt, faCompressAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Editor(props) {
  const {
    displayName,
    language,
    value,
    onChange,
  } = props

  function handleChange(editor, data, value) {
    onChange(value)
  }

  const [open, setOpen] = useState(true)

  return (
    <div className={`editor-container ${open ? '' : 'closed'}`}>
      <div className="editor-title">
        { displayName }
        <button type="button" className="expand-collapse-btn" onClick={() => setOpen(prevOpen => !prevOpen)}>
          <FontAwesomeIcon icon={open ? faExpandAlt : faCompressAlt} />
        </button>
      </div>
      <Controlled
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  );
}
