import FERAL_FILMS from "../images/CAMREA�/FERAL_FILMS.jpg";
import CAMREAWORKS from "../images/CAMREA�/CAMREAWORKS.jpg";
import FOMO_RENTALS from "../images/CAMREA�/FOMO_RENTALS.jpg";
import FOCUS_CANNING from "../images/CAMREA�/FOCUS_CANNING.jpg";
import MOONSHINE from "../images/CAMREA�/MOONSHINE.jpg";
import ONE_STOP from "../images/CAMREA�/ONE_STOP.jpg";
import PIXELPIXEL from "../images/CAMREA�/PIXIPIXEL.jpg";
import SHIFT_4 from "../images/CAMREA�/SHIFT_4.jpg";
import SHOOT_BLUE from "../images/CAMREA�/SHOOT_BLUE.jpg";
import THE_KIT_ROOM from "../images/CAMREA�/THE_KIT_ROOM.jpg";
import VMI from "../images/CAMREA�/VMI.jpg";

const CameraData = [
    // {name: "Istanbul Filmmakers (London North Studios)", link: "https://www.istanbulfilmmakers.com/", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9909.99426968929!2d-0.2143526!3d51.6140757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876170beccf41e7%3A0x6b3a2942c01a06d5!2sLondon%20North%20Studios!5e0!3m2!1sen!2suk!4v1711937633225!5m2!1sen!2suk"},
    // {name: "One stop films", link: "https://www.onestopfilms.co.uk/", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.226290340717!2d-0.009519322413190118!3d51.52740920924005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d7e0792b53d%3A0x1248351d4bca70bf!2s3%20Mills%20Studios!5e0!3m2!1sen!2suk!4v1711925880788!5m2!1sen!2suk"},
    // {name: "Shift 4", link: "https://www.shift-4.com", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9918.182265925501!2d-0.0921213!3d51.5765638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c751f6797c7%3A0x560e0d60e8240060!2sSHIFT%204%20-%20Equipment%20Hire%20%26%20Crew!5e0!3m2!1sen!2suk!4v1711926008621!5m2!1sen!2suk"},
    // {name: "VMI", link: "https://vmi.tv/", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.242869518635!2d-0.2564506!3d51.5212747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876108fd164ce2d%3A0x458dd290f6498ef4!2sVMI.TV%20Ltd!5e0!3m2!1sen!2suk!4v1711926066161!5m2!1sen!2suk"},
    // {name: "Focus24", link: "https://www.focus-canning.com", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.038268583354!2d-0.2757102!3d51.522213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cbae65356f5%3A0x8b215d33e5a41f96!2sFocus%20Canning!5e0!3m2!1sen!2suk!4v1711926147460!5m2!1sen!2suk"},
    // {name: "Cameraworks ", link: "https://www.cameraworks.co.uk/?gad_source=1&gbraid=0AAAAADkSyf4VujYWoJ2bjaXG50y0Grjon&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GojvbwQJqVwZmbP439gs6fgqtbuTuRwjSP1ZayJTs1goQs0M9MWxa1MaAmYTEALw_wcB", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.472358575298!2d-0.0780646!3d51.5248082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb095779ca9%3A0xc8545733bc3143a8!2sCAMERAWORKS!5e0!3m2!1sen!2suk!4v1711926230861!5m2!1sen!2suk"},
    // {name: "Pixipixel", link: "https://pixipixel.com/", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.731056119645!2d-0.2755089!3d51.5006888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb97e11625d%3A0x364d0cdbd5cb0597!2sPixipixel%20(Studio%20%26%20Camera%20Division)!5e0!3m2!1sen!2suk!4v1711926309588!5m2!1sen!2suk"},
    // {name: "FOMO rentals ", link: "https://www.fomorentals.co.uk", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.299716205687!2d-0.0715748!3d51.5255999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603575a4c6d07%3A0xa3fc8a505a8f44f9!2sFOMO%20Rentals!5e0!3m2!1sen!2suk!4v1711926576433!5m2!1sen!2suk"},
    // {name: "Shoot blue ", link: "https://shootblue.tv/", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.623150094943!2d-0.2729057!3d51.5011838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487617566d4e03ff%3A0xa0adfc6509e51837!2sShoot%20Blue%20Hire!5e0!3m2!1sen!2suk!4v1711926635976!5m2!1sen!2suk"},
    // {name: "Feral rentals", link: "https://www.feralequipment.com/#", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19855.635542111984!2d-0.244517743220587!3d51.53239541751147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876106d1c3fa583%3A0xae3035e68a0af20d!2sFeral%20Equipment!5e0!3m2!1sen!2suk!4v1711926691842!5m2!1sen!2suk"},
    // {name: "Moonshine", link: "https://moonshinefilm.com", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9935.913286991816!2d-0.1331912!3d51.4952653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605393b116c15%3A0x59bdab4b7995de0a!2sMoonshine%20Film%20Camera%20%26%20Lighting%20%26%20Equipment%20Hire!5e0!3m2!1sen!2suk!4v1711926744175!5m2!1sen!2suk"},
    // {name: "The kit room ", link: "https://www.thekitroom.co.uk", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9928.643627381072!2d-0.0772878!3d51.5286085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b0077f3cb21%3A0xee3abae952b9b89f!2sThe%20Kit%20Room!5e0!3m2!1sen!2suk!4v1711926781787!5m2!1sen!2suk"},

    {name: "One stop films",
     link: "https://www.onestopfilms.co.uk/",
     img: ONE_STOP,
     map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.226290340717!2d-0.009519322413190118!3d51.52740920924005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d7e0792b53d%3A0x1248351d4bca70bf!2s3%20Mills%20Studios!5e0!3m2!1sen!2suk!4v1711925880788!5m2!1sen!2suk",
     info: "They specialize in supplying camera, lenses and grip equipment to the film, TV, commercial and promo industry. They can offer package deals and are happy to help with testing or to answer any technical questions you might have. Their specialty is lenses and over the past 15 years they have built up a significant collection of some of the rarest spherical and anamorphic lenses in the UK.",
     keywords: "Cameras, Digital 35mm sensor, full frame, macros, film cameras, anamorphic, spherical, zoom, 16mm",
     placeId: "ChIJLTdWXBwddkgRdfYII5Apiuk"
    },
    
     {name: "Shit 4",
     link: "https://www.shift-4.com",
     img: SHIFT_4,
     map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9918.182265925501!2d-0.0921213!3d51.5765638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c751f6797c7%3A0x560e0d60e8240060!2sSHIFT%204%20-%20Equipment%20Hire%20%26%20Crew!5e0!3m2!1sen!2suk!4v1711926008621!5m2!1sen!2suk",
     info:"Shift 4 and Shift 4 Cine provide cinematography expertise for Features, Drama, Commercials & broadcast TV production from their London & Manchester branches. Their range of equipment is extensive across camera, lenses, sound, lighting, and grip categories. They carry the latest models as well as reliable favourites and a number of unusual and hard-to-find items.",
     keywords:"camera, lighting, sound, tripods, matte boxes, monitors, media recorders, data recorders, lenses, PL, LPL, M. EF, M43, E MOUNT, B4 MOUNT, lends control, adaptors, extenders, LED lighting, HMI lighting, florescent lighting, tungsten lighting, audio, sound, microphones, radio mics, recorders, mixers, talkback, grip, dollies, gimbles, sliders, tracks, jibs, vehicles",
     placeId: "ChIJx5dnH3UcdkgRYAAk6GANDlY"
    },
    
     {name: "VMI",
     link: "https://vmi.tv/",
     img: VMI, 
     map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.242869518635!2d-0.2564506!3d51.5212747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876108fd164ce2d%3A0x458dd290f6498ef4!2sVMI.TV%20Ltd!5e0!3m2!1sen!2suk!4v1711926066161!5m2!1sen!2suk",
     info: "Established in 1979 and based in London and Bristol (UK), VMI is an Albert-certified carbon-neutral, award-winning rental company which supplies digital camera packages for features, dramas, commercials and documentaries. ",
     keywords: "4K Cameras, Full Frame Cameras, Super-35 Cameras, Slow Motion (200fps+), DSLR Cameras, Compact Cameras (built-in lens), Super Low-light Cameras, Minicam HD, VR Cameras, RF Mount, Zenmuse DL Mount, LPL Mount, PL Mount, Sony E/α Mount, EF Mount, Nikon ZF Mount, L Mount/MFT Mount, C Mount, Large Format, Full Frame, Full Frame Anamorphic, Super-35, Super-35, Anamorphic (4:3), Micro 4/3, Autofocus Lens, Prime Lens Set, Zoom Lens, RF Mount, LPL Mount, PL Mount, Sony E/α Mount, EF Mount, Nikon ZF Mount, L Mount/MFT Mount, B4 Mount, Dollies, Track, Jibs/Cranes, Sliders, Tripod/Tripod Heads, Tripod Legs, Gimbal Stabiliser Systems, Handheld/Shoulder Rigs, Easyrig/Ready Rig Supports, Motion Control/Timelapse, Robotic Head, Mounts, LED/COB Panel Lights, LED/COB Spot Lights, LED Tube Lights, Chromakey, HMI/MSR, Fluorescent, Infra Red Lights (IR), Softlights/Beauty Lights, Battery Powered Lights, Light Stands, Fit Frame, Trace Frame, Goalpost Kits, Light Accessories, Boom Arm, Power Cables/Distro, Solid State Recorders, Solid State Media, Solid State Readers & Transfer Devices, Radio Mics, Microphones, Audio Recorders, Sound Accessories, Sound Kits, Intercom/Walkie Talkies",
     placeId: "ChIJLc5k0Y8QdkgR9I5J9pDSjUU"
    },
    
     {name: "Focus24",
      link: "https://www.focus-canning.com", 
      img:FOCUS_CANNING, 
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.038268583354!2d-0.2757102!3d51.522213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cbae65356f5%3A0x8b215d33e5a41f96!2sFocus%20Canning!5e0!3m2!1sen!2suk!4v1711926147460!5m2!1sen!2suk",
      info: "Focus Canning is a collective of camera purists where old school values fuse with progressive intent. Their ultimate aims are to enrich the creative power of cinematographers whilst making life as easy as possible for the Camera Department.",
      keywords:"4K Cameras, Full Frame Cameras, Super-35 Cameras, Slow Motion (200fps+), DSLR Cameras, Compact Cameras (built-in lens), Super Low-light Cameras, Minicam HD, VR Cameras, RF Mount, Zenmuse DL Mount, LPL Mount, PL Mount, Sony E/α Mount, EF Mount, Nikon ZF Mount, L Mount/MFT Mount, C Mount, Large Format, Full Frame, Full Frame Anamorphic, Super-35, Super-35, Anamorphic (4:3), Micro 4/3, Autofocus Lens, Prime Lens Set, Zoom Lens, RF Mount, LPL Mount, PL Mount, Sony E/α Mount, EF Mount, Nikon ZF Mount, L Mount/MFT Mount, B4 Mount, Dollies, Track, Jibs/Cranes, Sliders, Tripod/Tripod Heads, Tripod Legs, Gimbal Stabiliser Systems, Handheld/Shoulder Rigs, Easyrig/Ready Rig Supports, Motion Control/Timelapse, Robotic Head, Mounts, LED/COB Panel Lights, LED/COB Spot Lights, LED Tube Lights, Chromakey, HMI/MSR, Fluorescent, Infra Red Lights (IR), Softlights/Beauty Lights, Battery Powered Lights, Light Stands, Fit Frame, Trace Frame, Goalpost Kits, Light Accessories, Boom Arm, Power Cables/Distro, Solid State Recorders, Solid State Media, Solid State Readers & Transfer Devices, Radio Mics, Microphones, Audio Recorders, Sound Accessories, Sound Kits, Intercom/Walkie Talkies",
      placeId: "ChIJ9VZT5rocdkgRlh-k5TNdIYs"
    },

    // {name: "Istanbul Filmmakers (London North Studios)",  link: "https://www.istanbulfilmmakers.com/", map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9909.99426968929!2d-0.2143526!3d51.6140757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876170beccf41e7%3A0x6b3a2942c01a06d5!2sLondon%20North%20Studios!5e0!3m2!1sen!2suk!4v1711937633225!5m2!1sen!2suk"},
    
    {name: "Cameraworks ",
     link: "https://www.cameraworks.co.uk/?gad_source=1&gbraid=0AAAAADkSyf4VujYWoJ2bjaXG50y0Grjon&gclid=Cj0KCQjwhtWvBhD9ARIsAOP0GojvbwQJqVwZmbP439gs6fgqtbuTuRwjSP1ZayJTs1goQs0M9MWxa1MaAmYTEALw_wcB", 
     img: CAMREAWORKS, 
     map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.472358575298!2d-0.0780646!3d51.5248082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb095779ca9%3A0xc8545733bc3143a8!2sCAMERAWORKS!5e0!3m2!1sen!2suk!4v1711926230861!5m2!1sen!2suk",
     info: "Camera works provide Pro Camera, Lighting and more. They started in 2014 and have been growing their stock of equipment for film, TV, adverts and music videos. ",
     keywords: "Digital Cinematography, DSLR & Mirrorless, Camcorders, Action Cams, Film Cameras, PL Mount, Canon EF Mount, Sony E Mount, Canon RF Mount, Probes, Micro 4/3rds Mount, Lens Adaptors, Lens Accessories, LED, HMI, Tungsten, Kino Flo, Lighting Control, Softboxes & Domes, Frames & Textiles, Stands & Grips, Distribution, Tripods, Sliders, Track & Dolly, Jibs, Monopods, gimbals, Follow Focus, Matte Boxes, Filters, Extension Units, Batteries, External Recorders, monitors",
     placeId: "ChIJqZx3lbAcdkgRqEMxvDNXVMg"
    },
    
    {name: "Pixipixel - Camera",
      link: "https://pixipixel.com/",
      img: PIXELPIXEL, 
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.731056119645!2d-0.2755089!3d51.5006888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb97e11625d%3A0x364d0cdbd5cb0597!2sPixipixel%20(Studio%20%26%20Camera%20Division)!5e0!3m2!1sen!2suk!4v1711926309588!5m2!1sen!2suk",
      info: "Pixipixel is a progressive camera and lighting rental house for Film, TV & Commercial industries. They have a large range of credits on small independent films and high budget productions. ",
      keywords: "- Digital Cinematography, prime, zoom, anamorphic, spherical, macro, fisheye, LED lighting, HMI, textiles, frames, sola lights, cars, vans, generators, dolly, sliders, jibs, gimbles, easy rig, track, follow focus, lens control, matte boxes, monitoring, rain deflectors",
      placeId: "ChIJXWIRfrkcdkgRlwXL1dsMTTY"
    },
    
    {name: "FOMO rentals ", 
     link: "https://www.fomorentals.co.uk",
     img: FOMO_RENTALS,
     map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.299716205687!2d-0.0715748!3d51.5255999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603575a4c6d07%3A0xa3fc8a505a8f44f9!2sFOMO%20Rentals!5e0!3m2!1sen!2suk!4v1711926576433!5m2!1sen!2suk",
     info: "FOMO rentals prides themselves on providing cutting edge, competitively priced equipment to London’s filmmakers and digital content producers. They stock a comprehensive range of creative tools, including cameras, grip, audio, lighting, monitoring and more. They will always help out when they can.",
     keywords: "Radio Mics, Microphones, Audio Recorders, Sound Accessories, Sound Kits, Digital Cinematography, prime, zoom, anamorphic, spherical, macro, LED lighting, HMI, textiles, frames, sola lights, dolly, sliders, jibs, gimbles, easy rig, track, follow focus, lens control, matte boxes, monitors",
     placeId: "ChIJB21MWlcDdkgR-USPWlCK_KM"
    },
    
    {name: "Shoot blue ",
     link: "https://shootblue.tv/",
     img: SHOOT_BLUE, 
     map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.623150094943!2d-0.2729057!3d51.5011838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487617566d4e03ff%3A0xa0adfc6509e51837!2sShoot%20Blue%20Hire!5e0!3m2!1sen!2suk!4v1711926635976!5m2!1sen!2suk",
     info: "Shoot blue focuses on large-sensor, digital cinematography production, our equipment portfolio reflects the latest trends and most innovative technology for film, television and creative content production. Their lighting rental department can supply anything from a simple three-point interview lighting kit through to a complete lighting package for a commercial, film or drama production – and just about everything in between.",
     keywords: "Digital Cinematography, Anamorphic Lenses, Full Frame Lenses, Macro & Speciality Lenses, Lens Accessories, Lens Adapters, Lens Mounts, Wireless Lens Control, full frame, Lens Control Accessories, Manual Lens Control, Mattebox, Monitors, Sliders, Dollies, Track, Jibs & Cranes, Gimbal Systems, Camera Support, Remote Heads, HMI Lighting, Kino Flo Lighting, Tungsten Lighting Battery Powered Lighting, Lighting Stands, Lighting Grip, Textiles & Frames, Light Modifiers, Electrical Cables & Distribution, Lighting Accessories, Power & Generators, LED lighting, Wireless Microphones, Wired Microphones, Audio Monitoring, Audio Recorders, Audio Accessories, Audio Grip",
     placeId: "ChIJ_wNObVYXdkgRNxjlCWX8raA"
    },
    
    {name: "Feral rentals",
     link: "https://www.feralequipment.com/#",
     img: FERAL_FILMS, 
     map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19855.635542111984!2d-0.244517743220587!3d51.53239541751147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876106d1c3fa583%3A0xae3035e68a0af20d!2sFeral%20Equipment!5e0!3m2!1sen!2suk!4v1711926691842!5m2!1sen!2suk",
     info: "Ferel rentals specialise in making custom rigs and in providing camera, lighting, and grip equipment to service your shoot. They provide great support for filmmakers on every level. ",
     keywords: "Digital Cinematography, DSLR & Mirrorless, Camcorders, Action Cams, full frame, PL mount, C Mount, E mount, EF mount, lenses, mattebox, follow focus, accessories, monitors, monitor, power, lens accessories, LED lighting, light stands, modifiers, grip, flags, lighting modifiers, rigs, tripods, tracking, stabilisers, dolly, easy rig, gimble, grip",
     placeId: "ChIJg6U_HG0QdkgRDfIKiuY1MK4"
    },
    
    {name: "Moonshine",
     link: "https://moonshinefilm.com",
     img: MOONSHINE,
     map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9935.913286991816!2d-0.1331912!3d51.4952653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605393b116c15%3A0x59bdab4b7995de0a!2sMoonshine%20Film%20Camera%20%26%20Lighting%20%26%20Equipment%20Hire!5e0!3m2!1sen!2suk!4v1711926744175!5m2!1sen!2suk",
     info: "Moonshine Film Kit & Crew are available for both dry and wet hire, with services operating 24/7. They offer drone operators, camera crew hire and kit hire. They work on advertisements, low budget independent films, TV and music videos.",
     keywords: "Camera, Drone, Lighting, FVP, Digital Cinematography, DSLR & Mirrorless, full frame, Camcorders, Action Cams, glasses camera, lenses, FF mount, CN mount, EF mount, PL mount, LPL mount, easy rig, tripod, follow focus, gimble, monitor",
     placeId: "ChIJyyyenNEFdkgRQ6Uk1wIggFk"
    },
    
    {name: "The kit room ",
     link: "https://www.thekitroom.co.uk",
     img: THE_KIT_ROOM,
     map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9928.643627381072!2d-0.0772878!3d51.5286085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b0077f3cb21%3A0xee3abae952b9b89f!2sThe%20Kit%20Room!5e0!3m2!1sen!2suk!4v1711926781787!5m2!1sen!2suk",
     info: "The Kit Room is a hire company created by production people for production people. They supply state of the art equipment, at the most competitive prices, but also provide friendly, comprehensive support to your production. ",
     keywords: "Digital Cinematography, DSLR & Mirrorless, Camcorders, Action Cams, full frame, lenses, CINE LENSES, PL MOUNT, SONY E MOUNT, EF MOUNT PRIMES, EF MOUNT ZOOMS, LENS ADAPTERS, TRIPODS, MONOPODS, GIMBALS, EASYRIGS, SHOULDER RIGS, SLIDERS, TRACK & DOLLIES, JIB, CLAMPS, lighting, LED, FLUORESCENT, TUNGSTEN, BI-COLOUR, LIGHTING ACCESSORIES, APUTURE, RGBWW, RADIO MICS, MICROPHONES, MIXERS, RECORDERS, SOUND ACCESSORIES, PA SYSTEM, monitors, MATTE BOXES, FOLLOW FOCUS, HDMI RECORDER/PLAYER, POWER",
     placeId: "ChIJIcvzdwAbdkgRn7i5Uum6Ou4"
    },
];

export default CameraData;