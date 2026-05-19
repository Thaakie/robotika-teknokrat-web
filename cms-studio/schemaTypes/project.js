export const project = {
  name: 'project',
  title: 'Karya / Our Creativity',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nama Robot', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'division', title: 'Divisi / Tim (cth: KRI, KRTI)', type: 'string' },
    { name: 'description', title: 'Deskripsi Singkat', type: 'text' },
    { name: 'image', title: 'Foto Robot', type: 'image', options: { hotspot: true } },
    { 
      name: 'tech', 
      title: 'Teknologi yang Digunakan', 
      type: 'array', 
      of: [{ type: 'string' }] 
    },
    { name: 'href', title: 'Link (Opsional)', type: 'string', initialValue: '#' }
  ]
};
