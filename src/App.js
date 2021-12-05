import useClipboard from 'react-hook-clipboard';

import './styles/App.css';
import './styles/stage.css';
import './styles/text.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import Range from './components/Range';
import Color from './components/Color';
import CopyToClipboard from './components/Copy';


function App() {
  const [horizontal, setHorizontal] = useState(50);

  const [vertical, setVertical] = useState(50);

  const [blur, setBlur] = useState(50);

  const [spread, setSpread] = useState(50);

  const [opacity, setOpacity] = useState(50);

  const [shadowColor, setShadowColor] = useState('#434242');
  const [shadowRgb, setShadowRgb] = useState({ r: 67, g: 66, b: 66 });
  const [shadowColorInvalid, setShadowColorInvalid] = useState('');

  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [backgroundRgb, setBackgroundRgb] = useState({
    r: 255,
    g: 255,
    b: 255,
  });
  const [backgroundColorInvalid, setBackgroundColorInvalid] = useState('');

  const [boxColor, setBoxColor] = useState('#ffe8a8');
  const [boxRgb, setBoxRgb] = useState({ r: 255, g: 232, b: 168 });
  const [boxColorInvalid, setBoxColorInvalid] = useState('');

  const [inset, setInset] = useState(false);
  const onChangeInset = () => setInset(!inset);

  const innerStyle = {
    backgroundColor: `rgb(${boxRgb.r}, ${boxRgb.g}, ${boxRgb.b})`,
    boxShadow: `${
      inset ? 'inset ' : ''
    }${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${shadowRgb.r}, ${
      shadowRgb.g
    }, ${shadowRgb.b}, 0.${opacity})`,
  };

  const outerStyle = {
    backgroundColor: `rgb(${backgroundRgb.r}, ${backgroundRgb.g}, ${backgroundRgb.b})`,
  };

  const [buttonText, setButtonText] = useState('Copy');

  //https://www.npmjs.com/package/react-hook-clipboard
  const CopyToClipboard = () => {
    let [clipboard, copyToClipboard] = useClipboard();
    clipboard = innerStyle.boxShadow;

    const onClick = () => {
      const copied = copyToClipboard(clipboard);
      setButtonText('Copied!');
    };
    return onClick;
  };

  return (
    <Container fluid>
      <h1>Box Shadow CSS Generator</h1>
      <br />
      <Row>
        <Col>
          <Range
            name="horizontal"
            value={horizontal}
            setValue={setHorizontal}
          />
          <Range name="vertical" value={vertical} setValue={setVertical} />
          <br />
          <Range name="blur" value={blur} setValue={setBlur} />
          <br />
          <Range name="spread" value={spread} setValue={setSpread} />
          <br />
          <Range name="opacity" value={opacity} setValue={setOpacity} />
          <br />
          <br />
          <Color
            name="shadow"
            value={shadowColor}
            invalid={shadowColorInvalid}
            setRgb={setShadowRgb}
            setText={setShadowColor}
            setInvalid={setShadowColorInvalid}
          />
          <br />
          <Color
            name="box"
            value={boxColor}
            invalid={boxColorInvalid}
            setRgb={setBoxRgb}
            setText={setBoxColor}
            setInvalid={setBoxColorInvalid}
          />
          <br />
          <Color
            name="background"
            value={backgroundColor}
            invalid={backgroundColorInvalid}
            setRgb={setBackgroundRgb}
            setText={setBackgroundColor}
            setInvalid={setBackgroundColorInvalid}
          />
          <br />

          <Form.Check
            type="switch"
            label="Inset?"
            value={inset}
            onChange={onChangeInset}
          />
          <br />
        </Col>
        <Col>
          <div className="outer" style={outerStyle}>
            <div className="inner" style={innerStyle}>
              <div className="copy-button">
                <code>box-shadow: {innerStyle.boxShadow}</code> <br/><br/>
                <Button onClick={CopyToClipboard()} variant="success">
                  {buttonText}
                </Button>{' '}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
