import { useEffect, useState } from 'react'
import Footer from './Footer'
import Information from './Information'
import Header from './Header'
import Map from './Map'
import Alert from './Alert'
import { API_key } from './info/API_key'

export default function App () {
  //get IP information from IP Geolocation API
  const [IP, setIP] = useState(null)
  //set IP data
  const [information, setInformation] = useState(null)
  //if fetched the API, set show up animation
  const [display, setDisplay] = useState(false)
  //if get fetch error, show alert
  const [alert, setAlert] = useState(false)

  function getInfo (event) {
    event.preventDefault()
    const IP_value = event.target.input.value
    setIP(IP_value)
    event.target.input.value = ''
    setDisplay(true)
  }
  useEffect(() => {
    //avoid the first loading
    if (IP !== null) {
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_key}&ipAddress=${IP}`
      )
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            setAlert(true)
          }
        })
        .then(result => {
          setInformation(result)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [IP])

  return (
    <div className='App'>
      {alert && <Alert alert={alert} setAlert={setAlert} />}
      <Header display={display} getInfo={getInfo} />
      {/* only if display is true and alert is false,the information will show up*/}
      <div className={display && !alert ? 'slide-in-bottom wrap' : 'hidden'}>
        <Information
          IP={information?.ip}
          country={information?.location?.country}
          region={information?.location?.region}
          isp={information?.isp}
        />
        <Map
          lat={information?.location?.lat}
          lng={information?.location?.lng}
        />
      </div>
      <Footer />
    </div>
  )
}
