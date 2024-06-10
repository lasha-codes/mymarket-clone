import { MapContainer } from 'react-leaflet/MapContainer'
import { useMap } from 'react-leaflet'
const ProductMapLocation = ({ location }: { location: string }) => {
  function MyComponent() {
    const map = useMap()
    console.log('map center:', map.getCenter())
    return null
  }

  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MyComponent />
    </MapContainer>
  )
}

export default ProductMapLocation
