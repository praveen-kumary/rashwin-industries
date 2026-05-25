

export interface ProductSubItem {
  slug: string;
  modelNo?: string;
  title: string;
}

export interface ProductItem {
  slug: string;
  modelNo?: string;
  title: string;
  image?: string;
  subItems?: ProductSubItem[];
}

export interface ProductSeries {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  items?: ProductItem[];
}

export interface Product {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  series: ProductSeries[];
}

export const products: Product[] = [
  {
    slug: "industrial-pc",
    title: "Industrial PC",
    short: "Fanless, dustproof PCs built for -20°C to +70°C operation.",
    description:
      "Fanless and dustproof design. Operates reliably from -20°C to +70°C. Available with Celeron, Core i3, i5, and i7 CPUs. Features dual gigabit LAN ports for fast and stable networking. Ideal for harsh industrial environments.",
    icon: Cpu,
    series: [
      {
        slug: "industrial-edge-computing",
        title: "Industrial Edge Computing",
        short: "High-performance edge AI gateways for real-time local processing.",
        description:
          "Engineered for heavy-duty edge computing tasks. These rugged systems support advanced machine learning models, real-time data analytics, and sensor fusion directly at the source of data generation.",
        features: [
          "Fanless thermal design with rugged aluminum enclosure",
          "Supports Intel Core or AMD Ryzen embedded processors",
          "Dedicated TPU/GPU expansion slots for Edge AI workloads",
          "Wide range DC-input power protection (9V - 36V)",
          "Rich expansion slots: M.2, Mini-PCIe, and SIM card slots",
        ],
        specifications: {
          Processor: "Intel Core i7-1185G7E / AMD Ryzen V1605B",
          Memory: "Up to 64GB DDR4 SO-DIMM (ECC optional)",
          Storage: '2x M.2 NVMe SSD slots + 1x 2.5" SATA III bay',
          Ethernet: "2x 2.5GbE LAN (Intel i225-IT), 4x 1GbE LAN",
          "Operating Temp": "-20°C to 70°C (-4°F to 158°F)",
          Dimensions: "220mm x 150mm x 65mm",
        },
        items: [
          { slug: "nuc-mini-pc", modelNo: "NUC-MINI-PC", title: "NUC Mini PC", subItems: [
            { slug: "muc-520-f3-i7-1255u", modelNo: "MUC-520-F3-i7-1255U", title: "Intel Core i3-1215U/ i5-1235U/ i7-1255U /DDR5 RAM/ 5 x USB / 1 x USB Type-C/ HDMI" },
            { slug: "muc-520-u5", modelNo: "MUC-520-U5", title: "Thunderbolt MINI PC" },
            { slug: "muc-520-i5-1235u", modelNo: "MUC-520-I5-1235U", title: "Intel Core i3-1215U, i5- 1235U, i7-1260P/DDR4 RAM/ 5 x USB / 1 x USB Type-C/ HDMI" },
          ] },
          {
            slug: "celeron-cpu-industrial-embedded-box-pc",
            modelNo: "CEL-IEB-PC",
            title: "Celeron CPU-Industrial Embedded Box PC",
            subItems: [
              { slug: "mbox-520-c2-l2-v2", modelNo: "MBOX-520-C2-L2 (v2.0) & MBOX-520-C2-L2 (v3.0)", title: "CPU: Celeron J1900/DDR3 RAM/SSD/2*LAN/ 1USB*3.0/5USB*2.0/HDMI/VGA/WIFI" },
              { slug: "mbox-520-c2-l2-v1", modelNo: "MBOX-520-C2-L2 (v1.0)", title: "CPU: Celeron J1900/DDR3 RAM/SSD/2*LAN/ 1USB*3.0/3USB*2.0/HDMI/VGA/WIFI" },
              { slug: "mbox-520-c-4l", modelNo: "MBOX-520-C-4L", title: "CPU: Celeron J1900/DDR3 RAM/SSD/4*LAN/ 1USB*3.0/1USB*2.0/HDMI/VGA/WIFI" },
              { slug: "mbox-520-n3150", modelNo: "MBOX-520-N3150", title: "CPU:Celeron N3150/DDR3/SSD/2*LAN/4USB*3.0/ 2USB*2.0/2HDMI/WIFI" },
              { slug: "mbox-520-j1900-6l", modelNo: "MBOX-520-J1900-6L", title: "CPU:Celeron J1900/DDR3/SSD/6*LAN/1*COM RS232/ 1*COM RS485/4USB*3.0/HDMI/WIFI" },
              { slug: "mbox-520-c4-4l", modelNo: "MBOX-520-C4-4L", title: "CPU: Celeron J4125/DDR4 RAM/SSD/4*LAN/2COM RS232/ 4USB*3.0/1USB*2.0/HDMI/WIFI" },
            ],
          },
          {
            slug: "core-i3-industrial-embedded-box-pc",
            modelNo: "I3-IEB-PC",
            title: "Core i3-Industrial Embedded Box PC",
            subItems: [
              { slug: "mbox-520-i3-4010u", modelNo: "MBOX-520-I3-4010U / MBOX-520-I3-7167U", title: "CPU: Core I3 4th GEN/7th GEN RAM/SSD/1*LAN/4USB*3.0/ 2USB *2.0/ HDMI/VGA/WIFI/ Blue Color" },
              { slug: "mbox-520-i3-6c-6u", modelNo: "MBOX-520-I3-6C-6U", title: "CPU :CORE I3 3rd GEN/5th/6th/7th/8th/10th GEN/DDR3 RAM/SSD/2*LAN/ 6COM RS232/2USB*3.0/2USB*2.0/1HDMI/VGA/WIFI" },
              { slug: "mbox-520-i3-4l-6c", modelNo: "MBOX-520-I3-4L-6C", title: "CPU: Core I3 8th GEN RAM/SSD/4*LAN/6COM RS232/4USB*3.0/4USB *2.0/ HDMI/VGA/WIFI/ Black Color" },
            ],
          },
          {
            slug: "core-i5-industrial-embedded-box-pc",
            modelNo: "I5-IEB-PC",
            title: "Core-i5 Industrial Embedded Box PC",
            subItems: [
              { slug: "en50155-mbox-520-i5", modelNo: "EN50155-MBOX-520-i5-6C-6U-12G", title: "EN50155 Certified Industrial Embedded Box PC" },
              { slug: "mbox-520-m9-blue", modelNo: "MBOX-520-M9-BLUE SERIES", title: "CPU: CORE I5 12th/13th/14th GEN/DDR4 RAM/SSD/2*LAN/ 6COM RS232/4USB*3.0/2USB*2.0/1HDMI/VGA/WIFI" },
              { slug: "mbox-520-i5-6c-6u-2hd", modelNo: "MBOX-520-I5-6C-6U-2HD", title: "CPU :CORE I5 4th GEN/DDR3 RAM/SSD/2*LAN/ 6COM RS232/4USB*3.0/4USB*2.0/2HDMI/WIFI" },
              { slug: "mbox-520-i5-6c-6u", modelNo: "MBOX-520-I5-6C-6U", title: "CPU :CORE I5 5th/6th/7th/8th/10th GEN/DDR4 RAM/SSD/2*LAN/ 6COM RS232/2USB*3.0/4USB*2.0/1HDMI/VGA/WIFI" },
              { slug: "mbox-520-i5-m7-8265u", modelNo: "MBOX-520-I5-M7-8265U", title: "CPU :CORE I5 8th GEN/DDR4 RAM/SSD/2*LAN/ 6COM RS232/4USB*3.0/4USB*2.0/HDMI/WIFI" },
              { slug: "mbox-520-m11-g", modelNo: "MBOX-520-M11-G Series", title: "CPU: CORE I3/I5/I7/I9 10th/11th/12th/13th/14th GEN/DDR4 RAM/SSD/2*LAN/ 6COM/4*USB3.0/2*USB2.0/1HDMI/VGA/WIFI" },
              { slug: "mbox-b5500", modelNo: "MBOX-B5500-Series", title: "CPU: CORE I3/I5/I7/ 4th/6th/7th/8th/10th GEN/DDR3 RAM/SSD/2*LAN/ 6COM/4*USB3.0/4*USB2.0/1HDMI/VGA/WIFI" },
              { slug: "mbox-520-m3", modelNo: "MBOX-520-M3 Series", title: "Industrial Embedded Box PC" },
              { slug: "nino-ip68-g1", modelNo: "NINO-IP68-G1 SERIES", title: "CPU: CORE I3/I5/I7/I9 10th/11th/12th/13th/14th GEN/DDR4 RAM/SSD/LAN/ COM/USB3.0/2*USB2.0/HDMI/VGA/WIFI" },
              { slug: "mbox-520-i5-7267u-l2-6c", modelNo: "MBOX-520-I5-7267U-L2-6C", title: "CPU :CORE I5 7th GEN/DDR4 RAM/SSD/2*LAN/ 2COM RS232/4COM RS485/4USB*3.0/2USB*2.0/ HDMI/VGA/WIFI/GPIO" },
              { slug: "mbox-520-m9-pro-blue", modelNo: "MBOX-520-M9-PRO-BLUE SERIES", title: "CPU: CORE I5 12th/13th/14th GEN/DDR4 RAM/SSD/2*LAN/ 6COM RS232/4USB*3.0/2USB*2.0/1HDMI/VGA/WIFI" },
              { slug: "mbox-520-i5-4l-6c", modelNo: "MBOX-520-I5-4L-6C", title: "CPU: Core I5 8th GEN RAM/SSD/4*LAN/4USB*3.0/4USB *2.0/ HDMI/VGA/WIFI/ Black Color" },
              { slug: "mbox-520-i5-10g-4l", modelNo: "MBOX-520-i5-1OG-4L", title: "CPU :CORE I5 10th GEN/DDR4 RAM/SSD/4*LAN/ 2COM RS232/4COM RS485/4USB*3.0/2USB*2.0/ HDMI/VGA/WIFI/GPIO" },
            ],
          },
          {
            slug: "core-i7-industrial-embedded-box-pc",
            modelNo: "I7-IEB-PC",
            title: "Core i7-Industrial Embedded Box PC",
            subItems: [
              { slug: "mbox-520-i7-m7-1165g7", modelNo: "MBOX-520-I7-M7-1165G7", title: "CPU :CORE I7 11th GEN/DDR4 RAM/SSD/2*LAN/ 6COM RS232/4USB*3.0/4USB*2.0/HDMI/WIFI" },
              { slug: "mbox-520-i7-8250u-l2-6c", modelNo: "MBOX-520-I7-8250U-L2-6C /MBOX-520-I7-10510U-L2-6C", title: "CPU :CORE I7 8th GEN/10th GEN/DDR4 RAM/SSD/2*LAN/ 2COM RS232/4COM RS485/4USB*3.0/2USB*2.0/ HDMI/VGA/WIFI/GPIO" },
              { slug: "mbox-520-i7-6c-6u-10g", modelNo: "MBOX-520-I7-6C-6U-10G", title: "CPU :CORE I7 10th GEN/DDR4 RAM/SSD/4*LAN/ 2COM RS232/4COM RS485/4USB*3.0/2USB*2.0/ HDMI/VGA/WIFI/GPIO" },
              { slug: "mbox-520-i7-6c-6u-13g", modelNo: "MBOX-520-I7-6C-6U-13G", title: "CPU :CORE I7 13th GEN/DDR4 RAM/SSD/2*LAN/ 6COM RS232/6COM RS485/4USB*3.0/2USB*2.0/ HDMI/VGA/WIFI/GPIO" },
            ],
          },
          { slug: "digital-signage-ops-pc", modelNo: "DS-OPS-PC", title: "Digital Signage OPS PC", subItems: [
            { slug: "ops-520-i5-4200m", modelNo: "OPS-520-I5-4200M", title: "Intel Core i5 /i3 /i7 GEN /DDR3 RAM/ 4 x USB / HDMI" },
          ] },
          {
            slug: "industrial-ai-embedded-box-pc-with-graphics-card",
            modelNo: "AI-IEB-GPU",
            title: "Industrial Al Embedded Box PC With Graphics Card",
            subItems: [
              { slug: "mbox-520-ai-z-12g", modelNo: "MBOX-520-AI-Z-12G", title: "Z-Series IPC-A Quad-Slot Version" },
              { slug: "mbox-520-ai-6789g", modelNo: "MBOX-520-AI-6789G", title: "Industrial Edge Computing With Graphics Card" },
              { slug: "mbox-520-i7-2pci", modelNo: "MBOX-520-I7-2PCI", title: "CPU :CORE I7 6500U/DDR4 RAM/SSD/2*LAN/ COM RS232/2USB*3.0/4USB*2.0/HDMI VGA/1*PCIE/Blue Color" },
              { slug: "mbox-520-mz-ai-1234g", modelNo: "MBOX-520-MZ-AI-1234G", title: "MZ Series Industrial Edge Computing" },
              { slug: "mbox-520-pz-ai-i9-9g", modelNo: "MBOX-520-PZ-AI-i9-9G", title: "PZ Series AI Edge Computing" },
              { slug: "mbox-520-pcie-itx-1011g", modelNo: "MBOX-520-PCIE-ITX-1011G", title: "Industrial BOX PC With Graphics Card" },
              { slug: "mbox-520-gpu-i-89g", modelNo: "MBOX-520-GPU-i-89G", title: "Edge AI GPU Computing" },
            ],
          },
          {
            slug: "core-i9-industrial-embedded-box-pc",
            modelNo: "I9-IEB-PC",
            title: "Core i9-Industrial Embedded Box PC",
            subItems: [
              { slug: "mbox-520-i9-3l-6c-12u", modelNo: "MBOX-520-i9-3L-6C-12U", title: "Core I9-Industrial Embedded Box PC" },
            ],
          },
          {
            slug: "jetson-nvidia-mini-ai-edge-computing",
            modelNo: "JETSON-NVIDIA",
            title: "JETSON-NVIDIA MINI AI Edge Computing",
            subItems: [
              { slug: "mt-520-jetson-nvidia-4c", modelNo: "MT-520-JETSON NVIDIA-4C-128GC-4R-16S", title: "JETSON-NVIDIA MINI AI edge computing" },
              { slug: "mt-520-jetson-nvidia-6c", modelNo: "MT-520-JETSON- NVIDIA-6C-384GC-8R-16S", title: "JETSON-NVIDIA MINI AI edge computing" },
            ],
          },
        ],
      },
      {
        slug: "industrial-touch-panel-pc",
        title: "Industrial Touch Panel PC",
        short: "IP65-rated human-machine interfaces with multi-touch displays.",
        description:
          "A robust HMI panel solution combining heavy-duty touchscreen technology with high-efficiency computing. Features front bezel IP65 liquid/dust protection, ideal for factory automation, control cabins, and kiosks.",
        features: [
          "True-flat front panel with IP65 water & dust resistance",
          "Projected Capacitive (P-Cap) or 5-wire resistive multi-touch",
          "Wide screen display options with high brightness backlight",
          "Fanless system powered by low power consumption processor",
          "VESA and panel mounting support for versatile deployment",
        ],
        specifications: {
          Display: '15.6" TFT LCD, 1920 x 1080 (optional 1000 nits high-bright)',
          Processor: "Intel Elkhart Lake Celeron J6412 / Core i5-1145GRE",
          Touch: "Projected Capacitive Multi-touch (10 points)",
          I_O: "4x USB 3.2, 2x COM (RS-232/422/485), 2x GbE LAN, 1x HDMI",
          "Power Input": "12V/24V DC input with terminal block",
          Mounting: "Panel mount, VESA mount (75 x 75 mm / 100 x 100 mm)",
        },
        items: [
          { slug: "industrial-touch-panel-pc-r", modelNo: "ITP-R", title: "Industrial Touch Panel PC R", subItems: [
            { slug: "mipc-8000t-r", modelNo: "MIPC-8000T-R", title: "8 Inch Touch Panel PC" },
            { slug: "mipc-1010t-r", modelNo: "MIPC-1010T-R", title: "10.1 Inch Industrial Panel PC" },
            { slug: "mipc-1040t-r", modelNo: "MIPC-1040T-R", title: "10.4 Inch Touch Panel PC" },
            { slug: "mipc-1210t-r", modelNo: "MIPC-1210T-R", title: "12.1 Inch Touch Panel PC" },
            { slug: "mipc-1500t-r", modelNo: "MIPC-1500T-R", title: "15 Inch Touch Panel PC" },
            { slug: "mipc-1560t-r", modelNo: "MIPC-1560T-R", title: "15.6 Inch Touch Panel PC" },
            { slug: "mipc-1700t-r", modelNo: "MIPC-1700T-R", title: "17 Inch Touch Panel PC" },
            { slug: "mipc-1850t-r", modelNo: "MIPC-1850T-R", title: "18.5 Inch Touch Panel PC" },
            { slug: "mipc-1900t-r", modelNo: "MIPC-1900T-R", title: "19 Inch Touch Panel PC" },
            { slug: "mipc-2150t-r", modelNo: "MIPC-2150T-R", title: "21.5 Inch Touch Panel PC" },
            { slug: "mipc-2400t-r", modelNo: "MIPC-2400T-R", title: "24 Inch Touch Panel PC" },
            { slug: "mipc-2700t-r", modelNo: "MIPC-2700T-R", title: "27 Inch Touch Panel PC" },
            { slug: "mipc-3200t-r", modelNo: "MIPC-3200T-R", title: "32 Inch Touch Panel PC" },
          ] },
          { slug: "flame-proof-panel-pc", modelNo: "FP-PPC", title: "Flame Proof Panel PC", subItems: [
            { slug: "atex-mipc-1560t-r", modelNo: "ATEX-MIPC-1560T-R", title: "Industrial Grade Flame Proof Panel PC" },
            { slug: "mipc-1700t-flame-proof", modelNo: "MIPC-1700T", title: "17 Inch Industrial Grade Flame Proof Panel PC" },
          ] },
          {
            slug: "industrial-waterproof-touch-panel-pc",
            modelNo: "IWP-TPC",
            title: "Industrial Waterproof Touch Panel PC",
            subItems: [
              { slug: "mipc-1500t-r-ip66", modelNo: "MIPC-1500T-R-IP66", title: "Waterproof Panel PC" },
            ],
          },
          {
            slug: "industrial-touch-panel-pc-8k-series",
            modelNo: "ITP-8K",
            title: "Industrial Touch Panel PC 8K Series",
            subItems: [
              { slug: "mipc-1040t-8k-r", modelNo: "MIPC-1040T-8K-R", title: "Industrial Touch Panel PC 10.4 Inch" },
              { slug: "mipc-1500t-8k-r", modelNo: "MIPC-1500T-8K-R", title: "Industrial Touch Screen Monitor 15 Inch" },
              { slug: "mipc-2150t-8k-r", modelNo: "MIPC-2150T-8K-R", title: "Industrial Touch Panel PC 21.5 Inch" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "industrial-rackmount-pc",
    title: "Industrial Rackmount PC and Workstation PC",
    short: "Powerful 1U–4U chassis for server rooms and control cabinets.",
    description:
      "Powerful and space-efficient computing solutions. Available in industrial rackmount chassis sizes of 1U, 2U, 3U, and 4U. Perfect for server rooms, data centers, and industrial control cabinets.",
    icon: Server,
    series: [
      {
        slug: "industrial-server-motherboard",
        title: "Industrial Server Motherboard",
        short: "ATX and SSI-EEB motherboards engineered for continuous 24/7 operations.",
        description: "",
        features: [
          "Supports dual Intel Xeon Scalable or AMD EPYC processors",
          "Industrial components selected for 24/7/365 server workloads",
          "Extensive PCIe Gen 5.0 lanes for graphics and accelerator cards",
          "Rich IPMI 2.0 management interface with dedicated LAN port",
          "Long lifecycle availability (up to 7-10 years support)",
        ],
        specifications: {
          Form_Factor: "ATX / E-ATX / SSI-EEB",
          Socket: "LGA 4677 (Intel) / Socket SP5 (AMD)",
          Memory_Slots: "16x DDR5 ECC RDIMM slots (Up to 4TB)",
          Expansion: "4x PCIe 5.0 x16, 2x PCIe 5.0 x8 slots",
          Storage_I_O: "8x SATA III, 4x SlimSAS (PCIe Gen5 x4)",
          Networking: "2x 10GbE SFP+ ports, 2x 1GbE RJ45 ports",
        },
        items: [
          { slug: "mt-ser-mb-600-xe", modelNo: "MT-SER-MB-600-XE", title: "Industrial Server Motherboard" },
          { slug: "mt-ser-mb-620-xe", modelNo: "MT-SER-MB-620-XE", title: "Industrial Server Motherboard" },
          { slug: "mt-ser-mb-810-xe", modelNo: "MT-SER-MB-810-XE", title: "Industrial Server Motherboard" },
          { slug: "mt-ser-mb-920-xe", modelNo: "MT-SER-MB-920-XE", title: "Industrial Server Motherboard" },
        ],
      },
      {
        slug: "android-motherboard",
        title: "Android Motherboard",
        short: "ARM-based embedded boards for smart displays, digital signage, and IoT.",
        description:
          "Cost-effective ARM motherboards running Android or Linux. Ideal for interactive retail kiosks, smart vending systems, facial recognition terminals, and digital signage players.",
        features: [
          "Powered by high-performance Rockchip RK3588/RK3568 SoC",
          "Built-in neural processing unit (NPU) for local AI tasks",
          "Multiple video outputs supporting dual/triple independent displays",
          "Integrated Wi-Fi, Bluetooth, and cellular modules support",
          "Industrial-grade EMC and static protection circuits",
        ],
        specifications: {
          Processor: "Rockchip RK3588 Octa-core (Cortex-A76 + Cortex-A55)",
          NPU: "6.0 TOPs computing power",
          OS: "Android 12 / Debian 11 / Ubuntu 20.04",
          Display_Outputs: "1x HDMI (8K), 1x eDP, 1x LVDS, 1x MIPI DSI",
          I_O: "4x USB 2.0, 1x USB 3.0 OTG, 2x TTL Serial, 1x RS-232",
          Networking: "Gigabit Ethernet, Wi-Fi 6, BT 5.2, 4G LTE Slot",
        },
        items: [
          { slug: "mt-520-and-11", modelNo: "MT-520-AND-11", title: "Android Motherboard" },
          { slug: "mt-520-and", modelNo: "MT-520-AND", title: "Android Motherboard" },
        ],
      },
      {
        slug: "industrial-rackmount-server-pc",
        title: "Industrial Rackmount Server PC",
        short: "Standard 1U-4U rackmount servers for database, surveillance, and control.",
        description:
          "Completely integrated industrial rackmount PC servers. Available in standard 1U, 2U, and 4U chassis with redundant power supplies, hot-swappable drive bays, and active shock-dampening disk cages.",
        features: [
          "Heavy-duty SECC steel rackmount chassis (1U to 4U options)",
          "Hot-swappable SATA/SAS/NVMe drive bays with RAID support",
          "1+1 redundant 80 Plus Platinum power supplies",
          "Anti-vibration and shock-resistant chassis structural layout",
          "Advanced dust filter and high-volume cooling fan configuration",
        ],
        specifications: {
          Chassis: "4U Rackmount (Standard 19-inch cabinet mounting)",
          Motherboard: "Industrial ATX Board with Intel Q670E chipset",
          CPU: "Intel Core i9-13900 / Xeon W-2400 Series",
          Power_Supply: "800W Dual Redundant Hot-Swap PSU",
          Storage: '4x 3.5" Hot-Swap bays + 2x Internal M.2 SSD',
          Cooling: "3x 120mm ball-bearing fans with washable filters",
        },
        items: [
          { slug: "mt-3u-g3450", modelNo: "MT-3U-G3450", title: "3U Rackmount Chassis" },
          { slug: "mipc-610t-4u", modelNo: "MIPC-610T-4U", title: "4U Rackmount Chassis" },
          { slug: "mt-itpc-t8", modelNo: "MT-ITPC-T8", title: "Towercase Industrial Chassis" },
          { slug: "mt-4u-k445c-19", modelNo: "MT-4U-K445C-19", title: "4U 19inch Industrial Rackmount Chassis" },
          { slug: "mipc-u3500", modelNo: "MIPC-U3500", title: "Industrial Computer Chassis" },
          { slug: "mt-5u-k545n", modelNo: "MT-5U-K545N", title: "5U 19 inch Rackmount Chassis" },
          { slug: "mt-5u-k550df", modelNo: "MT-5U-K550DF", title: "5U Rackmount Chassis" },
          { slug: "mipc-r266-2u", modelNo: "MIPC-R266-2U", title: "Industrial 2U 8 Bays Hot swap Server Chassis" },
          { slug: "mipc-u3300", modelNo: "MIPC-U3300", title: "Industrial Computer Chassis" },
          { slug: "mt-3u-r366-16", modelNo: "MT-3U-R366-16", title: "Industrial 3U 16 Bays Hot swap Server Chassis" },
          { slug: "mt-4u-r466-24", modelNo: "MT-4U-R466-24", title: "Industrial 4U 24 Bays Hot swap Server Chassis" },
        ],
      },
      {
        slug: "industrial-rugged-laptop-gpu",
        title: "Industrial Rugged Laptop With GPU",
        short: "Drop-proof, MIL-STD-810H certified field laptops with dedicated GPU.",
        description:
          "Heavy-duty field laptops built to survive drops, water splashes, mud, and extreme vibration. Fitted with high-bright sunlight readable displays and powerful NVIDIA dedicated graphics for GIS and onsite diagnostic tasks.",
        features: [
          "Fully rugged MIL-STD-810H and IP65 dust/water certified",
          "1000-nits sunlight-readable display with glove-touch support",
          "Dedicated NVIDIA GeForce RTX or Quadro GPU for field computations",
          "Dual hot-swappable batteries for true continuous wireless usage",
          "Built-in legacy serial ports (RS-232) and modern connectivity",
        ],
        specifications: {
          Display: '15.6" FHD (1920x1080), Sunlight readable capacitive touch',
          Processor: "Intel Core i7-12700H (Up to 4.7GHz)",
          Graphics: "NVIDIA GeForce RTX 3050 Ti / RTX A2000 Embedded",
          Memory: "32GB DDR5 SO-DIMM (Max 64GB)",
          Durability: "6ft (1.8m) drop resistant, IP66 dust/water splash rated",
          I_O: "2x RS-232 COM, 1x HDMI, 3x USB 3.2 Gen2, 1x Thunderbolt 4",
        },
        items: [
          { slug: "mt-520-b5", modelNo: "MT-520-B5", title: "LCD display Computer with 21.5-Inch LCD for 4080 4090 GPU" },
          { slug: "mt-520-b31", modelNo: "MT-520-B31", title: "Panel PC Server Case With LCD Display And keyboard 7 Full Height PCIE Slot" },
          { slug: "mt-520-b43", modelNo: "MT-520-B43", title: "Ruggedized trifold computer offers three 18.5 1920 x 1080 resolution LCD displays" },
          { slug: "mt-520-b21", modelNo: "MT-520-B21", title: "16.1 inch server chassis rugged laptop rugged type chassis" },
          { slug: "mt-520-b41", modelNo: "MT-520-B41", title: "Industrial Portable PC Screen Size 17.3 Inches with 1920*1080 resolution" },
          { slug: "mt-520-b4", modelNo: "MT-520-B4", title: "Industrial Rugged laptop with GPU" },
          { slug: "mt-520-b43s", modelNo: "MT-520-B43S", title: "Ultra Rugged Multi-Slot Portable PC with 17.3 inch Full HD 1080p LCD" },
        ],
      },
      {
        slug: "industrial-motherboards",
        title: "Industrial Motherboards",
        short: "Mini-ITX, Micro-ATX, and ATX boards with rich legacy I/O support.",
        description:
          "Standard form-factor industrial motherboards designed to fit various custom cases. These motherboards feature high-density I/O configurations, legacy PCI expansion slots, and extended temperature grade components.",
        features: [
          "Available in ATX, Micro-ATX, and Mini-ITX form factors",
          "Wide selection of legacy slots: PCI, PCIe Gen 3/4, ISA interfaces",
          "Watchdog timer, hardware monitoring, and GPIO pins",
          "Constructed with gold-plated connectors and solid capacitors",
          "Strict revision control to ensure long-term replacement compatibility",
        ],
        specifications: {
          Form_Factor: "Mini-ITX (170mm x 170mm)",
          Chipset: "Intel H610E / Q670E Industrial Chipset",
          Socket: "LGA 1700 supporting 12th/13th Gen Intel Core",
          Display: "1x HDMI, 1x DisplayPort, 1x LVDS (Dual-channel 24-bit)",
          COM_Ports: "6x Serial COM ports (5x RS-232, 1x RS-232/422/485)",
          Expansion: "1x PCIe x16 slot, 1x M.2 Key M, 1x M.2 Key E (Wi-Fi)",
        },
        items: [
          { slug: "industrial-atx-motherboard", title: "Industrial ATX Motherboard", subItems: [
            { slug: "mb-atx-4g-h81", modelNo: "MB-ATX-4G-H81", title: "Industrial ATX Motherboard" },
            { slug: "mb-atx-1314g-h610", modelNo: "MB-ATX-1314G-H610", title: "Industrial ATX Motherboard" },
            { slug: "mb-atx-6789g-h110", modelNo: "MB-ATX-6789G-H110", title: "Industrial ATX Motherboard" },
            { slug: "mb-520-i7-1165g7-4hd", modelNo: "MB-520-i7-1165G7-4HD", title: "Industrial 4HDMI motherboard" },
            { slug: "mb-atx-1314g-q670", modelNo: "MB-ATX-1314G-Q670", title: "Industrial Motherboard" },
            { slug: "mb-atx-1314g-h610-4pci", modelNo: "MB-ATX-1314G-H610-4PCI", title: "Industrial Motherboard" },
            { slug: "mb-520-pce-5132", modelNo: "MB-520-PCE-5132", title: "PICMG1.3 Full-Size SHB Backplane Motherboard" },
            { slug: "mb-atx-23g-b75", modelNo: "MB-ATX-23G-B75", title: "Industrial ATX Motherboard" },
            { slug: "mt-atx-1011g-h570", modelNo: "MT-ATX-1011G-H570", title: "Industrial ATX Motherboard" },
          ] },
          { slug: "xeon-industrial-motherboard", title: "XEON Industrial Motherboard", subItems: [
            { slug: "mt-520-1590", modelNo: "MT-520-1590", title: "XEON Industrial Motherboard" },
            { slug: "mb-atx-xeon-c262", modelNo: "MB-ATX-XEON-C262", title: "Industrial Server ATX Motherboard" },
            { slug: "mb-atx-xeon-r680e", modelNo: "MB-ATX-XEON-R680E", title: "Industrial ATX Motherboard" },
          ] },
          { slug: "micro-atx-industrial-motherboard", title: "micro ATX Industrial Motherboard", subItems: [
            { slug: "mb-matx-1314g-q670", modelNo: "MB-mATX-1314G-Q670", title: "Micro ATX Industrial Motherboard" },
            { slug: "mt-matx-23g-b75", modelNo: "MT-mATX-23G-B75", title: "Micro ATX Industrial Motherboard" },
            { slug: "mb-matx-1314g-h610", modelNo: "MB-mATX-1314G-H610", title: "Industrial Micro ATX MotherBoard" },
            { slug: "mt-matx-23g-q77m3", modelNo: "MT-mATX-23G-Q77M3", title: "Micro ATX Industrial Motherboard" },
            { slug: "mt-matx-6789g-q250", modelNo: "MT-mATX-6789G-Q250", title: "Micro ATX Industrial Motherboard" },
          ] },
          { slug: "industrial-mini-itx-motherboard", title: "Industrial MINI ITX Motherboard", subItems: [
            { slug: "mb-520-mitx-i7-4hd", modelNo: "MB-520-MITX-i7-4HD", title: "Industrial MINI ITX Motherboard" },
            { slug: "mt-520-i7-6500u-2l", modelNo: "MT-520-I7-6500U-2L", title: "Industrial Mini ITX Motherboard" },
            { slug: "mt-520-qm6300-6c", modelNo: "MT-520-QM6300-6C", title: "Industrial Mini ITX Motherboard" },
            { slug: "mt-itx-6789g-3600", modelNo: "MT-ITX-6789G-3600", title: "Industrial MINI ITX Motherboard" },
            { slug: "mb-520-i3-8130u", modelNo: "MB-520-I3-8130U", title: "Industrial Mini ITX Motherboard" },
            { slug: "mb-520-i3-6100u", modelNo: "MB-520-I3-6100U", title: "Industrial Mini ITX Motherboard" },
            { slug: "mt-520-6600", modelNo: "MT-520-6600", title: "Industrial Mini ITX MotherBoard" },
            { slug: "mt-520-11u", modelNo: "MT-520-11U", title: "Industrial Mini ITX MotherBoard" },
            { slug: "mh-520-j1900-4l", modelNo: "MH-520-J1900-4L", title: "Industrial ITX Motherboard" },
            { slug: "mt-itx-hb1011g", modelNo: "MT-ITX-HB1011G", title: "Industrial Mini ITX Motherboard" },
            { slug: "mt-520-j1900", modelNo: "MT-520-J1900", title: "Industrial Mini ITX Motherboard" },
            { slug: "mt-itx-1213g-h610", modelNo: "MT-ITX-1213G-H610", title: "Industrial MINI ITX Motherboard" },
            { slug: "mb-520-i7-7500u", modelNo: "MB-520-i7-7500U", title: "Industrial MINI ITX Motherboard" },
          ] },
          { slug: "isa-slot-motherboard", title: "ISA SLOT Motherboard", subItems: [
            { slug: "kh-845-3isa", modelNo: "KH-845 3ISA", title: "ISA Slot Motherboard" },
            { slug: "mt-kh-945-isa-core2duo", modelNo: "MT-KH-945-ISA_CORE2DUO", title: "ISA Slot Motherboard" },
          ] },
          { slug: "industrial-mini-3-5-inch-motherboards", title: "Industrial MINI 3.5 Inch Motherboards", subItems: [
            { slug: "mt-520-3-5-j1900-en50155-v2", modelNo: "MT-520-3.5-J1900-EN50155(V2.0)", title: "Industrial MINI 3.5 Inch Motherboard" },
            { slug: "mb-520-j1900-3-5-en50155", modelNo: "MB-520-J1900-3.5-EN50155", title: "Industrial MINI 3.5 Inch EN50155 Standard Motherboard" },
            { slug: "mb-520-3-5-j1900", modelNo: "MB-520-3.5-J1900", title: "Industrial MINI 3.5 Inch Motherboard" },
          ] },
        ],
      },
      {
        slug: "amd-ryzen-motherboard",
        title: "AMD Ryzen Motherboard",
        short: "Industrial grade Ryzen boards optimized for graphic rendering and AI.",
        description:
          "Specially optimized motherboards supporting AMD Ryzen AM4/AM5 desktop and embedded chips. Outstanding integrated graphics performance and core densities make them ideal for medical imaging and machine vision.",
        features: [
          "Supports AMD Ryzen 5000 / 7000 Series processors",
          "Integrated Radeon Vega / RDNA graphics with multi-4K video out",
          "Support for ECC (Error-Correcting Code) DDR5 memory modules",
          "Optimized power phase design for high stability under heavy load",
          "Wide operating humidity and temperature limits",
        ],
        specifications: {
          Form_Factor: "Micro-ATX (244mm x 244mm)",
          Socket: "AM5 Socket supporting AMD Ryzen Embedded / Desktop",
          Memory: "4x DDR5 DIMM slots, Supports ECC, Up to 128GB",
          Video: "2x DisplayPort 1.4, 1x HDMI 2.1 (supports triple 4K output)",
          SATA: "4x SATA III + 2x M.2 PCIe Gen4 x4 NVMe",
          I_O: "4x USB 3.2 Gen2, 4x USB 2.0, 4x COM, 1x 8-bit GPIO",
        },
        items: [
          { slug: "mt-520-ryz-r2000", modelNo: "MT-520-RYZ-R2000 Series", title: "AMD Ryzen Motherboard" },
          { slug: "mt-520-ryz-v2000", modelNo: "MT-520-RYZ-V2000 Series", title: "AMD Ryzen Motherboard" },
          { slug: "mt-520-ryz-b650", modelNo: "MT-520-RYZ-B650 Series", title: "AMD Ryzen Motherboard" },
        ],
      },
    ],
  },
  {
    slug: "industrial-touch-screen-display",
    title: "Industrial Touch Screen Display",
    short: 'High-durability touch displays from 18.5" to 65".',
    description:
      "High-durability touch screen displays suitable for kiosks, control rooms, and interactive terminals. Available sizes include 18.5, 21.5, 32, 43, 55, and 65 inches.",
    icon: Monitor,
    series: [
      {
        slug: "touch-screen-kiosk",
        title: "Touch Screen Kiosk",
        short: "Interactive self-service kiosks for reception, ticketing, and factory gates.",
        description:
          "Freestanding or wall-mounted interactive kiosks. Built with scratch-resistant powder-coated steel enclosures, vandal-proof touch sensors, and integrated space for scanners and thermal printers.",
        features: [
          "Heavy-gauge sheet steel structure with sleek powder coat finish",
          "Vandal-proof tempered safety glass with anti-glare coating",
          "Internal hardware integration space for mini PCs, routers, and power",
          "Optional peripherals: Barcode scanner, thermal receipt printer, card reader",
          "Easy access rear door lock system for maintenance and upgrades",
        ],
        specifications: {
          Display: '32" / 43" / 55" Large TFT LED panel, 1080p / 4K resolution',
          Touch: "Projected Capacitive (10 points, anti-vandal 4mm glass)",
          Cabinet: "1.5mm cold-rolled steel cabinet with key lock door",
          Speaker: "2x 5W stereo speakers built-in",
          Cooling: "Dual 80mm exhaust fans for internal PC compartment",
          Colors: "Industrial grey / Matte black / Custom powder-coat options",
        },
        items: [
          { slug: "industrial-touch-screen-kiosk", title: "Industrial Touch Screen Kiosk", subItems: [
            { slug: "mt-kiosk-1850t", modelNo: "MT-KIOSK-1850T", title: "18.5 Inch Touch Screen Kiosk" },
            { slug: "mt-kiosk-2150t", modelNo: "MT-KIOSK-2150T", title: "21.5 Inch Touch Screen Kiosk" },
            { slug: "mt-kiosk-3200t", modelNo: "MT-KIOSK-3200T", title: "32 Inch Touch Screen Kiosk" },
            { slug: "kiosk-4300", modelNo: "KIOSK-4300", title: "43 Inch Touch Screen Kiosk" },
            { slug: "kiosk-5500t", modelNo: "KIOSK-5500T", title: "55 Inch Touch Screen Kiosk" },
          ] },
        ],
      },
      {
        slug: "touch-screen",
        title: "Touch Screen",
        short: "Replacement touch overlays and OEM touch sensors for system builders.",
        description:
          "Bare touch overlays (capacitive and resistive) designed to upgrade standard non-touch screens into fully touch-capable interfaces. Includes specialized industrial controllers for high EMI immunity.",
        features: [
          "Highly accurate coordinate mapping with minimal drift",
          "Resistant to contaminants like grease, dust, water, and solvents",
          "Supports operation with bare fingers, latex gloves, and styluses",
          "High light transmittance (90%+) preserving panel brightness",
          "Supplied with professional controller board and USB cables",
        ],
        specifications: {
          Technology: "5-Wire Resistive / Projective Capacitive (P-Cap)",
          Transparency: "Resistive: 80% - 85%; P-Cap: > 90%",
          Surface_Hardness: "Resistive: 3H; P-Cap: 7H (tempered glass)",
          Controller: "EETI / Microchip controller board with USB driver",
          Driver_OS: "Windows XP/7/10/11, Linux (Ubuntu/Debian), Android",
          MTBF: "Resistive: 35 million touches; P-Cap: 50 million touches",
        },
        items: [
          { slug: "resistive-touch-screen", title: "Resistive Touch Screen", subItems: [
            { slug: "5-wire-resistive", modelNo: "5 WIRE", title: "Resistive Touch Screen" },
          ] },
          { slug: "capacitive-touch-screen", title: "Capacitive Touch Screen", subItems: [
            { slug: "mt-pcap-0840", modelNo: "MT-PCAP-0840", title: "8.4 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-1010", modelNo: "MT-PCAP-1010", title: "10.1 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-1040", modelNo: "MT-PCAP-1040", title: "10.4 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-1160", modelNo: "MT-PCAP-1160", title: "11.6 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-1210", modelNo: "MT-PCAP-1210", title: "12.1 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-1330", modelNo: "MT-PCAP-1330", title: "13.3 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-1500", modelNo: "MT-PCAP-1500", title: "15 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-1560", modelNo: "MT-PCAP-1560", title: "15.6 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-1700", modelNo: "MT-PCAP-1700", title: "17 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-1850", modelNo: "MT-PCAP-1850", title: "18.5 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-1900", modelNo: "MT-PCAP-1900", title: "19 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-2150", modelNo: "MT-PCAP-2150", title: "21.5 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-2380", modelNo: "MT-PCAP-2380", title: "23.8 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-2700", modelNo: "MT-PCAP-2700", title: "27 Inch PCAP Touch Screen" },
            { slug: "mt-pcap-3200", modelNo: "MT-PCAP-3200", title: "32 Inch PCAP Touch Screen" },
            { slug: "pcap", modelNo: "PCAP", title: "Capacitive Touch Screen" },
          ] },
          { slug: "ir-touch-screen", title: "IR Touch Screen", subItems: [
            { slug: "ir-touchscreen", title: "Infrared Touchscreen" },
          ] },
        ],
      },
      {
        slug: "touch-screen-monitor",
        title: "Touch Screen Monitor",
        short: "Panel-mount and open-frame touch displays for industrial equipment integration.",
        description:
          "Rugged LCD monitors with integrated touch screens designed for flush mounting into consoles, cabinets, and machinery interfaces. Features dust-proof gaskets and chemical-resistant glass surfaces.",
        features: [
          "NEMA 4 / IP65 water-resistant front bezel surface sealing",
          "Resistive and capacitive touch interfaces with USB/RS232 drivers",
          "High shock and vibration resistance suitable for machinery mounts",
          "Multiple input signals: VGA, DVI, HDMI, and DisplayPort",
          "Wide viewing angles with high-contrast LED backlights",
        ],
        specifications: {
          Sizes: '12.1", 15", 17", 18.5", 21.5" widescreen formats',
          Enclosure: "Heavy-duty aluminum front bezel + SECC back cover",
          Touch_Tech: "10-Point Projective Capacitive Touch / Resistive touch",
          Interface: "USB (standard) / RS-232 Serial touch controller",
          Power: "12V DC input with external AC-DC power adapter",
          Mounting: "Panel mount (clamps included), VESA 75/100 mount",
        },
        items: [
          { slug: "mipm-1500t", modelNo: "MIPM-1500T", title: "Industrial Touch Screen Monitor 15 Inch" },
          { slug: "mipm-1040t", modelNo: "MIPM-1040T", title: "Industrial Touch Screen Monitor 10.4 Inch" },
          { slug: "mipm-1560t", modelNo: "MIPM-1560T", title: "Industrial Touch Screen Monitor 15.6 Inch" },
          { slug: "mipm-2380t", modelNo: "MIPM-2380T", title: "Industrial Touch Screen Monitor 23.8 Inch" },
          { slug: "mipm-3200t", modelNo: "MIPM-3200T", title: "Industrial Touch Screen Monitor 32 Inch" },
          { slug: "mim-5k-2150-t", modelNo: "MIM-5K-2150-T", title: "Industrial-Grade Embedded Fanless Touch Monitor" },
          { slug: "mipm-1010t", modelNo: "MIPM-1010T", title: "Industrial Touch Screen Monitor 10.1 Inch" },
          { slug: "mipm-1210t", modelNo: "MIPM-1210T", title: "Industrial Touch Screen Monitor 12.1 Inch" },
          { slug: "mipm-1700t", modelNo: "MIPM-1700T", title: "Industrial Touch Screen Monitor 17 Inch" },
          { slug: "mipm-2150t", modelNo: "MIPM-2150T", title: "Industrial Touch Screen Monitor 21.5 inch" },
          { slug: "mipm-1900t", modelNo: "MIPM-1900T", title: "Industrial Touch Screen Monitor 19 Inch" },
          { slug: "mipm-1850t", modelNo: "MIPM-1850T", title: "Industrial Touch Screen Monitor 18.5 Inch" },
        ],
      },
    ],
  },
  {
    slug: "industrial-data-communication",
    title: "Industrial Data Communication Products",
    short: "Reliable digital data transmission across industrial channels.",
    description:
      "Designed for efficient data transmission and reception over point-to-point or point-to-multipoint communication channels. Handles digital bitstream and digitized analog signals for reliable industrial networking.",
    icon: Network,
    series: [
      {
        slug: "industrial-serial-device-server",
        title: "Industrial Serial Device Server",
        short: "1, 2, 4, or 8-port RS-232/422/485 serial-to-Ethernet converters.",
        description:
          "Enables legacy serial devices (PLCs, scales, sensors) to communicate over Ethernet networks. Supports Virtual COM port drivers, TCP Server/Client, UDP, and raw socket connection modes.",
        features: [
          "Auto-detecting 10/100M Ethernet ports with 1.5KV magnetic isolation",
          "Software selectable RS-232, RS-422, and RS-485 interfaces",
          "Virtual COM driver support for legacy industrial applications",
          "Rugged metal housing with DIN-rail and wall mounting options",
          "Wide operational temperature (-40°C to +85°C) options",
        ],
        specifications: {
          Serial_Ports: "1 / 2 / 4 / 8-port options (DB9 or Terminal block)",
          Baud_Rate: "50 bps to 921.6 Kbps",
          Ethernet: "1x or 2x 10/100Base-T(X) RJ45 auto-sensing ports",
          Isolation: "2KV ESD protection + 1.5KV serial isolation",
          Configuration: "Web console, Telnet, Serial Console, Windows Utility",
          Power_Input: "9V to 48V DC, redundant terminal blocks",
        },
        items: [
          { slug: "mt-np301", modelNo: "MT-NP301", title: "1 PORT RS 232/485/422 Serial Device Server" },
          { slug: "np302", modelNo: "NP302", title: "2 PORT RS 232/485/422 Serial Device Server" },
          { slug: "np304t", modelNo: "NP304T", title: "4 PORT RS 232/485/422 Serial Device Server" },
          { slug: "np308t", modelNo: "NP308T", title: "8 PORT RS 232/485/422 Serial Device Server" },
          { slug: "mt-3101g", modelNo: "MT-3101G", title: "RS232/485/422 Wall Mounted Ethernet Serial Server" },
          { slug: "mt-3104", modelNo: "MT-3104", title: "4-Port RS232/485 Wall Mount Ethernet Serial Server" },
          { slug: "mt-3102g", modelNo: "MT-3102G", title: "2-Port RS232/485/422 Wall Mount Serial Device Server" },
          { slug: "mt-3108", modelNo: "MT-3108", title: "8-Port RS232/485/422 Wall Mount Ethernet Serial Server" },
          { slug: "mt-3101w", modelNo: "MT-3101W", title: "1 RS232/485/422 Wall Mounted Wi-Fi Ethernet Serial Server" },
          { slug: "mt-3101r", modelNo: "MT-3101R", title: "1 RS232/485 Din-Rail Wi-Fi Ethernet Serial Server" },
          { slug: "np314t", modelNo: "NP314T", title: "4-port RS-232/485/422 to 2-port Ethernet Converter" },
          { slug: "np318t", modelNo: "NP318T", title: "8-port RS-232/485/422 to 2-port Ethernet Serial Device Server" },
          { slug: "mt-520-np302", modelNo: "MT-520-NP302", title: "2 PORT RS 232/485/422 Serial Device Server" },
          { slug: "mt-520-np314-3in1", modelNo: "MT-520-NP314-3IN1", title: "Industrial Grade 4port Serial to Ethernet Converter" },
          { slug: "mt-520-np301", modelNo: "MT-520-NP301", title: "1 Port RS232/422/485 Serial to Ethernet Converter" },
          { slug: "mt-3216", modelNo: "MT-3216", title: "16-Port RS232/485 Rack-Mount Serial Server" },
        ],
      },
      {
        slug: "industrial-modbus-gateway",
        title: "Industrial Modbus Gateway",
        short: "Seamless bi-directional conversion between Modbus TCP and Modbus RTU/ASCII.",
        description:
          "Specifically optimized gateway for industrial automation fieldbuses. Seamlessly bridges legacy serial Modbus RTU master/slave units to modern SCADA systems communicating over Modbus TCP protocol.",
        features: [
          "Supports up to 32 Modbus TCP master/slave connections",
          "Automatic response redirection and modbus command queue scheduling",
          "Proactive Modbus routing lookup engine for minimal latency",
          "Built-in diagnostic logs for Modbus message monitoring",
          "Overvoltage and surge protection on all RS-485 serial ports",
        ],
        specifications: {
          Protocol: "Modbus TCP (Ethernet), Modbus RTU/ASCII (Serial)",
          Ports: "2x RS-485 (Isolated) + 1x 10/100M RJ45",
          Protection: "15KV ESD protection for all serial signals",
          "Response Time": "< 10ms conversion latency",
          Mounting: "Standard 35mm DIN-rail mounting",
          Storage_Temp: "-45°C to 85°C",
        },
        items: [
          { slug: "mootek-3202-gateway", modelNo: "MOOTEK-3202-GATEWAY", title: "industrial modbus gateway" },
          { slug: "gw1101", modelNo: "GW1101", title: "1D(3INI)-DB-P(12-48VDC)-1PORT RS 232/485/422 To Ethernet Modbus Gateway" },
          { slug: "gw1102", modelNo: "GW1102", title: "2D(3INI)-DB-P(12-48VDC)-2 PORT RS-232/485/422 To Ethernet Modbus Gateway" },
          { slug: "gw1114", modelNo: "GW1114", title: "4DI(RS-485)-TB-P(12-48VDC) 4 PORT RS-485 To Ethernet Modbus Gateway" },
          { slug: "gw1118", modelNo: "GW1118", title: "8DI(RS-485)-TB-P(12-48VDC)-8PORT RS-485 To Ethernet Modbus Gateway" },
          { slug: "mbox-moogate-700", modelNo: "MBOX-MooGate 700 Series", title: "Wall-Mounted ARM Quad-Core Cortex-A53 Industrial Intelligent Gateway" },
          { slug: "mbox-moogate-600", modelNo: "MBOX- MooGate 600 Series", title: "DIN Rail ARM9 Cortex-A8 Industrial Intelligent Gateway" },
          { slug: "gw1114-tb", modelNo: "GW1114", title: "4DI(RS-485)-TB-P(12-48VDC) To Ethernet Modbus Gateway" },
        ],
      },
      {
        slug: "industrial-serial-to-fiber-modem",
        title: "Industrial Serial To Fiber Modem",
        short: "Extends serial communications up to 20km over fiber optic cabling.",
        description:
          "Converts RS-232, RS-422, or RS-485 electrical signals into light pulses for transmission over fiber optic cables. Provides immune, noise-free, long-distance communication in high-voltage industrial plants.",
        features: [
          "Zero-delay automatic conversion and path-switching control",
          "Fiber link distance: Up to 2km (multi-mode) or 20km (single-mode)",
          "Immune to electromagnetic interference (EMI) and lightning strikes",
          "Supports point-to-point, daisy-chain, and redundant ring topologies",
          "Choice of SC, ST, or FC optical interface connectors",
        ],
        specifications: {
          Serial_Type: "RS-232 / RS-485 / RS-422 Auto-sensing",
          Fiber_Type: "Single-Mode (9/125um) / Multi-Mode (50/125um)",
          Wavelength: "1310nm Single-Mode / 850nm Multi-Mode",
          Distance: "Single-mode: 20km, Multi-mode: 2km",
          Housing: "IP40 Aluminum enclosure, DIN-rail mounting",
          Power: "Redundant dual power inputs (9V-36V DC)",
        },
        items: [
          { slug: "mt-277-s-sc-20km", modelNo: "MT-277-S-SC-20KM / MT-277-M-SC-2KM", title: "1-Port RS232/485/422 Serial to Fiber Converter" },
          { slug: "imf-2100", modelNo: "IMF 2100", title: "Serial to Fiber Modem" },
          { slug: "imf204-2f", modelNo: "IMF204-2F", title: "Serial to Fiber Modem" },
          { slug: "imf208-2f", modelNo: "IMF208-2F", title: "Serial to Fiber Modem" },
          { slug: "277", modelNo: "277", title: "Serial to Fiber Converters" },
          { slug: "mt-520-ring-501", modelNo: "MT-520-RING-501", title: "RS232/485/422 to Fiber Converter" },
          { slug: "mc201-f", modelNo: "MC201-F", title: "1 CAN to Fiber Modem" },
        ],
      },
      {
        slug: "industrial-serial-converter",
        title: "Industrial Serial Converter",
        short: "Pocket-sized RS-232 to RS-485/422 and USB to serial hardware adapters.",
        description:
          "Simple, passive and active adapters designed to interface standard PC DB9 serial interfaces or USB ports with RS-485 and RS-422 networks. Features robust transient voltage suppression (TVS) diodes.",
        features: [
          "Active opto-isolation (2.5KV) to protect host controllers",
          "No external power required for basic RS-232/485 passive models",
          "Automatic send data control - no software flow control needed",
          "USB models feature high-reliability FTDI chipset drivers",
          "Compact, space-saving design with robust industrial terminal blocks",
        ],
        specifications: {
          Interface: "USB 2.0 / RS-232 DB9 Female to RS-485/422 Terminal block",
          Isolation: "2.5KV Optoelectronic isolation (Active models)",
          Max_Connections: "Up to 32 nodes on RS-485 polling lines",
          Baud_Rate: "300 bps to 115.2 Kbps auto-speed detection",
          Surge: "600W lightning and surge protection on RS-485 lines",
          Operating_Temp: "-40°C to 75°C",
        },
        items: [
          { slug: "mt-tlc422", modelNo: "MT-TLC422", title: "Passive Pocket RS-232 to RS-422 Interface Converter" },
          { slug: "mt-tlc485", modelNo: "MT-TLC485", title: "Passive Pocket RS-232 to RS 485 Interface Converter" },
          { slug: "mt-rs232i", modelNo: "MT-RS232I", title: "3KV Photoelectric Isolation RS232 Isolator" },
          { slug: "model485p", modelNo: "MODEL485P", title: "RS-232 to RS-485/422 Interface Converter" },
          { slug: "sw485gi", modelNo: "SW485GI", title: "Industrial RS-232/485/422 Converter and RS-485/422 Repeater (2IN1)" },
          { slug: "usb485i", modelNo: "USB485I", title: "USB to RS-232/485/422 Interface Isolated Converter" },
          { slug: "sw4485i", modelNo: "SW4485I", title: "4-Port RS-485 HUB with Isolation" },
          { slug: "usb8232i", modelNo: "USB8232I", title: "USB to 8 RS-232 Isolated Interface Converter" },
          { slug: "usb8485i", modelNo: "USB8485I", title: "USB to 8 RS-485/422 Isolated Interface Converter" },
          { slug: "tlc485", modelNo: "TLC485", title: "Passive Pocket RS-232 to RS-485 Interface Converter" },
          { slug: "tlc422", modelNo: "TLC422", title: "Passive Pocket RS-232 to RS-422 Interface Converter" },
          { slug: "usb232", modelNo: "USB232", title: "Passive Pocket USB to RS-232 Interface Converter" },
          { slug: "usb485c", modelNo: "USB485C", title: "Passive Pocket USB to RS-485/422 Interface Converter" },
          { slug: "232d-9", modelNo: "232D/9", title: "9- RS-232 Line Repeater with Photoelectric Isolation" },
          { slug: "usb4232", modelNo: "USB4232", title: "USB to 4 RS-232 Interface Converter" },
          { slug: "usb4485", modelNo: "USB4485", title: "USB to 4 RS-485/422 Interface Converter" },
          { slug: "mt-rs485-hub-d2j", modelNo: "MT-RS485-HUB- D2J", title: "RS485 Splitter" },
          { slug: "mt-4p-rs485-hub", modelNo: "MT-4P-RS485-HUB / MT-8P-RS485-HUB", title: "Industrial Din Rail 4 & 8 Channel RS485 hub" },
        ],
      },
      {
        slug: "industrial-media-converter",
        title: "Industrial Media Converter",
        short: "Fast Ethernet and Gigabit copper-to-fiber media converters.",
        description:
          "Heavy-duty media converters that extend traditional Ethernet connections using fiber optic lines. Features IP40 steel housing, high ESD protection, and standard DIN-rail mounts for outdoor control cabinets.",
        features: [
          "Converts 10/100/1000Base-T(X) RJ45 to 100/1000Base-X Fiber",
          "Link Fault Pass-Through (LFP) for immediate network status alert",
          "IP40 metal enclosure with fanless thermal dissipation design",
          "Supports single-mode SC/ST fiber or open SFP module slots",
          "Industrial compliance: Class 1 Div 2 hazardous locations certification",
        ],
        specifications: {
          RJ45_Port: "1x 10/100/1000Base-T(X), Auto MDI/MDI-X",
          Fiber_Port: "1x 1000Base-X SC Multi-mode / Single-mode / SFP slot",
          Standard: "IEEE 802.3, 802.3u, 802.3ab, 802.3z",
          LFP: "DIP-switch selectable Link Fault Pass-Through",
          Input_Power: "12/24/48V DC Redundant terminal block",
          "MTBF (Mean Time)": "> 500,000 hours (MIL-HDBK-217F)",
        },
        items: [
          { slug: "1100", modelNo: "1100", title: "2-Port 100M Media Converter" },
          { slug: "3012", modelNo: "3012", title: "2-PORT Gigabit Media Converter" },
          { slug: "imc101b", modelNo: "IMC101B", title: "2-port 100M Unmanaged Industrial Media Converter" },
          { slug: "imc101gt", modelNo: "IMC101GT", title: "2-port Full Gigabit Unmanaged Industrial Media Converter" },
          { slug: "mt-imc101-g-s-sc-20km", modelNo: "MT-IMC101-G-S-SC-20KM", title: "1-port 10/100/1000Mbps To Industrial Media Converter" },
        ],
      },
      {
        slug: "industrial-can-device-networking",
        title: "Industrial CAN Device Networking",
        short: "CAN-bus to Ethernet gateways, converters, and serial bridges.",
        description:
          "Integrates Controller Area Network (CAN-bus) devices (such as automotive systems, fire alarms, and motor controllers) with standard TCP/IP networking platforms or serial controllers.",
        features: [
          "Supports CAN 2.0A and CAN 2.0B protocols with full frame filtering",
          "Provides 2.5KV isolation protection on all CAN-bus interfaces",
          "Modbus TCP server/client support for easy SCADA register integration",
          "Includes diagnostic utility for CAN message logging and sending",
          "Built-in 120-ohm termination resistor selectable via DIP switch",
        ],
        specifications: {
          CAN_Port: "1x or 2x CAN interfaces, 5-pin open terminal block",
          CAN_Speed: "10 Kbps to 1 Mbps configurable",
          Ethernet: "1x 10/100M RJ45, Auto-MDI/MDI-X",
          Isolation: "2.5KV DC isolation, 15KV ESD protection",
          Protocols: "CAN, CANopen, Modbus TCP, TCP/IP, UDP",
          Operating_Temp: "-40°C to 80°C",
        },
        items: [
          { slug: "can-to-ethernet-converter", title: "CAN to Ethernet Converter", subItems: [
            { slug: "icp222", modelNo: "ICP222", title: "2F 2CI-DIN Rail Mounting 2 CAN Server" },
            { slug: "cp202", modelNo: "CP202", title: "2CI-Wall Mounting 2-PORT CAN Server" },
          ] },
          { slug: "can-to-serial-converter", title: "CAN to Serial Converter", subItems: [
            { slug: "mt-520-rs232-can", modelNo: "MT-520-RS232-CAN", title: "RS232/485/422 to CAN Industrial Isolated Converter" },
            { slug: "mt-pcan-2-usb", modelNo: "MT-PCAN-2-USB", title: "P-CAN-USB Adapter" },
            { slug: "can485", modelNo: "CAN485", title: "CAN TO RS-485 Interface Converter" },
            { slug: "can232", modelNo: "CAN232", title: "CAN TO RS-232 Interface Converter" },
            { slug: "mt-pcan-fdc-2-usb", modelNo: "MT-PCAN-FDC+2-USB", title: "P-CAN-FDC+2-USB Adapter" },
          ] },
          { slug: "can-to-fiber-converter", title: "CAN to Fiber Converter", subItems: [
            { slug: "mt-520-can-2-eth", modelNo: "MT-520-CAN-2-ETH", title: "Industrial DIN Rail Type 1-2 Channel CAN Bus Server (mini)" },
            { slug: "mt-can-s-df-sc-20km", modelNo: "MT-CAN-S-DF-SC-20KM", title: "Industrial Din Rail Adam Type 1-2 ch CAN Bus Fiber Modem" },
            { slug: "mt-520-can-fi-s-sc-20km", modelNo: "MT-520-CAN-FI-S-SC-20KM", title: "CAN BUS Fiber Modem" },
          ] },
        ],
      },
      {
        slug: "industrial-4g-iot-router",
        title: "Industrial 4G IoT Router",
        short: "Rugged cellular gateways with dual SIM backup for remote SCADA.",
        description:
          "Heavy-duty cellular routers designed to establish secure internet and VPN tunnels for remote field sites, water treatment plants, wind turbines, and smart city infrastructure.",
        features: [
          "Global 4G LTE/3G cellular connectivity with dual SIM backup slots",
          "Supports VPN tunnels: IPSec, OpenVPN, L2TP, PPTP, and GRE",
          "Fitted with Ethernet, RS-232/485 serial, and Digital I/O ports",
          "Automated ping watchdog and SMS reboot for remote site recovery",
          "Robust steel housing certified for high shock and vibration limits",
        ],
        specifications: {
          Cellular: "LTE Cat 4 / Cat 1 (150 Mbps downlink, 50 Mbps uplink)",
          SIM_Slots: "2x Standard SIM card slots with auto failover",
          Ports: "2x 10/100M RJ45, 1x RS-232, 1x RS-485, 2x DI/DO",
          Antenna: "2x SMA Female connectors for LTE, 1x for GPS",
          VPN: "IPsec, OpenVPN, GRE, WireGuard, DMVPN",
          Power: "9V to 36V DC terminal block input",
        },
        items: [
          { slug: "mt-520-iot-ir-4g-r680", modelNo: "MT-520-IOT-IR-4G-R680", title: "Industrial 4G IOT Router" },
        ],
      },
    ],
  },
  {
    slug: "industrial-ethernet-switches",
    title: "Industrial Ethernet Switches",
    short: "Rugged switches for harsh automation environments.",
    description:
      "Robust and reliable Ethernet switches designed for harsh industrial environments. Ensures seamless network connectivity across industrial automation systems with consistent performance.",
    icon: Router,
    series: [
      {
        slug: "industrial-managed-switches",
        title: "Industrial Managed Switches",
        short: "Layer 2/Layer 3 switches with ERPS ring, VLAN, and QoS management.",
        description:
          "Advanced industrial Ethernet switches. Features fast ring redundancy technology (ERPS recovery time < 20ms), LACP, IGMP Snooping, VLAN partitioning, and advanced security configurations.",
        features: [
          "Superb ring redundancy (ERPS recovery time under 20ms)",
          "VLAN configuration, Link Aggregation (LACP), and QoS prioritization",
          "CLI, Web interface, SNMP, and RMON remote administration",
          "Wide operational temperature (-40°C to 75°C) with metal casing",
          "Redundant dual power inputs with terminal block connections",
        ],
        specifications: {
          Ports: "8x 10/100/1000Base-T(X) RJ45 + 4x 100/1000Base-X SFP slots",
          Console: "1x RJ45 console port for out-of-band management",
          Redundancy: "ERPS Ring, STP, RSTP, MSTP",
          Standard: "IEEE 802.3, 802.3u, 802.3ab, 802.3x, 802.1Q, 802.1p",
          Housing: "IP40 metal housing, Din-rail mounting",
          Power: "Redundant 12V to 48V DC inputs",
        },
        items: [
          { slug: "mt-iems-m12-i", modelNo: "MT-IEMS-M12-I", title: "Gigabit 8-port Layer 2 Management Strengthened Industrial Switch" },
          { slug: "mt-iems-24p-l3", modelNo: "MT-IEMS-24P-L3", title: "Industrial Grade 24 Port Managed Ethernet Switch" },
          { slug: "mt-iems-10p-8l-2sfp", modelNo: "MT-IEMS-10P-8L-2SFP", title: "10-port 10/100M/1000M L2+ Managed Industrial Ethernet Switch" },
          { slug: "mt-iems-20p-16l-4sfp", modelNo: "MT-IEMS-20P-16L-4SFP", title: "20-port 10/100M/1000M L2+ Managed Industrial Ethernet Switch" },
          { slug: "mt-iems-28p-24l-4sfp", modelNo: "MT-IEMS-28P-24L-4SFP", title: "28-port 10G Uplink L3 Managed Industrial Ethernet Switch 4-Port 1/10G SFP 24-Port 10/100/1000Base-T RJ45" },
          { slug: "mt-iems-24p-8l-16sfp", modelNo: "MT-IEMS-24P-8L-16SFP", title: "16-port 10/100M/1000M L2+ Managed Industrial Ethernet Switch" },
          { slug: "mt-iems-26p-24l-2sfp", modelNo: "MT-IEMS-26P-24L-2SFP", title: "26-port 10/100M/1000M Industrial Ethernet Switch" },
          { slug: "mt-iems-16p-8l-8sfp", modelNo: "MT-IEMS-16P-8L-8SFP", title: "Industrial Ethernet Managed Switch" },
        ],
      },
      {
        slug: "industrial-unmanaged-switches",
        title: "Industrial Unmanaged Switches",
        short: "Plug-and-play Ethernet switches for fast, budget-friendly cabinet setups.",
        description:
          "Reliable, zero-configuration Ethernet switches designed for simple and quick field automation installations. Offers robust surge protection and compact DIN-rail mounts.",
        features: [
          "True plug-and-play installation, no software configuration needed",
          "Supports Auto-MDI/MDI-X and full/half-duplex auto-negotiation",
          "Compact, space-saving design perfect for crowded control boxes",
          "Includes 6KV surge protection on all copper Ethernet ports",
          "Wide range DC power input support with reverse polarity protection",
        ],
        specifications: {
          Ports: "5x or 8x 10/100/1000Base-T(X) RJ45 ports",
          Standard: "IEEE 802.3, 802.3u, 802.3ab, 802.3x flow control",
          Backplane: "16 Gbps switching fabric, Store-and-forward",
          Protection: "6KV surge / ESD Level 4 protection",
          Mounting: "Standard DIN-rail or wall mounting brackets",
          "Operating Temp": "-40°C to 75°C",
        },
        items: [
          { slug: "mt-ieus-16p-ge", modelNo: "MT- IEUS-16P-GE", title: "18-port 10/100/1000M Industrial Ethernet Switch" },
          { slug: "ies2005", modelNo: "IES2005", title: "5 Port Industrial Ethernet Switch" },
          { slug: "ies2008", modelNo: "IES2008", title: "8 Port Industrial Ethernet Switch" },
          { slug: "mt-ieus-5p-4c-1sfp", modelNo: "MT- IEUS-5P-4C-1SFP", title: "Industrial Ethernet Unmanaged switch with SFP Slots" },
          { slug: "mt-ieus-5p-ge", modelNo: "MT-IEUS-5P-GE", title: "5-port 10/100M/1000M Industrial Ethernet Switch" },
          { slug: "mt-ieus-24p-ge", modelNo: "MT-IEUS-24P-GE", title: "24-port 10/100/1000M Industrial Ethernet Switch" },
          { slug: "mt-ieus-8p-ge", modelNo: "MT-IEUS-8P-GE", title: "8-port 10/100M/1000M Industrial Ethernet Switch" },
        ],
      },
      {
        slug: "industrial-poe-managed-switches",
        title: "Industrial POE Managed Switches",
        short: "Managed switches with high-power IEEE 802.3at/bt PoE output per port.",
        description:
          "High-performance managed switches supplying up to 30W/90W PoE power per port. Ideal for powering outdoor IP surveillance cameras, wireless access points, and sensor gateways.",
        features: [
          "IEEE 802.3af/at/bt PoE standards compliant",
          "Smart PoE management: Scheduled power cycling, rebooting on ping fail",
          "Total PoE power budget up to 240W/360W depending on voltage",
          "Dynamic ERPS redundant ring recovery and VLAN support",
          "Redundant dual DC power inputs (48V to 57V DC required)",
        ],
        specifications: {
          Ports: "8x 10/100/1000Base-T(X) PoE+ RJ45 + 2x Gigabit SFP slots",
          PoE_Power: "Up to 30W per port (Ports 1-8), Up to 90W on select ports",
          Budget: "Max 240W PoE budget with 48V-57V DC input",
          Redundancy: "ERPS Ring (< 20ms), STP/RSTP/MSTP",
          Housing: "IP40 Heavy-duty metal casing, Fanless",
          "Operating Temp": "-40°C to 75°C",
        },
        items: [
          { slug: "mt-iems-6p-4poe-2sfp", modelNo: "MT-IEMS-6P-4POE-2SFP", title: "6-port 10/100M/1000M L2 WEB Managed Industrial PoE Ethernet Switch" },
          { slug: "mt-iems-10p-8poe-2sfp", modelNo: "MT-IEMS-10P-8POE-2SFP", title: "10-port 10/100M/1000M L2 WEB Managed Industrial PoE Ethernet Switch" },
          { slug: "mt-iems-l3-12p-8poe-4sfp", modelNo: "MT-IEMS-L3-12P-8POE-4SFP", title: "12-port 10G Uplink L3 Managed PoE Industrial Ethernet Switch" },
          { slug: "mt-iems-8poe-2sfp-g", modelNo: "MT-IEMS-8POE-2SFP-G", title: "Industrial POE Managed Switches" },
          { slug: "mt-iems-poe-6p-4l-2sfp", modelNo: "MT-IEMS-PoE-6P-4L-2SFP", title: "Industrial Ethernet Managed Switches" },
          { slug: "mt-iems-12p-8l-4sfp", modelNo: "MT-IEMS-12P-8L-4SFP", title: "12-port 10/100M/1000M L2+ Managed Industrial PoE Ethernet Switch" },
          { slug: "mt-iems-poe-16p", modelNo: "MT-IEMS-POE-16P", title: "Managed Network Switch with 16*GE UTP+4* GE Combo port" },
          { slug: "mt-iems-12p-8poe-4sfp", modelNo: "MT-IEMS-12P-8POE-4SFP", title: "12-port 10/100M/1000M L2+ Managed Industrial PoE Ethernet Switch" },
          { slug: "mt-iems-28p-24poe-4sfp", modelNo: "MT-IEMS-28P-24POE-4SFP", title: "Industrial POE Managed Switch" },
          { slug: "mt-iems-l3-28p-24poe-4sfp-10g", modelNo: "MT-IEMS-L3-28P-24POE-4SFP-10G", title: "Industrial POE Managed Switch" },
        ],
      },
      {
        slug: "industrial-poe-unmanaged-switches",
        title: "Industrial POE Unmanaged Switches",
        short: "Plug-and-play PoE switches for fast field camera and device wiring.",
        description:
          "Affordable plug-and-play PoE switches. Instantly delivers power and data over standard Ethernet cables without setup, making them perfect for basic camera surveillance setups.",
        features: [
          "Plug-and-play operation with auto-negotiation and MDI/MDI-X",
          "Supplies up to 30W PoE power per port on standard Cat5e/Cat6",
          "DIP-switch selectable 'Extend Mode' for 250-meter cable runs",
          "Rigid IP40 aluminum casing with high heat-dissipation ribs",
          "Standard industrial 48V-57V terminal block power supply input",
        ],
        specifications: {
          Ports: "4x 10/100/1000Base-T(X) PoE+ RJ45 + 1x Gigabit RJ45 Uplink",
          PoE_Output: "IEEE 802.3af/at standard, Max 30W per port",
          Extend_Mode: "Limits port speed to 10Mbps but extends range to 250m",
          Surge: "6KV Surge protection, 8KV ESD protection",
          Mounting: "DIN-rail installation, wall-mounting option included",
          Storage_Temp: "-45°C to 85°C",
        },
        items: [
          { slug: "mt-ieus-5poe-ge", modelNo: "MT-IEUS-5POE-GE", title: "5 Port Industrial Un Managed Giga Bit Ethernet Switch" },
        ],
      },
      {
        slug: "industrial-managed-fiber-switches",
        title: "Industrial Managed Fiber Switches",
        short: "High-density fiber SFP port switches for network backbones and aggregates.",
        description:
          "Specifically optimized switches featuring high density SFP/SFP+ optical fiber ports. Ideal as central aggregate hubs in large-scale solar farms, mines, and citywide infrastructure.",
        features: [
          "High density SFP slots supporting 100M/1G/10G optical modules",
          "Supports ERPS redundant rings and LACP core link aggregations",
          "Layer 2+ / Layer 3 routing capabilities for network segmentation",
          "Advanced access control lists (ACL), RADIUS, and TACACS+ security",
          "Fanless operating design with highly optimized thermal paths",
        ],
        specifications: {
          Ports: "12x 100/1000Base-X SFP slots + 4x Gigabit Combo RJ45 ports",
          Fiber_Speed: "100Mbps and 1Gbps auto-negotiation on SFP ports",
          Management: "Web, CLI, Telnet, Console, SNMP v1/v2c/v3",
          Performance: "32 Gbps switching capacity, non-blocking routing",
          Security: "802.1X, Port Security, IP Source Guard, DHCP Snooping",
          Housing: "19-inch rackmount or DIN-rail selectable, IP40",
        },
        items: [
          { slug: "mt-iems-20p-4sfp", modelNo: "MT-IEMS- 20P-4SFP", title: "Industrial Managed Ethernet Fiber Switch" },
          { slug: "mt-iems-16p-8l-8sfp-fiber", modelNo: "MT-IEMS-16P-8L-8SFP", title: "Industrial Managed Ethernet Fiber Switch" },
          { slug: "mt-iems-l2-16p-8poe-8sfp", modelNo: "MT-IEMS-L2-16P-8POE-8SFP", title: "Industrial Managed Ethernet Fiber Switch" },
        ],
      },
      {
        slug: "tsn-switches",
        title: "TSN Switches",
        short: "Time-Sensitive Networking switches for microsecond-level synchronization.",
        description:
          "Next-generation Ethernet switches utilizing Time-Sensitive Networking (TSN) standards. Guarantees deterministic message delivery and sub-microsecond synchronization for motion control and robotics.",
        features: [
          "Supports IEEE 802.1AS time synchronization (PTP precision profile)",
          "Supports IEEE 802.1Qbv Scheduled Traffic for deterministic queues",
          "Frame Preemption (IEEE 802.1Qbu) ensures critical traffic priority",
          "Extremely low packet jitter and latency under congested network lines",
          "Fully managed with comprehensive TSN configuration software",
        ],
        specifications: {
          Standard: "TSN Compliant (IEEE 802.1AS, 802.1Qbv, 802.1Qbu, 802.1CB)",
          Ports: "8x Gigabit RJ45 ports + 2x 10G SFP+ ports",
          Clock_Sync: "< 1 microsecond accuracy (PTP boundary clock)",
          Switching: "L2 Wire-speed store-and-forward, TSN scheduling",
          Power: "Redundant 24V/48V DC, dual terminal blocks",
          "Operating Temp": "-40°C to 70°C",
        },
        items: [
          { slug: "mt-tsn-7208-2gf-6gt", modelNo: "MT-TSN-7208-2GF-6GT", title: "8-Port Layer-2 Full Gigabit Managed DIN-rail TSN Industrial Ethernet Switch" },
          { slug: "mt-tsn-8216-4xgf-4gf-8gt-dc24", modelNo: "MT-TSN-8216-4XGF-4GF-8GT-DC24", title: "16-Port 10G DIN-Rail Layer 3 TSN Industrial Ethernet Switch" },
          { slug: "mt-tsn-8036-4xgf-24gf-8gt", modelNo: "MT-TSN-8036-4XGF-24GF-8GT", title: "36-Port 10G Layer-3 Rack Mount TSN Industrial Ethernet Switch" },
        ],
      },
      {
        slug: "iec61850-switches",
        title: "IEC61850 Switches",
        short: "Substation-grade switches certified for electric power utility grids.",
        description:
          "Specialized industrial switches certified to meet IEC 61850-3 and IEEE 1613 standards. Engineered to operate flawlessly in electrical substations experiencing extreme electromagnetic fields (EMI).",
        features: [
          "Fully compliant with IEC 61850-3 and IEEE 1613 substation standards",
          "Exceptional electromagnetic immunity (ESD, EFT, Surge Level 4)",
          "Supports high-accuracy IEEE 1588v2 PTP time synchronization",
          "Wide-range universal power inputs (85-264V AC or 88-300V DC)",
          "Fanless, heavy-duty housing with rackmount or DIN-rail mounts",
        ],
        specifications: {
          Compliance: "IEC 61850-3, IEEE 1613, KEMA Certified",
          Ports: "16x 10/100Base-T(X) RJ45 + 4x Gigabit SFP slots",
          Time_Sync: "IEEE 1588v2 PTP (One-step / Two-step, Peer-to-Peer)",
          EMC_Immunity: "EN 61000-4-2/3/4/5/6/8/11 Level 4 protection",
          Power: "Universal 110/220V AC/DC Power Supply",
          Mounting: "19-inch 1U Rackmount / DIN-rail",
        },
        items: [
          { slug: "mt-iec61850-7210-2gf", modelNo: "MT-IEC61850-7210-2GF", title: "10-Port Layer 2 Gigabit Managed DIN Rail Industrial Ethernet Switch" },
          { slug: "mt-iec61850-7220-4gf", modelNo: "MT-IEC61850-7220-4GF", title: "20-Port Layer 2 Gigabit Managed Din-rail Industrial Ethernet Switch" },
          { slug: "mt-iec61850-7028-4gc", modelNo: "MT-IEC61850-7028-4GC", title: "28-Port Layer 2 Gigabit Managed Rack Mount Industrial Ethernet Switch" },
          { slug: "mt-iec61850-8020-4xgf-8gf-8gt", modelNo: "MT-IEC61850-8020-4XGF-8GF-8GT", title: "20-Port Rack Mount Layer 3 Managed Industrial Gigabit Ethernet Switch" },
          { slug: "mt-iec61850-8220-4xgf-8gf-8gt", modelNo: "MT-IEC61850-8220-4XGF-8GF-8GT", title: "20-Port 10G DIN-Rail Layer 3 Industrial Ethernet Switch" },
        ],
      },
    ],
  },
];

module.exports = products;