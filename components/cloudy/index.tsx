import React, { useRef } from 'react'

import { useClouds, UseCloudsProps, Cloud, useCloud } from './use-cloud'
import { Mesh } from 'three'

type CloudyProps = UseCloudsProps

export const DarkCloud = ({ value }: { value: Cloud }) => {
  const cloud = useRef<Mesh>()
  useCloud(cloud)
  return (
    <mesh ref={cloud} position={value.startpoint}>
      <circleBufferGeometry attach="geometry" args={[value.radius, 128]} />
      <meshBasicMaterial
        attach="material"
        transparent={true}
        opacity={value.opacity}
        color={value.color}
      />
    </mesh>
  )
}

const Cloudy = (props: CloudyProps) => {
  const { clouds } = useClouds(props)
  return (
    <>
      {clouds.map((cloud, index) => {
        return <DarkCloud key={index} value={cloud} />
      })}
    </>
  )
}

export default Cloudy
