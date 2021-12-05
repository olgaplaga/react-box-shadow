import React from 'react'
import useClipboard from 'react-hook-clipboard'

const CopyToClipboard = () => {
  const [clipboard, copyToClipboard] = useClipboard()
  const toClipboard = 'I want to go to the clipboard'

  return (
    <div className="App">
      <p>Clipboard content: {clipboard}</p>
      <button onClick={() => copyToClipboard(toClipboard)}>
        Copy to clipboard
      </button>
    </div>
  )
}
export default CopyToClipboard;
