// src/data/printer-data.js
// 👉 Sirf yahan se data manage hoga. UI module is array se render karega.

export const PRINTER_DATA = [
  /* ===================== Hp Smart Tank (8) ===================== */
  { id: 301, title: "HP Smart Tank 500 All-in-One Printer (USB)",                 brand: "HP", image: "/images/1.png",  price: 199.99, mrp: 239.99, category: "Hp Smart Tank", type: "Ink Tank AIO", rating: 4.5 },
  { id: 302, title: "HP Smart Tank 510 Wireless All-in-One",                      brand: "HP", image: "/images/2.png",  price: 219.99, mrp: 259.99, category: "Hp Smart Tank", type: "Ink Tank AIO", rating: 4.6 },
  { id: 303, title: "HP Smart Tank 515 Wireless All-in-One (Mobile Print)",       brand: "HP", image: "/images/3.png",  price: 229.99, mrp: 269.99, category: "Hp Smart Tank", type: "Ink Tank AIO", rating: 4.6 },
  { id: 304, title: "HP Smart Tank 520 Wi-Fi Duplex AIO",                          brand: "HP", image: "/images/4.png",  price: 249.99, mrp: 299.99, category: "Hp Smart Tank", type: "Ink Tank AIO", rating: 4.7 },
  { id: 305, title: "HP Smart Tank 530 ADF Wireless All-in-One",                   brand: "HP", image: "/images/5.png",  price: 279.99, mrp: 329.99, category: "Hp Smart Tank", type: "Ink Tank AIO", rating: 4.7 },
  { id: 306, title: "HP Smart Tank 580 All-in-One (Wi-Fi, Duplex)",                brand: "HP", image: "/images/6.png",  price: 289.99, mrp: 339.99, category: "Hp Smart Tank", type: "Ink Tank AIO", rating: 4.8 },
  { id: 307, title: "HP Smart Tank 700 ADF Duplex Wireless AIO",                   brand: "HP", image: "/images/7.png",  price: 309.99, mrp: 359.99, category: "Hp Smart Tank", type: "Ink Tank AIO", rating: 4.7 },
  { id: 308, title: "HP Smart Tank 790 High-Speed All-in-One",                     brand: "HP", image: "/images/8.png",  price: 329.99, mrp: 389.99, category: "Hp Smart Tank", type: "Ink Tank AIO", rating: 4.8 },

  /* ===================== Hp Design Jet (8) ===================== */
  { id: 311, title: "HP DesignJet T230 24-inch Printer",                           brand: "HP", image: "/images/9.png",  price: 699.99, mrp: 799.99, category: "Hp Design Jet", type: "Wide Format Plotter", rating: 4.5 },
  { id: 312, title: "HP DesignJet T250 24-inch Compact Plotter",                   brand: "HP", image: "/images/10.png", price: 799.99, mrp: 899.99, category: "Hp Design Jet", type: "Wide Format Plotter", rating: 4.6 },
  { id: 313, title: "HP DesignJet T630 36-inch Printer (Stand Included)",          brand: "HP", image: "/images/11.png", price: 1199.99, mrp: 1399.99, category: "Hp Design Jet", type: "Wide Format Plotter", rating: 4.6 },
  { id: 314, title: "HP DesignJet T650 36-inch Wireless Plotter",                  brand: "HP", image: "/images/12.png", price: 1399.99, mrp: 1599.99, category: "Hp Design Jet", type: "Wide Format Plotter", rating: 4.7 },
  { id: 315, title: "HP DesignJet Studio 24-inch (Wood Finish)",                   brand: "HP", image: "/images/13.png", price: 1599.99, mrp: 1799.99, category: "Hp Design Jet", type: "Wide Format Plotter", rating: 4.7 },
  { id: 316, title: "HP DesignJet Studio 36-inch (Steel Finish)",                  brand: "HP", image: "/images/14.png", price: 2199.99, mrp: 2399.99, category: "Hp Design Jet", type: "Wide Format Plotter", rating: 4.8 },
  { id: 317, title: "HP DesignJet Z6 24-inch PostScript Printer",                  brand: "HP", image: "/images/15.png", price: 2999.99, mrp: 3299.99, category: "Hp Design Jet", type: "Wide Format Plotter", rating: 4.6 },
  { id: 318, title: "HP DesignJet Z9+ 44-inch Photo Printer",                      brand: "HP", image: "/images/16.png", price: 3999.99, mrp: 449.99, category: "Hp Design Jet", type: "Wide Format Plotter", rating: 4.7 },

  /* ===================== Hp Office Jet (8) ===================== */
  { id: 321, title: "HP OfficeJet 8010 All-in-One Printer",                        brand: "HP", image: "/images/17.png", price: 149.99, mrp: 189.99, category: "Hp Office Jet", type: "Inkjet AIO", rating: 4.4 },
  { id: 322, title: "HP OfficeJet 8020 Wireless AIO",                              brand: "HP", image: "/images/18.png", price: 169.99, mrp: 199.99, category: "Hp Office Jet", type: "Inkjet AIO", rating: 4.5 },
  { id: 323, title: "HP OfficeJet Pro 9010e All-in-One (Instant Ink Ready)",       brand: "HP", image: "/images/19.png", price: 219.99, mrp: 259.99, category: "Hp Office Jet", type: "Inkjet AIO", rating: 4.6 },
  { id: 324, title: "HP OfficeJet Pro 9020e Duplex ADF Wireless",                  brand: "HP", image: "/images/20.png", price: 239.99, mrp: 279.99, category: "Hp Office Jet", type: "Inkjet AIO", rating: 4.6 },
  { id: 325, title: "HP OfficeJet Pro 9135e Wireless All-in-One (3-months Instant Ink)", brand: "HP", image: "/images/21.png", price: 319.99, mrp: 419.99, category: "Hp Office Jet", type: "Inkjet AIO", rating: 4.7 },
  { id: 326, title: "HP OfficeJet Pro 9730e Wide-Format AIO",                      brand: "HP", image: "/images/22.png", price: 369.99, mrp: 439.99, category: "Hp Office Jet", type: "Wide-format Inkjet", rating: 4.6 },
  { id: 327, title: "HP OfficeJet 7740 Wide-Format Printer (A3)",                   brand: "HP", image: "/images/23.png", price: 269.99, mrp: 329.99, category: "Hp Office Jet", type: "Wide-format Inkjet", rating: 4.5 },
  { id: 328, title: "HP OfficeJet Pro 9015e Wireless AIO",                         brand: "HP", image: "/images/24.png", price: 229.99, mrp: 269.99, category: "Hp Office Jet", type: "Inkjet AIO", rating: 4.6 },

  /* ===================== Hp Laser Jet (8) ===================== */
  { id: 331, title: "HP LaserJet M110w Mono Printer (Compact)",                    brand: "HP", image: "/images/25.png", price: 119.99, mrp: 149.99, category: "Hp Laser Jet", type: "Mono Laser", rating: 4.4 },
  { id: 332, title: "HP LaserJet M211d Mono Laser (Duplex)",                       brand: "HP", image: "/images/26.png", price: 159.99, mrp: 189.99, category: "Hp Laser Jet", type: "Mono Laser", rating: 4.5 },
  { id: 333, title: "HP LaserJet M234sdw Mono AIO (Wi-Fi, Duplex, ADF)",           brand: "HP", image: "/images/27.png", price: 219.99, mrp: 259.99, category: "Hp Laser Jet", type: "Mono Laser AIO", rating: 4.6 },
  { id: 334, title: "HP Color LaserJet M255dw Wireless Printer",                   brand: "HP", image: "/images/28.png", price: 299.99, mrp: 359.99, category: "Hp Laser Jet", type: "Color Laser", rating: 4.5 },
  { id: 335, title: "HP LaserJet Pro M404dn Mono Printer (Ethernet)",              brand: "HP", image: "/images/29.png", price: 269.99, mrp: 319.99, category: "Hp Laser Jet", type: "Mono Laser", rating: 4.5 },
  { id: 336, title: "HP LaserJet Pro M406dn Workgroup Printer",                    brand: "HP", image: "/images/30.png", price: 349.99, mrp: 399.99, category: "Hp Laser Jet", type: "Mono Laser", rating: 4.6 },
  { id: 337, title: "HP Color LaserJet Pro M479fdw Color AIO",                     brand: "HP", image: "/images/31.png", price: 489.99, mrp: 549.99, category: "Hp Laser Jet", type: "Color Laser AIO", rating: 4.7 },
  { id: 338, title: "HP LaserJet Pro M428fdw Mono Laser AIO",                      brand: "HP", image: "/images/32.png", price: 429.99, mrp: 499.99, category: "Hp Laser Jet", type: "Mono Laser AIO", rating: 4.6 },

  /* ===================== Hp Scan Jet (8) ===================== */
  { id: 341, title: "HP ScanJet Pro 2000 s2 Sheet-feed Scanner",                   brand: "HP", image: "/images/33.png", price: 289.99, mrp: 329.99, category: "Hp Scan Jet", type: "Document Scanner", rating: 4.5 },
  { id: 342, title: "HP ScanJet Pro 3000 s4 Sheet-feed Scanner",                   brand: "HP", image: "/images/34.png", price: 329.99, mrp: 379.99, category: "Hp Scan Jet", type: "Document Scanner", rating: 4.6 },
  { id: 343, title: "HP ScanJet Pro 3500 f1 Flatbed Scanner",                      brand: "HP", image: "/images/35.png", price: 399.99, mrp: 459.99, category: "Hp Scan Jet", type: "Flatbed Scanner", rating: 4.6 },
  { id: 344, title: "HP ScanJet Enterprise Flow 5000 s5",                          brand: "HP", image: "/images/36.png", price: 549.99, mrp: 629.99, category: "Hp Scan Jet", type: "High-Speed Scanner", rating: 4.7 },
  { id: 345, title: "HP ScanJet Enterprise Flow 7000 s3",                          brand: "HP", image: "/images/37.png", price: 649.99, mrp: 719.99, category: "Hp Scan Jet", type: "High-Speed Scanner", rating: 4.7 },
  { id: 346, title: "HP ScanJet Pro 3600 f1 Flatbed",                              brand: "HP", image: "/images/38.png", price: 429.99, mrp: 489.99, category: "Hp Scan Jet", type: "Flatbed Scanner", rating: 4.6 },
  { id: 347, title: "HP ScanJet Enterprise Flow N9120 fn2 A3",                     brand: "HP", image: "/images/39.png", price: 1999.99, mrp: 2299.99, category: "Hp Scan Jet", type: "A3 Production Scanner", rating: 4.6 },
  { id: 348, title: "HP ScanJet Enterprise Flow 4500 fn1 Network Flatbed",         brand: "HP", image: "/images/40.png", price: 799.99, mrp: 899.99, category: "Hp Scan Jet", type: "Network Flatbed", rating: 4.5 },

  /* ===================== Hp Desk Jet (8) ===================== */
  { id: 351, title: "HP DeskJet 2331 All-in-One",                                  brand: "HP", image: "/images/41.png", price: 59.99, mrp: 79.99, category: "Hp Desk Jet", type: "Inkjet", rating: 4.3 },
  { id: 352, title: "HP DeskJet 2710 Wireless",                                    brand: "HP", image: "/images/42.png", price: 69.99, mrp: 89.99, category: "Hp Desk Jet", type: "Inkjet", rating: 4.3 },
  { id: 353, title: "HP DeskJet 2723e All-in-One (HP+)",                           brand: "HP", image: "/images/43.png", price: 79.99, mrp: 99.99, category: "Hp Desk Jet", type: "Inkjet", rating: 4.4 },
  { id: 354, title: "HP DeskJet 2729e Wireless AIO",                               brand: "HP", image: "/images/44.png", price: 84.99, mrp: 109.99, category: "Hp Desk Jet", type: "Inkjet", rating: 4.4 },
  { id: 355, title: "HP DeskJet Ink Advantage 2338 AIO",                           brand: "HP", image: "/images/45.png", price: 64.99, mrp: 84.99, category: "Hp Desk Jet", type: "Inkjet", rating: 4.3 },
  { id: 356, title: "HP DeskJet 2775 All-in-One",                                  brand: "HP", image: "/images/46.png", price: 89.99, mrp: 109.99, category: "Hp Desk Jet", type: "Inkjet", rating: 4.4 },
  { id: 357, title: "HP DeskJet 2776 Wireless AIO",                                brand: "HP", image: "/images/47.png", price: 94.99, mrp: 119.99, category: "Hp Desk Jet", type: "Inkjet", rating: 4.4 },
  { id: 358, title: "HP DeskJet 2332 Printer",                                     brand: "HP", image: "/images/48.png", price: 59.99, mrp: 79.99, category: "Hp Desk Jet", type: "Inkjet", rating: 4.3 },

  /* ===================== Hp Envy (8) ===================== */
  { id: 361, title: "HP ENVY 6020e All-in-One Printer",                            brand: "HP", image: "/images/49.png", price: 129.99, mrp: 159.99, category: "Hp Envy", type: "Photo Inkjet AIO", rating: 4.4 },
  { id: 362, title: "HP ENVY 6032e Wireless All-in-One",                           brand: "HP", image: "/images/50.png", price: 139.99, mrp: 169.99, category: "Hp Envy", type: "Photo Inkjet AIO", rating: 4.5 },
  { id: 363, title: "HP ENVY 6075 Wireless AIO",                                   brand: "HP", image: "/images/51.png", price: 149.99, mrp: 179.99, category: "Hp Envy", type: "Photo Inkjet AIO", rating: 4.5 },
  { id: 364, title: "HP ENVY 6420e All-in-One",                                    brand: "HP", image: "/images/52.png", price: 159.99, mrp: 189.99, category: "Hp Envy", type: "Photo Inkjet AIO", rating: 4.5 },
  { id: 365, title: "HP ENVY 6455e All-in-One",                                    brand: "HP", image: "/images/53.png", price: 169.99, mrp: 199.99, category: "Hp Envy", type: "Photo Inkjet AIO", rating: 4.6 },
  { id: 366, title: "HP ENVY Inspire 7220e All-in-One",                            brand: "HP", image: "/images/54.png", price: 189.99, mrp: 219.99, category: "Hp Envy", type: "Photo Inkjet AIO", rating: 4.6 },
  { id: 367, title: "HP ENVY Inspire 7920e All-in-One",                            brand: "HP", image: "/images/55.png", price: 209.99, mrp: 249.99, category: "Hp Envy", type: "Photo Inkjet AIO", rating: 4.7 },
  { id: 368, title: "HP ENVY 6055e All-in-One",                                    brand: "HP", image: "/images/56.png", price: 139.99, mrp: 169.99, category: "Hp Envy", type: "Photo Inkjet AIO", rating: 4.5 },
];
