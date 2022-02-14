import React from "react";
import { motion } from 'framer-motion'

import './loading.scss'

export default function Loading() {

  return (
    <div className="loading">
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 399.91" fill="#fff">
        {/* <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1"> */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cls-1"
              d="M200,0V50a125,125,0,1,0,50,100V0ZM178,203a75,75,0,1,1,22-53A74.48,74.48,0,0,1,178,203Z"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cls-1"
              d="M0,274.91a125,125,0,0,0,250,0h0a67,67,0,0,0-58.9,35.51,75.11,75.11,0,0,1-132.37-.32A66.51,66.51,0,0,0,0,274.91Z"
            />
          {/* </g>
        </g> */}
      </motion.svg>
    </div>
  );
}
