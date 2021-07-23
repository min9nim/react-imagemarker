import React from 'react'

import ImageMarker from 'react-imagemarker'
import 'react-imagemarker/dist/index.css'

const markers = [
  {
    x: 20,
    y: 20,
    id: 1,
  },
  {
    x: 50,
    y: 20,
    id: 2,
  },
]

const App = () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <ImageMarker
        src="https://image.bugsm.co.kr/album/images/500/203221/20322119.jpg"
        markers={markers}
        onImageClick={console.log}
      />
    </div>
  )
}

export default App
