// eslint-disable-next-line no-unused-vars
import React, { ReactElement, useRef } from 'react'
import DefaultMarker from './DefaultMarker'
import './styles.css'
export { default as DefaultMarker } from './DefaultMarker'

interface IProps {
  src: string
  onImageClick: ImageMarkerClick
  markers: Array<Marker>
}

export default ({ src, markers, onImageClick }: IProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleClick = (clickEvent: any) => {
    const { nativeEvent } = clickEvent
    if (!wrapperRef || !wrapperRef.current) {
      throw Error('image wrapper is not found')
    }
    const newLocation = {
      x: (nativeEvent.offsetX / wrapperRef.current.clientWidth) * 100,
      y: (nativeEvent.offsetY / wrapperRef.current.clientHeight) * 100,
    }

    onImageClick(newLocation, clickEvent, wrapperRef.current)
  }

  return (
    <div
      className="react-imagemarker"
      style={{ background: `no-repeat center/100% url(${src})` }}
      ref={wrapperRef}
      onClick={handleClick}
    >
      {markers.map((marker: Marker) => (
        <div
          className="marker"
          style={{
            top: `calc(${marker.y}% - 10px)`,
            left: `calc(${marker.x}% - 10px)`,
          }}
          onClick={e => e.stopPropagation()}
          key={marker.id}
        >
          {typeof marker.render === 'function' ? (
            marker.render({ id: marker.id, x: marker.x, y: marker.y })
          ) : (
            <DefaultMarker id={marker.id} />
          )}
        </div>
      ))}
    </div>
  )
}

export interface Marker {
  id: number
  x: number
  y: number
  render?: (marker: Omit<Marker, 'render'>) => ReactElement
}

export interface MarkerPosition {
  x: number
  y: number
}

export type ImageMarkerClick = (
  position: MarkerPosition,
  clickEvent?: any,
  wrapper?: any,
) => void
