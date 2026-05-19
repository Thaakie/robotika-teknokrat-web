import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Konfigurasi koneksi ke Sanity CMS
export const sanityClient = createClient({
  projectId: 'ckdlgm31', // Ganti jika project ID berbeda
  dataset: 'production',
  apiVersion: '2023-05-03', // Tanggal versi API (gunakan tanggal hari ini atau versi spesifik)
  useCdn: true, // Gunakan CDN agar website loading lebih cepat (baca-saja)
});

// Helper untuk mengambil URL gambar dari Sanity
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
