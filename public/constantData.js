export const websiteData = {
    name: "Maruti Steel Alloys",
    logo: require("../public/Images/logo.png"),
    contactInfo: {
        mobileNo: ["9769962083", "9328158053"],
        officeNo:["02266393892"],
        contactPerson: ["Mr.Bharat Modi"],
        email: ["marutisteela@gmail.com"],
        address: ["42, Devidas Mansion, 1st Carpenter Street, C.P. Tank, Mumbai- 400 004."]
    },
    footerData: {
        about: "Maruti Steel Alloys is rapidly establishing itself as a prominent frontrunner within the Pipes and Tubes industry. With a specialization in Stainless Steel Pipes, Stainless Steel Tubes, Pipe Fittings, Flanges, Socketweld Fittings, Screwed Fittings, Fasteners, and Valves, Maruti Steel Alloys stands out as a premier stockist and supplier in India.",
        footerBottom: "Manufacturer, Fabricator, Stockholder, Suppliers, Traders, Wholesaler, Dealer, Distributor, Importer, Exporter, Stockist of Alloy Steel Tubes & Carbon Steel Pipe Nickel - Monel® - Inconel® - Incoloy® - Hastelloy® - Alloy 20 - Duplex - Olets® are the registered trademarks of their respective owners."
    }
}


export const pipeData = {
    name: "Pipe",
    img: require("./Images/ProductMain/pipe/pipeImg.jpg"),
    text1: "That's great to hear! Maruti Steel Alloys seems to be a reputable company in the pipe supply industry, known for its high-quality products and wide range of applications. Offering corrosion-resistant, durable, and heat-resistant pipes is essential for various industries such as shipbuilding, chemical, aerospace, power plants, and sugar mills, where the quality of materials is crucial for safety and performance.",
    text2: "Maruti Steel Alloys holds a distinguished reputation as a premier pipe supplier in India, serving a global clientele across five continents and spanning over 26 countries. Renowned for our pipes' unmatched reliability and exceptional quality, we consider our clients as partners and prioritize their satisfaction above all. Operating under Maruti Steel Alloys, we offer an extensive range of pipes in various shapes, sizes, and specifications, ensuring a tailored solution for every need. Committed to continuous excellence, we strive to elevate industry standards and redefine the benchmarks for quality and dependability on a global scale.",
    text3: "At Maruti Steel Alloys, each pipe is meticulously crafted in adherence to both national and international quality standards. Our team of adept professionals harnesses cutting-edge technology and advanced machinery to ensure the production of top-tier pipes. Rigorous testing of these pipes, constructed from premium raw materials, is a standard practice. Under the guidance of our proficient experts, the entire process is scrupulously monitored, leaving no room for defects in the end product. Through multiple stages of testing, we guarantee the delivery of pipes of the utmost quality to our valued customers.",
    heading:"Stainless Steel Pipes, ERW Pipes Supplier, Welded Pipes Stockist in India.",
    "Specifications": {
        "Types": "Round, Square, Rectangular, Hydraulic Etc",
        Size: '1/8"NB to 24"NB & 1/4"OD TO 24"OD AND 6.35mm to 254mm OD Thickness: 0.6mm to 20mm',
        Standards: "ASME/ANSI B16.11, MSS-SP-97, MSS-SP-79, JIS B2316, BS 3799"
    },
    heading:"Stainless Steel Pipes, ERW Pipes Supplier, Welded Pipes Stockist in India.",
    type: [
        {
            name: "ERW Pipes",
            img: require("./Images/ProductMain/pipe/erwImg.webp"),
            desc: ""
        },
        {
            name: "Seamless Pipes",
           img: require("./Images/ProductMain/pipe/seamlessImg.jpg"),
            desc: ""
        },
        {
            name: "Welded Pipes",
            img: require("./Images/ProductMain/pipe/weldImg.webp"),
            desc: ""
        },

    ]
}
export const GradeData = {
    name: "Grades",
    gardeData:
    {
        "Stainless Steel": "ASTM /ASME A/SA 213 / 249 / 269 / 312 / 358 CL. I to V – 304 , 304L , 304H, 309S ,309H , 310S, 310H , 316 , 316TI , 316H , 316 LN , 317 , 317L , 321 , 321H , 347 , 347 H , 904L .",
        "Carbon Steel": "ASTM A106, A 53, API A 5L Gr. A, B, C, ASTM A 333 Gr. 1 to 6 (IBR & NON IBR).",
        "Alloy Steel": "ASTM A335 ,GR P1, P2, P5, P9, P11, P22 ,P91",
        "Nickel Alloys": "Monel 400 & 500, Inconel 600 & 625, Incolloy 800, 825, Hastelloy 904, TItanium, Tungston, Silver Nickle, Zirconium, palladium, vanadium etc.",
        "Copper Alloy": "Aluminium , Copper , Brass & Gunmetal.",
        "Hastelloy": "Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000, Hastelloy C-4, Hastelloy X, Hastelloy B, Hastelloy N, Hastelloy G",
        "Inconel": "Inconel 600, 601, 625, 625LCF, 686, 718, 800, 825, X-750 , 690, 602, 617, 925, A-289, Inconel AL-6XN, AL-904L"
    }

}

export const CitiesData = {
    text: function(name){
      return `
      Maruti Steel Alloys ranks among India's premier suppliers, exporters, and stockists of ${name}, celebrated for their reliability and performance. Typically, we export three containers of ${name} monthly to various Indian ports, catering to a diverse clientele. Our ${name} distribution spans key cities including Mumbai, Chennai, Surat, New Delhi, Bangalore, and others, cementing our market presence.
      `;
    },
    listData: [
        "Bengaluru",
        "Chennai",
        "Hyderabad",
        "Kolkata",
        "Mumbai",
        "Pune",
        "Ahmedabad",
        "Delhi",
        "Raipur",
        "Jaipur",
        "Surat",
        "Salem",
        "Jamnagar",
        "Bhubaneswar",
        "Sivakasi",
        "Rajahmundry",
        "Thiruvananthapuram",
        "Tiruppur",
        "Bhiwandi",
        "Bokaro Steel City",
        "Bharuch",
        "Vijaywada",
        "Firozabad",
        "Rajkot",
        "Cochin",
        "Ludhiana",
        "Durgapur",
        "Panna",
        "Panipat",
        "Raipur",
        "Bareilly",
        "Channapatna",
        "Kharagpur",
        "Peenya",
        "Pimpri-Chinchwad",
        "Nashik",
        "Bangalore",
        "Indore",
        "Haldia",
        "Moradabad",
        "Varanasi",
        "Rourkela",
        "Angul",
        "Dibrugarh",
        "Gwalior",
        "Patna",
        "Trivandrum",
        "Pithampur",
        "Bareilly",
        "Coimbatore",
        "Kannur",
        "Nagpur",
        "Vadodara",
        "Rudrapur",
        "Agra",
        "Bhagalpur",
        "Bhilai",
        "Thane",
        "Kanpur",
        "Pithampur",
        "Bhopal",
        "Sri City",
        "Jamshedpur",
        "Hosdurg",
        "Lucknow",
        "Noida"
    ]
}
export const CountriesData={
    text:function(name){
      return `
      Maruti Steel Alloys ${name} find their way to the United Arab Emirates, various European nations, Africa, Asia, and every corner of the globe. Our reach extends far and wide, serving an ever-growing clientele that spans numerous countries on a monthly basis. Presently, we venture into new regions and ports, exporting a significant five containers of ${name}. Our legacy as India's premier ${name} suppliers is one of sustained dominance, shaping the market for generations.`;
    },
    listData:[
        "Saudi Arabia",
        "Oman",
        "Kuwait",
        "Bahrain",
        "Qatar",
        "UAE",
        "Iran",
        "Netherland",
        "Nigeria",
        "Mexico",
        "Canada",
        "Bangladesh",
        "United States",
        "South Africa",
        "Malaysia",
        "Brazil",
        "Singapore",
        "Sri Lanka",
        "Australia",
        "Turkey",
        "Venezuela",
        "United Kingdom",
        "Germany",
        "New Zealand"
    ]
    
}
export const applicationsData={
    img:require("./Images/ProductMain/applicationImg.png"),
    listdata:[
        "Used in the Petrochemical Industry.",
"Used in the Oil and Gas Industry.",
"Used in Medical Gas Pipeline Systems.",
"Used in the Chemical Industry.",
"Used in Automobile Piping.",
"Used in Fertilizers Architecture."
    ]
}

export const tubeData = {
    name: "Tubes",
   img: require("./Images/ProductMain/tubes/tubes.jpeg"),
    text1: "Maruti Steel Alloys, a leading tubes supplier, exporter, and stockist in India, is renowned for delivering superior quality tubes. Our tubes boast corrosion resistance, durability, and exceptional heat resistance, making them ideal for industries such as shipbuilding, chemical processing, aerospace, power plants, and sugar mills. Choose Maruti Steel Alloys for top-notch tube solutions that exceed industry standards.",
    text2: "As India's foremost supplier, dealer, and stockist of tubes, we proudly offer a comprehensive range of seamless tubes in various sizes, shapes, and grades. Our distribution network spans across major Indian cities and extends to over twenty states, ensuring widespread availability.",
    text3: "Every tube supplied by Maruti Steel Alloys adheres to both national and international quality standards. To ensure the delivery of premium quality tubes, our team of skilled professionals rigorously tests each product in accordance with established protocols.",
    heading:"Stainless Steel Tubes, ERW Tubes Supplier, Welded Tubes Stockist in India.",
    "Specifications": {
        "Types": "Round, Seamless, ERW, Rectangular, Hydraulic Etc",
        Size: '1/2″OD TO 8″OD',
        Standards: "ASME/ANSI B16.11, MSS-SP-97, MSS-SP-79, JIS B2316, BS 3799"
    },
    type: [
        {
            name: "ERW Tubes",
              img: require("./Images/ProductMain/tubes/erwTubes.webp"),
            desc: ""
        },
        {
            name: "Seamless Tubes",
             img: require("./Images/ProductMain/tubes/seamlessTubes.webp"),
            desc: ""
        },
        {
            name: "Welded Tubes",
            img: require("./Images/ProductMain/tubes/weldedImg.jpg"),
            desc: "",
        },

    ]
}
export const FlangesData = {
    name: "Tubes",
    img: require("./Images/ProductMain/Flange/flageImg.jpg"),
    text1: "Maruti Steel Alloys stands as a premier supplier, exporter, and stockist of flanges in India. Renowned for our provision of top-tier quality, our flanges are synonymous with corrosion resistance, durability, and exceptional heat tolerance. Applied across diverse sectors including shipbuilding, chemical processing, aerospace, power generation, and sugar mills, our flanges consistently meet industry demands. Our extensive range spans various materials, including stainless steel, duplex and super duplex steel, carbon steel, nickel alloy, and alloy steel. Catering to large-scale needs, Maruti Steel Alloys remains an industry leader in flange solutions.",
    text2: "As India's foremost supplier, dealer, and stockist of flanges, we take pride in offering a comprehensive range available in various sizes, shapes, and grades. Our distribution network spans major Indian cities and extends to over twenty states, ensuring widespread availability. What sets us apart is our commitment to providing flanges conforming to different grade standards including ASME, EN, ISO, and DIN, cementing our position as industry leaders.",
    text3: "Every flange supplied by Maruti Steel Alloys conforms to both national and international quality requirements. In our pursuit of delivering flanges of the utmost quality, our team of skilled professionals rigorously undergoes a meticulous testing process.",
    heading:"A trusted source for Slip On, Lap Joint, Weld Neck, and Blind flanges in India",
    "Specifications": {
        "Flanges Types": "Slip-on Flange, Lap Joint Flange, Weld Neck Flange, Blind Flange, Ring Joint Face (RTJ) Flange, Socketweld Flange, Threaded Flange, Long Welding Neck, Orifice Flange",
        Class:"150 LBS, 300 LBS, 600 LBS, 900 LBS, 1500 LBS, 2500 LBS ASA 150, ASA 300, PN 6,10,16,25, 40,64,100,160 ETC. available with NACE MR 01-75",
        
        Size: '1/2″ (15 NB) to 48″ (1200NB) DN10~DN5000',
        Type:"Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ), Lap-Joint Face (LJF), Large Male-Female (LMF), Small Male-Female (SMF), Large Tongue & Groove, Small Tongue, Groove",
        Standards: "ASME/ANSI B16.11, MSS-SP-97, MSS-SP-79, JIS B2316, BS 3799"
    },
    type: [
        {
            name: "Slip-On Flange",
            img: require("./Images/ProductMain/Flange/flipjoin.webp"),
            desc: ""
        },
        {
            name: "Lap Joint Flange",
            img: require("./Images/ProductMain/Flange/lapped-joint-flanges.png"),
            desc: ""
        },
        {
            name: "Weld Neck Flange",
            img: require("./Images/ProductMain/Flange/wn-flange-2.jpg"),
            desc: ""
        },
        {
            name: "Blind Flange",
           img: require("./Images/ProductMain/Flange/blind flange.webp"),
            desc: ""
        },
        {
            name: "Ring Joint Face Flange",
           img: require("./Images/ProductMain/Flange/ringjoint.jpg"),
            desc: ""
        },
        {
            name: "Socket Weld Flange",
            img: require("./Images/ProductMain/Flange/socket-weld-flange.jpg"),
            desc: ""
        },
        {
            name: "Threaded Flange",
           img: require("./Images/ProductMain/Flange/threadedImg.jpg"),
            desc: ""
        },
        {
            name: "Long Weld Neck Flange",
            img: require("./Images/ProductMain/Flange/flange-long-weld-neck.jpg"),
            desc: ""
        },
        {
            name: "Orifice Flange",
           img: require("./Images/ProductMain/Flange/orifice-flange.webp"),
            desc: ""
        },

    ]
}

export const fastenersData = {
    name: "Tubes",
    img: require("./Images/ProductMain/fastener/fastener.jpg"),
    text1: "Maruti Steel Alloys stands at the forefront as a premier supplier, exporter, and stockist of fasteners in India. Renowned for our provision of top-tier quality, our fasteners exemplify corrosion resistance, durability, and exceptional heat tolerance. Applied across diverse sectors including shipbuilding, chemical processing, aerospace, power generation, and sugar mills, our fasteners consistently meet industry demands. Our comprehensive range encompasses a variety of materials, including carbon steel, stainless steel, alloy steel, mild steel, monel 400, monel 500, hardened steel, and malleable iron.",
    text2: "As India's foremost supplier, dealer, and stockist of fasteners, we take pride in offering a comprehensive range available in various sizes, shapes, and grades. Our distribution network covers major Indian cities and extends across more than twenty states, ensuring widespread availability. Our distinction lies in providing a diverse range of grades such as ASTM A126 Gr A, ASTM A126 Gr B, ASTM A182 Gr F1, ASTM A182 Gr F5B, ASTM A182 Gr F304, and more, setting us apart as industry leaders",
    text3: "Every fastener supplied by Maruti Steel Alloys conforms to both national and international quality requirements. To ensure the delivery of fasteners of the highest quality, our team of skilled professionals rigorously undergoes a comprehensive testing process.",
    heading:"Fasteners, Screw, Nails Supplier, Bolts, Anchors, Rivets Stockist in India.",
    "Specifications": {
        "Fasteners Types": "Screw, Nails, Bolts, Anchors, Rivets.",
        Class:"1A,2A, 3A, 1B, 2B, 3B",
        Standard: 'ASTM A126 Gr A, ASTM A126 Gr B, ASTM A182 Gr F1, ASTM A182 Gr F5B, ASTM A182 Gr F304',
        Grades:"Brass Bronze, Stainless Steel, Aluminum, Cast Iron, Non ferrous metal, Copper, Plastic, PVC, Polypropylene",
        Standards: "ASME/ANSI B16.11, MSS-SP-97, MSS-SP-79, JIS B2316, BS 3799"
    },
    type: [
        {
            name: "Screws Fasteners",
            img: require("./Images/ProductMain/fastener/screwFastener.jpg"),
            desc: ""
        },
        {
            name: "Nails Fasteners",
             img: require("./Images/ProductMain/fastener/nailfastener.webp"),
            desc: ""
        },
        {
            name: "Nuts Fasteners",
            img: require("./Images/ProductMain/fastener/nut-fastener-500x500.jpg"),
            desc: ""
        },
        {
            name: "Bolts Fasteners",
            img: require("./Images/ProductMain/fastener/hex-head-bolts-.webp"),
            desc: ""
        },
        {
            name: "Washers Fasteners",
            img: require("./Images/ProductMain/fastener/washer.jpg"),
            desc: ""
        },
        {
            name: "Anchors Fasteners",
             img: require("./Images/ProductMain/fastener/stainless-steel-wedge-anchors.jpg"),
            desc: ""
        },
        {
            name: "Rivet Fasteners",
            img: require("./Images/ProductMain/fastener/blind-rivets.jpeg"),
            desc: ""
        }
       

    ],
    gradesTable:false
}


export const ValvesData = {
    name: "Valves",
    img: require("./Images/ProductMain/valve/valveImg.webp"),
    text1: "Maruti Steel Alloys stands as a prominent supplier, exporter, and stockist of valves in India. Renowned for our commitment to delivering superior quality, our valves epitomize corrosion resistance, durability, and exceptional heat resilience. Widely utilized across industries including shipbuilding, chemical processing, aerospace, power generation, and sugar mills, our valves consistently meet industry demands. Our diverse range encompasses materials such as carbon steel, stainless steel, alloy steel, mild steel, monel 400, monel 500, hardened steel, and malleable iron.",
    text2: "As India's premier supplier, dealer, and stockist of valves, we proudly present an extensive range available in diverse sizes, shapes, and grades. Our distribution network spans across major Indian cities and extends to over twenty states, ensuring widespread availability. Our distinctiveness lies in offering a variety of grades including ASTM A351 CF8/CF8M, ASTM A105, A350, and A182, setting us apart as leaders in the industry.",
    text3: "Every product supplied by Maruti Steel Alloys conforms to both national and international quality requirements. To ensure the provision of valves of the utmost quality, our team of skilled professionals rigorously undergoes a comprehensive testing process.",
    heading:"Valves Supplier, Ball Valves, Butterfly Valves Stockist in India.",
    "Specifications": {
        "Valves Types": "Ball Valves, Butterfly Valves, Check Valves, Globe Valves, Gate Valves, Plug Valves",
        Class:"three types of class standard, special, and limited. ASME B16. 34 covers Class 150, 300, 400, 600, 900, 1500, 2500, and 4500 valves",
        Standard: 'DIN 3381, API 6D, ASME B 31.8, ANSI B 16.5, API 6D, API RP 521, ASME B 31.8, ASME, ANSI B 16.5',
        Grades:"carbon steel, stainless steel, alloy steel, mild steel, monel 400, monel, hardened steel, monel 500, malleable iron.",
        
    },
    type: [
        {
            name: "Ball Valves",
            img: require("./Images/ProductMain/valve/ballValve.jpeg"),
            desc: ""
        },
        {
            name: "Butterfly Valves",
            img: require("./Images/ProductMain/valve/Butterfly-Valve.jpg"),
            desc: ""
        },
        {
            name: "Check Valves",
            img: require("./Images/ProductMain/valve/checkValve.jpeg"),
            desc: ""
        },
        {
            name: "Globe Valves",
            img: require("./Images/ProductMain/valve/globevalve.jpg"),
            desc: ""
        },
        {
            name: "Gate Valves",
            img: require("./Images/ProductMain/valve/cast-iron-gate-valve.jpg"),
            desc: ""
        },
        {
            name: "Plug Valves",
            img: require("./Images/ProductMain/valve/plugValve.jpg"),
            desc: ""
        }

    ],
    gradesTable:false
}

export const GasketData = {
    name: "Gasket",
    img: require("./Images/ProductMain/gasket/gasketImg.jpg"),
    text1: "Maruti Steel Alloys stands as a premier supplier, exporter, and stockist of gaskets in India. Renowned for our unwavering commitment to delivering excellence, our gaskets embody corrosion resistance, durability, and exceptional heat resilience. With applications spanning diverse sectors including shipbuilding, chemical processing, aerospace, power generation, and sugar mills, our gaskets consistently meet industry demands. At Maruti Steel Alloys, we exclusively provide high-quality products, reinforcing our reputation in the market.",
    text2: "Maruti Steel Alloys holds a prominent position as a reputable gasket supplier in India. With a clientele spanning five continents and over 26 countries, we effectively fulfill a significant global demand. Our gaskets have earned worldwide acclaim for their reliability and quality. Through our product offerings and services, we view our customers as partners in success. Maruti Steel Alloys offers a diverse range of gaskets in various shapes, sizes, and specifications, catering to the specific needs of our valued customers.",
    text3: "Every fitting designed at Maruti Steel Alloys adheres to both national and international quality standards. To ensure the provision of top-notch gaskets, our team of skilled professionals employs cutting-edge technology and advanced machinery. Our gaskets are meticulously crafted from high-quality raw materials and undergo rigorous testing. A team of skilled experts oversees the entire process, meticulously eliminating any potential faults in the final product. Through multiple levels of testing, we are committed to delivering the utmost quality gaskets to our valued customers.",
    heading:"PTFE Sheet Gasket, Expanded PTFE Gasket Supplier, Flange Insulation Gasket Stockist in India.",
    "Specifications": {
        "Gasket Size": "Gaskets are available from 1/2 NB – 24 NB",
        Class:"three types of class standard, special, and limited. ASME B16. 34 covers Class 150, 300, 400, 600, 900, 1500, 2500, and 4500 valves",
        Standards: 'ASME B16.20 Gaskets',
        Materials:"Stainless Steel Low Carbon Steel Gasket, Carbon steel Gasket, 4 – 6% Chrome 1/2% Moly Gaskets, 20Cb-3(Alloy 20 Gasket), Hastelloy B2 Gasket, Hastelloy C276 Gasket, Incoloy 800 Gasket, Inconel 600 Gasket, Inconel X750 Gasket, Monel 400 Gasket, Nickel 200 Gasket, Titanium Gasket",
        "Outside Diameter":"The gasket outside diameter tolerance for NPS 1⁄2 through NPS 8 is ±0.8 mm; for NPS 10 through NPS 24, +1.5 mm, −0.8 mm.",
        "Inside Diameter":"The gasket inside diameter tolerance for NPS 1⁄2 through NPS 8 is ±0.4 mm; for NPS 10 through NPS 24, ±0.8 mm.",
        "Thickness":"The gasket thickness tolerance is ±0.13 mm measured across the metallic portion of the gasket, not including the filler, which may protrude slightly beyond the metal.",
        "Type of Gasket":"Compressed Non-Asbestos fiber, PTFE, Rubber, Mica, And Ceramic fiber"
        
    },
    type: [
        {
            name: "PTFE Sheet Gasket",
            img: require("./Images/ProductMain/gasket/ptfe-gaskets-500x500.webp"),
            desc: ""
        }, 
        {
            name: "Expanded PTFE Gasket",
            img: require("./Images/ProductMain/gasket/ptfegasket.jpg"),
            desc: ""
        },
        {
            name: "Ring Joint Gasket",
            img: require("./Images/ProductMain/gasket/ringJointImg.jpg"),
            desc: ""
        },
        {
          name: "Industrial Cut Gasket",
          img: require("./Images/ProductMain/gasket/cut-gaskets-.webp"),
          desc: ""
      },
        {
            name: "Flange Insulation Gasket",
            img: require("./Images/ProductMain/gasket/insulation-gaskets-cat.jpg"),
            desc: ""
        },
        {
            name: "Spiral Wound Metallic Gasket",
            img: require("./Images/ProductMain/gasket/spiral-wound-gaskets.webp"),
            desc: ""
        }

    ],
    gradesTable:false
}

export const SheetPlateData = {
    name: "SHEET & PLATE",
    img: require("./Images/ProductMain/Stainless-Steel-Sheet---Plate.jpg"),
    text1: "Maruti Steel Alloys stands as a premier supplier and exporter of exceptional stainless steel sheets and plates, ranging in thickness from 0.3mm to 120mm. Our products have found extensive applications across various industries. Additionally, we specialize in nickel and copper alloys, stainless and duplex steel, as well as carbon and alloy steel materials, all of which are employed in the fabrication of our sheets and plates.",
    text2: "We are committed to providing our clients with an extensive selection of Sheets and Coils, available in various specifications to suit their unique needs. Catering to diverse industries, our range is renowned for its exceptional corrosion resistance, durability, and high structural integrity.",
    text3: "We offer our clients premium Plates crafted from high-grade stainless steel. These plates cater to the distinct requirements of various industries and are recognized for their attributes such as exceptional flexibility, corrosion resistance, and extended longevity. Furthermore, we possess the capability to tailor our range according to the specific needs of our customers.",
    heading:"PTFE Sheet Gasket, Expanded PTFE Gasket Supplier, Flange Insulation Gasket Stockist in India.",
    "Specifications": {
        Size:"1000 mm x 2000 mm, 1220 mm x 2440 mm, 1500 mm x 3000 mm, 2000 mm x 2000 mm, 2000 mm x 4000 mm",
        "Thickness":"0.1mm to 12 mm Thk",
        Form:"Coils, Foils, Rolls, Plain Sheet, Shim Sheet, Strip, Flats, Blank (Circle), Ring (Flange)",
        Finish:"Hot rolled plate (HR), Cold rolled sheet (CR), 2B, 2D, BA NO(8), SATIN (Met with Plastic Coated)",
        Hardness:"Soft, Hard, Half Hard, Quarter Hard, Spring Hard etc."  
    },
    type: [
        
    ],
    gradesTable:true
}

export const CoilsStripData = {
    name: "COIL & STRIP",
    img: require("./Images/product/Bgimg1.png"),
    text1: "We ensure secure transportation of Coils & Strips through effective packaging, employing wooden cases or crates to safeguard against external damage. Our dedicated inspection and testing team meticulously evaluates these stainless steel coils on diverse parameters, assuring the quality and integrity of the final product. Additionally, independent examination is conducted to further validate the product's specifications.",
    text2: "Our commitment to quality is demonstrated through our provision of annealed coils, accompanied by standard test certifications. Furthermore, this product undergoes reinforcement through evaluations conducted by accredited organizations and private laboratory testing. This rigorous approach ensures that our stainless steel coils meet the highest industry standards and exceed expectations.",
    text3: "Our clientele benefits from our exceptional Coils & Strips crafted from high-grade stainless steel. These products are designed to meet the unique demands of diverse industries and are acclaimed for their outstanding attributes, including remarkable flexibility, corrosion resistance, and prolonged durability. Moreover, our adeptness in customization allows us to align our offerings precisely with the individual requirements of our valued customers.",
    heading:"PTFE Sheet Gasket, Expanded PTFE Gasket Supplier, Flange Insulation Gasket Stockist in India.",
    "Specifications": {
        Standards:"ASTM A240 / ASME SA240",
        Size:"1000 mm x 2000 mm, 1220 mm x 2440 mm, 1500 mm x 3000 mm, 2000 mm x 2000 mm, 2000 mm x 4000 mm",
        "Thickness":"4mm-100mm",
        Width:"1000mm, 1219mm, 1500mm, 1800mm, 2000mm, 2500mm, 3000mm, 3500mm, etc",
        Length:"2000mm, 2440mm, 3000mm, 5800mm, 6000mm, etc",
        Form:"Coils & Stirps, Foils, Rolls, Plain Sheet, Shim Sheet, Designer Sheet, Chequered Plate, Strip, Flats, Blank (Circle), Ring (Flange) etc.",
        Finish:"Hot rolled plate (HR), Cold rolled sheet (CR), 2B, 2D, BA NO(8), SATIN (Met with Plastic Coated)",
        Surface:"2B, 2D, BA, NO.1, NO.4, NO.8, 8K, mirror, checkered, embossed, hair line, sand blast, Brush, etching, etc" 
    },
    type: [
        
    ],
    gradesTable:true
}

export const pipeFittingDat = {
  type: [
    {
      name: "Buttweld Pipe Fittings",
      img: require("./Images/PipeFitting/Img1.webp"),
      link: "/product/pipeFettings/Buttweld_Pipe_Fittings",
      desc: "",
    },
    {
      name: "Threaded Pipe Fittings",
      img: require("./Images/PipeFitting/Bgimg2.jpg"),
      link: "/product/pipeFettings/Threaded_Pipe_Fittings",
      desc: "",
    },
    {
      name: "Socket Weld Fittings",
      img: require("./Images/PipeFitting/Bgimg1.jpg"),
      link: "/product/pipeFettings/Socket_Pipe_Fittings",
      desc: "",
    },
    //  {
    //    name: "Olets Fittings",
    //    img:require("./Images/PipeFitting/Bgimg3.jpg"),
    //     link:"/Olets_Pipe_Fittings",
    //    desc:""
    // },
    //  {
    //    name: "Ferrule Fittings",
    //    img:require("./Images/PipeFitting/img2.jpg"),
    //    link:"/Ferrule_Pipe_Fittings",
    //    desc:""
    // },
  ],
};

export const ButtweldWeldPipeFittingsData={

      name: "BUTTWELD PIPE FITTINGS",
    img: require("./Images/PipeFitting/BgPImg.jpg"),
    text1: "When it comes to Buttweld Pipe Fittings, Maruti Steel Alloys stands out as your trusted supplier, ensuring impeccable quality and precision in every piece. We take pride in offering a diverse range of fittings, each crafted to perfection, to seamlessly fit into your industrial applications. Our commitment to excellence extends to both the size and quality of our products, ensuring that your projects receive fittings that meet the highest standards.",
    text2: "At Maruti Steel Alloys, we understand that a perfect fit can make all the difference. Our Buttweld Pipe Fittings are available in a range of sizes meticulously designed to facilitate seamless integration with your existing systems. Each fitting is engineered to precision, ensuring that it aligns flawlessly with your pipes, minimizing the risk of leaks and optimizing the overall performance of your operations.",
    text3: "Quality is at the core of our Buttweld Pipe Fittings. We are committed to providing you with products that not only meet industry standards but exceed your expectations. Our fittings are crafted from high-grade materials known for their durability and resistance to corrosion, erosion, and wear. This ensures that the fittings maintain their integrity even in the most challenging environments, offering lasting reliability and reducing maintenance hassles.",
    heading:"A trusted source for 45DegreeElbow, 90Degree Elbow, 180Degree elbow, and Reducer in India",
    "Specifications": {
        "Material": "Stainless Steel ASTM A182 F304, F304L, F306, F316L, F304H, F309S, F309H, F310S, F310H, F316TI, F316H, F316LN, F317, F317L, F321, F321H, F11, F22, F91, F347, F347H, F904L ASTM A312/A403 TP304, TP304L, TP316, TP316L Carbon Steel ASTM A105, A350 LF2, A106 Gr.B, A234 WPB",
        Dimension:"ASME 16.11, MSS SP-79, 83, 95, 97, BS 3799",
        Pressure:"3000LBS, 6000LBS, 9000LBS",
        Size: '1/8"~4" (DN6~DN100)',
    },
    type: [
        {
            img:require("./Images/PipeFitting/img5.jpg"),
            name:"45DegreeElbow",
          },
          {
            img:require("./Images/PipeFitting/img6.jpg"),
            name:"90Degree Elbow",
          },
          {
            img:require("./Images/PipeFitting/img7.jpg"),
            name:"180Degree elbow"
          },
          {
            img:require("./Images/PipeFitting/img13.jpg"),
            name:"Caps",
          },
          {
            img:require("./Images/PipeFitting/img16.jpg"),
            name:"Long & Short Stub Bend",
          },
          {
            img:require("./Images/PipeFitting/img9.jpg"),
            name:"Reducer",
          },
          {
            img:require("./Images/PipeFitting/img11.jpg"),
            name:"Tee",
          },
          
          {
            img:require("./Images/PipeFitting/img8.jpg"),
            name:"Cross"
          }
    ]
}

export const ThreadedPipeFittingsData={
    
    name: "THREADED PIPE FITTINGS",
    img: require("./Images/PipeFitting/Bgimg2.jpg"),
    text1: "Maruti Steel Alloys takes the lead as a prominent supplier, exporter, and stockist of Threaded fittings in India. Renowned for delivering unmatched quality, our screwed fittings excel in corrosion resistance, durability, and exceptional heat tolerance. These fittings find their application in diverse industries, such as Shipbuilding, Chemical, Aerospace, Power Plant, and Sugar Mills. Our offerings span various materials including cast gray or malleable iron, cast brass or bronze, as well as forged alloy and carbon steel, catering to your specific needs.",
    text2: "As the foremost supplier, dealer, and stockist of screwed fittings in India, Maruti Steel Alloys is your trusted partner. Our screwed fittings come in a variety of sizes, shapes, and grades, meeting diverse industrial needs. Covering major Indian cities and over twenty states, our distribution network ensures wide accessibility. Our exceptional range includes grades like ASME B16.11 and ASME B16.9, setting us apart as industry leaders.",
    text3: "At Maruti Steel Alloys, each screwed fitting we supply adheres to both national and international quality standards. To ensure the utmost quality, our team of skilled professionals rigorously subjects every fitting to a meticulous testing process.",
    heading:"Threaded Fittings, Coupling, Plug Supplier, Bushing, Elbow, Tee Stockist in India.",
    "Specifications": {
        "Material": "Stainless Steel ASTM A182 F304, F304L, F306, F316L, F304H, F309S, F309H, F310S, F310H, F316TI, F316H, F316LN, F317, F317L, F321, F321H, F11, F22, F91, F347, F347H, F904L ASTM A312/A403 TP304, TP304L, TP316, TP316L Carbon Steel ASTM A105, A350 LF2, A106 Gr.B, A234 WPB",
        Dimension:"ASME 16.11, MSS SP-79, 83, 95, 97, BS 3799",
        Pressure:"3000LBS, 6000LBS, 9000LBS",
        Size: '1/8"~4" (DN6~DN100)',
        class:"2000, 3000 and 6000",
    
    },
  
    type: [
        {
            name:"Threaded Elbow 90 Degree",
            img:require('./Images/PipeFitting/ThImg1.jpg'),
              },
              {
                name:"Threaded Elbow 45 Degree",
                img:require('./Images/PipeFitting/ThImg2.jpg'),
              },
              {
                name:"Threaded Tee",
                img:require('./Images/PipeFitting/ThImg3.jpg'),
              },
              {
                name:"Threaded Cross",
                img:require('./Images/PipeFitting/ThImg4.jpg'),
              },
              // {
              //   name:"Threaded Cross Street",
              //   img:require('./Images/PipeFitting/ThImg1.jpg'),
              // },
              {
                name:"Threaded Union",
                img:require('./Images/PipeFitting/ThImg5.jpg'),
              },
              {
                name:"Threaded Coupling",
                img:require('./Images/PipeFitting/Thimg6.jpg'),
              },
              {
                name:"Threaded Half Coupling",
                img:require('./Images/PipeFitting/ThImg7.jpg'),
              },
              {
                name:"Threaded Reducing Coupling",
                img:require('./Images/PipeFitting/ThImg8.jpg'),
              },
              {
                name:"Threaded Cap",
                img:require('./Images/PipeFitting/ThImg9.jpg'),
              },
              {
                name:"Threaded Hex Head Bushing",
                img:require('./Images/PipeFitting/ThImg10.jpg'),
              },
              {
                name:"Threaded Square Head Plug",
                img:require('./Images/PipeFitting/ThImg11.jpg'),
              },
              {
                name:"Threaded Round Head Plug",
                img:require('./Images/PipeFitting/ThImg12.jpg'),
              },
              {
                name:"Threaded Boss",
                img:require('./Images/PipeFitting/ThImg13.jpg'),
              },
              {
                name:"Threaded Bull Plug",
                img:require('./Images/PipeFitting/ThImg14.jpg'),
              },
              {
                name:"Threaded Hex Nipples",
                img:require('./Images/PipeFitting/ThImg15.jpg'),
              },
              {
                name:"Threaded Swaged Nipples",
                img:require('./Images/PipeFitting/ThImg16.jpg'),
              },
    ]
}
export const SocketWeldPipeFittingsData={
    
    name: "SOCKET WELD PIPE FITTINGS",
    img: require("./Images/PipeFitting/Bgimg1.jpg"),
    text1: "At Maruti Steel alloys, we proudly hold the position of a leading supplier, exporter, and stockist of socket weld fittings in India. Renowned for delivering unparalleled quality, our socket weld fittings stand out for their corrosion resistance, durability, and exceptional heat tolerance. These fittings find their applications across diverse industries, including Shipbuilding, Chemical, Aerospace, Power Plant, and Sugar Mills. We supply a wide range of socket weld fittings crafted from forged carbon steel, stainless steel, and nickel alloy, catering to your specific needs.",
    text2: "As the foremost supplier, dealer, and stockist of socket weld fittings in India, Maruti Steel alloy takes pride in our diverse offerings. Our socket weld fittings are available in a range of sizes, shapes, and grades, catering to various industrial requirements. Our distribution network spans major Indian cities and extends to over twenty states, ensuring widespread availability. Setting ourselves apart, we offer an array of grades including ASME B16.11, MSS SP 75, MSS SP 83, and MSS SP 95, solidifying our position as industry leaders.",
    text3: "At Maruti Steel alloys, every socket weld fitting we supply adheres to both national and international quality standards. To ensure the utmost quality, our team of skilled professionals rigorously subjects each fitting to a meticulous testing process.",
    heading:"Socket Weld Fittings, Full Coupling Socket Weld Fitting, Half Coupling Socket Weld Supplier, Socket Weld Elbow, Socket Weld Tee Stockist in India.",
    "Specifications": {
        "Socket Weld Fittings Types": "Full-coupling, Half-coupling, Reducing coupling, Reducer insert, Socket weld Union, Socket weld Elbow, Socket weld Tee (SW Tee), Sockolet, SW Cross, SW Cap.",
        Dimension:"ASME 16.11, MSS SP-79, 83, 95, 97, BS 3799",
        Pressure:"3000LBS, 6000LBS, 9000LBS",
        Size: '1/8"~4" (DN6~DN100)',
        Standard:'ASTM / ASME SA 403 GR WP "S" / "W" / " WX" 304 , 304L, 304H, 304N, 304LN, 309, 310H, 316, 316H, 317, 317L, 321, 321H, 347, 347 H'
    },
  
    type: [
        {
            name:"Elbow 90 Degree",
            img:require('./Images/PipeFitting/Simg1.jpg'),
              },
              {
                name:"Elbow 45 Degree",
                img:require('./Images/PipeFitting/Simg2.jpg'),
              },
              {
                name:"Tee",
                img:require('./Images/PipeFitting/Simg3.jpg'),
              },
              {
                name:"Cross",
                img:require('./Images/PipeFitting/Simg4.jpg'),
              },
              {
                name:"Union",
                img:require('./Images/PipeFitting/Simg5.jpg'),
              },
              {
                name:"Coupling",
                img:require('./Images/PipeFitting/Simg6.jpg'),
              },
              {
                name:"Capg",
                img:require('./Images/PipeFitting/Simg7.jpg'),
              },
              {
                name:"Boss",
                img:require('./Images/PipeFitting/Simg9.jpg'),
              },
              {
                name:"Insert",
                img:require('./Images/PipeFitting/Simg8.jpg'),
              },
    ]
}
export const DairyFittings={
    
  name: "Dairy Fittings",
  img: require("./Images/ProductMain/dairyFittings/img.jpg"),
  text1: "Maruti Steel Alloys is honored to stand as a foremost provider, exporter, and stockist of premium-grade dairy fittings within India. Our standing rests on our commitment to delivering unrivaled quality, as our dairy fittings have gained acclaim for their exceptional resistance to corrosion, remarkable durability, and heightened capacity to withstand extreme heat. These fittings find utility across a diverse array of industries, including Shipbuilding, Chemical, Aerospace, Power Plant, and Sugar Mills. Our comprehensive selection of proper dairy fittings is meticulously fashioned from forged carbon steel, stainless steel, and nickel alloy, all customized to impeccably align with your specific demands.",
  text2: "Maruti Steel Alloys holds a preeminent stance as a supplier, dealer, and stockist of exceptional dairy fittings across India. Our dedication reflects in the breadth of our offerings, with dairy fittings encompassing an array of sizes, shapes, and grades meticulously tailored to diverse industrial requisites. Our distribution network is widespread, encompassing key Indian cities and spanning across more than twenty states, ensuring unfaltering availability. What sets us apart is the spectrum of grades we provide, which includes ASME B16.11, MSS SP 75, MSS SP 83, and MSS SP 95, further solidifying our standing as trailblazers in the industry.",
  text3: "At Maruti Steel Alloys, each dairy fitting we supply conforms meticulously to both national and international quality benchmarks. In our unwavering commitment to quality assurance, our team of proficient experts meticulously subjects every fitting to rigorous testing procedures.",
  heading:"T.C Fittings, Pharma Fittings, T.C CLAMP, PIPE HOLDER, CONICAL STRAINER Stockist in India.",
  "Specifications": {
      "Dairy Fittings Types": "T.C Fittings, Pharma Fittings, CONICAL STRAINER,CAP, Plain Tee, T.C CLAMP,REDUCER, PIPE HOLDER,T.C BEND,UNION.,SEAMLESS TEE",
      Dimension:"ASME 16.11, MSS SP-79, 83, 95, 97, BS 3799",
      Pressure:"3000LBS, 6000LBS, 9000LBS",
      Size: '1/8"~4" (DN6~DN100)',
      Standard:'ASTM / ASME SA 403 GR WP "S" / "W" / " WX" 304 , 304L, 304H, 304N, 304LN, 309, 310H, 316, 316H, 317, 317L, 321, 321H, 347, 347 H'
  },

  type: [
    {
      name:"T.C Fittings",
      img:require('./Images/ProductMain/dairyFittings/tc fitting.jpg'),
    },
    {
      name:"Pharma Fittings",
      img:require('./Images/ProductMain/dairyFittings/pharma fitting.jpg'),
    },
      {
          name:"CONICAL STRAINER",
          img:require('./Images/ProductMain/dairyFittings/22Conical-Strainer.jpg'),
            },
            {
              name:"CAP",
              img:require('./Images/ProductMain/dairyFittings/SS-Pipe-Cap.jpg'),
            },
            {
              name:"Plain Tee",
              img:require('./Images/ProductMain/dairyFittings/Plain-Teee-150x150.jpg'),
            },
            {
              name:"WYE LOOP",
              img:require('./Images/ProductMain/dairyFittings/Wye-Loop-150x150.jpg'),
            },
            {
              name:"T.C CLAMP",
              img:require('./Images/ProductMain/dairyFittings/tc-clamp-500x500-1-150x150.jpg'),
            },
            {
              name:"REDUCER",
              img:require('./Images/ProductMain/dairyFittings/dairy-reducer-500x500-1-150x150.jpg'),
            },
            {
              name:"PIPE HOLDER",
              img:require('./Images/ProductMain/dairyFittings/dairy-pipe-holder-500x500-1-150x150.jpg'),
            },
            {
              name:"PLAIN BEND",
              img:require('./Images/ProductMain/dairyFittings/plain-bend-500x500-1-150x150.jpg'),
            },
            {
              name:"J. BEND",
              img:require('./Images/ProductMain/dairyFittings/Stainless-Steel-J-Bend-150x150.jpg'),
            },
            {
              name:"T.C BEND",
              img:require('./Images/ProductMain/dairyFittings/tc-bend-500x500-1-150x150.jpg'),
            },
            {
              name:"UNION",
              img:require('./Images/ProductMain/dairyFittings/sms-union-weldable-500x500-2-150x150.jpg'),
            },
           
            {
              name:"SEAMLESS TEE",
              img:require('./Images/ProductMain/dairyFittings/equal-tee-500x500-1-150x150.jpg'),
            },
  ]
}
export const StainlessSteel={
    name: "Stainless Steel",
    img: require("./Images/ProductMain/stainlesssteel/img1.jpg"),
    text1: "Maruti Steel alloy stands at the forefront as a distinguished supplier, exporter, and stockist of Stainless Steel Products in India. Renowned for delivering unmatched quality, our Stainless Steel Products excel in corrosion resistance, durability, and exceptional heat tolerance. These products find wide-ranging applications across industries such as Shipbuilding, Chemical, Aerospace, Power Plant, and Sugar Mills, among others.",
    text2: "Our forte lies in supplying an array of stainless steel products, including Stainless Steel Pipes, Stainless Steel Tubes, Stainless Steel Pipe Fittings, Stainless Steel Flanges, Stainless Steel Socketweld Fittings, Stainless Steel Screwed Fittings, Stainless Steel Fasteners, Stainless Steel Valves, and much more. At  Maruti Steel alloys, we provide a comprehensive range that caters to a multitude of applications across various industries.",
    text3: "Explore our collection of top-quality stainless steel products, designed for exceptional durability and performance. From pipes and fittings to fasteners and valves, we deliver excellence in every piece.",
    heading:"Socket Weld Fittings, Full Coupling Socket Weld Fitting, Half Coupling Socket Weld Supplier, Socket Weld Elbow, Socket Weld Tee Stockist in India.",
    "Specifications": {
        "Stainless Steel Grades": "201, 202, 205, 301, 302, 303, 304, 304l, 308,309, 309s, 310, 310s, 314, 316, 316l, 316ti, 317, 317l, 321, 347, 405, 409, 429, 430, 430f, 430fse, 434, 436, 442, 446, 403, 410, 414,416, 416se, 420,420f, 422, 431, 440a, 440b,440c, 501, 502, 630 (17-4 PH).",
        Standard:'ASTM, ASME, DIN, JIS, BS, and all International Standards',
        "Stainless Steel Products":"Stainless Steel Pipe, Stainless Steel Tube, Stainless Steel Pipe Fittings, Stainless Steel Flanges, Stainless Steel Socketweld Fittings, Stainless Steel Screwed Fittings, Stainless Steel Fasteners, Stainless Steel Valves, and many more."
    },
  
    type: [
        {
            name:"Stainless Steel Pipes",
            img:require('./Images/ProductMain/stainlesssteel/Pipe7.jpg'),
              },
              {
                name:"Stainless Steel Tube Pipes",
                img:require('./Images/ProductMain/stainlesssteel/PipeImg.jpg'),
              },
              {
                name:"Stainless Steel Pipe Fittings",
                img:require('./Images/ProductMain/stainlesssteel/Img2.webp'),
              },
              {
                name:"Stainless Steel Flanges",
                img:require('./Images/ProductMain/stainlesssteel/ProductBgimg.jpg'),
              },
              {
                name:"Stainless Steel Socketweld Fittings",
                img:require('./Images/ProductMain/stainlesssteel/Bgimg1.jpg'),
              },
              {
                name:"Stainless Steel Screwed Fittings",
                img:require('./Images/ProductMain/stainlesssteel/Bgimg2.jpg'),
              },
              {
                name:"Stainless Steel Fasteners",
                img:require('./Images/ProductMain/stainlesssteel/img10.png'),
              },
              {
                name:"Stainless Steel Valves",
                img:require('./Images/ProductMain/stainlesssteel/valveImg.jpeg'),
              }
             
    ]
}

export const CarbonSteel ={
    name: "Carbon Steel",
    img: require("./Images/ProductMain/carbonSteel/img1.webp"),
    text1: " Maruti Steel alloys stands as a prominent supplier, exporter, and stockist of Carbon Steel Products in India. Renowned for delivering unparalleled quality, our Carbon Steel Products exhibit corrosion resistance, durability, and exceptional heat resistance. Widely applied across industries such as Shipbuilding, Chemical, Aerospace, Power Plant, and Sugar Mills, our products meet the highest standards of performance.",
    text2: "Our specialty lies in offering an extensive range of carbon steel products, including Carbon Steel Pipes, Carbon Steel Tubes, Carbon Steel Pipe Fittings, Carbon Steel Flanges, Carbon Steel Socketweld Fittings, Carbon Steel Screwed Fittings, Carbon Steel Fasteners, Carbon Steel Valves, and more. At Maruti Steel Alloys, we deliver a comprehensive selection to meet diverse industrial requirements with utmost precision and reliability.",
    text3: "Explore our collection of top-quality Carbon steel products, designed for exceptional durability and performance. From pipes and fittings to fasteners and valves, we deliver excellence in every piece.",
    heading:"",
    "Specifications": {
        "Low Carbon Steel Grades": "1010, 1018, 1020, 1022",
        Standard:'ASTM, ASME, DIN, JIS, BS, and all International Standards',
        "Medium Carbon Steel Grades":"1030, 1040, 1045, 1060",
        "High Carbon Steel Grades":"1080, 1095",
        "Carbon Steel Products":"Carbon Steel Pipe, Carbon Steel Tube, Carbon Steel Pipe Fittings, Carbon Steel Flanges, Carbon Steel Socketweld Fittings, Carbon Steel Screwed Fittings, Carbon Steel Fasteners, Carbon Steel Valves, and many more."
    },
  
    type: [
        {
            name:"Carbon Steel Pipes",
            img:require('./Images/ProductMain/carbonSteel/carbonPipe.webp'),
              },
              {
                name:"Carbon Steel Tube Pipes",
                img:require('./Images/ProductMain/carbonSteel/carbon-steel-tube.jpg'),
              },
              {
                name:"Carbon Steel Pipe Fittings",
                img:require('./Images/ProductMain/carbonSteel/ms-butt-weld-fittings.png'),
              },
              {
                name:"Carbon Steel Flanges",
                img:require('./Images/ProductMain/carbonSteel/carbon-steel-flanges.jpeg'),
              },
              {
                name:"Carbon Steel Socketweld Fittings",
                img:require('./Images/ProductMain/carbonSteel/forged-fittings-socket.jpg'),
              },
              {
                name:"Carbon Steel Screwed Fittings",
                img:require('./Images/ProductMain/carbonSteel/cs-threaded-fittings.jpg'),
              },
              {
                name:"Carbon Steel Fasteners",
                img:require('./Images/ProductMain/carbonSteel/carbon-steel-fasteners.jpg'),
              },
              {
                name:"Carbon Steel Valves",
                img:require('./Images/ProductMain/carbonSteel/carbon valve.webp'),
              }
            
    ]
}

export const SpecialAlloysgrade = [
  {
    id: 1,
    heading: "Inconel Alloys",
    link: "/SpecialAlloys/InconelAlloys",
    data: {
      text1:
        "Inconel Alloys 600, 601, 625, 718, 800, 825 Supplier,Inconel Round Bars & Wires, Inconel Pipes & Tubes, Incoloy Alloy Sheets & Plates, Inconel Flanges & Pipe Fittings Stockiest & Exporters in India",
      text2:
        "Inconel Alloys are combo of nickel and chromium which have variety of applications. The specialty of these alloys is, they can withstand at both extreme pressures and elevated temperature. Nakshatra Steel & Alloys is an exemplary Inconel Alloys supplier in the contemporary market.",
      text3:
        "Inconel Sheets & Plates have innumerous applications in Chemical and Petrochemical Processing industries. Inconel Pipe Fittings are employed in Heat exchangers and Pressure Vessels. Our Inconel Fasteners are equipped in super heaters and re-heaters in Power plants.",
      text4:
        "Inconel Tube Fittings are utilized in Hydrocarbon cracking and Ethylene Furnace Quench Boilers. Our Inconel Tube Round Bars are used in heat treating equipment in Industrial furnaces. Please contact us today to request a free estimate on all types of Inconel alloys products!",
    },
    grade: [
      "Inconel alloy 625",
      "Inconel alloy 601",
      "Inconel alloy 601GC",
      "Inconel alloy 617",
      "Inconel alloy 600",
      "Inconel alloy 625LCF",
      "Inconel alloy 690",
      "Inconel alloy 693",
      "Inconel alloy 718",
      "Inconel alloy 718SPF",
      "Inconel alloy 783",
      "Inconel alloy 6022",
      "Inconel alloy 7740",
      "Inconel alloy 603XL",
      "Inconel alloy 686",
      "Inconel alloy 706",
      "Inconel alloy 725",
      "Inconel alloy 740",
      "Inconel alloy X-750",
      "Inconel alloy 751",
      "Inconel alloy MA754",
      "Inconel alloy MA758",
      "Inconel alloy N06230",
      "Inconel alloy C-276",
      "Inconel alloy G-3",
      "Inconel alloy HX",
      "Inconel alloy 22",
    ],
    products: [
      "Inconel Pipes",
      "Inconel Tubes",
      "Inconel Flanges",
      "Inconel Pipe Fittings",
      "Inconel Forged",
      "Fittings	Inconel Fasteners",
      "Inconel Tube Fittings",
      "Inconel Round Bars",
      "Inconel Sheets & Plates",
    ],
  },
  {
    id: 2,
    heading: "Monel Alloys",
    link: "/SpecialAlloys/SuperMonelAlloys",
    data: {
      text1:
        "India’s Leading Monel Alloy 400 / K500 Supplier Monel Round Bars & Wires, Monel Alloy Pipes & Tubes, Monel Sheets & Plates, Monel Alloy Flanges & Pipe Fittings Stockiest & Exporters in India",
      text2:
        "Monel Alloy is noted for its exceptional properties. It is a combination of nickel and copper as primary elements, and manganese, iron, copper, and silicon as secondary elements. Nakshatra Steel & Alloys is a renowned Monel Alloys Supplier. We adapt phenomenal methods like machining, welding, hot working and cold working to fabricate Monel 400 and Monel K500.",
      text3:
        "Monel Pipes & Tubes are resistant to many precarious chemicals and seawater.. Monel Pipe Fittings manufactured by us sustain strength in elevated temperatures as well. On the other hand our Monel Flanges remain ductile without becoming brittle though they are cooled extremely. These flanges are tough and durable though they are expensive than Stainless Steel Flanges. Thus we can say that they are more ductile compared to many ferrous flanges that become brittle easily.",
      text4:
        "Monel Tube fittings are employed in aircraft construction as they retain their dimensions though they come across with heat. Monel Round Bars are invulnerable to sulfuric, hydrochloric, and hydrofluoric acid; hence it is implemented in the department of alkylation units. They also have many marine applications as well. We have well trained and experienced team to design Monel Sheets & Plates with dimensional accuracy. Contact us with your requirements and we assure you to offer products that meet your specific needs and demands!",
    },
    grade: [],
    products: [
      "Monel 400 Pipes",
      "Monel 400 Tubes",
      "Monel 400 Pipe Fittings",
      "Monel 400 Forged Fittings",
      "Monel 400 Fasteners	Monel",
      "400 Tube Fittings",
      "Monel 400 Round Bars",
      "Monel 400 Flanges",
      "Monel 400 Sheets",
      "Monel 400 Plates",
      "Monel K500 Pipes",
      "Monel K500 Tubes",
      "Monel K500 Pipe Fittings",
      "Monel K500 Forged Fittings",
      "Monel K500 Fasteners",
      "Monel K500 Tube Fittings",
      "Monel K500 Round Bars",
      "Monel K500 Flanges",
      "Monel K500 Sheets",
      "Monel K500 Plates",
    ],
  },

  {
    id: 3,
    heading: "Hastelloy",
    link: "/SpecialAlloys/Hastelloy",
    data: {
      text1:
        "Highly Acclaimed Hastelloy C276 / Hastelloy C22 Supplier in India ,Hastelloy Round Bars & Wires, Hastelloy Pipes & Tubes, Hastelloy Sheets & Plates, Hastelloy Fasteners, Hastelloy Flanges & Hastelloy Pipe Fittings Stockiest & Exporters in India",
      text2:
        "Hastelloy is considered to have excellent resistance towards corrosion. There are many other alloys which have exceptional properties, and Hastelloy is one among them. It is said to have withstanding capability towards elevated temperatures and stress. Thence it is employed in many industries for special purposes.",
      text3:
        "We manufacture Hastelloy Pipes & Tubes which tend to exhibit considerable resistance towards all kinds of pitting and cracking. Chemical mechanisms deploy our Hastelloy Flanges as they have the ability to combat oxidation. Hastelloy Pipe Fittings are tough and durable even in chemically inert atmospheres and vacuum. Hastelloy Fasteners can successfully function under medium to high temperature ranges.",
      text4:
        "Our Hastelloy Tube Fittings have their own special purpose utilizations in Chemical reactors and Nuclear reactors. Hastelloy Sheets & Plates have wide variety of applications in Petrochemical and Chemical Processing industries. Our Hastelloy Round Bars are employed in heat exchangers and pressure vessels.",
    },
    grade: [],
    products: [
      "Hastelloy C276 & C22 Pipes",
      "Hastelloy C276 & C22 Tubes",
      "Hastelloy C276 & C22 Pipe Fittings",
      "Hastelloy C276 & C22 Forged Fittings",
      "Hastelloy C276 & C22 Fasteners",
      "Hastelloy C276 & C22 Tube Fittings",
      "Hastelloy C276 & C22 Round Bars",
      "Hastelloy C276 & C22 Flanges",
      "Hastelloy C276 & C22 Sheets",
      "Hastelloy C276 & C22 Plates",
    ],
  },
  {
    id: 4,
    heading: "Duplex Alloys",
    link: "/SpecialAlloys/DuplexAlloys",
    data: {
      text1:
        "Top Duplex Steel 2205 / Duplex Steel 2304  Supplier in India,Duplex Steel Round Bars & Rods, Duplex Steel Pipes & Tubes, Duplex Steel Sheets & Plates, Duplex Steel Fasteners, Duplex Steel Flanges & Duplex Steel Pipe Fittings Stockiest & Exporters in India",
      text2:
        "Duplex Steel is a combination of austenite and ferrite in equal quantities. It is noted for its marvellous corrosion resistance and satisfying mechanical properties. Duplex steel products have wide range of industrial applications for their pleasing features. They also exhibit considerable resistance towards stress corrosion cracking.",
      text3:
        "Compared to other flanges and fasteners, Duplex Steel Flanges and Duplex Steel Fasteners are two times tough and strong. We boost up our Duplex Steel Pipes & Tubes by adding small quantities of nitrogen, chromium, and molybdenum. Duplex Steel Pipe Fittings are invulnerable to chloride pitting and crevice corrosion.",
      text4:
        "Compared to other flanges and fasteners, Duplex Steel Flanges and Duplex Steel Fasteners are two times tough and strong. We boost up our Duplex Steel Pipes & Tubes by adding small quantities of nitrogen, chromium, and molybdenum. Duplex Steel Pipe Fittings are invulnerable to chloride pitting and crevice corrosion.",
    },
    grade: [],
    products: [
      " Duplex 2205 & 2304 Pipes",
      "Duplex 2205 & 2304 Tubes",
      "Duplex 2205 & 2304 Pipe Fittings",
      "Duplex 2205 & 2304 Forged Fittings",
      "Duplex 2205 & 2304 Fasteners",
      "Duplex 2205 & 2304 Tube Fittings",
      "Duplex 2205 & 2304 Round Bars",
      "Duplex 2205 & 2304 Flanges",
      "Duplex 2205 & 2304 Sheets",
      "Duplex 2205 & 2304 Plates",
    ],
  },
  {
    id: 5,
    heading: "Super Duplex Alloys",
    link: "/SpecialAlloys/SuperDuplexAlloys",
    data: {
      text1:
        "Super Duplex Steel S32750 / S32760 Supplier in India,Super Duplex Round Bars & Wires, Super Duplex Seamless Pipes, Super Duplex Welded Tubes, Super Duplex Plain Sheets & Plates, Super Duplex Fasteners, Super Duplex Flanges & Super Duplex Buttweld Pipe Fittings Stockiest & Exporters in India",
      text2:
        "Super Duplex Steel is a material designed with higher quantities of nitrogen, molybdenum, and chromium. Super Duplex Steel Products possess more durability and tenacity compared to products that are fabricated using Duplex Steel. Though the elements used for manufacturing both the alloys are same, the ratio of the composition used varies. This makes the former one more corrosion resistant than the latter one.",
      text3:
        "Our products like Super Duplex Steel S32750 and Super Duplex Steel S32760 have wide variety of industrial applications for their exemplary features. Due to the exceptional physical properties of our Super Duplex Round Bars and Super Duplex Flanges, they are employed in marine and oil & gas industries.",
      text4:
        "On the other hand, our Super Duplex Steel Pipes & Tubes have special utilizations in petrochemical and mining industries. Our Super Duplex Steel Fasteners and Super Duplex Steel Pipe Fittings are durable and ductile. We use high quality raw material to manufacture Super Duplex Steel Sheets & Plates. Our eminent team is always reachable to respond to your queries. Contact us today; we have all the products readily available in the stock. ",
    },
    grade: [],
    products: [
      "Super Duplex S32750 & S32760 Pipes",
      "Super Duplex S32750 & S32760  Tubes",
      "Super Duplex S32750 & S32760  Pipe Fittings",
      "Super Duplex S32750 & S32760  Forged Fittings",
      "Super Duplex S32750 & S32760  Fasteners",
      "Super Duplex S32750 & S32760  Tube Fittings",
      "Super Duplex S32750 & S32760  Round Bars",
      "Super Duplex S32750 & S32760  Flanges",
      "Super Duplex S32750 & S32760  Sheets",
      "Super Duplex S32750 & S32760  Plates",
    ],
  },
  {
    id: 6,
    heading: "Cupro Nickel Alloys",
    link: "/SpecialAlloys/CuproNickelAlloys",
    data: {
      text1:
        "Best Cupro Nickel (CU-Ni) 70/30 & 90/10 Supplier in India,Cupro Nickel Round Bars & Wires, Cupro Nickel Seamless Pipes, Cupro Nickel Welded Tubes, Cupro Nickel Plain Sheets & Plates, Cupro Nickel Fasteners, Cupro Nickel Flanges & Cupro Nickel Pipe Fittings Stockiest & Exporters",
      text2:
        "Cupro Nickel is an alloy with Copper and Nickel as primary elements, and Iron and Manganese as secondary elements. This silver coloured alloy has wide variety of applications for its distinguished properties. Cupro nickel products are deployed in mechanical industries for the purpose of desalination materials, armaments manufacture, and marine engineering.",
      text3:
        "For the exquisite features of our Cupro Nickel (Cu-Ni) 90/10 and Cupro Nickel (Cu-Ni) 70/30 they are deployed in shipbuilding and power generation. Our Cupro Nickel 70/30 Pipes & Tubes are used in marine environment for their exemplary pitting and corrosion resistance. We manufacture Cupro Nickel Flanges that have the ability to combat all types of corrosions in seawater.",
      text4:
        "Our Copper Nickel Fasteners and Copper Nickel Pipe Fittings are implemented in marine hardware, piping, and condensers & exchangers in seawater equipment. Copper Nickel Tube Fittings are deployed in high pressure systems and condensers in the Seawater system design. Cu-Ni 90/10 Round Bars and Cu-Ni 70/30 Sheets & Plates are used in evaporator tubing and brine heaters. Please give us a call today for your all copper nickel product requirement! ",
    },
    grade: [],
    products: [
      "Cupro Nickel 70/30 & 90/10 Pipes",
      "Cupro Nickel 70/30 & 90/10 Tubes",
      "Cupro Nickel 70/30 & 90/10 Pipe Fittings",
      "Cupro Nickel 70/30 & 90/10 Forged Fittings",
      "Cupro Nickel 70/30 & 90/10 Fasteners",
      "Cupro Nickel 70/30 & 90/10 Tube Fittings",
      "Cupro Nickel 70/30 & 90/10 Round Bars",
      "Cupro Nickel 70/30 & 90/10 Flanges",
      "Cupro Nickel 70/30 & 90/10 Sheets",
      "Cupro Nickel 70/30 & 90/10 Plates",
    ],
  },
  {
    id: 7,
    heading: "SMO 254",
    link: "/SpecialAlloys/SMO254",
    data: {
      text1:
        "Leader Supplier of SMO 254 / UNS S31254 Products in India,SMO 254 Round Bars & Wires, SMO 254 Seamless Pipes, SMO UNS S31254 Welded Tubes, SMO 254 Plain Sheets & Plates, SMO UNS S31254 Fasteners, SMO 254 Flanges & SMO 254 Pipe Fittings Stockiest & Exporters",
      text2:
        "SMO 254 Grade of Stainless Steel is a compound made up of austenite. It is noted for its exquisite towards pitting, crevice corrosion, and chloride stress corrosion cracking. When compared to Titanium and nickel alloys these SMO 254 products are available at affordable price ranges. Hence they are preferred for many machinery purposes.",
      text3:
        "While fabricating our SMO 254 Pipe Fittings, we perform the annealing process by heating the material at greater temperatures and then water quenching them. Proper measures are taken while hot working and cold working in the manufacturing process of SMO 254 Fasteners.",
      text4:
        "Our SMO 254 Tube Fittings have wide variety of applications in petroleum production. SMO 254 Round Bars are equipped in chemical and food processing industries. On the other hand, SMO 254 Plates and SMO 254 Sheets are employed in desalination and flue-gas cleaning purposes. Please contact us to request a free quote or to speak with one of our experts on SMO 254 products!",
    },
    grade: [],
    products: [
      "SMO 254 & UNS S31254 Pipes",
      "SMO 254 & UNS S31254 Tubes",
      "SMO 254 & UNS S31254 Pipe Fittings",
      "SMO 254 & UNS S31254 Forged Fittings",
      "SMO 254 & UNS S31254 Fasteners",
      "SMO 254 & UNS S31254 Tube Fittings",
      "SMO 254 & UNS S31254 Round Bars",
      "SMO 254 & UNS S31254 Flanges",
      "SMO 254 & UNS S31254 Sheets",
      "SMO 254 & UNS S31254 Plates",
    ],
  },
  {
    id: 8,
    heading: "Alloy 20",
    link: "/SpecialAlloys/Alloy20",
    data: {
      text1:
        "Alloy 20 / UNS N08020 / Alloy 20 WNR 2.4660 Supplier in India,Alloy 20 Round Bars & Wires, Alloy 20 Seamless Pipes, Alloy UNS N08020 Welded Tubes, Alloy 20 Plain Sheets & Plates, Alloy 20 UNS N08020 Fasteners, Alloy 20 Flanges & Alloy 20 Pipe Fittings Stockiest & Exporters",
      text2:
        "Alloy 20 is a special compound which is particularly utilised in the applications involving sulphuric acid. It is generally a combo of nickel, chromium and molybdenum. It exhibits exclusive resistance towards pitting and corrosion due to which Alloy 20 products are deployed in plastic, food, power generation, and pharmaceutical industries.",
      text3:
        "Our Alloy 20 Pipes & Tubes exhibit exceptional properties like resistance towards crevice corrosion and harmful chemicals like phosphoric, chlorides, sulphuric, and nitric acids. We enhance our Alloy 20 Flanges with small quantities of niobium which helps them to combat intergranular corrosion and sensitization.",
      text4:
        "Alloy 20 Fasteners are used in synthetic manufacturing machinery. Our Alloy 20 Pipe Fittings have wide range of applications in production of dye and food. Alloy 20 Tube fittings are deployed in petrochemical process systems and bubble caps. Our Alloy 20 Round Bars are adapted in reactor vessels and chemical piping systems. Alloy 20 Sheets and Alloy 20 Plates are employed in the manufacturing process of pumps and valves.",
    },
    grade: [],
    products: [
      "Alloy 20 & UNS N08020,20 WNR 2.4660 Pipes",
      "Alloy 20 & UNS N08020,20 WNR 2.4660 Tubes",
      "Alloy 20 & UNS N08020,20 WNR 2.4660 Pipe Fittings",
      "Alloy 20 & UNS N08020,20 WNR 2.4660 Forged Fittings",
      "Alloy 20 & UNS N08020,20 WNR 2.4660 Fasteners",
      "Alloy 20 & UNS N08020,20 WNR 2.4660 Tube Fittings",
      "Alloy 20 & UNS N08020,20 WNR 2.4660 Round Bars",
      "Alloy 20 & UNS N08020,20 WNR 2.4660 Flanges",
      "Alloy 20 & UNS N08020,20 WNR 2.4660 Sheets	",
      "Alloy 20 & UNS N08020,20 WNR 2.4660 Plates",
    ],
  },
  {
    id: 9,
    heading: "Titanium",
    link: "/SpecialAlloys/TitaniumAlloys",
    data: {
      text1:
        "Titanium Alloys Grade.1, Grade.2, Grade.5,Grade.7,Grade.11, Supplier, Round Bars & Wires,Pipes & Tubes, Titanium Alloy Sheets & Plates, Titanium Flanges & Pipe Fittings Stockiest & Exporters in India",
      text2:
        "Titanium shows a long working life and the ability to work extremely high to low-temperature fluctuations. Furthermore, our team of quality experts ensures the capacity of the finished product to withstand various wokr conditions. ",
      text3:
        "Maruti Steel Alloys is a famous organization that has gained a preeminent position as a supplier, wholesaler, and exporter of Titanium in all Grade. Our company has owned a team of specialists who assist us in producing a broad range of Titanium products. We choose a superior quality of Titanium in all Grade , which is soft and malleable. Besides, the grade offers the greatest formability. We choose unalloyed Titanium grade, which offers outstanding corrosion resistance abilities, weldability and useful in various applications. The material is largely applied in marine and chemical industries. The selected material grade holds the capacity to sustain in harsh environments for a longer time. Titanium is also useful in the fabrication of anode materials to carry out cathode operations.",
      text4:
        " we strive to go with the latest industrial trends and use modular production procedures and test tools. We aim to make our products popular in the market, and for that, we work hard. To maintain quality standards, we are strictly bound to follow globally accepted and industrially suitable standards for titanium all grades ",
    },
    grade: [
      "Titanium Grade.1 ",
      "Titanium Grade.2",
      "Titanium Grade.5",
      "Titanium Grade.7",
      "Titanium Grade.11",
    ],
    products: [
      "Titanium In Gr.2,5,7,11 Pipes",
      "Titanium In Gr.2,5,7,11 Tubes",
      "Titanium In Gr.2,5,7,11 Flanges",
      "Titanium In Gr.2,5,7,11 Pipe Fittings",
      "Titanium In Gr.2,5,7,11 Forged",
      "Titanium In Gr.2,5,7,11 Fasteners",
      "Titanium In Gr.2,5,7,11 Tube Fittings",
      "Titanium In Gr.2,5,7,11 Round Bars",
      "Titanium In Gr.2,5,7,11 Sheets & Plates",
    ],
  },
];