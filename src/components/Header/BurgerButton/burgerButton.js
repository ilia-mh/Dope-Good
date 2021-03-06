import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#636363"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, isOpen }) => (
  <motion.button className="navbar-toggler" onClick={toggle} initial={false} animate={ isOpen ? 'open' : 'closed' }>

    <svg width="26" height="26" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
        transition={{ duration: 0.3 }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.15 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </motion.button>
);

export default MenuToggle