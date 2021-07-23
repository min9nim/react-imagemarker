# react-imagemarker

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-imagemarker.svg)](https://www.npmjs.com/package/react-imagemarker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-imagemarker
```

## Usage

```tsx
import React, { Component } from 'react'
import ImageMarker from 'react-imagemarker'
import 'react-imagemarker/dist/index.css'

function SomeComponent() {
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
  return (
    <ImageMarker
      src="/some-image.jpg"
      markers={markers}
      onImageClick={({ x, y }, clickEvent, wrapperDom) => {
        console.log({ x, y, clickEvent, wrapperDom })
      }}
    />
  )
}
```

## License

MIT © [keating](https://github.com/madup-inc)
