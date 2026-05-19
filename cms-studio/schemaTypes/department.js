export const department = {
  name: 'department',
  title: 'Kepala Departemen',
  type: 'document',
  fields: [
    {
      name: 'idName',
      title: 'Singkatan Lomba (cth: KRI, KRTI)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Kepanjangan Nama Lomba',
      type: 'string',
    },
    {
      name: 'head',
      title: 'Kepala Departemen',
      type: 'string',
    },
    {
      name: 'headImage',
      title: 'Foto Kepala (Opsional)',
      type: 'image',
      options: { hotspot: true }
    }
  ],
};
