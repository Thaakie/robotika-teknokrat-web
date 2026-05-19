export const coreLeader = {
  name: 'coreLeader',
  title: 'Core Executive Board',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Jabatan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Nama Lengkap',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Foto Pengurus',
      type: 'image',
      options: {
        hotspot: true, // Memungkinkan cropping gambar di dashboard
      },
    },
    {
      name: 'order',
      title: 'Nomor Urut',
      description: 'Untuk mengatur urutan tampil (1 untuk Ketua, 2 Wakil, dst)',
      type: 'number',
    },
  ],
};
