import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'C&C Especialistas en Impresión y Computadores',
    short_name: 'C&C Especialistas',
    description: 'Servicio técnico especializado en mantenimiento y reparación de impresoras y computadores en Medellín, Bello y Envigado.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#0284c7',
    icons: [
      {
        src: '/logo.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/logo.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  };
}
