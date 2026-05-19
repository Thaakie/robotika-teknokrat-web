export const gallery = {
  name: 'gallery',
  title: 'Galeri (Captured Moments)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Judul Foto (Internal)', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'image', title: 'Foto', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() },
    { 
      name: 'size', 
      title: 'Ukuran Tampilan di Website', 
      type: 'string',
      options: {
        list: [
          { title: 'Kecil (Small)', value: 'small' },
          { title: 'Besar (Large - Kotak Besar)', value: 'large' },
          { title: 'Tinggi (Tall - Memanjang ke bawah)', value: 'tall' }
        ]
      },
      initialValue: 'small'
    }
  ]
};
