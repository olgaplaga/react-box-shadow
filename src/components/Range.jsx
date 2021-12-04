import { Form, InputGroup } from 'react-bootstrap';
import '../styles/Range.css';

const Range = ({ name, value, setValue }) => {
  const label = name[0].toUpperCase() + name.substring(1, name.length);
  const onChange = (event) => setValue(event.target.value);

  return (
    <>
      <Form.Label>{label}</Form.Label>
      <InputGroup className="mb-3 range-wrapper">
        <Form.Range className="range" value={value} onChange={onChange} />

        <InputGroup className="mb-3 range-text-wrapper">
          <Form.Control
            className="range-text"
            type="number"
            value={value}
            onChange={onChange}
            max={100}
            min={0}
          />
          <InputGroup.Text id="basic-addon1">px</InputGroup.Text>
        </InputGroup>
      </InputGroup>
      {/* <Form.Text className="text-muted">{invalid}</Form.Text> */}
    </>

    // <Form.Label>{label}</Form.Label>
    // <Form.Range value={value} onChange={onChange} />

    // </>
  );
};

export default Range;
