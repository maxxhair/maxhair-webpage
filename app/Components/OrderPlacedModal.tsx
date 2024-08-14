"use client";

import { Modal } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

const OrderPlacedModal: React.FC<Props> = ({ openModal, setOpenModal }) => {
  const handleClose = () => {
    setOpenModal(false);
    window.location.href = "/";
  };

  const continuousAnimation = {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1]
  };

  return (
    <motion.div
      className=""
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Modal show={true}>
        <Modal.Body>
          <div className="flex flex-col gap-5 my-10 items-center justify-center">
            <motion.div
              animate={continuousAnimation}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <Image src="/orderPlaced.png" alt="" width={300} height={300} />
            </motion.div>
            <p className="text-md lg:text-xl leading-relaxed text-gray-500 dark:text-gray-400">
              Your order has been Placed Successfully, Check you email !!
            </p>
            <button
              className="text-blue-600 underline z-50"
              onClick={handleClose}
            >
              Continue Shopping
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </motion.div>
  );
};

export default OrderPlacedModal;
