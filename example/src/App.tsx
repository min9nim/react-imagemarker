import React from 'react'

import ImageMarker from 'react-imagemarker'
import 'react-imagemarker/dist/index.css'

const markers = [
  {
    x: 20,
    y: 40,
    id: 1,
  },
  {
    x: 40,
    y: 40,
    id: 2,
  },
  {
    x: 70,
    y: 55,
    id: 3,
    render: () => <div style={{fontSize: 30}}>🙂</div>
  },
]

const App = () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <ImageMarker
        src="https://lever.me/statics/image/introduce/Group16.svg"
        markers={markers}
        onImageClick={console.log}
      />
    </div>
  )
}

export default App
