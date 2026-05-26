// This maps each product slug to its image path in /products/
// Built by matching available image filenames to product items
export const productImages: Record<string, string> = {
  // ═══════════════════════════════════════════════
  // SERIES-LEVEL IMAGES (used on category pages)
  // ═══════════════════════════════════════════════
  "industrial-edge-computing": "/products/industrial-edge-computing.webp",
  "industrial-touch-panel-pc": "/products/industrial-touch-panel-pc.webp",
  "industrial-server-motherboard": "/products/industrial-server-motherboard.jpg",
  "android-motherboard": "/products/android-motherboard.webp",
  "industrial-rackmount-server-pc": "/products/industrial-rackmount-server-pc.webp",
  "industrial-rugged-laptop-with-gpu": "/products/industrial-rugged-laptop-with-gpu.webp",
  "industrial-motherboards": "/products/industrial-motherboards.webp",
  "amd-ryzen-motherboard": "/products/amd-ryzen-motherboard.webp",
  "touch-screen-kiosk": "/products/touch-screen-kiosk.webp",
  "touch-screen": "/products/touch-screen.webp",
  "touch-screen-monitor": "/products/touch-screen-monitor.webp",
  "industrial-serial-device-server": "/products/industrial-serial-device-server.webp",
  "industrial-modbus-gateway": "/products/industrial-modbus-gateway.webp",
  "industrial-serial-to-fiber-modem": "/products/industrial-serial-to-fiber-modem.webp",
  "industrial-serial-converter": "/products/industrial-serial-converter.webp",
  "industrial-media-converter": "/products/industrial-media-converter.webp",
  "industrial-can-device-networking": "/products/industrial-can-device-networking.webp",
  "industrial-4g-iot-router": "/products/industrial-4g-iot-router.webp",
  "industrial-managed-switches": "/products/industrial-managed-switches.webp",
  "industrial-unmanaged-switches": "/products/industrial-unmanaged-switches.webp",
  "industrial-poe-managed-switches": "/products/industrial-poe-managed-switches.webp",
  "industrial-poe-unmanaged-switches": "/products/industrial-poe-unmanaged-switches.webp",
  "industrial-managed-fiber-switches": "/products/industrial-managed-fiber-switches.webp",
  "tsn-switches": "/products/tsn-switches.webp",
  "iec61850-switches": "/products/iec61850-switches.webp",

  // ═══════════════════════════════════════════════
  // EDGE COMPUTING — NUC Mini PC (3 sub-items)
  // ═══════════════════════════════════════════════
  "nuc-mini-pc": "/products/nuc-mini-pc.webp",
  "muc-520-f3-i7-1255u": "/products/muc-520-f3-i7-1255u.webp",
  "muc-520-u5": "/products/muc-520-u5.webp",
  "muc-520-i5-1235u": "/products/muc-520-i5-1235u.webp",

  // ═══════════════════════════════════════════════
  // EDGE COMPUTING — Celeron Box PC (6 sub-items)
  // ═══════════════════════════════════════════════
  "celeron-cpu-industrial-embedded-box-pc": "/products/celeron-cpu-industrial-embedded-box-pc.webp",
  "mbox-520-c2-l2-v2": "/products/mbox-520-c2-l2-v2.webp",
  "mbox-520-c2-l2-v1": "/products/mbox-520-c2-l2-v1.webp",
  "mbox-520-c-4l": "/products/mbox-520-c-4l.webp",
  "mbox-520-n3150": "/products/mbox-520-n3150.webp",
  "mbox-520-j1900-6l": "/products/mbox-520-j1900-6l.webp",
  "mbox-520-c4-4l": "/products/mbox-520-c4-4l.webp",

  // ═══════════════════════════════════════════════
  // EDGE COMPUTING — Core i3 Box PC (3 sub-items)
  // ═══════════════════════════════════════════════
  "core-i3-industrial-embedded-box-pc": "/products/core-i3-industrial-embedded-box-pc.webp",
  "mbox-520-i3-4010u": "/products/mbox-520-i3-4010u.webp",
  "mbox-520-i3-6c-6u": "/products/mbox-520-i3-6c-6u.webp",
  "mbox-520-i3-4l-6c": "/products/mbox-520-i3-4l-6c.webp",

  // ═══════════════════════════════════════════════
  // EDGE COMPUTING — Core i5 Box PC (13 sub-items)
  // ═══════════════════════════════════════════════
  "core-i5-industrial-embedded-box-pc": "/products/core-i5-industrial-embedded-box-pc.webp",
  "en50155-mbox-520-i5": "/products/en50155-mbox-520-i5.webp",
  "mbox-520-m9-blue": "/products/mbox-520-m9-blue.webp",
  "mbox-520-i5-6c-6u-2hd": "/products/mbox-520-i5-6c-6u-2hd.webp",
  "mbox-520-i5-6c-6u": "/products/mbox-520-i5-6c-6u.webp",
  "mbox-520-i5-m7-8265u": "/products/mbox-520-i5-m7-8265u.webp",
  "mbox-520-m11-g": "/products/mbox-520-m11-g.webp",
  "mbox-b5500": "/products/mbox-b5500.webp",
  "mbox-520-m3": "/products/mbox-520-m3.webp",
  "nino-ip68-g1": "/products/nino-ip68-g1.webp",
  "mbox-520-i5-7267u-l2-6c": "/products/mbox-520-i5-7267u-l2-6c.webp",
  "mbox-520-m9-pro-blue": "/products/mbox-520-m9-pro-blue.webp",
  "mbox-520-i5-4l-6c": "/products/mbox-520-i5-4l-6c.webp",
  "mbox-520-i5-10g-4l": "/products/mbox-520-i5-10g-4l.webp",

  // ═══════════════════════════════════════════════
  // EDGE COMPUTING — Core i7 Box PC (4 sub-items)
  // ═══════════════════════════════════════════════
  "core-i7-industrial-embedded-box-pc": "/products/core-i7-industrial-embedded-box-pc.webp",

  // ═══════════════════════════════════════════════
  // EDGE COMPUTING — Digital Signage OPS PC (1 sub-item)
  // ═══════════════════════════════════════════════
  "digital-signage-ops-pc": "/products/digital-signage-ops-pc.webp",
  "ops-520-i5-4200m": "/products/ops-520-i5-4200m.webp",

  // ═══════════════════════════════════════════════
  // EDGE COMPUTING — AI Box PC (7 sub-items)
  // ═══════════════════════════════════════════════
  "industrial-ai-embedded-box-pc-with-graphics-card": "/products/industrial-ai-embedded-box-pc-with-graphics-card.webp",
  "mbox-520-ai-z-12g": "/products/mbox-520-ai-z-12g.webp",
  "mbox-520-ai-6789g": "/products/mbox-520-ai-6789g.webp",
  "mbox-520-i7-2pci": "/products/mbox-520-i7-2pci.webp",
  "mbox-520-mz-ai-1234g": "/products/mbox-520-mz-ai-1234g.webp",
  "mbox-520-pz-ai-i9-9g": "/products/mbox-520-pz-ai-i9-9g.webp",
  "mbox-520-pcie-itx-1011g": "/products/mbox-520-pcie-itx-1011g.webp",
  "mbox-520-gpu-i-89g": "/products/mbox-520-gpu-i-89g.webp",

  // ═══════════════════════════════════════════════
  // EDGE COMPUTING — Core i9 & JETSON
  // ═══════════════════════════════════════════════
  "core-i9-industrial-embedded-box-pc": "/products/core-i9-industrial-embedded-box-pc.webp",
  "mbox-520-i9-3l-6c-12u": "/products/mbox-520-i9-3l-6c-12u.webp",
  "jetson-nvidia-mini-ai-edge-computing": "/products/jetson-nvidia-mini-ai-edge-computing.webp",
  "ri-520-jetson-nvidia-4c": "/products/ri-520-jetson-nvidia-4c.webp",
  "ri-520-jetson-nvidia-6c": "/products/ri-520-jetson-nvidia-6c.webp",

  // ═══════════════════════════════════════════════
  // TOUCH PANEL PC ITEMS
  // ═══════════════════════════════════════════════
  "industrial-touch-panel-pc-r": "/products/industrial-touch-panel-pc-r.webp",
  "mipc-8000t-r": "/products/mipc-8000t-r.webp",
  "mipc-1010t-r": "/products/mipc-1010t-r.webp",
  "mipc-1040t-r": "/products/mipc-1040t-r.webp",
  "mipc-1210t-r": "/products/mipc-1210t-r.webp",
  "mipc-1500t-r": "/products/mipc-1500t-r.webp",
  "mipc-1560t-r": "/products/mipc-1560t-r.webp",
  "mipc-1700t-r": "/products/mipc-1700t-r.webp",
  "mipc-1850t-r": "/products/mipc-1850t-r.webp",
  "mipc-1900t-r": "/products/mipc-1900t-r.webp",
  "mipc-2150t-r": "/products/mipc-2150t-r.webp",
  "mipc-2400t-r": "/products/mipc-2400t-r.webp",
  "mipc-2700t-r": "/products/mipc-2700t-r.webp",
  "mipc-3200t-r": "/products/mipc-3200t-r.webp",
  "flame-proof-panel-pc": "/products/flame-proof-panel-pc.webp",
  "atex-mipc-1560t-r": "/products/atex-mipc-1560t-r.webp",
  "mipc-1700t-flame-proof": "/products/mipc-1700t-flame-proof.webp",
  "industrial-waterproof-touch-panel-pc": "/products/industrial-waterproof-touch-panel-pc.webp",
  "mipc-1500t-r-ip66": "/products/mipc-1500t-r-ip66.webp",
  "industrial-touch-panel-pc-8k-series": "/products/industrial-touch-panel-pc-8k-series.webp",
  "mipc-1040t-8k-r": "/products/mipc-1040t-8k-r.webp",
  "mipc-1500t-8k-r": "/products/mipc-1500t-8k-r.webp",
  "mipc-2150t-8k-r": "/products/mipc-2150t-8k-r.webp",

  // ═══════════════════════════════════════════════
  // SERVER MOTHERBOARD ITEMS
  // ═══════════════════════════════════════════════
  "ri-ser-mb-600-xe": "/products/ri-ser-mb-600-xe.jpg",
  "ri-ser-mb-620-xe": "/products/ri-ser-mb-620-xe.jpg",
  "ri-ser-mb-810-xe": "/products/ri-ser-mb-810-xe.jpg",
  "ri-ser-mb-920-xe": "/products/ri-ser-mb-920-xe.jpg",

  // ═══════════════════════════════════════════════
  // ANDROID MOTHERBOARD ITEMS
  // ═══════════════════════════════════════════════
  "ri-520-and-11": "/products/ri-520-and-11.webp",
  "ri-520-and": "/products/ri-520-and.webp",

  // ═══════════════════════════════════════════════
  // RACKMOUNT SERVER PC ITEMS
  // ═══════════════════════════════════════════════
  "ri-3u-g3450": "/products/model-no-ri-3u-g3450.webp",
  "mipc-610t-4u": "/products/model-no-mipc-610t-4u.webp",
  "ri-itpc-t8": "/products/model-no-ri-itpc-t8.webp",
  "ri-4u-k445c-19": "/products/model-no-ri-4u-k445c-19.webp",
  "mipc-u3500": "/products/model-no-mipc-u3500.webp",
  "ri-5u-k550df": "/products/model-no-ri-5u-k550df.webp",
  "mipc-r266-2u": "/products/model-no-mipc-r266-2u.webp",
  "mipc-u3300": "/products/model-no-mipc-u3300.webp",
  "ri-3u-r366-16": "/products/model-no-ri-3u-r366-16.webp",
  "ri-4u-r466-24": "/products/model-no-ri-4u-r466-24.webp",

  // ═══════════════════════════════════════════════
  // RUGGED LAPTOP ITEMS
  // ═══════════════════════════════════════════════
  "ri-520-b5": "/products/model-no-ri-520-b5-lcd-display-computer-with-21.5-inch-lcd-for-4080-4090-gpu.webp",
  "ri-520-b31": "/products/model-no-ri-520-b31-panel-pc-server-case-with-lcd-display-and-keyboard-7-full-height-pcie-slot.webp",
  "ri-520-b43": "/products/model-no-ri-520-b43-ruggedized-trifold-computer-offers-three-18.5-1920-x-1080-resolution-lcd-displays.webp",
  "ri-520-b21": "/products/model-no-ri-520-b21-16.1-inch-server-chassis-rugged-laptop-rugged-type-chassis.webp",
  "ri-520-b41": "/products/model-no-ri-520-b41-industrial-portable-pc-screen-size-17.3-inches-with-1920-1080-resolution.webp",
  "ri-520-b4": "/products/model-no-ri-520-b4-industrial-rugged-laptop-with-gpu.webp",
  "ri-520-b43s": "/products/model-no-ri-520-b43s-ultra-rugged-multi-slot-portable-pc-with-17.3-inch-full-hd-1080p-lcd.webp",

  // ═══════════════════════════════════════════════
  // INDUSTRIAL MOTHERBOARD ITEMS
  // ═══════════════════════════════════════════════
  "industrial-atx-motherboard": "/products/industrial-atx-motherboard.webp",
  "mb-atx-4g-h81": "/products/mb-atx-4g-h81.webp",
  "mb-atx-1314g-h610": "/products/mb-atx-1314g-h610.webp",
  "mb-atx-6789g-h110": "/products/mb-atx-6789g-h110.webp",
  "mb-520-i7-1165g7-4hd": "/products/mb-520-i7-1165g7-4hd.webp",
  "mb-atx-1314g-q670": "/products/mb-atx-1314g-q670.webp",
  "mb-atx-1314g-h610-4pci": "/products/mb-atx-1314g-h610-4pci.webp",
  "mb-520-pce-5132": "/products/mb-520-pce-5132.webp",
  "mb-atx-23g-b75": "/products/mb-atx-23g-b75.webp",
  "ri-atx-1011g-h570": "/products/ri-atx-1011g-h570.webp",
  "xeon-industrial-motherboard": "/products/xeon-industrial-motherboard.webp",
  "ri-520-1590": "/products/ri-520-1590.webp",
  "mb-atx-xeon-c262": "/products/mb-atx-xeon-c262.webp",
  "mb-atx-xeon-r680e": "/products/mb-atx-xeon-r680e.webp",
  "micro-atx-industrial-motherboard": "/products/micro-atx-industrial-motherboard.webp",
  "mb-matx-1314g-q670": "/products/mb-matx-1314g-q670.webp",
  "ri-matx-23g-b75": "/products/ri-matx-23g-b75.webp",
  "mb-matx-1314g-h610": "/products/mb-matx-1314g-h610.webp",
  "ri-matx-23g-q77m3": "/products/ri-matx-23g-q77m3.webp",
  "ri-matx-6789g-q250": "/products/ri-matx-6789g-q250.webp",
  "industrial-mini-itx-motherboard": "/products/industrial-mini-itx-motherboard.webp",
  "mb-520-mitx-i7-4hd": "/products/mb-520-mitx-i7-4hd.webp",
  "ri-520-i7-6500u-2l": "/products/ri-520-i7-6500u-2l.webp",
  "ri-520-qm6300-6c": "/products/ri-520-qm6300-6c.webp",
  "ri-itx-6789g-3600": "/products/ri-itx-6789g-3600.webp",
  "mb-520-i3-8130u": "/products/mb-520-i3-8130u.webp",
  "mb-520-i3-6100u": "/products/mb-520-i3-6100u.webp",
  "ri-520-6600": "/products/ri-520-6600.webp",
  "ri-520-11u": "/products/ri-520-11u.webp",
  "mh-520-j1900-4l": "/products/mh-520-j1900-4l.webp",
  "ri-itx-hb1011g": "/products/ri-itx-hb1011g.webp",
  "ri-520-j1900": "/products/ri-520-j1900.webp",
  "ri-itx-1213g-h610": "/products/ri-itx-1213g-h610.webp",
  "isa-slot-motherboard": "/products/isa-slot-motherboard.webp",
  "industrial-mini-3-5-inch-motherboards": "/products/industrial-mini-3.5-inch-motherboards.webp",

  // ═══════════════════════════════════════════════
  // AMD RYZEN MOTHERBOARD ITEMS
  // ═══════════════════════════════════════════════
  "ri-520-ryz-r2000": "/products/ri-520-ryz-r2000.webp",
  "ri-520-ryz-v2000": "/products/ri-520-ryz-v2000.webp",
  "ri-520-ryz-b650": "/products/ri-520-ryz-b650.webp",

  // ═══════════════════════════════════════════════
  // TOUCH SCREEN KIOSK
  // ═══════════════════════════════════════════════
  "industrial-touch-screen-kiosk": "/products/industrial-touch-screen-kiosk.webp",

  // ═══════════════════════════════════════════════
  // TOUCH SCREEN ITEMS
  // ═══════════════════════════════════════════════
  "resistive-touch-screen": "/products/resistive-touch-screen.webp",
  "capacitive-touch-screen": "/products/capacitive-touch-screen.webp",
  "ir-touch-screen": "/products/ir-touch-screen.webp",

  // ═══════════════════════════════════════════════
  // TOUCH SCREEN MONITOR ITEMS
  // ═══════════════════════════════════════════════
  "mipm-1500t": "/products/model-no-mipm-1500t-industrial-touch-screen-monitor-15-inch.webp",
  "mipm-1040t": "/products/model-no-mipm-1040t-industrial-touch-screen-monitor-10.4-inch.webp",
  "mipm-1560t": "/products/model-no-mipm-1560t-industrial-touch-screen-monitor-15.6-inch.webp",
  "mipm-2380t": "/products/model-no-mipm-2380t-industrial-touch-screen-monitor-23.8-inch.webp",
  "mipm-3200t": "/products/model-no-mipm-3200t-industrial-touch-screen-monitor-32-inch.webp",
  "mim-5k-2150-t": "/products/model-no-mim-5k-2150-t-industrial-grade-embedded-fanless-touch-monitor.webp",
  "mipm-1010t": "/products/model-no-mipm-1010t-industrial-touch-screen-monitor-10.1-inch.webp",
  "mipm-1210t": "/products/model-no-mipm-1210t-industrial-touch-screen-monitor-12.1-inch.webp",
  "mipm-1700t": "/products/model-no-mipm-1700t-industrial-touch-screen-monitor-17-inch.webp",
  "mipm-2150t": "/products/model-no-mipm-2150t-industrial-touch-screen-monitor-21.5-inch.webp",
  "mipm-1900t": "/products/model-no-mipm-1900t-industrial-touch-screen-monitor-19-inch.webp",
  "mipm-1850t": "/products/model-no-mipm-1850t-industrial-touch-screen-monitor-18.5-inch.webp",

  // ═══════════════════════════════════════════════
  // SERIAL DEVICE SERVER ITEMS
  // ═══════════════════════════════════════════════
  "ri-np301": "/products/model-no-ri-np301-1-port-rs-232-485-422-serial-device-server.webp",
  "np302": "/products/model-no-np302-2-port-rs-232-485-422-serial-device-server.webp",
  "np304t": "/products/model-no-np304t-4-port-rs-232-485-422-serial-device-server.webp",
  "np308t": "/products/model-no-np308t-8-port-rs-232-485-422-serial-device-server.webp",
  "ri-3101g": "/products/model-no-ri-3101g-rs232-485-422-wall-mounted-ethernet-serial-server.webp",
  "ri-3104": "/products/model-no-ri-3104-4-port-rs232-485-wall-mount-ethernet-serial-server.webp",
  "ri-3102g": "/products/model-no-ri-3102g-2-port-rs232-485-422-wall-mount-serial-device-server.webp",
  "ri-3108": "/products/model-no-ri-3108-8-port-rs232-485-422-wall-mount-ethernet-serial-server.webp",
  "ri-3101w": "/products/model-no-ri-3101w-1-rs232-485-422-wall-mounted-wi-fi-ethernet-serial-server.webp",
  "ri-3101r": "/products/model-no-ri-3101r-1-rs232-485-din-rail-wi-fi-ethernet-serial-server.webp",
  "np314t": "/products/model-no-np314t-4-port-rs-232-485-422-to-2-port-ethernet-converter.webp",
  "np318t": "/products/model-no-np318t-8-port-rs-232-485-422-to-2-port-ethernet-serial-device-server.webp",
  "ri-520-np302": "/products/model-no-ri-520-np302-2-port-rs-232-485-422-serial-device-server.webp",
  "ri-520-np314-3in1": "/products/model-no-ri-520-np314-3in1-industrial-grade-4port-serial-to-ethernet-converter.webp",
  "ri-520-np301": "/products/model-no-ri-520-np301-1-port-rs232-422-485-serial-to-ethernet-converter.webp",
  "ri-3216": "/products/model-no-ri-3216-16-port-rs232-485-rack-mount-serial-server.webp",

  // ═══════════════════════════════════════════════
  // MODBUS GATEWAY ITEMS
  // ═══════════════════════════════════════════════
  "mootek-3202-gateway": "/products/mootek-3202-gateway.webp",
  "gw1101": "/products/gw1101.webp",
  "gw1102": "/products/gw1102.webp",
  "gw1114": "/products/gw1114.webp",
  "gw1118": "/products/gw1118.webp",
  "mbox-moogate-700": "/products/mbox-moogate-700.webp",
  "mbox-moogate-600": "/products/mbox-moogate-600.webp",
  // BATCH ADDITIONS
  "mb-520-3-5-j1900": "/products/mb-520-3-5-j1900.webp",
  "mb-520-j1900-3-5-en50155": "/products/mb-520-j1900-3-5-en50155.webp",
  "ri-520-3-5-j1900-en50155-v2": "/products/ri-520-3-5-j1900-en50155-v2.webp",
  "ri-iems-10p-8l-2sfp": "/products/ri-iems-10p-8l-2sfp.webp",
  "ri-iems-16p-8l-8sfp": "/products/ri-iems-16p-8l-8sfp.webp",
  "ri-iems-20p-16l-4sfp": "/products/ri-iems-20p-16l-4sfp.webp",
  "ri-iems-24p-8l-16sfp": "/products/ri-iems-24p-8l-16sfp.webp",
  "ri-iems-24p-l3": "/products/ri-iems-24p-l3.webp",
  "ri-iems-26p-24l-2sfp": "/products/ri-iems-26p-24l-2sfp.webp",
  "ri-iems-28p-24l-4sfp": "/products/ri-iems-28p-24l-4sfp.webp",
  "ri-iems-m12-i": "/products/ri-iems-m12-i.webp",
  "ies2005": "/products/ies2005.webp",
  "ies2008": "/products/ies2008.webp",
  "ri-ieus-16p-ge": "/products/ri-ieus-16p-ge.webp",
  "ri-ieus-5p-4c-1sfp": "/products/ri-ieus-5p-4c-1sfp.webp",
  "ri-ieus-24p-ge": "/products/ri-ieus-24p-ge.webp",
  "ri-ieus-5p-ge": "/products/ri-ieus-5p-ge.webp",
  "ri-ieus-8p-ge": "/products/ri-ieus-8p-ge.webp",
  "ri-iems-10p-8poe-2sfp": "/products/ri-iems-10p-8poe-2sfp.webp",
  "ri-iems-12p-8l-4sfp": "/products/ri-iems-12p-8l-4sfp.webp",
  "ri-iems-12p-8poe-4sfp": "/products/ri-iems-12p-8poe-4sfp.webp",
  "ri-iems-28p-24poe-4sfp": "/products/ri-iems-28p-24poe-4sfp.webp",
  "ri-iems-6p-4poe-2sfp": "/products/ri-iems-6p-4poe-2sfp.webp",
  "ri-iems-8poe-2sfp-g": "/products/ri-iems-8poe-2sfp-g.webp",
  "ri-iems-l3-12p-8poe-4sfp": "/products/ri-iems-l3-12p-8poe-4sfp.webp",
  "ri-iems-l3-28p-24poe-4sfp-10g": "/products/ri-iems-l3-28p-24poe-4sfp-10g.webp",
  "ri-iems-poe-16p": "/products/ri-iems-poe-16p.webp",
  "ri-iems-poe-6p-4l-2sfp": "/products/ri-iems-poe-6p-4l-2sfp.webp",
  "ri-iems-20p-4sfp": "/products/ri-iems-20p-4sfp.webp",
  "ri-iems-16p-8l-8sfp-fiber": "/products/ri-iems-16p-8l-8sfp-fiber.webp",
  "ri-iems-l2-16p-8poe-8sfp": "/products/ri-iems-l2-16p-8poe-8sfp.webp",
  "ri-ieus-5poe-ge": "/products/ri-ieus-5poe-ge.webp",
  // FINAL MISSED ADDITIONS
  "ir-touchscreen": "/products/ir-touchscreen.webp",
  // BATCH ADDITIONS
  "kh-845-3isa": "/products/kh-845-3isa.webp",
  "ri-kh-945-isa-core2duo": "/products/ri-kh-945-isa-core2duo.webp",
  "ri-tlc422": "/products/ri-tlc422.webp",
  "ri-rs232i": "/products/ri-rs232i.webp",
  "model485p": "/products/model485p.webp",
  "sw485gi": "/products/sw485gi.webp",
  "usb485i": "/products/usb485i.webp",
  "sw4485i": "/products/sw4485i.webp",
  "usb8232i": "/products/usb8232i.webp",
  "usb8485i": "/products/usb8485i.webp",
  "tlc485": "/products/tlc485.webp",
  "tlc422": "/products/tlc422.webp",
  "usb232": "/products/usb232.webp",
  "usb485c": "/products/usb485c.webp",
  "232d-9": "/products/232d-9.webp",
  "usb4232": "/products/usb4232.webp",
  "usb4485": "/products/usb4485.webp",
  "ri-rs485-hub-d2j": "/products/ri-rs485-hub-d2j.webp",
  "ri-4p-rs485-hub": "/products/ri-4p-rs485-hub.webp",
  "1100": "/products/1100.webp",
  "3012": "/products/3012.webp",
  "imc101b": "/products/imc101b.webp",
  "imc101gt": "/products/imc101gt.webp",
  "ri-imc101-g-s-sc-20km": "/products/ri-imc101-g-s-sc-20km.webp",
  "ri-tsn-7208-2gf-6gt": "/products/ri-tsn-7208-2gf-6gt.webp",
  "ri-tsn-8216-4xgf-4gf-8gt-dc24": "/products/ri-tsn-8216-4xgf-4gf-8gt-dc24.webp",
  "ri-tsn-8036-4xgf-24gf-8gt": "/products/ri-tsn-8036-4xgf-24gf-8gt.webp",
  "ri-iec61850-7210-2gf": "/products/ri-iec61850-7210-2gf.webp",
  "ri-iec61850-7220-4gf": "/products/ri-iec61850-7220-4gf.webp",
  "ri-iec61850-7028-4gc": "/products/ri-iec61850-7028-4gc.webp",
  "ri-iec61850-8020-4xgf-8gf-8gt": "/products/ri-iec61850-8020-4xgf-8gf-8gt.webp",
  "ri-iec61850-8220-4xgf-8gf-8gt": "/products/ri-iec61850-8220-4xgf-8gf-8gt.webp",
  // BATCH ADDITIONS
  "ri-pcap-0840": "/products/ri-pcap-0840.webp",
  "ri-pcap-1010": "/products/ri-pcap-1010.webp",
  "ri-pcap-1040": "/products/ri-pcap-1040.webp",
  "ri-pcap-1160": "/products/ri-pcap-1160.webp",
  "ri-pcap-1210": "/products/ri-pcap-1210.webp",
  "ri-pcap-1330": "/products/ri-pcap-1330.webp",
  "ri-pcap-1500": "/products/ri-pcap-1500.webp",
  "ri-pcap-1560": "/products/ri-pcap-1560.webp",
  "ri-pcap-1700": "/products/ri-pcap-1700.webp",
  "ri-pcap-1850": "/products/ri-pcap-1850.webp",
  "ri-pcap-1900": "/products/ri-pcap-1900.webp",
  "ri-pcap-2150": "/products/ri-pcap-2150.webp",
  "ri-pcap-2380": "/products/ri-pcap-2380.webp",
  "ri-pcap-2700": "/products/ri-pcap-2700.webp",
  "ri-pcap-3200": "/products/ri-pcap-3200.webp",
  "pcap": "/products/pcap.webp",
  // BATCH ADDITIONS
  "can-to-ethernet-converter": "/products/can-to-ethernet-converter.webp",
  "can-to-serial-converter": "/products/can-to-serial-converter.webp",
  "can-to-fiber-converter": "/products/can-to-fiber-converter.webp",
  // BATCH ADDITIONS
  "icp222": "/products/icp222.webp",
  "cp202": "/products/cp202.webp",
  "ri-520-rs232-can": "/products/ri-520-rs232-can.webp",
  "ri-pcan-2-usb": "/products/ri-pcan-2-usb.webp",
  "can485": "/products/can485.webp",
  "can232": "/products/can232.webp",
  // BATCH ADDITIONS
  "ri-520-can-2-eth": "/products/ri-520-can-2-eth.webp",
  "ri-can-s-df-sc-20km": "/products/ri-can-s-df-sc-20km.webp",
  "ri-520-can-fi-s-sc-20km": "/products/ri-520-can-fi-s-sc-20km.webp",
  // BATCH ADDITIONS
  "mbox-520-i7-m7-1165g7": "/products/mbox-520-i7-m7-1165g7.webp",
  "mbox-520-i7-8250u-l2-6c": "/products/mbox-520-i7-8250u-l2-6c.webp",
  "mbox-520-i7-6c-6u-10g": "/products/mbox-520-i7-6c-6u-10g.webp",
  "mbox-520-i7-6c-6u-13g": "/products/mbox-520-i7-6c-6u-13g.webp",

  // MANUAL FIXES FOR TYPO FILES
  "gw1114-tb": "/products/gw1114-tb.webp",
  "ri-tlc485": "/products/ri-tlc485.webp",
  "ri-pcan-fdc-2-usb": "/products/ri-pcan-fdc-2-usb.webp",
  "5-wire-resistive": "/products/5-wire-resistive.webp",
  "ri-kiosk-1850t": "/products/ri-kiosk-1850t.webp",
  "ri-kiosk-2150t": "/products/ri-kiosk-2150t.webp",
  "ri-kiosk-3200t": "/products/ri-kiosk-3200t.webp",
  "kiosk-4300": "/products/kiosk-4300.webp",
  "kiosk-5500t": "/products/kiosk-5500t.webp",

  // SERIAL TO FIBER MODEM & IOT ROUTER MAPPINGS
  "ri-277-s-sc-20km": "/products/industrial-serial-to-fiber-modem.webp",
  "imf-2100": "/products/industrial-serial-to-fiber-modem.webp",
  "imf204-2f": "/products/industrial-serial-to-fiber-modem.webp",
  "imf208-2f": "/products/industrial-serial-to-fiber-modem.webp",
  "277": "/products/industrial-serial-to-fiber-modem.webp",
  "ri-520-ring-501": "/products/industrial-serial-to-fiber-modem.webp",
  "mc201-f": "/products/industrial-serial-to-fiber-modem.webp",
  "ri-520-iot-ir-4g-r680": "/products/ri-520-iot-ir-4g-r680.webp",
  "mb-520-i7-7500u": "/products/mb-520-i7-7500u.webp",
  "ri-5u-k545n": "/products/ri-5u-k545n.webp",
};
