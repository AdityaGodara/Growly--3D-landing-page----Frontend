import { motion, AnimatePresence } from 'framer-motion';

const HowTo = () => {
    return (
        <AnimatePresence>
            <div className='flex justify-center items-center h-screen'>

                <section className="w-full min-h-screen text-white py-20 flex flex-col items-center justify-center">
                    <motion.h1 className='head-text mb-20'
                        style={{ color: 'black' }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >How it works!</motion.h1>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-fit px-4">
                        {/* Step 1: Input */}
                        <motion.div
                            className="container steps flex flex-col items-center text-center rounded-lg shadow-lg"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {/* <div className="text-6xl mb-4">📝</div>
                            <h3 className="text-2xl font-semibold mb-2">1. Input Your Product</h3>
                            <p className="text-gray-300">Tell Growly about your product or service. No design skills needed.</p> */}
                            <div className="box">
                                <span className="title">INPUT YOUR PRODUCT</span>
                                <div className="flex flex-col items-center justify-center">
                                    <img src="/input.png" alt="" className='w-15 h-15 mb-5 mt-5' />
                                    <p className="text-center mt-4">
                                        Tell <strong>Growly</strong> about your product or service. No design skills needed
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 2: AI Processing */}
                        <motion.div
                            className="container flex flex-col items-center text-center rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {/* <div className="text-6xl mb-4">🧠</div>
                            <h3 className="text-2xl font-semibold mb-2">2. AI Does the Magic</h3>
                            <p className="text-gray-300">Our powerful AI crafts compelling ad copy and visuals in seconds.</p> */}
                            <div className="box">
                                <span className="title">AI DOES THE MAGIC</span>
                                <div className="flex flex-col items-center justify-center">
                                    <img src="/ai.png" alt="" className='w-15 h-15 mb-5 mt-5' />
                                    <p className="text-center mt-4">
                                        Our powerful AI crafts compelling ad copy and visuals in seconds.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 3: Output */}
                        <motion.div
                            className="container flex flex-col items-center text-center rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {/* <div className="text-6xl mb-4">🧠</div>
                            <h3 className="text-2xl font-semibold mb-2">2. AI Does the Magic</h3>
                            <p className="text-gray-300">Our powerful AI crafts compelling ad copy and visuals in seconds.</p> */}
                            <div className="box">
                                <span className="title">LAUNCH YOUR ADS</span>
                                <div className="flex flex-col items-center justify-center">
                                    <img src="/launch.png" alt="" className='w-15 h-15 mb-5 mt-5' />
                                    <p className="text-center mt-4">
                                        Get high-converting ad creatives ready to boost your campaigns.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </AnimatePresence>
    )
}

export default HowTo
