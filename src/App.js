import React, { useState, useEffect } from 'react';
import './App.css';
import Editor from "./components/Editor";

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJS] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])


  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="css"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJS}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          srcDoc={srcDoc}
        />
      </div>
    </>
  );
}

export default App;
