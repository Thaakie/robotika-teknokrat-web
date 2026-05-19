export const division = {
  name: 'division',
  title: 'Seksi Bidang',
  type: 'document',
  fields: [
    {
      name: 'idName',
      title: 'ID Divisi (cth: sdm, humas)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Nama Divisi',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'head',
      title: 'Nama Kepala Divisi',
      type: 'string',
    },
    {
      name: 'headImage',
      title: 'Foto Kepala Divisi (Opsional)',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'icon',
      title: 'Ikon Divisi',
      type: 'string',
      options: {
        list: [
          { title: 'Users (Orang Banyak)', value: 'Users' },
          { title: 'Globe (Dunia)', value: 'Globe' },
          { title: 'BookOpen (Buku Terbuka)', value: 'BookOpen' },
          { title: 'Camera (Kamera)', value: 'Camera' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Deskripsi Divisi',
      type: 'text',
    },
    {
      name: 'members',
      title: 'Daftar Anggota',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Nama Anggota', type: 'string' },
            { name: 'image', title: 'Foto (Opsional)', type: 'image', options: { hotspot: true } }
          ]
        }
      ],
    },
  ],
};
