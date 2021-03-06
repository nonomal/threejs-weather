import React, { Suspense } from 'react'
import { Canvas, extend } from 'react-three-fiber'
import { Stats } from 'drei'
import { Controls, useControl } from 'react-three-gui'
import * as meshline from 'threejs-meshline'

import { Cloudy } from 'threejs-weather'
import { WeatherText } from '@/components/WeatherText'
import { PATHS } from '@/constants'

extend(meshline)

const CloudyPage = () => {
  const count = useControl('count', { type: 'number', max: 100, min: 10, value: 10 })
  return (
    <>
      <Canvas pixelRatio={window.devicePixelRatio} style={{ backgroundColor: '#3C4245' }}>
        <Stats />
        <Cloudy count={Math.floor(count)} />
        <Stats />
        <Suspense fallback="loading...">
          <WeatherText color="#f1f0ed">{PATHS.cloudy.name}</WeatherText>
        </Suspense>
      </Canvas>
      <Controls />
    </>
  )
}

export default CloudyPage
