"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const AcervoMosaicBanner = ({ images }: { images: any[] }) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const handleClick = (image: any) => {
    if (selectedImage && selectedImage.id === image.id) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mosaic py-12 grid grid-cols-3 gap-4">
      {images.map((image: any) => (
        <div key={image.id} className="mosaic-item relative overflow-hidden" onClick={() => handleClick(image)}>
          <Image
            src={image.thumbnail}
            alt="Fotografia da edição 2023 da Pick Up Show"
            className="rounded-lg object-cover w-full h-full cursor-pointer"
            width={300}
            height={300}
            quality={100}
            sizes="100vw"
          />
          <AnimatePresence>
            {selectedImage && selectedImage.id === image.id && (
              <motion.div
                className="fullscreen-image fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
              >
                <motion.img
                  src={image.thumbnail}
                  alt="Fotografia da edição 2023 da Pick Up Show"
                  className="rounded-lg object-contain max-h-full max-w-full"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.5 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
