/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'
import { CustomButton } from '../components';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
                    </motion.header>

                    <div className='flex flex-1 flex-col justify-start xl:justify-center lg:justify-center'>
                        <motion.div className="" {...headContainerAnimation}>
                            <motion.div {...headTextAnimation}>
                                <h1 className='head-text'>
                                    Hello Three.Js
                                </h1>
                            </motion.div>
                        </motion.div>
                        <motion.div {...headContainerAnimation} className="flex flex-col gap-5">
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Create your unique and exclusive cap with our brand-new 3D customization tool. <strong> Unlesh your imagination </strong>{" "}and define your own style.
                            </p>

                            <CustomButton
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </div>

                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home
