import Detail from './Detail'

export default function Information ({ IP, country, timezone, isp, region }) {
  const data = {
    'ip address': IP,
    location: `${country}, ${region}`,
    timezone: timezone,
    isp: isp
  }

  return (
    <div className='information'>
      {Object.entries(data).map((item, index) => {
        return (
          <div key={index}>
            <Detail title={item[0]} info={item[1]} />
            <span className='divider'></span>
          </div>
        )
      })}
    </div>
  )
}
