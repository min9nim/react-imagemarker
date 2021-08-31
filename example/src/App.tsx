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
    render: () => <div style={{fontSize: 30}}>🙂</div> // eslint-disable-line
  },
]

const App = () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <ImageMarker
        // src="https://lever.me/statics/image/introduce/Group16.svg"
        src="https://lever-admin-develop.s3.ap-northeast-2.amazonaws.com/shops/16/assets/416/design/300/kura-goddin-5JEbKNp9uNk-unsplash.jpg" // 세로이미지
        // src="https://lever-admin-develop.s3.ap-northeast-2.amazonaws.com/shops/16/assets/421/design/296/%EB%8F%84%EB%9D%BC%EC%97%90%EB%AA%BD.gif" // 가로이미지
        markers={markers}
        onImageClick={console.log}
      />
    </div>
  )
}

export default App
