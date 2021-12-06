import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import useClipboard from 'react-hook-clipboard';

const CopyToClipboard = ({ text }) => {
    const defaultButtonText = 'Copy';
    // eslint-disable-next-line no-unused-vars
    const [_clipboard, copyToClipboard] = useClipboard();
    const [buttonText, setButtonText] = useState(defaultButtonText);

  return (
    <Button
      onClick={() => {
        copyToClipboard(text);
        setButtonText('Copied!');
        setTimeout(() => setButtonText(defaultButtonText), 5000);
      }}
      variant="success"
    >
      {buttonText}
    </Button>
  );
};

export default CopyToClipboard;