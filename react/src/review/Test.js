import { motion } from 'framer-motion';
import Toggle from './toggle';

export function Test() {

            const icon = {
  hidden: {
    pathLength: 1,
    fill: "rgb(19, 12, 2);"
  },
  visible: {
    
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
}
  
return (
    <>

  <Toggle/>
  </>
)
  
}
