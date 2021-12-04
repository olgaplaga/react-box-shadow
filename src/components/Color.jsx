import { Form, InputGroup } from 'react-bootstrap';
import hexToRgb from '../lib/hexToRGB';

const Color = ({ name, value, invalid, setRgb, setInvalid, setText }) => {
  const label = name[0].toUpperCase() + name.substring(1, name.length);
  const onChange = (event) => {
    const converted = hexToRgb(event.target.value);

    if (converted) {
      setRgb(converted);
      setInvalid('');
    } else setInvalid('Nie umiesz w kolory');
    setText(event.target.value);
  };

  return (
    <>
      <Form.Label>{label}</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          value={value}
          onChange={onChange}
          placeholder={label}
        />
        <InputGroup.Text>
          <Form.Control type="color" value={value} onChange={onChange}/>
        </InputGroup.Text>
      </InputGroup>
      <Form.Text className="text-muted">{invalid}</Form.Text>
    </>
  );
};

export default Color;
