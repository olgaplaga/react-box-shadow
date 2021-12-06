import React from 'react';
import CopyToClipboard from './CopyToClipboard';

const Stage = ({ innerStyle, outerStyle }) => {
 const css = `box-shadow: ${innerStyle.boxShadow}`

  return (
    <div className="outer" style={outerStyle}>
      <div className="inner" style={innerStyle}>
        <div className="copy-button">
          <code>{css}</code> <br />
          <br />
          <CopyToClipboard text={css}/>
        </div>
      </div>
    </div>
  );
};
export default Stage;
