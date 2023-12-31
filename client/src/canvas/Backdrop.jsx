/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {
    const shadows = useRef();
    return (
        <AccumulativeShadows
            ref={shadows}
            temporal
            frames={60}
            alphaTest={0.9}
            scae={10}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -1]}
            color='#fff3a3'
        >
            <RandomizedLight
                amount={4}
                radius={5}
                intensity={1}
                ambient={0.5}
                position={[3, 3, -3]}
            />

            <RandomizedLight
                amount={4}
                radius={5}
                intensity={1}
                ambient={0.5}
                position={[-3, 3, -3]}
            />
        </AccumulativeShadows>
    )
}

export default Backdrop
