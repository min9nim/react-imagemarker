# react-imagemarker

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-imagemarker.svg)](https://www.npmjs.com/package/react-imagemarker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-imagemarker
```

## Usage

```tsx
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
  {
    x: 40,
    y: 40,
    id: 3,
    render: () => <div style={{fontSize: 30}}>🙂</div>
  },
]

const App = () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <ImageMarker
        src="https://www.mountainprofessor.com/images/matterhorn-3-b.jpg"
        markers={markers}
        onImageClick={console.log}
      />
    </div>
  )
}

export default App

```

## License

MIT © [keating](https://github.com/madup-inc)
