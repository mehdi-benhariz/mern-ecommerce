import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Alert = ({ alert }) => {
  let { isShown, text, type } = alert;
  console.log(alert);
  return (
    <AnimatePresence>
      {isShown && (
        <motion.div
          className="grid place-items-center h-10 "
          layout
          initial={{ opacity: 0, y: 300, scale: 0.3 }}
          animate={{ opacity: 1, y: 40, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.5 }}
        >
          <p
            className={`bg-${type}-100 text-xl py-4 text-${type}-500 w-full grid place-items-center`}
          >
            {text}{" "}
          </p>{" "}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
