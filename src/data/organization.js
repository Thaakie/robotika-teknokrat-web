export const ORG_STRUCTURE = {
  core: [
    { id: "ketua", role: "Ketua", name: "Nama Ketua", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ketua" },
    { id: "wakil", role: "Wakil Ketua", name: "Nama Wakil Ketua", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wakil" },
    { id: "sekretaris", role: "Sekretaris", name: "Nama Sekretaris", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sekretaris" },
    { id: "bendahara", role: "Bendahara", name: "Nama Bendahara", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bendahara" }
  ],
  divisions: [
    { 
      id: "sdm", 
      name: "Sumber Daya Manusia", 
      head: "Kepala SDM", 
      icon: "Users",
      description: "Focuses on member recruitment, skill development, and internal organization welfare.",
      members: ["Member 1", "Member 2", "Member 3"]
    },
    { 
      id: "humas", 
      name: "Hubungan Masyarakat", 
      head: "Kepala Humas", 
      icon: "Globe",
      description: "Manages external relations with other universities, industries, and government bodies.",
      members: ["Member A", "Member B", "Member C"]
    },
    { 
      id: "akademik", 
      name: "Akademik", 
      head: "Kepala Akademik", 
      icon: "BookOpen",
      description: "Responsible for research workshops, technical training, and curriculum integration.",
      members: ["Member X", "Member Y"]
    },
    { 
      id: "kemediaan", 
      name: "Kemediaan", 
      head: "Kepala Kemediaan", 
      icon: "Camera",
      description: "Handles social media, documentation, and digital content creation for Robotika Teknokrat.",
      members: ["Member M1", "Member M2"]
    }
  ],
  departments: [
    {
      id: "kri",
      name: "KRI (Kontes Robot Indonesia)",
      head: "Kepala Departemen KRI",
      subs: [
        { name: "KRTMI", desc: "Robot Tematik" }
      ]
    },
    {
      id: "krti",
      name: "KRTI (Kontes Robot Terbang Indonesia)",
      head: "Kepala Departemen KRTI",
      subs: [
        { name: "VTOL", desc: "Vertical Take-Off Landing" },
        { name: "FW", desc: "Fixed Wing" },
        { name: "RP", desc: "Racing Plane" }
      ]
    },
    {
      id: "kki",
      name: "KKI (Kontes Kapal Indonesia)",
      head: "Kepala Departemen KKI",
      subs: [
        { name: "ERC", desc: "Electric Remote Control" },
        { name: "ASV", desc: "Autonomous Surface Vessel" },
        { name: "FERC", desc: "Fuel Engine Remote Control" }
      ]
    }
  ]
};
