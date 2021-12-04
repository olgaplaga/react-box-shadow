import { Form } from 'react-bootstrap';

const Range = ({ name, value, setValue }) => {
  const label = name[0].toUpperCase() + name.substring(1, name.length);
  const onChange = (event) => setValue(event.target.value);

  return (
    <>
    
      <Form.Label>{label}</Form.Label>
      <Form.Range value={value} onChange={onChange} />
      
    </>
  );
};

export default Range;
