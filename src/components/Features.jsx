import { motion, AnimatePresence } from 'framer-motion';

const Features = () => {

    const features = [
        {
            icon: 'innovation.png',
            title: 'AI Creative Generator',
            description: 'Effortlessly generate compelling ad copy and visuals with advanced AI algorithms.',
        },
        {
            icon: 'news.png',
            title: 'Headline Optimizer',
            description: 'Get data-driven suggestions to craft high-performing headlines that capture attention.',
        },
        {
            icon: 'export.png',
            title: 'Export Ad Formats',
            description: 'Instantly export your ads in various formats suitable for all major platforms.',
        },
        {
            icon: 'analytics.png',
            title: 'Performance Analytics',
            description: 'Track ad performance with real-time analytics to optimize your campaigns.',
        },  
    ];

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
                    >Features...</motion.h1>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-fit px-4">
                        <div className="cards"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="card bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 shadow-xl border border-white border-opacity-20"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                >
                                    <div className="mb-4">
                                        <img src={feature.icon} width={60} className="text-gray-300 drop-shadow-md" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-100 text-lg">
                                        {feature.description}
                                    </p>


                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </AnimatePresence>
    )
}

export default Features
