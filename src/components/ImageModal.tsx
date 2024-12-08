import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity"
      onClick={onClose}
    >
      <div className="relative max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="h-8 w-8" />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-h-[80vh] w-auto rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

