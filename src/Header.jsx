import { useEffect, useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import Information from './Information'
import API_key from './info/API_key'

export default function Header () {
  const [IP, setIP] = useState(null)
  const [information, setInformation] = useState()

  function getInfo (event) {
    event.preventDefault()
    const IP_value = event.target.input.value
    setIP(IP_value)
  }

  useEffect(() => {
    if (IP !== null) {
      fetch(
        `https://geo.ipify.org/api/v2/country?apiKey=${API_key}&ipAddress=${IP}`
      )
        .then(res => res.json())
        .then(result => {
          // console.log(result)
          setInformation(result)
          // console.log(IP)
          // console.log(information)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [IP])

  return (
    <header>
      <h1 className='title'>IP Address Tracker</h1>
      <Form onSubmit={getInfo}>
        <InputGroup>
          <FormControl
            placeholder='Search for any IP address or domain'
            name='input'
            autoComplete='off'
          />
          <Button variant='outline-secondary' type='submit'>
            Button
          </Button>
        </InputGroup>
      </Form>
      <Information
        IP={information?.ip}
        country={information?.location?.country}
        region={information?.location?.region}
        timezone={information?.location?.timezone}
        isp={information?.isp}
      />
    </header>
  )
}
