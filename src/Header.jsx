import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'

export default function Header ({ display, getInfo }) {
  return (
    <header className={display ? 'active' : null}>
      <h1 className='title'>IP Address Tracker</h1>
      <Form onSubmit={getInfo}>
        <InputGroup>
          <FormControl
            placeholder='Search for any IP address'
            name='input'
            autoComplete='off'
            required
          />
          <Button variant='outline-secondary' type='submit'>
            GO<i className='fa-solid fa-location-dot ms-2'></i>
          </Button>
        </InputGroup>
      </Form>
    </header>
  )
}
