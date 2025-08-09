import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CutomButton } from '../components';

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            <motion.section className="home relative" {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')} >
                    <img src="./growly.png" alt="logo" className='w-30 h-30 object-fill' />
                </motion.header>

                <motion.div className="home-content" {...headContainerAnimation}>
                    <motion.div {...headTextAnimation} >
                        <h1 className="head-text">
                            Create High-Converting Ads in Seconds <br className="xl:block hidden" />
                            <small>— Powered by AI</small>
                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                        <p className='max-w-md font-normal text-gray-200 text-base'>
                            No design or copywriting needed. Just enter your product and let <strong>Growly</strong> do the rest. <br className="xl:block hidden" />
                        </p>
                        {/* Moved the button here, below the paragraph */}
                        <CutomButton
                            type="filled"
                            title="Book Free Demo"
                            handleClick={() => window.location.href = "#demo-form"}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        </AnimatePresence>
    );
};

export default Home;