export const achievement = {
  name: 'achievement',
  title: 'Pencapaian / Prestasi',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Tahun',
      type: 'number',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'categories',
      title: 'Kategori Lomba (KRI, KRTI, dll)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'ID Singkat (misal: KRI)',
              type: 'string',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'name',
              title: 'Nama Kategori Lengkap (misal: KRI (Kontes Robot Indonesia))',
              type: 'string',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'items',
              title: 'Daftar Prestasi',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', title: 'Judul Prestasi', type: 'string' },
                    { name: 'description', title: 'Deskripsi Singkat', type: 'text' },
                    { 
                      name: 'image', 
                      title: 'Foto / Gambar (Opsional)', 
                      type: 'image',
                      options: {
                        hotspot: true,
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'year'
    },
    prepare({ title }) {
      return {
        title: `Pencapaian Tahun ${title}`
      };
    }
  }
}
