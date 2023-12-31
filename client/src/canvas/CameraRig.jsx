/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import state from '../store'

const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state);

    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1200;
        const isMobile = window.innerWidth <= 600;


        //set the initial position of the model 
        let targetPosition = [-0.4, 0, 10];
        // if (snap.intro) {
        //     if (isBreakpoint) targetPosition = [0, 0, 4];
        //     if (isMobile) targetPosition = [0, 0.2, 4];
        // } else {
        //     if (isMobile) targetPosition = [0, 0, 2.5]
        //     else targetPosition = [0, 0, 2.5];
        // }

        //set model camera position 
        easing.damp3(state.camera.position, targetPosition, 0.2, delta);

        //set model rotation smoothly
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 2, -state.pointer.x / 2, 0],
            0.2,
            delta,
        );
    })



    return (
        <group ref={group}>
            {children}
        </group>
    )
}

export default CameraRig
