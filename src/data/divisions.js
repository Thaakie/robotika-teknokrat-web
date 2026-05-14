export const ALL_DIVISIONS = [
  {
    id: "land",
    name: "LAND DIVISION",
    active: true,
    description: "The Land Division focuses on ground-based autonomous systems, ranging from humanoid dancing robots to multi-legged search and rescue bots. Our mission is to push the boundaries of locomotive stability and intelligent navigation in complex terrains.",
    images: [
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
    ],
    subdivisions: [
      { 
        id: "coe", 
        name: "COE Robotic", 
        desc: "Center of Excellence for basic robotic training.",
        detail: "COE Robotic is the primary training ground for new members. Here, students learn the fundamentals of electronics, programming (Arduino/ESP32), and basic mechanical assembly. It serves as a bridge before entering more specialized competition teams."
      },
      { 
        id: "kri-land", 
        name: "KRI",
        desc: "National level competitive robotics division.",
        detail: "The KRI Land subdivision manages high-performance robots for the Indonesian Robotics Contest. This includes complex humanoid systems and autonomous terrain-navigating machines designed for specific national mission themes.",
        teams: [
          { id: "krsti", name: "KRSTI (Robot Tari)", detail: "Humanoid robots performing traditional Indonesian dances with grace and precision." },
          { id: "krsri", name: "KRSRI (Robot Berkaki)", detail: "Multi-legged robots designed for search and rescue simulations on rough terrain." }
        ]
      }
    ]
  },
  {
    id: "air",
    name: "AIR DIVISION",
    active: true,
    description: "The Air Division is dedicated to aerospace innovation, specifically unmanned aerial vehicles (UAVs). We develop systems for vertical take-off, long-range fixed-wing surveillance, and high-speed racing planes, integrating advanced aerodynamics and flight controllers.",
    images: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1527977966376-1c8418f9f108?auto=format&fit=crop&q=80&w=800"
    ],
    subdivisions: [
      { 
        id: "vtol", 
        name: "VTOL", 
        desc: "Vertical Take-Off and Landing systems.",
        detail: "Our VTOL team develops hybrid aircraft that combine the maneuverability of a multicopter with the efficiency of a fixed-wing plane. Ideal for localized delivery and inspection tasks."
      },
      { 
        id: "fixed-wing", 
        name: "Fixed Wing", 
        desc: "Long-endurance aerial surveillance platforms.",
        detail: "The Fixed Wing team focuses on long-range flight. We design custom airframes optimized for lift and endurance, capable of autonomous waypoint navigation over vast areas."
      },
      { 
        id: "racing-plane", 
        name: "Racing Plane", 
        desc: "High-speed competitive aerial racing.",
        detail: "Speed is the priority here. We engineer aerodynamically sleek planes with high power-to-weight ratios to compete in fast-paced racing tracks, pushing the limits of motor and battery technology."
      },
      { 
        id: "tech-dev", 
        name: "Technology Development", 
        desc: "Research and development of custom flight controllers.",
        detail: "This team supports all Air subdivisions by researching advanced GCS (Ground Control Systems), custom flight algorithms, and integrating AI for object detection and obstacle avoidance."
      }
    ]
  },
  {
    id: "water",
    name: "WATER DIVISION",
    active: true,
    description: "The Water Division explores marine robotics, focusing on autonomous surface vessels (ASV) and remote-controlled racing boats. We specialize in hydrodynamics, water-resistant electronic enclosures, and autonomous maritime navigation systems.",
    images: [
      "https://images.unsplash.com/photo-1544320290-8c9fa90053b8?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1499244015905-ee748374268b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524522173746-f628baad3f44?auto=format&fit=crop&q=80&w=800"
    ],
    subdivisions: [
      { 
        id: "erc", 
        name: "ERC", 
        desc: "Electric Racing Canoe development.",
        detail: "The ERC team focuses on high-speed efficiency in marine environments. We build lightweight, hydrodynamically efficient hulls paired with high-torque electric propulsion systems."
      },
      { 
        id: "asv", 
        name: "ASV", 
        desc: "Autonomous Surface Vessels.",
        detail: "ASV is our flagship water team. We develop fully autonomous boats equipped with LiDAR and computer vision to navigate around obstacles and perform complex maritime missions automatically."
      },
      { 
        id: "ferc", 
        name: "FERC", 
        desc: "Fuel-based Electric Racing Canoe.",
        detail: "Exploring hybrid power systems, FERC focuses on endurance and power delivery for larger-scale maritime robotics, balancing traditional energy with modern electronic control."
      }
    ]
  },
  {
    id: "krsbi",
    name: "DARAT HUMANOID (KRSBI)",
    active: false,
    description: "KRSBI (Kontes Robot Sepak Bola Indonesia) was our elite humanoid division focused on autonomous robotic soccer. This division is currently inactive but remains a key part of our history in humanoid development.",
    images: ["https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=1200"],
    subdivisions: [{ id: "krsbi-sub", name: "Humanoid Soccer", detail: "The pinnacle of humanoid coordination. Our legacy robots were capable of dynamic walking and ball manipulation." }]
  },
  {
    id: "krai",
    name: "AIR DIVISION (KRAI)",
    active: false,
    description: "KRAI focused on domestic aerial robotics competitions. While currently inactive, the research conducted here laid the foundation for our current VTOL and Fixed Wing teams.",
    images: ["https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=1200"],
    subdivisions: [{ id: "krai-sub", name: "Legacy Aerial Systems", detail: "Early development of multicopter and VTOL platforms for national contests." }]
  },
  {
    id: "krtmi",
    name: "LAND DIVISION (KRTMI)",
    active: false,
    description: "KRTMI (Kontes Robot Tematik Indonesia) focused on specialized mission-based ground robots. This division is currently preserved as a legacy research group.",
    images: ["https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200"],
    subdivisions: [{ id: "krtmi-sub", name: "Thematic Robotics", detail: "Custom robots designed for specific tasks like warehouse automation and agricultural assistance." }]
  }
];

export const ACTIVE_DIVISIONS = ALL_DIVISIONS.filter(d => d.active);
export const INACTIVE_DIVISIONS = ALL_DIVISIONS.filter(d => !d.active);
