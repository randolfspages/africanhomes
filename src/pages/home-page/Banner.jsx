import bannerImg from "../../assets/modern-building2.png"
import  { motion } from 'framer-motion';


const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, staggerChildren: 1.5 },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };
  
  

const Banner = () => {
    return (
        <>
            <div className="bg-[#fef8f5]  w-full mx-auto" id='home'>
                <div className="relative">
                    <img src={bannerImg} alt="" className='h-full mx-auto' />
                </div>
                <motion.div initial="hidden" animate="visible" variants={containerVariants} className="left-20 top-40 text-white md:left-48 md:top-80 absolute">
                    <motion.p variants={childVariants} className="text-3xl md:text-6xl">A FUTURE</motion.p> 
                    <motion.p variants={childVariants} className="text-3xl md:text-6xl text-yellow-500">TO BUILD.</motion.p>
                    <motion.p variants={childVariants} className="text-sm mt-4">
                        Clean architectural lines. Stunning finishing materials. Well-defined
                        construction standards. Here, there is <br />no rush to build, everything is designed 
                        to allow to express your personality in a harmonious environment when the 
                        time is right.
                    </motion.p>
        
                </motion.div>
                
            </div>
        </>
    );
};

export default Banner;
