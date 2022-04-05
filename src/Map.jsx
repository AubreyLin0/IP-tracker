import { map_API_key } from './info/API_key'

export default function Map ({ lat, lng }) {
  return (
    <div className='map'>
      {/* use the latitude and longitude to get google static map */}
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=450x450&key=${map_API_key}&markers=size:mid|color:red|${lat},${lng}`}
        alt='map'
      ></img>
    </div>
  )
}
