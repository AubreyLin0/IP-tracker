import Detail from './Detail'

export default function Information ({ IP, country, isp, region }) {
  const data = {
    'ip address': IP,
    location: `${country}, ${region}`,
    isp: isp
  }

  return (
    <div className='information'>
      <div className='insideBorder'>
        {Object.entries(data).map((item, index) => {
          return <Detail title={item[0]} info={item[1]} key={index} />
        })}
        <h3 className='title'>Details</h3>
      </div>
    </div>
  )
}
