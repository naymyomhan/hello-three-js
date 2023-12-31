/* eslint-disable no-unused-vars */
import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store'
import { getContrastingColor } from '../config/helpers';

// eslint-disable-next-line react/prop-types
const CustomButton = ({ type, title, customStyles, handleClick }) => {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color),
            }
        }
        else if (type === 'outline') {
            return {
                borderWidth: '1px',
                borderColor: getContrastingColor(snap.color),
                color: getContrastingColor(snap.color),
            }
        }
        else {
            return {
                // backgroundColor: '#fff'b
            }
        }
    }

    return (
        <button
            onClick={handleClick}
            className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
            style={generateStyle(type)}
        >
            {title}
        </button>
    )
}

export default CustomButton
