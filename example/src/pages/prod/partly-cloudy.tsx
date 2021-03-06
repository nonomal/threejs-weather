import React, { Suspense } from 'react'
import { Canvas, extend } from 'react-three-fiber'
import { Stats } from 'drei'
import { Controls, useControl } from 'react-three-gui'
import * as meshline from 'threejs-meshline'

import { PartlyCloudy } from 'threejs-weather'
import { WeatherText } from '@/components/WeatherText'
import { PATHS } from '@/constants'

extend(meshline)

const PartlyCloudyPage = () => {
  const count = useControl('count', { type: 'number', max: 100, min: 10, value: 10 })
  return (
    <>
      <Canvas pixelRatio={window.devicePixelRatio} style={{ backgroundColor: '#1677b3' }}>
        <Stats />
        <PartlyCloudy count={Math.floor(count)} />
        <Stats />
        <Suspense fallback="loading...">
          <WeatherText color="#f1f0ed">{PATHS.partlyCloudy.name}</WeatherText>
        </Suspense>
      </Canvas>
      <Controls />
    </>
  )
}

export default PartlyCloudyPage
