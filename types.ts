import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: 'flowers' | 'cafe';
}