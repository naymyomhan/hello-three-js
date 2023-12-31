/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile }) => {
    return (
        <div className='filepicker-container'>
            <div className='flex-1 flex flex-col'>
                <input
                    id="file-upload"
                    type="file"
                    accept="impage/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor='file-upload' className='filepicker-label'>
                    Upload File
                </label>
                <p className='mt-2 text-gray-500 text-xs truncate'>
                    {file === '' ? "No File Selected" : file.name}
                </p>

                <div className='mt-4 flex flex-wrap gap-3'>
                    <CustomButton
                        type="outline"
                        title="Logo"
                        handleClick={() => readFile('logo')}
                        customStyles={'text-xs py-2'}
                    />

                    <CustomButton
                        type="filled"
                        title="Full"
                        handleClick={() => readFile('full')}
                        customStyles={'text-xs py-2'}
                    />
                </div>
            </div>
        </div>
    )
}

export default FilePicker
