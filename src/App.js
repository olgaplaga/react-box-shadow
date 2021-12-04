import logo from './logo.svg';
import './styles/App.css';
import './styles/stage.css';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import React, { useState } from 'react';
import hexToRgb from './lib/hexToRGB';
import Range from './components/Range';
import Color from './components/Color';

function App() {
  const [horizontal, setHorizontal] = useState(50);

  const [vertical, setVertical] = useState(50);

  const [blur, setBlur] = useState(50);

  const [spread, setSpread] = useState(50);

  const [opacity, setOpacity] = useState(50);

  const [shadowColor, setShadowColor] = useState('#ff0000');
  const [shadowRgb, setShadowRgb] = useState({ r: 0, g: 0, b: 0 });
  const [shadowColorInvalid, setShadowColorInvalid] = useState('');

  const [backgroundColor, setBackgroundColor] = useState('#00ff00');
  const [backgroundRgb, setBackgroundRgb] = useState({ r: 0, g: 255, b: 0 });
  const [backgroundColorInvalid, setBackgroundColorInvalid] = useState('');

  const [boxColor, setBoxColor] = useState('#0000ff');
  const [boxRgb, setBoxRgb] = useState({ r: 0, g: 0, b: 255 });
  const [boxColorInvalid, setBoxColorInvalid] = useState('');

  const [inset, setInset] = useState(false);
  const onChangeInset = () => setInset(!inset)

  const innerStyle = {
    backgroundColor: `rgb(${boxRgb.r}, ${boxRgb.g}, ${boxRgb.b})`,
    boxShadow: `${inset ? 'inset ' : ''}${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${shadowRgb.r}, ${shadowRgb.g}, ${shadowRgb.b}, 0.${opacity})`,
  };

  const outerStyle = {
    backgroundColor: `rgb(${backgroundRgb.r}, ${backgroundRgb.g}, ${backgroundRgb.b})`,
  };

  return (
    <Container fluid>
      <h1>Box Shadow CSS Generator</h1>
      <br/>
      <Row>
        <Col>
          <Range
            name="horizontal"
            value={horizontal}
            setValue={setHorizontal}
          />
          <Range name="vertical" value={vertical} setValue={setVertical} /><br/>
          <Range name="blur" value={blur} setValue={setBlur} /><br/>
          <Range name="spread" value={spread} setValue={setSpread} /><br/>
          <Range name="opacity" value={opacity} setValue={setOpacity} /><br/>
          <br/>
          <Color
            name="shadow"
            value={shadowColor}
            invalid={shadowColorInvalid}
            setRgb={setShadowRgb}
            setText={setShadowColor}
            setInvalid={setShadowColorInvalid}
          />
          <br/>
          <Color
            name="box"
            value={boxColor}
            invalid={boxColorInvalid}
            setRgb={setBoxRgb}
            setText={setBoxColor}
            setInvalid={setBoxColorInvalid}
          />
          <br/>
          <Color
            name="background"
            value={backgroundColor}
            invalid={backgroundColorInvalid}
            setRgb={setBackgroundRgb}
            setText={setBackgroundColor}
            setInvalid={setBackgroundColorInvalid}
          />
          <br/>

          <Form.Check
            type="switch"
            label="Inset?"
            value={inset}
            onChange={onChangeInset}
          />
          <br/>

        </Col>
        <Col>
          <div className="outer" style={outerStyle}>
            <div className="inner" style={innerStyle}>
            -webkit-box-shadow: {innerStyle.boxShadow}<br/>
            -moz-box-shadow: {innerStyle.boxShadow}<br/>
             box-shadow: {innerStyle.boxShadow}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
