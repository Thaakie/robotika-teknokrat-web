export const roboticsDivision = {
  name: 'roboticsDivision',
  title: 'Divisi Lomba (Land, Air, dll)',
  type: 'document',
  fields: [
    {
      name: 'idName',
      title: 'ID Divisi (Harus sama dengan URL: land, air, water, krsbi)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Nama Divisi (cth: LAND DIVISION)',
      type: 'string',
    },
    {
      name: 'active',
      title: 'Status Aktif (Matikan jika Legacy)',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'description',
      title: 'Deskripsi Divisi',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Foto-Foto Divisi',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'subdivisions',
      title: 'Daftar Sub-Divisi (Tactical Units)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'idName', title: 'ID Sub-Divisi (cth: coe, vtol)', type: 'string' },
            { name: 'name', title: 'Nama Sub-Divisi (cth: COE Robotic)', type: 'string' },
            { name: 'desc', title: 'Deskripsi Singkat', type: 'string' },
            { name: 'detail', title: 'Penjelasan Lengkap', type: 'text' },
            { name: 'image', title: 'Foto Sub-Divisi (Opsional)', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    },
  ],
};
