import { faBell, faBolt, faBoxesStacked, faBroadcastTower, faCarBurst, faFireExtinguisher, faGem, faHandHoldingDroplet, faIndustry, faLandmark, faVideo, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { faWandSparkles, faTowerBroadcast, faHouseSignal, faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';

export const categories = [
    {
        id: 1,
        name: 'HYBRID AIoT NVR',
        category: 1,
        icons: faHouseSignal,
        subcategories: [

            { id: 1, name: 'NVR & ALARM' }
        ]
    },
    {
        id: 2,
        name: ' INDUSTRIAL AI-NVR ',
        category: 2,
        icons: faIndustry,
        subcategories: [
            { id: 1, name: 'INDUSTRIAL' }

        ]
    },
    {
        id: 3,
        name: 'ALARM & AUTOMATION',
        category: 3,
        icons: faBell,
        subcategories: [
            { id: 1, name: 'INDUSTRIAL' }

        ]
    },
    {
        id: 4,
        name: 'CAMERA',
        category: 4,
        icons: faVideo,
        subcategories: [
            { id: 1, name: 'AI-Camera' },
            { id: 2, name: 'PIR-Camera' },
            { id: 3, name: 'PTZ-Camera' },
            { id: 4, name: 'DOM-Camera' },
            { id: 5, name: 'Bullet Camera' },
            { id: 6, name: 'Alarm Camera' },
            { id: 7, name: 'Solar Camera' },
            { id: 8, name: 'Wifi-Camera' },
            { id: 9, name: 'Panaromic Camera' },

        ]
    },
    {
        id: 5,
        name: ' SENSORS',
        category: 5,
        icons: faTowerBroadcast,
        subcategories: [
            { id: 1, name: 'Alarm Sensor' },
            { id: 2, name: 'Environmental Sensor' },
            { id: 3, name: 'Fire Sensor' },
            { id: 4, name: 'AI-Camera' },
            { id: 5, name: 'Perimeter Sensor' },
        ]
    },
    {
        id: 6,
        name: ' SMART SWITCH',
        category: 6,
        icons: faWandSparkles,
        subcategories: [
            { id: 1, name: 'SMART SWITCH' },

        ]
    },
    {
        id: 7,
        name: 'ACCESS CONTROL',
        category: 7,
        icons: faUsersViewfinder,
        subcategories: [
            { id: 1, name: 'ACCESS CONTROL' },

        ]
    },
    {
        id: 8,
        name: '  DIGITAL CLASS',
        category: 8,
        icons: faLandmark,
        subcategories: [
            { id: 1, name: ' DIGITAL CLASSROOM' },

        ]
    },
    {
        id: 9,
        category: 9,
        name: 'AI-VMS',
        icons: faCarBurst,
        subcategories: [
            { id: 1, name: 'AI-VMS' },

        ]
    },
    {
        id: 10,
        name: ' WATER MANAGEMENT',
        category: 10,
        icons: faHandHoldingDroplet,
        subcategories: [
            { id: 1, name: 'Tank Manager' },

        ]
    },
    {
        id: 11,
        name: ' ELECTRIC FENCE',
        category: 11,
        icons: faBolt,
        subcategories: [
            { id: 1, name: 'ELECTRIC' },

        ]
    },
    {
        id: 12,
        name: 'KITCHEN SAFETY',
        category: 12,
        icons: faFireExtinguisher,
        subcategories: [
            { id: 1, name: 'Fire SAFETY' },

        ]
    },
    {
        id: 13,
        name: 'IOE - COMMUNICATION',
        category: 13,
        icons: faBroadcastTower,
        subcategories: [
            { id: 1, name: 'Fire SAFETY' },

        ]
    },
    {
        id: 14,
        name: 'WAREHOUSE',
        category: 14,
        icons: faBoxesStacked,
        subcategories: [
            { id: 1, name: 'Fire SAFETY' },

        ]
    },
    {
        id: 15,
        name: ' ACCESSORIES',
        category: 15,
        icons: faGem,
        subcategories: [
            { id: 1, name: 'ACCESSORIES' },

        ]
    }
];

export const products = [

    // 1-HYBRID-NVR-- 1PRODUCTS
    {
        id: 1,
        category: 1,
        subcategory: 1,
        "icons": "faHouseSignal",

        ModelNumber: "NI-N16A64-201",
        title: "NYSTAI AI-IoT Hybrid NVR",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HYBRID-NVR/NYSTAI AI-IoT Hybrid NVR.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HYBRID-NVR/NYSTAI AI-IoT Hybrid NVR.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HYBRID-NVR/NYSTAI AI-IoT Hybrid NVR.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/HYBRID-NVR/NYSTAI AI-IoT Hybrid NVR.png"),

        // Card
        Cardsingleword: "Advanced AI Functions",
        Cardthreeword: "Offers intelligent analysis features such as facial recognition, video analytics, flow statistics, and boundary crossing detection.",

        // Modal
        Mkeyone: "16 Channel IP Cameras & 64 Wireless Sensors",
        Mkeytwo: "Offers intelligent analysis features such as facial recognition, video analytics, flow statistics, and boundary crossing detection.",
        MkeyTHREE: "Supports up to 32 groups of customized and multi-directional intelligent scene linkage for diverse surveillance needs.",
        MkeyFOUR: "Supports up to 64 wireless devices using FSK, LORA, ZIGBEE, Z-WAVE protocols, along with 16 IPC channels for up to 5MP resolution.",
        modalDescriptionp: "The NYSTAI AI-IoT Hybrid NVR combines NVR and alarm functionality into an affordable, integrated security system. It supports video surveillance, AI video analysis, intercom, one-click alarms, access control, attendance, fire alarms, and more, with applications spanning security, fire safety, and digital classrooms."
    },

    // 2-INDUSTRIAL-NVR-- 1PRODUCTS
    {
        id: 2,
        category: 2,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Industrial - Alarm Panel",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/INDUSTRIAL-NVR/Industrial - AlarmPannel.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/INDUSTRIAL-NVR/Industrial - AlarmPannel.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/INDUSTRIAL-NVR/Industrial - AlarmPannel.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/INDUSTRIAL-NVR/Industrial - AlarmPannel.png"),

        // Card
        Cardsingleword: "Robust Industrial Design",
        Cardthreeword: "Offers reliable alarm panel functionality with industrial-grade durability, enhanced communication protocols, and remote monitoring capabilities.",

        // Modal
        Mkeyone: "Industrial-grade alarm panel for harsh environments",
        Mkeytwo: "Supports advanced communication protocols such as RS485, Modbus, and Ethernet.",
        MkeyTHREE: "Real-time monitoring and control with seamless integration into industrial networks.",
        MkeyFOUR: "Compatible with various industrial sensors and alarm systems for comprehensive security and monitoring.",
        modalDescriptionp: "The Industrial Alarm Panel is designed for demanding industrial environments, providing reliable security and monitoring capabilities. It supports a wide range of communication protocols and integrates seamlessly with industrial systems, ensuring real-time monitoring and control. With a rugged design, this alarm panel is ideal for factories, warehouses, and other industrial settings where durability and performance are critical."
    },
    
    // 3-ALARM&AUTOMATION--5PRODUCTS
    {
        id: 3,
        category: 3,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Alarm Panel + Access Control Gateway",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel + Access Control Gateway.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel + Access Control Gateway.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel + Access Control Gateway.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel + Access Control Gateway.png"),

        // Card
        Cardsingleword: "Integrated Security Solution",
        Cardthreeword: "Combines alarm and access control features for a unified security gateway with real-time monitoring and smart automation.",

        // Modal
        Mkeyone: "Integrated alarm system with access control capabilities.",
        Mkeytwo: "Supports remote monitoring, control, and automation for enhanced security.",
        MkeyTHREE: "Compatible with multiple communication protocols for seamless system integration.",
        MkeyFOUR: "Ideal for secure facilities requiring both alarm and access control management.",
        modalDescriptionp: "The Alarm Panel + Access Control Gateway is an integrated security solution that combines alarm management and access control in a single system. It provides real-time monitoring, automation, and remote control, making it ideal for environments requiring high-level security. The gateway is compatible with various communication protocols and seamlessly integrates into existing security infrastructures, offering both alarm and access control management from a unified platform."
    },

    {
        id: 6,
        category: 3,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "NYSTAI Alarm Panel with Display",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI Alarm Pannel with Display.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI Alarm Pannel with Display.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI Alarm Pannel with Display.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI Alarm Pannel with Display.png"),

        // Card
        Cardsingleword: "User-Friendly Interface",
        Cardthreeword: "Equipped with an intuitive display for real-time monitoring, alarm management, and system control in one panel.",

        // Modal
        Mkeyone: "Alarm panel with integrated display for easy operation.",
        Mkeytwo: "Provides real-time monitoring and management of alarm systems.",
        MkeyTHREE: "Supports various alarm triggers and customizable notifications.",
        MkeyFOUR: "Ideal for both residential and commercial security applications with a user-friendly interface.",
        modalDescriptionp: "The NYSTAI Alarm Panel with Display offers a seamless and user-friendly interface for managing security alarms. Equipped with a display, it provides real-time monitoring, easy control, and customization of alarm settings. This panel is designed to handle multiple alarm triggers and customizable notifications, making it suitable for both residential and commercial security environments."
    },

    {
        id: 7,
        category: 3,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "NYSTAI WiFi Alarm Panel",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI WiFi Alarm Pannel.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI WiFi Alarm Pannel.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI WiFi Alarm Pannel.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/NYSTAI WiFi Alarm Pannel.png"),

        // Card
        Cardsingleword: "Wireless Connectivity",
        Cardthreeword: "WiFi-enabled alarm panel for seamless, wireless integration with security systems and remote monitoring through mobile devices.",

        // Modal
        Mkeyone: "WiFi-enabled for remote monitoring and control.",
        Mkeytwo: "Easy integration with existing security systems via wireless networks.",
        MkeyTHREE: "Supports mobile app for real-time notifications and alarm management.",
        MkeyFOUR: "Ideal for homes, offices, and commercial spaces needing a flexible, wireless alarm system.",
        modalDescriptionp: "The NYSTAI WiFi Alarm Panel offers advanced wireless connectivity, allowing for seamless integration with security systems and remote monitoring via mobile devices. With its WiFi-enabled features, users can manage alarms, receive real-time notifications, and control security remotely. This system is perfect for residential, office, and commercial spaces that require a flexible, wireless alarm solution."
    },
    // 4-CAMERA-- 17PRODUCTS

    {
        id: 8,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "AI Fish Eye Camera 3MP+IR",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Fish Eye Camera 3MP+IR.png"),

        // Card
        Cardsingleword: "360° Coverage",
        Cardthreeword: "AI-powered fish eye camera with 3MP resolution, infrared night vision, and 360-degree panoramic coverage for enhanced surveillance.",

        // Modal
        Mkeyone: "3MP resolution fish eye camera with AI-enhanced analytics.",
        Mkeytwo: "Provides 360° panoramic view for complete area surveillance.",
        MkeyTHREE: "Equipped with infrared (IR) capabilities for clear night vision.",
        MkeyFOUR: "Ideal for indoor and outdoor use, suitable for security monitoring in large spaces.",
        modalDescriptionp: "The AI Fish Eye Camera 3MP+IR is designed to provide comprehensive surveillance with its 360° panoramic view and 3MP high-resolution video. It includes advanced AI analytics for intelligent monitoring and infrared night vision for low-light environments. This camera is perfect for monitoring large areas in both indoor and outdoor settings, offering robust security coverage."
    },

    {
        id: 9,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "AI Indoor Motion Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Indoor Motion Camera.png"),

        // Card
        Cardsingleword: "Smart Motion Detection",
        Cardthreeword: "AI-powered indoor camera with motion detection, providing real-time alerts and advanced monitoring for indoor security.",

        // Modal
        Mkeyone: "AI-enhanced motion detection for real-time alerts and monitoring.",
        Mkeytwo: "Designed for indoor use, ensuring effective motion-based surveillance.",
        MkeyTHREE: "Supports high-resolution video capture for clear indoor monitoring.",
        MkeyFOUR: "Ideal for home, office, and indoor commercial spaces needing smart motion detection.",
        modalDescriptionp: "The AI Indoor Motion Camera offers advanced indoor surveillance with AI-powered motion detection for real-time alerts. It captures high-resolution video and provides intelligent monitoring, making it ideal for home, office, or indoor commercial spaces. This camera ensures secure and efficient indoor security through smart motion-based detection and notification systems."
    },

    {
        id: 10,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "AI Motion Camera with Battery",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Camera with Battery.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Camera with Battery.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Camera with Battery.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Camera with Battery.png"),

        // Card
        Cardsingleword: "Battery-Powered Security",
        Cardthreeword: "AI-powered motion camera with built-in battery, offering wireless surveillance and smart monitoring for flexible security setups.",

        // Modal
        Mkeyone: "AI-powered motion detection with wireless battery operation.",
        Mkeytwo: "Portable and flexible, ideal for locations without wired power access.",
        MkeyTHREE: "Supports real-time alerts and intelligent monitoring for enhanced security.",
        MkeyFOUR: "Perfect for indoor and outdoor use, especially in remote or hard-to-wire areas.",
        modalDescriptionp: "The AI Motion Camera with Battery offers wireless, battery-powered surveillance with smart motion detection. Equipped with AI technology for intelligent monitoring, this camera is ideal for both indoor and outdoor applications, especially in locations where wiring is not possible. With its real-time alerts and portable design, it ensures flexible and effective security solutions."
    },

    {
        id: 11,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "AI Motion Outdoor Camera with Battery",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Outdoor Camera with Battery.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Outdoor Camera with Battery.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Outdoor Camera with Battery.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Motion Outdoor Camera with Battery.png"),

        // Card
        Cardsingleword: "Outdoor Security",
        Cardthreeword: "AI-powered motion outdoor camera with a built-in battery, providing wireless and durable surveillance for outdoor security.",

        // Modal
        Mkeyone: "AI-powered motion detection for outdoor surveillance.",
        Mkeytwo: "Battery-powered for wireless, flexible outdoor security solutions.",
        MkeyTHREE: "Weatherproof design for reliable performance in outdoor conditions.",
        MkeyFOUR: "Ideal for areas with limited access to wired power, ensuring continuous security monitoring.",
        modalDescriptionp: "The AI Motion Outdoor Camera with Battery is a smart, battery-powered security solution designed for outdoor use. With AI motion detection and a weatherproof design, this camera offers wireless and reliable surveillance, even in areas with limited access to power. Its flexible setup makes it perfect for homes, businesses, and outdoor environments, providing 24/7 monitoring in any condition."
    },

    {
        id: 12,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "AI Outdoor Motion Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Outdoor Motion Camera.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Outdoor Motion Camera.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Outdoor Motion Camera.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI Outdoor Motion Camera.png"),

        // Card
        Cardsingleword: "Enhanced Detection",
        Cardthreeword: "AI-powered outdoor motion camera providing intelligent surveillance and real-time alerts for outdoor security.",

        // Modal
        Mkeyone: "AI-enhanced motion detection for accurate outdoor surveillance.",
        Mkeytwo: "High-resolution video capture for clear and detailed monitoring.",
        MkeyTHREE: "Designed for outdoor use with a weatherproof and durable build.",
        MkeyFOUR: "Ideal for comprehensive outdoor security, including homes, businesses, and large outdoor areas.",
        modalDescriptionp: "The AI Outdoor Motion Camera delivers advanced outdoor security with its AI-powered motion detection, providing accurate alerts and high-resolution video capture. Its weatherproof and durable design ensures reliable performance in various outdoor conditions. Perfect for enhancing security around homes, businesses, and large outdoor areas, this camera offers comprehensive surveillance with intelligent monitoring capabilities."
    },

    {
        id: 13,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "AI+4G Fixed Dome Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI+4G Fixed Dome Camera.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI+4G Fixed Dome Camera.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI+4G Fixed Dome Camera.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI+4G Fixed Dome Camera.png"),

        // Card
        Cardsingleword: "4G Connectivity",
        Cardthreeword: "AI-powered fixed dome camera with 4G connectivity for reliable, high-speed remote surveillance and monitoring.",

        // Modal
        Mkeyone: "AI-driven analytics for enhanced video surveillance and real-time alerts.",
        Mkeytwo: "4G connectivity ensures high-speed, reliable remote access and streaming.",
        MkeyTHREE: "Fixed dome design provides discreet and robust surveillance.",
        MkeyFOUR: "Suitable for both indoor and outdoor applications with flexible installation options.",
        modalDescriptionp: "The AI+4G Fixed Dome Camera combines advanced AI analytics with 4G connectivity, delivering reliable and high-speed remote surveillance. Its fixed dome design offers discreet and durable monitoring for various environments. Ideal for both indoor and outdoor use, this camera ensures seamless access and streaming, making it a versatile choice for comprehensive security solutions."
    },

    {
        id: 14,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "AI-WiFi Fixed Bullet Camera 50m IR",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera 50m IR.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera 50m IR.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera 50m IR.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera 50m IR.png"),

        // Card
        Cardsingleword: "Powerful IR",
        Cardthreeword: "AI-powered WiFi fixed bullet camera with 50m infrared range for clear, high-resolution night vision surveillance.",

        // Modal
        Mkeyone: "AI-enhanced video analytics for accurate motion detection and alerts.",
        Mkeytwo: "WiFi connectivity for easy installation and remote access.",
        MkeyTHREE: "50m infrared range for effective night vision and low-light performance.",
        MkeyFOUR: "Fixed bullet design ideal for long-range outdoor surveillance in various conditions.",
        modalDescriptionp: "The AI-WiFi Fixed Bullet Camera with 50m IR combines advanced AI video analytics with powerful infrared capabilities for superior night vision. This camera offers reliable WiFi connectivity, making installation simple and providing seamless remote access. Its fixed bullet design is perfect for long-range outdoor surveillance, ensuring clear and high-resolution monitoring even in low-light conditions."
    },

    {
        id: 15,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "AI-WiFi Fixed Bullet Camera with 2-way Comm",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera with 2way Comm.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera with 2way Comm.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera with 2way Comm.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi Fixed Bullet Camera with 2way Comm.png"),

        // Card
        Cardsingleword: "Interactive Monitoring",
        Cardthreeword: "AI-powered WiFi fixed bullet camera with 2-way communication for interactive surveillance and real-time communication.",

        // Modal
        Mkeyone: "AI-enhanced video analytics for improved motion detection and alerts.",
        Mkeytwo: "WiFi connectivity for flexible installation and remote access.",
        MkeyTHREE: "2-way communication allows for real-time audio interaction.",
        MkeyFOUR: "Fixed bullet design ideal for detailed, long-range surveillance in various environments.",
        modalDescriptionp: "The AI-WiFi Fixed Bullet Camera with 2-way Communication integrates advanced AI video analytics with WiFi connectivity and interactive audio features. The camera supports real-time audio communication, making it perfect for both surveillance and direct interaction. Its fixed bullet design provides reliable long-range monitoring, suitable for a variety of indoor and outdoor environments."
    },

    {
        id: 16,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "AI-WiFi+LAN Fixed Bullet Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN Fixed Bullet Camera.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN Fixed Bullet Camera.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN Fixed Bullet Camera.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN Fixed Bullet Camera.png"),

        // Card
        Cardsingleword: "Flexible Surveillance",
        Cardthreeword: "AI-powered fixed bullet camera with dual WiFi and LAN connectivity for versatile installation and reliable monitoring.",

        // Modal
        Mkeyone: "AI-enhanced video analytics for precise motion detection and smart alerts.",
        Mkeytwo: "Dual connectivity options with both WiFi and LAN for flexible installation and stable network connection.",
        MkeyTHREE: "Fixed bullet design provides long-range surveillance capabilities with high-definition clarity.",
        MkeyFOUR: "Built to withstand outdoor conditions, ensuring durability in diverse environments and scenarios.",
        modalDescriptionp: "The AI-WiFi+LAN Fixed Bullet Camera offers advanced AI video analytics with the flexibility of dual connectivity options, allowing for both WiFi and LAN setup. This camera provides high-definition surveillance with precise motion detection and smart alerts, making it ideal for various monitoring needs. Its robust bullet design is built to handle different environmental conditions, offering reliable performance in both indoor and outdoor settings."
    },

    {
        id: 17,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "AI-WiFi+LAN PT Camera with 2-way Comm",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera with 2way Comm.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera with 2way Comm.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera with 2way Comm.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera with 2way Comm.png"),

        // Card
        Cardsingleword: "Dynamic Surveillance",
        Cardthreeword: "AI-powered PT camera with WiFi and LAN connectivity and 2-way communication for interactive and flexible monitoring.",

        // Modal
        Mkeyone: "AI-enhanced pan-tilt capabilities for comprehensive coverage and precise monitoring.",
        Mkeytwo: "Dual WiFi and LAN connectivity options for versatile installation and network stability.",
        MkeyTHREE: "2-way communication feature for real-time audio interaction and enhanced security.",
        MkeyFOUR: "Weather-resistant PT camera design suitable for both indoor and outdoor use, ensuring durability and reliable performance.",
        modalDescriptionp: "The AI-WiFi+LAN PT Camera with 2-way Communication combines advanced AI technology with flexible pan-tilt functionality and dual connectivity options (WiFi and LAN). This camera enables comprehensive surveillance coverage, enhanced by AI-driven video analytics and smart alerts. With 2-way communication capabilities, it offers real-time audio interaction, making it perfect for both security monitoring and direct communication. Built to withstand various environments, the camera is suitable for both indoor and outdoor applications."
    },

    {
        id: 18,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "AI-WiFi+LAN PT Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/AI-WiFi+LAN PT Camera.png"),

        // Card
        Cardsingleword: "Versatile Monitoring",
        Cardthreeword: "AI-powered PT camera with dual connectivity options for flexible and comprehensive surveillance coverage.",

        // Modal
        Mkeyone: "Pan-Tilt functionality allows for wide-area surveillance with precise control.",
        Mkeytwo: "Supports both WiFi and LAN connections for adaptable installation and stable performance.",
        MkeyTHREE: "AI-enhanced video analytics for accurate motion detection and smart alerts.",
        MkeyFOUR: "Designed for durability, suitable for various indoor and outdoor environments.",
        modalDescriptionp: "The AI-WiFi+LAN PT Camera is a versatile surveillance solution featuring advanced AI technology and flexible pan-tilt capabilities. With support for both WiFi and LAN connectivity, this camera allows for easy installation and reliable network performance. Its AI-driven video analytics provide accurate motion detection and smart alerts, making it an ideal choice for comprehensive monitoring in both residential and commercial settings. The camera's robust design ensures it can withstand diverse environmental conditions, ensuring durability and consistent performance."
    },

    {
        id: 19,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "Fish Eye Camera 2MP+IR",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Fish Eye Camera 2MP+IR.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Fish Eye Camera 2MP+IR.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Fish Eye Camera 2MP+IR.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Fish Eye Camera 2MP+IR.png"),

        // Card
        Cardsingleword: "360° Coverage",
        Cardthreeword: "High-resolution fisheye camera with infrared capabilities for complete panoramic surveillance.",

        // Modal
        Mkeyone: "2MP resolution provides clear and detailed panoramic views.",
        Mkeytwo: "Built-in IR (Infrared) technology for effective night vision up to a certain distance.",
        MkeyTHREE: "Fisheye lens offers 360-degree coverage, minimizing blind spots.",
        MkeyFOUR: "Ideal for large-area surveillance such as lobbies, warehouses, or retail stores.",
        modalDescriptionp: "The Fish Eye Camera 2MP+IR provides a comprehensive 360-degree view with its high-resolution fisheye lens, ensuring there are no blind spots in surveillance. Equipped with infrared (IR) technology, it offers effective night vision, making it suitable for round-the-clock monitoring. This camera is perfect for areas requiring wide coverage such as lobbies, warehouses, and retail stores, delivering clear and detailed footage even in low-light conditions. With its advanced features, this camera serves as a reliable choice for both indoor and outdoor security needs."
    },

    {
        id: 20,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "IR Motion Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/IR Motion Camera.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/IR Motion Camera.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/IR Motion Camera.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/IR Motion Camera.png"),

        // Card
        Cardsingleword: "Smart Detection",
        Cardthreeword: "Infrared motion camera with advanced detection capabilities for enhanced surveillance.",

        // Modal
        Mkeyone: "Built-in infrared (IR) sensors for reliable motion detection in low-light environments.",
        Mkeytwo: "Supports smart alerts and notifications when motion is detected.",
        MkeyTHREE: "Ideal for both indoor and outdoor security applications.",
        MkeyFOUR: "Compact design suitable for discreet placement in various locations.",
        modalDescriptionp: "The IR Motion Camera is designed for enhanced surveillance with its advanced infrared (IR) motion detection capabilities. It is equipped with smart detection technology that provides reliable performance in low-light environments, making it ideal for both indoor and outdoor security. The camera supports real-time alerts and notifications when motion is detected, ensuring prompt response to potential security threats. Its compact design allows for discreet placement, making it a versatile choice for various surveillance needs, from residential to commercial applications."
    },

    {
        id: 21,
        category: 4,
        subcategory: 2,

        ModelNumber: "NI-N16A64-201",
        title: "Solar Intruder Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Solar Intruder Camera.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Solar Intruder Camera.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Solar Intruder Camera.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/CAMERA/Solar Intruder Camera.png"),

        // Card
        Cardsingleword: "Solar-Powered Security",
        Cardthreeword: "Solar-powered intruder camera with AI detection for sustainable, uninterrupted outdoor security.",

        // Modal
        Mkeyone: "AI-powered motion detection for precise intruder alerts.",
        Mkeytwo: "Solar-powered design ensures continuous operation in outdoor settings.",
        MkeyTHREE: "Weather-resistant build ideal for harsh environmental conditions.",
        MkeyFOUR: "Real-time monitoring and alerts for proactive security response.",
        modalDescriptionp: "The Solar Intruder Camera combines solar-powered operation with advanced AI motion detection, ensuring uninterrupted outdoor surveillance. Designed to withstand harsh environmental conditions, this camera provides real-time intruder alerts and is perfect for sustainable and efficient security in remote or outdoor locations."
    },

    {
        id: 22,
        category: 4,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Dual Lenz PTZ+Siren",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Dual Lenz PTZ+Siren.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Dual Lenz PTZ+Siren.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Dual Lenz PTZ+Siren.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Dual Lenz PTZ+Siren.png'),

        // Card
        Cardsingleword: "Dual Surveillance",
        Cardthreeword: "PTZ camera with dual lenses and built-in siren for advanced monitoring and active deterrence.",

        // Modal
        Mkeyone: "Dual lenses provide enhanced wide-angle and zoomed-in views.",
        Mkeytwo: "PTZ (Pan-Tilt-Zoom) functionality for comprehensive area coverage.",
        MkeyTHREE: "Built-in siren for active intruder deterrence.",
        MkeyFOUR: "Ideal for real-time tracking and intervention in large or sensitive areas.",
        modalDescriptionp: "The Dual Lenz PTZ+Siren camera offers versatile surveillance with its dual lenses, providing both wide-angle and zoomed-in views. The PTZ functionality allows for full area coverage, while the integrated siren actively deters intruders, making it perfect for sensitive or large areas requiring real-time monitoring and response."
    },

    // 5-SENSORS--33PRODUCTS
    {
        id: 23,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Door Sensor A",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor A.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor A.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor A.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor A.png'),

        // Card
        Cardsingleword: "Door Security",
        Cardthreeword: "Reliable door sensor for accurate entry detection and enhanced security monitoring.",

        // Modal
        Mkeyone: "Detects door openings and closures for real-time security alerts.",
        Mkeytwo: "Wireless design for easy installation and integration into existing systems.",
        MkeyTHREE: "Ideal for monitoring entry points in homes or businesses.",
        MkeyFOUR: "Battery-powered for long-lasting performance with low energy consumption.",
        modalDescriptionp: "The Door Sensor A provides accurate detection of door openings and closures, ensuring real-time alerts for enhanced security. Its wireless design allows for easy installation, making it suitable for homes, offices, and businesses. With low energy consumption and long-lasting battery life, it's a reliable addition to any security system."
    },

    {
        id: 24,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Door Sensor B",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor B.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor B.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor B.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Door Sensor B.png'),

        // Card
        Cardsingleword: "Advanced Entry Detection",
        Cardthreeword: "High-precision door sensor for enhanced security with real-time alerts and seamless integration.",

        // Modal
        Mkeyone: "Highly accurate detection of door opening and closing for instant notifications.",
        Mkeytwo: "Easy-to-install wireless design with broad compatibility for security systems.",
        MkeyTHREE: "Enhanced sensitivity for reliable monitoring of key entry points.",
        MkeyFOUR: "Energy-efficient with long battery life, designed for continuous operation.",
        modalDescriptionp: "The Door Sensor B offers high-precision monitoring of door activity, providing real-time notifications for enhanced security. Its wireless design allows for effortless installation, while its broad compatibility ensures easy integration with various security systems. Designed for reliability, it operates with low energy consumption for long-lasting use."
    },

    {
        id: 25,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Environment Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Environment Sensor.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Environment Sensor.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Environment Sensor.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Environment Sensor.png'),

        // Card
        Cardsingleword: "Environmental Monitoring",
        Cardthreeword: "Advanced environment sensor for real-time monitoring of temperature, humidity, and air quality.",

        // Modal
        Mkeyone: "Monitors environmental factors such as temperature, humidity, and air quality.",
        Mkeytwo: "Wireless design for easy integration into smart home or office systems.",
        MkeyTHREE: "Real-time data and alerts to ensure optimal environmental conditions.",
        MkeyFOUR: "Energy-efficient operation with long battery life for continuous monitoring.",
        modalDescriptionp: "The Environment Sensor is designed for real-time monitoring of crucial environmental factors, including temperature, humidity, and air quality. It provides wireless connectivity for easy integration into existing systems, delivering real-time data and alerts to maintain optimal conditions. Its energy-efficient design ensures long-lasting performance, making it ideal for smart home and office environments."
    },

    {
        id: 26,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "GAS Sensor Wireless",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/GAS Sensor Wireless.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/GAS Sensor Wireless.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/GAS Sensor Wireless.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/GAS Sensor Wireless.png'),

        // Card
        Cardsingleword: "Gas Detection",
        Cardthreeword: "Wireless gas sensor for real-time detection and alerts, ensuring safety and monitoring of gas levels.",

        // Modal
        Mkeyone: "Detects harmful gas levels and provides real-time alerts.",
        Mkeytwo: "Wireless connectivity for easy installation and integration.",
        MkeyTHREE: "Ideal for homes, offices, and industrial spaces to ensure safety.",
        MkeyFOUR: "Energy-efficient with long-lasting battery life for continuous monitoring.",
        modalDescriptionp: "The GAS Sensor Wireless is designed to detect harmful gas levels, providing real-time alerts to ensure safety in homes, offices, and industrial spaces. Its wireless connectivity allows for easy installation and integration into existing systems. With an energy-efficient design, it offers long-lasting performance for continuous monitoring of gas levels."
    },

    {
        id: 27,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Gas Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor B.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor B.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor B.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor B.png'),

        // Card
        Cardsingleword: "Gas Monitoring",
        Cardthreeword: "Reliable gas sensor for real-time detection and monitoring, ensuring safety in critical environments.",

        // Modal
        Mkeyone: "Detects and alerts on harmful gas levels in real time.",
        Mkeytwo: "Compact and easy to install in various settings.",
        MkeyTHREE: "Suitable for homes, offices, and industrial environments.",
        MkeyFOUR: "Energy-efficient design with long battery life for continuous monitoring.",
        modalDescriptionp: "The Gas Sensor is built to detect harmful gas levels and provide real-time alerts to ensure safety in homes, offices, and industrial environments. It’s compact and easy to install, making it a perfect addition to any safety system. With its energy-efficient design, the sensor ensures long-lasting, continuous monitoring of gas levels."
    },

    {
        id: 28,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Gas Sensor Wired",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor Wired.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor Wired.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor Wired.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor Wired.png'),

        // Card
        Cardsingleword: "Wired Gas Detection",
        Cardthreeword: "Reliable wired gas sensor for continuous real-time monitoring and safety in various environments.",

        // Modal
        Mkeyone: "Provides real-time detection of harmful gas levels.",
        Mkeytwo: "Wired installation ensures a constant power supply for continuous operation.",
        MkeyTHREE: "Suitable for homes, industrial, and commercial environments.",
        MkeyFOUR: "Designed for high accuracy and durability in critical safety applications.",
        modalDescriptionp: "The Gas Sensor Wired offers reliable and continuous real-time detection of harmful gas levels, ensuring safety in homes, offices, and industrial environments. With a wired connection for a constant power supply, this sensor is ideal for critical safety applications that require uninterrupted monitoring. Built for accuracy and durability, it provides peace of mind in various environments."
    },

    {
        id: 29,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Gas Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Gas Sensor.png'),

        // Card
        Cardsingleword: "Gas Detection",
        Cardthreeword: "Reliable gas sensor for detecting hazardous gases and ensuring safety in various environments.",

        // Modal
        Mkeyone: "Real-time detection of harmful gas levels for immediate safety alerts.",
        Mkeytwo: "Easy to install and integrate into existing security systems.",
        MkeyTHREE: "Ideal for monitoring gas levels in homes, offices, and industrial spaces.",
        MkeyFOUR: "Designed for continuous operation with a long-lasting power supply.",
        modalDescriptionp: "The Gas Sensor is a reliable solution for detecting harmful gases in real time, ensuring immediate safety alerts in homes, offices, and industrial environments. Its easy installation and integration into existing systems make it a valuable addition to any safety setup. With a design focused on continuous operation and durability, it provides peace of mind for gas level monitoring."
    },

    {
        id: 30,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Invisible Beem Perimeter Sensor - 2IR",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 2IR.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 2IR.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 2IR.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 2IR.png'),

        // Card
        Cardsingleword: "Perimeter Protection",
        Cardthreeword: "Invisible beam perimeter sensor with dual infrared technology for secure boundary protection.",

        // Modal
        Mkeyone: "Invisible infrared beams for discreet perimeter protection.",
        Mkeytwo: "Dual infrared technology for enhanced detection accuracy.",
        MkeyTHREE: "Ideal for securing outdoor areas, fences, and property boundaries.",
        MkeyFOUR: "Weather-resistant design for reliable performance in various conditions.",
        modalDescriptionp: "The Invisible Beem Perimeter Sensor - 2IR is designed for secure and discreet perimeter protection using invisible infrared beams. With dual infrared technology, it offers enhanced accuracy for detecting intrusions in outdoor areas, making it ideal for securing fences, property boundaries, and other sensitive locations. Built to withstand harsh weather conditions, this sensor ensures reliable performance in a variety of environments."
    },

    {
        id: 31,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Invisible Beem Perimeter Sensor - 3IR",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 3IR.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 3IR.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 3IR.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor - 3IR.png'),

        // Card
        Cardsingleword: "Advanced Perimeter Security",
        Cardthreeword: "Triple infrared beam perimeter sensor for enhanced boundary protection and intrusion detection.",

        // Modal
        Mkeyone: "Triple infrared beams for superior detection and reduced false alarms.",
        Mkeytwo: "Invisible beam technology for discreet perimeter monitoring.",
        MkeyTHREE: "Ideal for securing large outdoor areas, including commercial and residential properties.",
        MkeyFOUR: "Durable and weather-resistant for all-season protection.",
        modalDescriptionp: "The Invisible Beem Perimeter Sensor - 3IR offers advanced perimeter protection using triple infrared beams, providing superior detection accuracy and minimizing false alarms. This invisible beam sensor is perfect for discreetly securing large outdoor areas such as commercial and residential properties. With a weather-resistant design, it ensures reliable all-season performance for comprehensive boundary security."
    },

    {
        id: 32,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Invisible Beem Perimeter Sensor B - 2IR",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor B - 2IR.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor B - 2IR.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor B - 2IR.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor B - 2IR.png'),

        // Card
        Cardsingleword: "Discrete Protection",
        Cardthreeword: "Invisible dual infrared beam perimeter sensor for effective boundary security and low visibility monitoring.",

        // Modal
        Mkeyone: "Dual infrared beams for precise perimeter detection.",
        Mkeytwo: "Invisible beam technology for subtle yet effective monitoring.",
        MkeyTHREE: "Suitable for a variety of outdoor spaces, providing flexible installation options.",
        MkeyFOUR: "Weatherproof design ensures performance in all weather conditions.",
        modalDescriptionp: "The Invisible Beem Perimeter Sensor B - 2IR offers discreet and effective perimeter security with dual infrared beams. Its invisible beam technology ensures subtle monitoring without compromising on detection accuracy. Ideal for various outdoor spaces, this sensor provides flexible installation options and is designed to withstand diverse weather conditions for continuous protection."
    },

    {
        id: 33,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Invisible Beem Perimeter Sensor C - 4IR",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor C - 4IR.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor C - 4IR.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor C - 4IR.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor C - 4IR.png'),

        // Card
        Cardsingleword: "Stealth Protection",
        Cardthreeword: "Invisible beam perimeter sensor with 4 infrared channels for advanced boundary security and intrusion detection.",

        // Modal
        Mkeyone: "Equipped with four invisible infrared (IR) beams for reliable perimeter security.",
        Mkeytwo: "Advanced intrusion detection technology ensures accurate and immediate alerts.",
        MkeyTHREE: "Weather-resistant design suitable for outdoor installations.",
        MkeyFOUR: "Supports integration with existing security systems for comprehensive protection.",
        modalDescriptionp: "The Invisible Beem Perimeter Sensor C - 4IR is an advanced security device designed for high-level perimeter protection. It features four invisible infrared beams that detect unauthorized movements and provide immediate alerts to prevent potential intrusions. With a robust, weather-resistant design, this sensor is suitable for outdoor environments and ensures reliable performance under various weather conditions. The sensor seamlessly integrates with existing security systems, making it a versatile and essential addition to any comprehensive security setup, providing discreet and effective boundary protection."
    },

    {
        id: 34,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Invisible Beem Perimeter Sensor D - 2IR",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor D - 2IR.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor D - 2IR.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor D - 2IR.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor D - 2IR.png'),

        // Card
        Cardsingleword: "Intrusion Detection",
        Cardthreeword: "Discrete perimeter sensor with 2 infrared beams for reliable intrusion detection and boundary security.",

        // Modal
        Mkeyone: "Equipped with two invisible infrared (IR) beams for precise perimeter monitoring.",
        Mkeytwo: "Effective detection technology provides fast and accurate intrusion alerts.",
        MkeyTHREE: "Compact design ideal for seamless integration with various outdoor security setups.",
        MkeyFOUR: "Durable construction withstands harsh weather conditions for reliable outdoor use.",
        modalDescriptionp: "The Invisible Beem Perimeter Sensor D - 2IR offers a discreet and effective solution for perimeter security. It features two invisible infrared beams that deliver accurate intrusion detection, ensuring quick response to potential security breaches. The compact and durable design of this sensor makes it ideal for outdoor installations, providing continuous monitoring even in challenging weather conditions. Easily integrable with existing security systems, this sensor enhances boundary protection and is a vital component for robust security setups in residential, commercial, or industrial environments."
    },

    {
        id: 35,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Invisible Beam Perimeter Sensor F - 2IR",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor F - 2IR.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor F - 2IR.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor F - 2IR.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Beem Perimeter Sensor F - 2IR.png'),

        // Card
        Cardsingleword: "Invisible Protection",
        Cardthreeword: "Advanced infrared beam technology for securing perimeters with invisible detection lines.",

        // Modal
        Mkeyone: "Invisible infrared beams create a secure perimeter with undetectable protection.",
        Mkeytwo: "Dual-beam system reduces false alarms by detecting only when both beams are interrupted.",
        MkeyTHREE: "Weatherproof design ensures reliable operation in outdoor environments.",
        MkeyFOUR: "Ideal for protecting the boundaries of homes, businesses, and restricted areas.",
        modalDescriptionp: "The Invisible Beam Perimeter Sensor F - 2IR is designed to provide an undetectable security solution using infrared beam technology. The dual-beam system minimizes false alarms by triggering only when both beams are interrupted simultaneously. Its weatherproof design allows for consistent performance in various outdoor conditions, making it an excellent choice for safeguarding perimeters around homes, businesses, and restricted areas. With advanced features and a focus on reliability, this sensor is perfect for comprehensive boundary protection."
    },

    {
        id: 36,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Invisible Wall Perimeter Sensor - 4IR",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Wall Perimeter Sensor - 4IR.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Wall Perimeter Sensor - 4IR.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Wall Perimeter Sensor - 4IR.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Invisible Wall Perimeter Sensor - 4IR.png'),

        // Card
        Cardsingleword: "Advanced Security",
        Cardthreeword: "Infrared wall-mounted sensor with 4-beam technology for robust perimeter protection.",

        // Modal
        Mkeyone: "4-beam infrared technology provides high-accuracy detection for maximum security.",
        Mkeytwo: "Invisible beams create an undetectable security wall around protected areas.",
        MkeyTHREE: "Wall-mounted design is ideal for secure perimeter setup in various environments.",
        MkeyFOUR: "Durable construction ensures reliability in outdoor and indoor settings.",
        modalDescriptionp: "The Invisible Wall Perimeter Sensor - 4IR is equipped with a 4-beam infrared system designed to create an invisible wall of protection around any designated area. The advanced 4-beam technology ensures high-accuracy detection, significantly reducing false alarms and enhancing security. Its wall-mounted design makes it suitable for both indoor and outdoor installations, providing robust and reliable perimeter protection for homes, commercial properties, and sensitive locations. Built to withstand various environmental conditions, this sensor is ideal for those looking to enhance their security setup with advanced infrared technology."
    },

    {
        id: 37,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Microwave Radar Home Garden-Lawn Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Microwave Radar Home Garden-Lawn Sensor.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Microwave Radar Home Garden-Lawn Sensor.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Microwave Radar Home Garden-Lawn Sensor.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Microwave Radar Home Garden-Lawn Sensor.png'),

        // Card
        Cardsingleword: "Outdoor Monitoring",
        Cardthreeword: "Microwave radar sensor designed for reliable perimeter detection in gardens and lawns.",

        // Modal
        Mkeyone: "Microwave radar technology ensures accurate detection over a wide area.",
        Mkeytwo: "Specifically designed for outdoor use in gardens, lawns, and perimeters.",
        MkeyTHREE: "Resistant to weather conditions for reliable performance in different environments.",
        MkeyFOUR: "Ideal for enhancing home security by monitoring outdoor areas effectively.",
        modalDescriptionp: "The Microwave Radar Home Garden-Lawn Sensor utilizes advanced microwave radar technology to provide comprehensive coverage for outdoor areas, such as gardens and lawns. Designed to withstand various weather conditions, this sensor ensures accurate detection and reliable performance in all environments. Its robust build and outdoor compatibility make it an excellent choice for homeowners looking to enhance their security systems with effective perimeter monitoring. Whether it's for monitoring a home garden, lawn, or outdoor perimeter, this sensor delivers reliable and efficient detection, helping to safeguard property against intrusions."
    },

    {
        id: 38,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Motion Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor B.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor B.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor B.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor B.png'),

        // Card
        Cardsingleword: "Motion Detection",
        Cardthreeword: "Reliable motion sensor for enhanced security and automated lighting solutions.",

        // Modal
        Mkeyone: "High sensitivity for detecting motion over a specified range.",
        Mkeytwo: "Ideal for both indoor and outdoor use for security and automation.",
        MkeyTHREE: "Easy installation and integration with existing security systems.",
        MkeyFOUR: "Can be used to automate lights or trigger alarms based on detected motion.",
        modalDescriptionp: "The Motion Sensor is a versatile device designed to detect motion with high sensitivity, making it ideal for enhancing security and automating various systems. Suitable for both indoor and outdoor use, this sensor can be easily integrated with existing security setups to provide an additional layer of protection. Its functionality extends to automating lights, triggering alarms, and other automation tasks based on detected motion. With its reliable performance and easy installation, this motion sensor is a great choice for both residential and commercial applications, helping to monitor and secure spaces effectively."
    },

    {
        id: 39,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Motion Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor C.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor C.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor C.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor C.png'),

        // Card
        Cardsingleword: "Reliable Detection",
        Cardthreeword: "Highly sensitive motion sensor with advanced detection capabilities for enhanced security.",

        // Modal
        Mkeyone: "Advanced motion detection technology for accurate and reliable monitoring.",
        Mkeytwo: "Ideal for home security setups, providing an extra layer of protection.",
        MkeyTHREE: "Easy installation with flexible mounting options for various environments.",
        MkeyFOUR: "Compatible with most security systems for seamless integration.",
        modalDescriptionp: "The Motion Sensor provides robust and accurate motion detection capabilities, ensuring your home or property is well-protected. With advanced sensor technology, it is capable of detecting even the slightest movements, making it an essential component of any modern security system. Its easy installation and compatibility with various security setups make it a versatile choice for enhancing safety."
    },

    {
        id: 40,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Motion Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor N.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor N.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor N.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor N.png'),

        // Card
        Cardsingleword: "Enhanced Security",
        Cardthreeword: "High-performance motion sensor designed for reliable intrusion detection and security automation.",

        // Modal
        Mkeyone: "High-sensitivity sensor for detecting even subtle movements.",
        Mkeytwo: "Works seamlessly with smart home systems for automation and alerts.",
        MkeyTHREE: "Weather-resistant design suitable for both indoor and outdoor use.",
        MkeyFOUR: "Easy integration into existing security setups with minimal configuration.",
        modalDescriptionp: "The Motion Sensor offers advanced intrusion detection with its high-sensitivity capabilities, ensuring enhanced security for homes and businesses. Designed to work seamlessly with modern smart home systems, it allows for automation and instant alerts. Its weather-resistant design makes it versatile for both indoor and outdoor use, providing reliable monitoring in various environments. Easy to install and integrate, this sensor adds an extra layer of protection to any security setup."
    },

    {
        id: 41,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Motion Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor R.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor R.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor R.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Motion Sensor R.png'),

        // Card
        Cardsingleword: "Precision Detection",
        Cardthreeword: "Reliable motion sensor designed for precise and efficient movement detection in various environments.",

        // Modal
        Mkeyone: "Advanced detection technology ensures accurate movement recognition.",
        Mkeytwo: "Highly adaptable for both residential and commercial applications.",
        MkeyTHREE: "Integrates smoothly with existing security systems for enhanced monitoring.",
        MkeyFOUR: "Compact design for easy installation and minimal impact on surroundings.",
        modalDescriptionp: "The Motion Sensor features advanced detection technology for precise and efficient movement detection, making it a reliable choice for enhancing security in diverse settings. Its adaptability allows for use in both residential and commercial environments, integrating seamlessly with existing security systems to provide enhanced monitoring capabilities. With a compact design, it ensures easy installation and minimal disruption to the surrounding area. Ideal for any security setup requiring accurate and responsive motion detection."
    },

    {
        id: 42,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Outdoor iBeem Perimeter Sensor - 4IR",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - 4IR.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - 4IR.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - 4IR.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - 4IR.png'),

        // Card
        Cardsingleword: "Advanced Perimeter Protection",
        Cardthreeword: "Outdoor perimeter sensor equipped with 4 IR beams for reliable intrusion detection.",

        // Modal
        Mkeyone: "4 IR beams provide comprehensive perimeter protection and enhanced detection accuracy.",
        Mkeytwo: "Designed specifically for outdoor use, ensuring durability and performance in various weather conditions.",
        MkeyTHREE: "Easy installation and integration with existing security systems for seamless operation.",
        MkeyFOUR: "Ideal for securing large outdoor areas such as properties, warehouses, and industrial sites.",
        modalDescriptionp: "The Outdoor iBeem Perimeter Sensor - 4IR is engineered to deliver advanced perimeter protection with its 4 infrared beams, providing reliable and accurate intrusion detection. Designed for outdoor environments, this sensor withstands various weather conditions while maintaining top-notch performance. It integrates easily with existing security systems, making it a suitable choice for large outdoor areas including properties, warehouses, and industrial sites. The sensor's robust design and high detection accuracy ensure comprehensive security coverage."
    },

    {
        id: 43,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Outdoor iBeem Perimeter Sensor - IR",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - IR.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - IR.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - IR.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Outdoor iBeem Perimeter Sensor - IR.png'),

        // Card
        Cardsingleword: "Reliable Perimeter Detection",
        Cardthreeword: "Outdoor IR perimeter sensor for effective security with reliable intrusion detection.",

        // Modal
        Mkeyone: "Infrared (IR) technology ensures accurate detection and reduced false alarms.",
        Mkeytwo: "Designed for outdoor use with a rugged build to withstand harsh weather conditions.",
        MkeyTHREE: "Integrates easily with existing security systems for comprehensive protection.",
        MkeyFOUR: "Suitable for large outdoor areas, including residential properties and commercial sites.",
        modalDescriptionp: "The Outdoor iBeem Perimeter Sensor - IR provides reliable perimeter protection using advanced infrared (IR) technology. Designed to perform well in outdoor environments, this sensor offers accurate detection with minimal false alarms. Its rugged construction ensures durability in various weather conditions, making it an excellent choice for securing large outdoor areas such as residential properties and commercial sites. The sensor integrates seamlessly with existing security systems to enhance overall security measures."
    },

    {
        id: 44,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Rolling Shutter Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor F.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor F.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor F.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor F.png'),

        // Card
        Cardsingleword: "Enhanced Security",
        Cardthreeword: "Advanced rolling shutter sensor for precise detection and security enhancement.",

        // Modal
        Mkeyone: "Designed to work with rolling shutters for accurate intrusion detection.",
        Mkeytwo: "Features high sensitivity to detect any movement or tampering.",
        MkeyTHREE: "Robust build quality ensures reliable performance in various environments.",
        MkeyFOUR: "Easily integrates with existing security systems to provide comprehensive protection.",
        modalDescriptionp: "The Rolling Shutter Sensor offers advanced security capabilities by accurately detecting movements and tampering with rolling shutters. This sensor is highly sensitive and designed to work seamlessly with rolling shutter systems, providing enhanced security for both residential and commercial properties. Its robust construction ensures durability and reliable performance in a range of environments. The sensor integrates effortlessly with existing security systems, delivering comprehensive protection and peace of mind."
    },

    {
        id: 45,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Rolling Shutter Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor L.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor L.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor L.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Rolling Shutter Sensor L.png'),

        // Card
        Cardsingleword: "Advanced Detection",
        Cardthreeword: "High-performance rolling shutter sensor designed for superior detection and security.",

        // Modal
        Mkeyone: "Specialized for rolling shutters to offer precise intrusion detection.",
        Mkeytwo: "High sensitivity to accurately detect any unauthorized movement or tampering.",
        MkeyTHREE: "Durable construction ensures reliable performance in various conditions.",
        MkeyFOUR: "Easily integrates into existing security setups for enhanced protection.",
        modalDescriptionp: "The Rolling Shutter Sensor provides high-performance detection specifically designed for rolling shutters. It features high sensitivity to detect unauthorized movements or tampering, ensuring superior security. The sensor’s durable build guarantees reliable operation under various conditions. It integrates seamlessly with current security systems, enhancing overall protection and providing peace of mind."
    },

    {
        id: 46,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Smoke-Fire Sensor Wireless with Motion Detection",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless with Motion Detection.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless with Motion Detection.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless with Motion Detection.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless with Motion Detection.png'),

        // Card
        Cardsingleword: "Integrated Safety",
        Cardthreeword: "Wireless smoke and fire sensor with motion detection capabilities for enhanced safety.",

        // Modal
        Mkeyone: "Wireless design ensures easy installation without the need for complex wiring.",
        Mkeytwo: "Advanced smoke and fire detection to provide timely alerts and prevent emergencies.",
        MkeyTHREE: "Motion detection feature enhances security by detecting movement in addition to environmental changes.",
        MkeyFOUR: "Reliable and durable construction designed for long-term use in various environments.",
        modalDescriptionp: "The Smoke-Fire Sensor Wireless with Motion Detection offers a comprehensive safety solution with its wireless design, making installation simple and hassle-free. This sensor provides advanced smoke and fire detection, ensuring timely alerts to prevent emergencies. It also features motion detection capabilities, adding an extra layer of security by monitoring movement. With its reliable and durable construction, this sensor is suitable for various environments and offers long-term protection for your property."
    },

    {
        id: 47,
        category: 5,
        subcategory: 1,
        ModelNumber: "NI-N16A64-201",
        title: "Smoke-Fire Sensor Wireless",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Smoke-Fire Sensor Wireless.png'),

        // Card
        Cardsingleword: "Wireless Safety",
        Cardthreeword: "Reliable smoke and fire sensor with a wireless design for easy installation.",

        // Modal
        Mkeyone: "Wireless technology allows for quick and easy installation without extensive wiring.",
        Mkeytwo: "Sensitive smoke and fire detection for reliable performance in emergency situations.",
        MkeyTHREE: "Compact design fits seamlessly into various environments while maintaining high functionality.",
        MkeyFOUR: "Durable and long-lasting, designed to provide consistent safety and performance over time.",
        modalDescriptionp: "The Smoke-Fire Sensor Wireless provides a dependable solution for smoke and fire detection with its wireless design, simplifying the installation process. This sensor is highly sensitive, ensuring reliable performance in detecting smoke and fire, and its compact design allows it to blend into different environments seamlessly. Built to last, it offers consistent safety and protection, making it an ideal choice for enhancing safety in any setting."
    },

    {
        id: 51,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Solar Motion Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar Motion Sensor O.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar Motion Sensor O.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar Motion Sensor O.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar Motion Sensor O.png'),

        // Card
        Cardsingleword: "Eco-friendly Security",
        Cardthreeword: "Solar-powered motion sensor for efficient, eco-friendly outdoor security with wireless installation and intelligent detection.",

        // Modal
        Mkeyone: "Solar-powered design eliminates the need for wiring and external power sources.",
        Mkeytwo: "Advanced motion detection with adjustable sensitivity for precise monitoring.",
        MkeyTHREE: "Weatherproof construction ensures reliable operation in all outdoor conditions.",
        MkeyFOUR: "Wireless installation for flexibility in placing the sensor in optimal locations.",
        modalDescriptionp: "The Solar Motion Sensor is a smart, eco-friendly security solution designed for outdoor use. Powered entirely by solar energy, this sensor eliminates the need for complex wiring or external power, making it an environmentally conscious choice. Its advanced motion detection capabilities can be adjusted for sensitivity, ensuring accurate monitoring while reducing false alarms. Built to withstand various weather conditions, the sensor is ideal for enhancing security in any outdoor environment. The wireless installation allows for flexible placement, making it easy to secure entry points, gardens, and other areas."
    },

    {
        id: 52,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Solar iBeem Perimeter Sensor",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 2IR.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 2IR.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 2IR.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 2IR.png'),

        // Card
        Cardsingleword: "Perimeter Security",
        Cardthreeword: "Solar-powered iBeem perimeter sensor for long-range infrared detection, securing outdoor boundaries efficiently and wirelessly.",

        // Modal
        Mkeyone: "Dual infrared beam technology for precise long-range perimeter detection.",
        Mkeytwo: "Solar-powered design eliminates the need for wired installations or external power.",
        MkeyTHREE: "Weather-resistant housing ensures reliable performance in harsh outdoor environments.",
        MkeyFOUR: "Wireless installation allows for easy setup and flexibility in positioning.",
        modalDescriptionp: "The Solar iBeem Perimeter Sensor provides a robust and efficient solution for outdoor perimeter security. Utilizing dual infrared beam technology, this sensor offers long-range detection, making it ideal for securing large outdoor areas like gardens, driveways, and perimeters. Completely solar-powered, it requires no external power source or complex wiring, ensuring an eco-friendly and simple installation process. Built with weather-resistant materials, the iBeem sensor operates effectively in various environmental conditions. Its wireless setup allows for flexible placement, ensuring optimal perimeter protection."
    },

    {
        id: 53,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Solar iBeem Perimeter Sensor - 4IR",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 4IR.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 4IR.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 4IR.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Solar iBeem Perimeter Sensor - 4IR.png'),

        // Card
        Cardsingleword: "Enhanced Security",
        Cardthreeword: "Solar-powered iBeem perimeter sensor with 4 infrared beams for superior long-range detection and wireless outdoor security.",

        // Modal
        Mkeyone: "Quad infrared beam technology for enhanced perimeter protection and accuracy.",
        Mkeytwo: "Solar-powered system for eco-friendly and maintenance-free operation.",
        MkeyTHREE: "Durable, weatherproof construction for reliable performance in various conditions.",
        MkeyFOUR: "Wireless installation ensures easy setup and flexibility in sensor placement.",
        modalDescriptionp: "The Solar iBeem Perimeter Sensor - 4IR is designed for high-precision, long-range perimeter security, utilizing four infrared beams to provide enhanced detection accuracy. Perfect for securing large outdoor areas, this sensor is completely solar-powered, eliminating the need for wired installations or external power sources. Its rugged, weatherproof design ensures reliable performance in all weather conditions, while the wireless setup allows for flexible positioning. The 4IR model offers superior protection for high-security environments, making it an ideal choice for outdoor boundary surveillance."
    },

    {
        id: 54,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Window Sensor (Metal) Wired",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Metal) Wired.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Metal) Wired.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Metal) Wired.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Metal) Wired.png'),

        // Card
        Cardsingleword: "Reliable Detection",
        Cardthreeword: "Wired window sensor for high-sensitivity detection, built with durable metal housing for reliable indoor security.",

        // Modal
        Mkeyone: "Wired connection ensures consistent and reliable detection with minimal interference.",
        Mkeytwo: "Durable metal housing for enhanced protection and longevity.",
        MkeyTHREE: "High-sensitivity detection triggers alarms upon window opening or tampering.",
        MkeyFOUR: "Ideal for securing windows in homes, offices, and commercial buildings.",
        modalDescriptionp: "The Window Sensor (Metal) Wired offers reliable and consistent protection for windows in both residential and commercial settings. With its wired connection, this sensor provides uninterrupted detection, minimizing interference and ensuring dependable performance. The durable metal housing adds an extra layer of security, making it resistant to wear and tampering. Its high-sensitivity detection system instantly alerts you in case of any unauthorized window openings, ensuring maximum safety. This wired window sensor is perfect for safeguarding homes, offices, and other indoor environments."
    },

    {
        id: 55,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Window Sensor (Plastic) Wired",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Plastic) Wired.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Plastic) Wired.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Plastic) Wired.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Plastic) Wired.png'),

        // Card
        Cardsingleword: "Lightweight Detection",
        Cardthreeword: "Wired window sensor with plastic housing, offering lightweight and cost-effective indoor security for windows.",

        // Modal
        Mkeyone: "Wired sensor provides reliable and uninterrupted detection for windows.",
        Mkeytwo: "Lightweight plastic housing makes it easy to install and maintain.",
        MkeyTHREE: "Sensitive to window opening or tampering, triggering alarms instantly.",
        MkeyFOUR: "An affordable option for securing windows in homes and offices.",
        modalDescriptionp: "The Window Sensor (Plastic) Wired offers a cost-effective solution for indoor window security. Its lightweight plastic housing makes it easy to install, while the wired connection ensures reliable performance without interference. This sensor provides high-sensitivity detection, alerting you immediately if a window is opened or tampered with. Ideal for securing windows in homes, offices, or other indoor environments where a lightweight and affordable security solution is required."
    },

    {
        id: 56,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Window Sensor (Wooden) Wired",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.png'),

        // Card
        Cardsingleword: "Window Sensor",
        Cardthreeword: "Wooden Wired Sensor",

        // Modal
        Mkeyone: "Robust wooden design.",
        Mkeytwo: "Reliable wired connection.",
        MkeyTHREE: "Enhanced security for windows.",
        MkeyFOUR: "Seamless integration with home systems.",
        modalDescriptionp: "The Window Sensor (Wooden) Wired features a robust wooden design and reliable wired connection, providing enhanced security for windows. Its seamless integration with home security systems ensures comprehensive protection for your property. Ideal for users seeking a reliable and aesthetically pleasing sensor for their windows."
    },

    {
        id: 57,
        category: 5,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Window Sensor (Wooden) Wired",
        image: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.png'),
        modalimage1: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.png'),
        modalimage2: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.png'),
        modalimage3: require('../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SENSORS/Window Sensor (Wooden) Wired.png'),

        // Card
        Cardsingleword: "Durable Security",
        Cardthreeword: "Wired window sensor with wooden housing for reliable and long-lasting window security in indoor environments.",

        // Modal
        Mkeyone: "Wired sensor delivers consistent and stable detection for window security.",
        Mkeytwo: "Wooden housing provides durability and blends well with wood-framed windows.",
        MkeyTHREE: "High-sensitivity detection system triggers alerts on unauthorized window activity.",
        MkeyFOUR: "Ideal for homes or commercial spaces with wooden window frames, ensuring seamless integration.",
        modalDescriptionp: "The Window Sensor (Wooden) Wired is a durable and aesthetically pleasing solution for securing windows with wooden frames. The wired connection ensures stable and reliable detection, providing constant monitoring for unauthorized window openings or tampering. Its wooden housing is designed to blend seamlessly with wood-framed windows, offering a discreet and effective security measure for both residential and commercial properties."
    },

    // 6-SMART SWITCH--4PRODUCTS
    {
        id: 58,
        category: 6,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Gang Switch - Retrofit",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Gang Switch - Retrofit.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Gang Switch - Retrofit.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Gang Switch - Retrofit.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Gang Switch - Retrofit.png"),

        // Card
        Cardsingleword: "Upgrade Ready",
        Cardthreeword: "Retrofit gang switch for seamless smart control integration in existing electrical setups.",

        // Modal
        Mkeyone: "Easily retrofits into existing switch systems for smart control upgrades.",
        Mkeytwo: "Compatible with various home automation systems for remote and voice control.",
        MkeyTHREE: "Sleek design ensures it blends well with modern interiors.",
        MkeyFOUR: "Ideal for upgrading traditional switches to smart functionality without rewiring.",
        modalDescriptionp: "The Gang Switch - Retrofit is designed to transform your existing switches into smart switches without the need for complex rewiring. It is compatible with most home automation systems, allowing remote control, scheduling, and voice activation. Its sleek design ensures it complements modern interiors while offering the convenience of smart functionality. Perfect for upgrading your home’s lighting and electrical systems with ease."
    },

    {
        id: 59,
        category: 6,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Smart Plug",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Smar Plug E.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Smar Plug E.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Smar Plug E.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Smar Plug E.png"),

        // Card
        Cardsingleword: "Smart Power",
        Cardthreeword: "Smart plug for remote control of appliances, offering energy monitoring and scheduling.",

        // Modal
        Mkeyone: "Allows remote control of connected appliances via smartphone or voice control.",
        Mkeytwo: "Energy monitoring feature helps track power consumption.",
        MkeyTHREE: "Enables scheduling and automation of devices for energy savings.",
        MkeyFOUR: "Compact design for easy integration into any electrical outlet.",
        modalDescriptionp: "The Smart Plug transforms any electrical appliance into a smart device, allowing you to control it remotely through your smartphone or voice assistants. It also features energy monitoring, helping you track your power consumption in real time. With scheduling and automation, you can optimize energy usage by turning devices on or off based on your routine. Its compact design ensures it fits seamlessly into your home, offering convenience and energy efficiency."
    },

    {
        id: 60,
        category: 6,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Touch Wall Switch 2M",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Touch Wall Switch 2M.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Touch Wall Switch 2M.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Touch Wall Switch 2M.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Touch Wall Switch 2M.png"),

        // Card
        Cardsingleword: "Elegant Control",
        Cardthreeword: "Stylish touch wall switch offering smart control and sleek functionality for modern interiors.",

        // Modal
        Mkeyone: "Touch-sensitive interface for smooth and responsive control.",
        Mkeytwo: "Compatible with smart home systems for remote and voice control.",
        MkeyTHREE: "Modern and elegant design complements any room decor.",
        MkeyFOUR: "2-module configuration for flexible switching options.",
        modalDescriptionp: "The Touch Wall Switch 2M brings both elegance and smart functionality to your home. Featuring a touch-sensitive interface, this switch provides a modern solution for controlling your lights and other connected devices. It integrates seamlessly with smart home systems, enabling remote access and voice control for added convenience. With a stylish and minimalistic design, this switch is perfect for enhancing the aesthetics of any room while offering flexible switching options."
    },

    {
        id: 61,
        category: 6,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Wireless Bell",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Wireless Bell.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Wireless Bell.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Wireless Bell.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/SMART SWITCH/Wireless Bell.png"),

        // Card
        Cardsingleword: "Smart Alert",
        Cardthreeword: "Wireless bell system offering easy installation, smart notifications, and customizable chimes.",

        // Modal
        Mkeyone: "Wireless design for hassle-free installation without the need for wiring.",
        Mkeytwo: "Smart notifications sent to your smartphone for enhanced convenience.",
        MkeyTHREE: "Customizable chimes and volume control to suit your preferences.",
        MkeyFOUR: "Battery-operated, with long-lasting performance for minimal maintenance.",
        modalDescriptionp: "The Wireless Bell provides a modern and easy-to-install solution for home alerts. With no wiring required, this bell can be set up quickly and provides smart notifications directly to your smartphone. You can customize the chimes and volume to your preference, making it perfect for any home or office. Its battery-operated design ensures long-lasting performance, offering convenience without the need for constant maintenance."
    },

    // 7-ACCESS CONTROL--3PRODUCTS
    {
        id: 62,
        category: 7,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Access Control FACE+CARD+PIN",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Android) - FACE+CARD+PIN.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Android) - FACE+CARD+PIN.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Android) - FACE+CARD+PIN.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Android) - FACE+CARD+PIN.png"),

        // Card
        Cardsingleword: "Smart Access",
        Cardthreeword: "Android-based access control system featuring facial recognition, card, and PIN authentication.",

        // Modal
        Mkeyone: "Supports multi-factor authentication including face, card, and PIN for enhanced security.",
        Mkeytwo: "Android operating system for easy integration with custom software and apps.",
        MkeyTHREE: "Advanced facial recognition technology for secure, touchless entry.",
        MkeyFOUR: "Ideal for high-traffic areas requiring fast and accurate access control.",
        modalDescriptionp: "The Access Control FACE+CARD+PIN offers a robust security solution using multi-factor authentication. It supports facial recognition, card reading, and PIN entry, providing flexibility and security for users. Powered by Android, this system allows easy integration with third-party applications and custom software. Its advanced facial recognition technology ensures accurate, touchless access, making it perfect for high-traffic areas that require rapid and secure entry."
    },

    {
        id: 63,
        category: 7,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Access Control FACE+CARD+PIN",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Linux) - FACE+CARD+PIN.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Linux) - FACE+CARD+PIN.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Linux) - FACE+CARD+PIN.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control (Linux) - FACE+CARD+PIN.png"),

        // Card
        Cardsingleword: "Secure Entry",
        Cardthreeword: "Linux-based access control system with face recognition, card, and PIN for secure authentication.",

        // Modal
        Mkeyone: "Linux-based platform for stability and security in access control applications.",
        Mkeytwo: "Facial recognition, card, and PIN authentication for multi-layered security.",
        MkeyTHREE: "Reliable performance in environments requiring consistent access control.",
        MkeyFOUR: "Ideal for businesses and facilities looking for secure and stable access solutions.",
        modalDescriptionp: "The Access Control FACE+CARD+PIN offers a secure and stable access control solution, powered by the Linux operating system. It features facial recognition, card, and PIN authentication, providing multi-layered security for sensitive areas. The Linux platform ensures reliable performance, making it ideal for facilities that require high levels of security and consistent operation. This system is perfect for both small and large businesses looking for an effective and robust access control solution."
    },

    {
        id: 64,
        category: 7,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Access Control WIFI+CARD+PIN",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control WIFI-TUYA - BIO+CARD+PIN.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control WIFI-TUYA - BIO+CARD+PIN.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control WIFI-TUYA - BIO+CARD+PIN.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESS CONTROL/Access Control WIFI-TUYA - BIO+CARD+PIN.png"),

        // Card
        Cardsingleword: "Connected Security",
        Cardthreeword: "Smart WiFi-based access control with biometric, card, and PIN support powered by TUYA.",

        // Modal
        Mkeyone: "WiFi-enabled access control system with TUYA integration for remote management.",
        Mkeytwo: "Biometric authentication, card, and PIN for flexible and secure access.",
        MkeyTHREE: "Allows real-time monitoring and control via the TUYA app.",
        MkeyFOUR: "Perfect for smart homes, offices, and facilities requiring remote access management.",
        modalDescriptionp: "The Access Control WIFI+CARD+PIN is a smart access control solution that integrates with the TUYA platform, enabling remote management through a WiFi connection. It supports biometric authentication, card, and PIN entry, offering flexible and secure access options. With real-time monitoring and control via the TUYA app, this system is ideal for smart homes, offices, and commercial facilities that require advanced access control with remote capabilities."
    },

    //8-DIGITAL CLASS--1PRODUCTS

    {
        id: 65,
        category: 8,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "INTERACTIVE FLAT PANEL DISPLAY (IFPD)",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/DIGITAL CLASS/IFPD.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/DIGITAL CLASS/IFPD.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/DIGITAL CLASS/IFPD.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/DIGITAL CLASS/IFPD.png"),

        // Card
        Cardsingleword: "Interactive Display",
        Cardthreeword: "Advanced flat panel display with interactive features for enhanced presentations and collaboration.",

        // Modal
        Mkeyone: "High-definition flat panel with touchscreen capabilities for interactive presentations.",
        Mkeytwo: "Integrated with digital whiteboarding and annotation tools for enhanced collaboration.",
        MkeyTHREE: "Supports multiple connectivity options including HDMI, USB, and wireless connections.",
        MkeyFOUR: "Ideal for educational settings, corporate meetings, and collaborative work environments.",
        modalDescriptionp: "The INTERACTIVE FLAT PANEL DISPLAY (IFPD) offers a high-definition, touchscreen flat panel designed to elevate presentations and collaboration. It features integrated digital whiteboarding and annotation tools, making it perfect for interactive sessions. With support for various connectivity options including HDMI, USB, and wireless connections, the IFPD is ideal for educational institutions, corporate environments, and any setting that requires enhanced interaction and teamwork. Its advanced features facilitate seamless presentations and collaborative efforts, enhancing the overall user experience."
    },

    //9-AI-VMS--8PRODUCTS

    {
        id: 66,
        category: 9,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Mobile NVR",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR 1.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR 1.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR 1.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR 1.png"),

        // Card
        Cardsingleword: "Mobile Recording",
        Cardthreeword: "Compact Network Video Recorder for mobile applications with robust recording and management features.",

        // Modal
        Mkeyone: "Compact and rugged design tailored for mobile environments and vehicle installations.",
        Mkeytwo: "Supports high-definition video recording and playback for clear and detailed surveillance footage.",
        MkeyTHREE: "Advanced network capabilities for remote access and real-time monitoring.",
        MkeyFOUR: "Ideal for use in law enforcement, fleet management, and mobile surveillance applications.",
        modalDescriptionp: "The Mobile NVR is a compact and rugged network video recorder designed for mobile environments and vehicle installations. It supports high-definition video recording and playback, ensuring clear and detailed surveillance footage. With advanced network capabilities, this NVR allows for remote access and real-time monitoring, making it ideal for law enforcement, fleet management, and other mobile surveillance applications. Its robust design ensures reliable performance even in challenging conditions."
    },

    {
        id: 67,
        category: 9,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Mobile NVR",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Mobile NVR.png"),

        // Card
        Cardsingleword: "Mobile Recording",
        Cardthreeword: "Compact Network Video Recorder for mobile applications with robust recording and management features.",

        // Modal
        Mkeyone: "Compact and rugged design tailored for mobile environments and vehicle installations.",
        Mkeytwo: "Supports high-definition video recording and playback for clear and detailed surveillance footage.",
        MkeyTHREE: "Advanced network capabilities for remote access and real-time monitoring.",
        MkeyFOUR: "Ideal for use in law enforcement, fleet management, and mobile surveillance applications.",
        modalDescriptionp: "The Mobile NVR is a compact and rugged network video recorder designed for mobile environments and vehicle installations. It supports high-definition video recording and playback, ensuring clear and detailed surveillance footage. With advanced network capabilities, this NVR allows for remote access and real-time monitoring, making it ideal for law enforcement, fleet management, and other mobile surveillance applications. Its robust design ensures reliable performance even in challenging conditions."
    },

    {
        id: 68,
        category: 9,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "VMS Controller Water Proof",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Controller Water Proof.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Controller Water Proof.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Controller Water Proof.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Controller Water Proof.png"),

        // Card
        Cardsingleword: "Durable Control",
        Cardthreeword: "Waterproof VMS controller designed for reliable performance in various environments.",

        // Modal
        Mkeyone: "Robust waterproof design to withstand harsh environmental conditions.",
        Mkeytwo: "High-performance control for managing video surveillance systems.",
        MkeyTHREE: "Ergonomic interface for ease of use and efficient system management.",
        MkeyFOUR: "Ideal for outdoor installations and locations with challenging weather conditions.",
        modalDescriptionp: "The VMS Controller Water Proof is engineered to offer reliable performance in challenging environments. Its robust waterproof design ensures durability and functionality even in harsh weather conditions. This high-performance controller is essential for managing video surveillance systems, featuring an ergonomic interface that simplifies system management. Ideal for outdoor installations, the VMS Controller Water Proof is designed to meet the demands of various environmental conditions while maintaining efficient and effective control."
    },

    {
        id: 69,
        category: 9,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "VMS Monitor",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor B.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor B.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor B.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor B.png"),

        // Card
        Cardsingleword: "High-Resolution Display",
        Cardthreeword: "Advanced monitor for clear, detailed video surveillance and system management.",

        // Modal
        Mkeyone: "High-resolution display for clear and detailed video output.",
        Mkeytwo: "Supports multiple input sources for versatile connectivity.",
        MkeyTHREE: "Ergonomic design with adjustable stand for optimal viewing angles.",
        MkeyFOUR: "Ideal for use in control rooms, monitoring stations, and surveillance centers.",
        modalDescriptionp: "The VMS Monitor is designed to deliver high-resolution video output, providing clear and detailed display of surveillance footage. It supports multiple input sources, making it versatile for various system setups. With its ergonomic design and adjustable stand, this monitor allows for optimal viewing angles, making it suitable for control rooms, monitoring stations, and surveillance centers. The VMS Monitor enhances video management efficiency by delivering crisp and accurate visual data."
    },

    {
        id: 70,
        category: 9,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "VMS Monitor",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor C.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor C.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor C.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor C.png"),

        // Card
        Cardsingleword: "Premium Display",
        Cardthreeword: "High-performance monitor for superior video clarity and system integration.",

        // Modal
        Mkeyone: "High-performance display with exceptional color accuracy and clarity.",
        Mkeytwo: "Supports various video inputs for flexible system integration.",
        MkeyTHREE: "Advanced features including high refresh rates and low latency for smooth video playback.",
        MkeyFOUR: "Ideal for professional video management and critical surveillance applications.",
        modalDescriptionp: "The VMS Monitor (Model C) offers a high-performance display that excels in color accuracy and clarity, ensuring superior video output. It supports various video inputs, providing flexible integration with different systems. Equipped with advanced features such as high refresh rates and low latency, this monitor delivers smooth and reliable video playback. Ideal for professional video management and critical surveillance applications, the VMS Monitor (Model C) is designed to meet the demands of high-performance environments."
    },

    {
        id: 71,
        category: 9,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "VMS Monitor",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/VMS Monitor.png"),

        // Card
        Cardsingleword: "Versatile Display",
        Cardthreeword: "Comprehensive monitor for effective video management and surveillance.",

        // Modal
        Mkeyone: "High-resolution display for clear and detailed video output.",
        Mkeytwo: "Compatible with multiple video inputs for diverse system setups.",
        MkeyTHREE: "Robust design suited for continuous operation in surveillance environments.",
        MkeyFOUR: "Ideal for use in control rooms, security centers, and monitoring stations.",
        modalDescriptionp: "The VMS Monitor is a versatile and reliable display solution designed for effective video management and surveillance. Featuring a high-resolution screen, it ensures clear and detailed video output. The monitor is compatible with multiple video inputs, allowing for diverse system configurations. Its robust design is built to withstand continuous operation, making it suitable for control rooms, security centers, and monitoring stations. This monitor is an excellent choice for professionals seeking reliable performance and versatility in their surveillance systems."
    },

    {
        id: 72,
        category: 9,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Wireless VMS Camera Receiver",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Wireless VMS Camera Receiver.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Wireless VMS Camera Receiver.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Wireless VMS Camera Receiver.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Wireless VMS Camera Receiver.png"),

        // Card
        Cardsingleword: "Seamless Connectivity",
        Cardthreeword: "Efficient receiver for wireless VMS camera integration and monitoring.",

        // Modal
        Mkeyone: "Supports wireless communication for seamless integration with VMS cameras.",
        Mkeytwo: "Ensures stable and reliable video transmission with minimal interference.",
        MkeyTHREE: "User-friendly setup with intuitive configuration options.",
        MkeyFOUR: "Compatible with a wide range of VMS cameras for versatile application.",
        modalDescriptionp: "The Wireless VMS Camera Receiver is designed to facilitate seamless integration and monitoring of wireless VMS cameras. It supports wireless communication, ensuring stable and reliable video transmission with minimal interference. The receiver features a user-friendly setup and intuitive configuration options, making it easy to integrate into existing surveillance systems. Compatible with a wide range of VMS cameras, this receiver is ideal for various applications, providing efficient and effective wireless connectivity for your video management system."
    },

    {
        id: 73,
        category: 9,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "VMS",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/vms-7-6683fbd1695c5.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/vms-7-6683fbd1695c5.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/vms-7-6683fbd1695c5.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/vms-7-6683fbd1695c5.png"),

        // Card
        Cardsingleword: "Advanced Monitoring",
        Cardthreeword: "Comprehensive VMS for seamless video management.",

        // Modal
        Mkeyone: "Supports a wide range of video formats and resolutions.",
        Mkeytwo: "Integrated analytics for enhanced surveillance capabilities.",
        MkeyTHREE: "Scalable architecture to meet various monitoring needs.",
        MkeyFOUR: "User-friendly interface for efficient system management.",
        modalDescriptionp: "The VMS (Video Management System) provides a robust solution for managing and monitoring video feeds across multiple sources. It supports a wide range of video formats and resolutions, making it versatile for various applications. The integrated analytics enhance surveillance capabilities by offering advanced features such as motion detection and object recognition. With its scalable architecture, the VMS can be tailored to meet diverse monitoring needs, and the user-friendly interface ensures efficient system management and operation."
    },


    //10-WATER--3PRODUCTS
    {
        id: 74,
        category: 10,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Tank Manager",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Tank Manager.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Tank Manager.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Tank Manager.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Tank Manager.png"),

        // Card
        Cardsingleword: "Efficient Control",
        Cardthreeword: "Advanced management system for water tanks.",

        // Modal
        Mkeyone: "Real-time monitoring of tank levels and usage.",
        Mkeytwo: "Automated alerts for maintenance and low levels.",
        MkeyTHREE: "User-friendly interface for easy operation.",
        MkeyFOUR: "Compatible with various tank sizes and types.",
        modalDescriptionp: "The Tank Manager is a sophisticated system designed to streamline the management of water tanks. It offers real-time monitoring of tank levels and usage, ensuring that you are always aware of your water resources. Automated alerts are sent for maintenance needs and low levels, preventing disruptions and ensuring optimal performance. The user-friendly interface simplifies operation, and the system is compatible with a range of tank sizes and types, making it versatile for different applications."
    },

    {
        id: 75,
        category: 10,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Water Leak Detector",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector A.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector A.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector A.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector A.png"),

        // Card
        Cardsingleword: "Leak Detection",
        Cardthreeword: "Advanced sensor for detecting water leaks.",

        // Modal
        Mkeyone: "High-sensitivity sensors for accurate leak detection.",
        Mkeytwo: "Instant alerts via app or notifications for immediate action.",
        MkeyTHREE: "Easy installation and maintenance.",
        MkeyFOUR: "Compatible with various environments and water systems.",
        modalDescriptionp: "The Water Leak Detector is an advanced sensor designed to provide accurate detection of water leaks. Featuring high-sensitivity sensors, it ensures that even minor leaks are detected early. The device sends instant alerts via app or notifications, allowing for prompt action to prevent damage. With its easy installation and maintenance, and compatibility with various environments and water systems, this detector is a reliable solution for safeguarding your property against water damage."
    },

    {
        id: 76,
        category: 10,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Water Leak Detector",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector B.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector B.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector B.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/WATER/Water Leak Detector B.png"),

        // Card
        Cardsingleword: "Leak Detection",
        Cardthreeword: "Advanced sensor for detecting water leaks.",

        // Modal
        Mkeyone: "High-sensitivity sensors for accurate leak detection.",
        Mkeytwo: "Instant alerts via app or notifications for immediate action.",
        MkeyTHREE: "Easy installation and maintenance.",
        MkeyFOUR: "Compatible with various environments and water systems.",
        modalDescriptionp: "The Water Leak Detector is an advanced sensor designed to provide accurate detection of water leaks. Featuring high-sensitivity sensors, it ensures that even minor leaks are detected early. The device sends instant alerts via app or notifications, allowing for prompt action to prevent damage. With its easy installation and maintenance, and compatibility with various environments and water systems, this detector is a reliable solution for safeguarding your property against water damage."
    },

    //11-ELECTRIC FENCE--12PRODUCTS

    {
        id: 77,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence Energiser",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Energiser.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Energiser.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Energiser.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Energiser.png"),

        // Card
        Cardsingleword: "Fence Energiser",
        Cardthreeword: "Powerful electric fence energiser.",

        // Modal
        Mkeyone: "High voltage output for effective deterrence.",
        Mkeytwo: "Adjustable power settings to suit various applications.",
        MkeyTHREE: "Durable construction for outdoor use.",
        MkeyFOUR: "Compatible with various fence types and lengths.",
        modalDescriptionp: "The Electric Fence Energiser provides a powerful solution for securing perimeters with high voltage output to effectively deter intruders and animals. It features adjustable power settings to accommodate different applications and lengths, ensuring versatile use. Designed with durable construction, this energiser is built to withstand outdoor conditions and is compatible with various fence types, making it a reliable choice for comprehensive security."
    },

    {
        id: 78,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence Siren",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Siren.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Siren.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Siren.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/Electric Fence Siren.png"),

        // Card
        Cardsingleword: "Fence Siren",
        Cardthreeword: "Loud alarm for security.",

        // Modal
        Mkeyone: "High-decibel siren for effective deterrence.",
        Mkeytwo: "Weather-resistant for reliable outdoor use.",
        MkeyTHREE: "Integrates with electric fence systems.",
        MkeyFOUR: "Easy installation and maintenance.",
        modalDescriptionp: "The Electric Fence Siren is designed to enhance security by providing a loud and effective alarm when a breach is detected. With a high-decibel output, it serves as a powerful deterrent to potential intruders. Built to withstand outdoor conditions, the siren is weather-resistant and integrates seamlessly with electric fence systems. Its easy installation and low maintenance make it a practical addition to any security setup."
    },

    {
        id: 79,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-11-6683fb5cb455f.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-11-6683fb5cb455f.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-11-6683fb5cb455f.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-11-6683fb5cb455f.png"),

        // Card
        Cardsingleword: "Electric Fence",
        Cardthreeword: "Secure your perimeter.",

        // Modal
        Mkeyone: "Provides high-voltage deterrence against intruders.",
        Mkeytwo: "Customizable to fit various perimeter sizes.",
        MkeyTHREE: "Durable and weather-resistant construction.",
        MkeyFOUR: "Simple installation with clear instructions.",
        modalDescriptionp: "The Electric Fence offers robust security by delivering a high-voltage deterrent to prevent unauthorized access. It can be customized to suit different perimeter sizes, ensuring effective protection tailored to your needs. Designed for durability and resilience against weather conditions, this electric fence is easy to install with straightforward instructions, making it a practical choice for securing your property."
    },

    {
        id: 80,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-2-6683fb58881de.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-2-6683fb58881de.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-2-6683fb58881de.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-2-6683fb58881de.png"),

        // Card
        Cardsingleword: "Electric Fence",
        Cardthreeword: "Perimeter Security Solution",

        // Modal
        Mkeyone: "Enhanced protection with electric deterrence.",
        Mkeytwo: "Adjustable for various fence heights and lengths.",
        MkeyTHREE: "Built to withstand harsh environmental conditions.",
        MkeyFOUR: "Easy setup and maintenance with user-friendly components.",
        modalDescriptionp: "The Electric Fence provides a powerful security solution designed to safeguard your property with high-voltage deterrence. It can be easily adjusted to accommodate different fence heights and lengths, ensuring comprehensive coverage. Constructed to endure severe weather conditions, this electric fence offers reliable protection. Its user-friendly design simplifies both installation and maintenance, making it an effective choice for enhancing your perimeter security."
    },

    {
        id: 81,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-3-6683fb5906e98.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-3-6683fb5906e98.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-3-6683fb5906e98.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-3-6683fb5906e98.png"),

        // Card
        Cardsingleword: "Electric Fence",
        Cardthreeword: "Perimeter Security Solution",

        // Modal
        Mkeyone: "Enhanced protection with electric deterrence.",
        Mkeytwo: "Adjustable for various fence heights and lengths.",
        MkeyTHREE: "Built to withstand harsh environmental conditions.",
        MkeyFOUR: "Easy setup and maintenance with user-friendly components.",
        modalDescriptionp: "The Electric Fence offers robust security with its high-voltage deterrence system. Designed to be adaptable, it accommodates various fence heights and lengths for complete perimeter protection. The durable construction ensures reliability even in extreme weather, and its user-friendly design simplifies installation and maintenance. Ideal for enhancing the security of any property."
    },

    {
        id: 82,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-4-6683fb59b2519.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-4-6683fb59b2519.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-4-6683fb59b2519.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-4-6683fb59b2519.png"),

        // Card
        Cardsingleword: "Electric Fence",
        Cardthreeword: "Advanced Security Solution",

        // Modal
        Mkeyone: "High-voltage deterrence for enhanced security.",
        Mkeytwo: "Customizable for different fence configurations.",
        MkeyTHREE: "Durable and weather-resistant for reliable performance.",
        MkeyFOUR: "Simple to install and maintain with comprehensive support.",
        modalDescriptionp: "The Electric Fence provides superior security with its high-voltage deterrence system, customizable to fit various fence configurations. It is built to endure harsh weather conditions, ensuring reliable performance year-round. With an easy installation process and robust support, this solution is ideal for enhancing property security."
    },

    {
        id: 83,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-5-6683fb5a25198.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-5-6683fb5a25198.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-5-6683fb5a25198.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-5-6683fb5a25198.png"),

        // Card
        Cardsingleword: "Electric Fence",
        Cardthreeword: "Advanced Security Solution",

        // Modal
        Mkeyone: "High-voltage deterrence for enhanced security.",
        Mkeytwo: "Customizable for different fence configurations.",
        MkeyTHREE: "Durable and weather-resistant for reliable performance.",
        MkeyFOUR: "Simple to install and maintain with comprehensive support.",
        modalDescriptionp: "The Electric Fence offers enhanced security with high-voltage deterrence, adaptable to various fence setups. Built to withstand harsh weather conditions, it ensures dependable performance throughout the year. Its straightforward installation and maintenance, combined with robust support, make it a reliable security solution."
    },

    {
        id: 84,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-6-6683fb5b22eca.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-6-6683fb5b22eca.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-6-6683fb5b22eca.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-6-6683fb5b22eca.png"),

        // Card
        Cardsingleword: "Electric Fence",
        Cardthreeword: "Enhanced Security System",

        // Modal
        Mkeyone: "Advanced high-voltage deterrence technology.",
        Mkeytwo: "Versatile setup options for different environments.",
        MkeyTHREE: "Robust, weather-resistant construction for durability.",
        MkeyFOUR: "Effortless installation and maintenance with expert support.",
        modalDescriptionp: "The Electric Fence is designed to deliver high-voltage deterrence for superior security. It offers versatile setup options suitable for various environments and features a robust, weather-resistant build for long-term durability. With easy installation and comprehensive support, it stands out as a reliable choice for enhancing security."
    },

    {
        id: 85,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-7-6683fb5b01f2e.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-7-6683fb5b01f2e.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-7-6683fb5b01f2e.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-7-6683fb5b01f2e.png"),

        // Card
        Cardsingleword: "Electric Fence",
        Cardthreeword: "Advanced Security Solution",

        // Modal
        Mkeyone: "High-voltage deterrence with reliable performance.",
        Mkeytwo: "Customizable for various security needs.",
        MkeyTHREE: "Durable and resistant to environmental conditions.",
        MkeyFOUR: "Simple installation with expert support available.",
        modalDescriptionp: "The Electric Fence offers advanced high-voltage deterrence to ensure superior security. It is customizable to meet diverse security needs and built to withstand environmental conditions, ensuring long-term durability. The easy installation process and available expert support make it a practical choice for enhancing security."
    },

    {
        id: 86,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-8-6683fb5bcb82e.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-8-6683fb5bcb82e.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-8-6683fb5bcb82e.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-8-6683fb5bcb82e.png"),

        // Card
        Cardsingleword: "Electric Fence",
        Cardthreeword: "Advanced Security Solution",

        // Modal
        Mkeyone: "High-voltage deterrence with reliable performance.",
        Mkeytwo: "Customizable for various security needs.",
        MkeyTHREE: "Durable and resistant to environmental conditions.",
        MkeyFOUR: "Simple installation with expert support available.",
        modalDescriptionp: "The Electric Fence offers advanced high-voltage deterrence to ensure superior security. It is customizable to meet diverse security needs and built to withstand environmental conditions, ensuring long-term durability. The easy installation process and available expert support make it a practical choice for enhancing security."
    },

    {
        id: 87,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d--10.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d--10.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d--10.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d--10.png"),

        // Card
        Cardsingleword: "Electric Fence",
        Cardthreeword: "Advanced Security Solution",

        // Modal
        Mkeyone: "High-voltage deterrence with reliable performance.",
        Mkeytwo: "Customizable for various security needs.",
        MkeyTHREE: "Durable and resistant to environmental conditions.",
        MkeyFOUR: "Simple installation with expert support available.",
        modalDescriptionp: "The Electric Fence offers advanced high-voltage deterrence to ensure superior security. It is customizable to meet diverse security needs and built to withstand environmental conditions, ensuring long-term durability. The easy installation process and available expert support make it a practical choice for enhancing security."
    },

    {
        id: 88,
        category: 11,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Electric Fence",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ELECTRIC FENCE/electric-fence-9-6683fb5c0655d.png"),

        // Card
        Cardsingleword: "Electric Fence",
        Cardthreeword: "High Security Barrier",

        // Modal
        Mkeyone: "Robust high-voltage deterrent system.",
        Mkeytwo: "Flexible installation for various settings.",
        MkeyTHREE: "Weather-resistant and durable construction.",
        MkeyFOUR: "Easy to maintain with comprehensive support.",
        modalDescriptionp: "The Electric Fence provides a robust high-voltage deterrent system to secure your property effectively. Its flexible installation options make it suitable for various settings, and its weather-resistant construction ensures long-term durability. The product is easy to maintain, with comprehensive support available to assist with any needs."
    },

    //12-FIRE SAFETY--3PRODUCTS
    {
        id: 89,
        category: 12,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "E-Valve Manipulator",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve Manipulator.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve Manipulator.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve Manipulator.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve Manipulator.png"),

        // Card
        Cardsingleword: "E-Valve Manipulator",
        Cardthreeword: "Precision Control Tool",

        // Modal
        Mkeyone: "Advanced valve manipulation technology.",
        Mkeytwo: "Designed for critical safety applications.",
        MkeyTHREE: "User-friendly interface for ease of operation.",
        MkeyFOUR: "Robust construction for durability and reliability.",
        modalDescriptionp: "The E-Valve Manipulator is equipped with advanced technology for precise valve control, essential for critical safety applications. It features a user-friendly interface for straightforward operation and is built with robust materials to ensure durability and reliability."
    },

    {
        id: 90,
        category: 12,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "E-Valve",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/E-Valve.png"),

        // Card
        Cardsingleword: "E-Valve",
        Cardthreeword: "Essential Safety Component",

        // Modal
        Mkeyone: "High-performance valve for critical applications.",
        Mkeytwo: "Reliable and efficient operation.",
        MkeyTHREE: "Easy integration with existing systems.",
        MkeyFOUR: "Durable construction for long-lasting use.",
        modalDescriptionp: "The E-Valve offers high-performance valve control, essential for critical safety applications. It ensures reliable and efficient operation, integrates easily with existing systems, and is constructed for durability and long-lasting use."
    },

    {
        id: 91,
        category: 12,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Kitchen Automation",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/Kitchen Automation.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/Kitchen Automation.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/Kitchen Automation.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/FIRE SAFETY/Kitchen Automation.png"),

        // Card
        Cardsingleword: "Kitchen Automation",
        Cardthreeword: "Advanced Kitchen Solutions",

        // Modal
        Mkeyone: "Streamlines kitchen operations for efficiency.",
        Mkeytwo: "Enhances safety with automated controls.",
        MkeyTHREE: "Customizable settings for various kitchen tasks.",
        MkeyFOUR: "Integrates seamlessly with existing systems.",
        modalDescriptionp: "Kitchen Automation offers a streamlined approach to kitchen operations, enhancing safety with automated controls. It provides customizable settings for various tasks and integrates seamlessly with existing systems, making it an advanced solution for modern kitchens."
    },


    // 12-ACCESSORIES--9PRODUCTS
    {
        id: 92,
        category: 13,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Remote Control",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control B.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control B.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control B.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control B.png"),

        // Card
        Cardsingleword: "Remote Control",
        Cardthreeword: "Wireless Device Controller",

        // Modal
        Mkeyone: "User-friendly interface for easy operation.",
        Mkeytwo: "Compact design for portability.",
        MkeyTHREE: "Compatible with a variety of devices.",
        MkeyFOUR: "Reliable wireless connectivity.",
        modalDescriptionp: "The Remote Control offers a user-friendly interface, allowing for easy operation of connected devices. Its compact design ensures portability, while its compatibility with a variety of devices and reliable wireless connectivity make it a versatile accessory for any setup."
    },

    {
        id: 93,
        category: 13,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Remote Control",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control W.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control W.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control W.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Remote Control W.png"),

        // Card
        Cardsingleword: "Remote Control",
        Cardthreeword: "Wireless Device Controller",

        // Modal
        Mkeyone: "User-friendly interface for easy operation.",
        Mkeytwo: "Compact design for portability.",
        MkeyTHREE: "Compatible with a variety of devices.",
        MkeyFOUR: "Reliable wireless connectivity.",
        modalDescriptionp: "The Remote Control offers a user-friendly interface, allowing for easy operation of connected devices. Its compact design ensures portability, while its compatibility with a variety of devices and reliable wireless connectivity make it a versatile accessory for any setup."
    },

    {
        id: 94,
        category: 13,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "SOS - Emergency Button Switch",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Button Switch.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Button Switch.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Button Switch.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Button Switch.png"),

        // Card
        Cardsingleword: "SOS Button",
        Cardthreeword: "Emergency Alert Switch",

        // Modal
        Mkeyone: "Immediate emergency response activation.",
        Mkeytwo: "Durable construction for reliable performance.",
        MkeyTHREE: "Simple installation and operation.",
        MkeyFOUR: "Clear emergency signal indicator.",
        modalDescriptionp: "The SOS - Emergency Button Switch is designed to provide immediate activation for emergency responses. With its durable construction and simple installation, it ensures reliable performance and a clear emergency signal indicator, making it a crucial component for safety and security systems."
    },

    {
        id: 95,
        category: 13,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "SOS - Emergency Wall Switch",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Wall Switch.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Wall Switch.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Wall Switch.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/SOS - Emergency Wall Switch.png"),

        // Card
        Cardsingleword: "SOS Wall Switch",
        Cardthreeword: "Emergency Activation Switch",

        // Modal
        Mkeyone: "Quick emergency response at the wall.",
        Mkeytwo: "Robust and reliable switch mechanism.",
        MkeyTHREE: "Easy to install and operate.",
        MkeyFOUR: "Visible and accessible emergency button.",
        modalDescriptionp: "The SOS - Emergency Wall Switch offers a quick and reliable way to activate emergency responses directly from the wall. Designed for robustness and ease of use, this switch ensures immediate activation when needed, making it a vital part of emergency response systems."
    },

    {
        id: 96,
        category: 13,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Solar Wireless Siren",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Solar Wireless Siren.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Solar Wireless Siren.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Solar Wireless Siren.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Solar Wireless Siren.png"),

        // Card
        Cardsingleword: "Solar Siren",
        Cardthreeword: "Wireless Alarm System",

        // Modal
        Mkeyone: "Energy-efficient solar power.",
        Mkeytwo: "Wireless connectivity for easy installation.",
        MkeyTHREE: "High-decibel alarm for effective alert.",
        MkeyFOUR: "Durable and weather-resistant design.",
        modalDescriptionp: "The Solar Wireless Siren combines the efficiency of solar power with the convenience of wireless technology to deliver a high-decibel alarm system that is both effective and easy to install. Its durable, weather-resistant design ensures reliable performance in various conditions."
    },

    {
        id: 97,
        category: 13,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Wired Siren with Battery",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wired Siren with Battery B.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wired Siren with Battery B.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wired Siren with Battery B.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wired Siren with Battery B.png"),

        // Card
        Cardsingleword: "Wired Siren",
        Cardthreeword: "Siren with Battery",

        // Modal
        Mkeyone: "Reliable wired connection.",
        Mkeytwo: "Backup battery for uninterrupted operation.",
        MkeyTHREE: "Loud alarm for high visibility alerts.",
        MkeyFOUR: "Durable build for long-lasting use.",
        modalDescriptionp: "The Wired Siren with Battery offers a dependable wired connection combined with a backup battery to ensure continuous operation. Its loud alarm is designed for high visibility alerts, and the durable construction guarantees long-lasting performance."
    },

    {
        id: 98,
        category: 13,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Wireless Repeater",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Repeator.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Repeator.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Repeator.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Repeator.png"),

        // Card
        Cardsingleword: "Wireless Repeater",
        Cardthreeword: "Repeater for Coverage",

        // Modal
        Mkeyone: "Enhances wireless signal range.",
        Mkeytwo: "Reliable performance for extended coverage.",
        MkeyTHREE: "Easy setup and integration.",
        MkeyFOUR: "Compatible with various wireless devices.",
        modalDescriptionp: "The Wireless Repeater extends the range of your wireless network, ensuring reliable performance and coverage throughout your space. It is easy to set up and integrates seamlessly with various wireless devices, providing an enhanced and more stable signal."
    },

    {
        id: 99,
        category: 13,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Wireless Siren with Battery",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery S.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery S.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery S.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery S.png"),

        // Card
        Cardsingleword: "Wireless Siren",
        Cardthreeword: "Battery-Powered Alarm",

        // Modal
        Mkeyone: "Battery-powered for flexibility.",
        Mkeytwo: "Loud and effective alarm sound.",
        MkeyTHREE: "Easy installation and maintenance.",
        MkeyFOUR: "Reliable wireless communication.",
        modalDescriptionp: "The Wireless Siren with Battery offers a flexible and powerful alarm solution. Its battery-powered design allows for easy installation in various locations, while its loud alarm sound ensures effective alerting. The device is easy to maintain and integrates reliably with your existing wireless system."
    },

    {
        id: 100,
        category: 13,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Wireless Siren with Battery",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ACCESSORIES/Wireless Siren with Battery.png"),

        // Card
        Cardsingleword: "Wireless Siren",
        Cardthreeword: "Battery-Powered Alarm",

        // Modal
        Mkeyone: "Battery-powered for flexibility.",
        Mkeytwo: "Loud and effective alarm sound.",
        MkeyTHREE: "Easy installation and maintenance.",
        MkeyFOUR: "Reliable wireless communication.",
        modalDescriptionp: "The Wireless Siren with Battery offers a flexible and powerful alarm solution. Its battery-powered design allows for easy installation in various locations, while its loud alarm sound ensures effective alerting. The device is easy to maintain and integrates reliably with your existing wireless system."
    },

    {
        id: 101,
        category: 13,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Alarm Panel Wired Keypad",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wired Keypad.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wired Keypad.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wired Keypad.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wired Keypad.png"),

        // Card
        Cardsingleword: "Wired Keypad",
        Cardthreeword: "Alarm Panel Controller",

        // Modal
        Mkeyone: "User-friendly interface.",
        Mkeytwo: "Reliable wired connection.",
        MkeyTHREE: "Robust design for durability.",
        MkeyFOUR: "Easy installation and setup.",
        modalDescriptionp: "The Alarm Panel Wired Keypad features a user-friendly interface designed for easy operation. Its reliable wired connection ensures consistent performance, while the robust design guarantees durability in various environments. Installation and setup are straightforward, making it an ideal choice for managing your alarm system."
    },

    {
        id: 102,
        category: 13,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Alarm Panel Wireless Keypad",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wireless Keypad.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wireless Keypad.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wireless Keypad.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/ALARM&AUTOMATION/Alarm Pannel Wireless Keypad.png"),

        // Card
        Cardsingleword: "Wireless Keypad",
        Cardthreeword: "Alarm Panel Controller",

        // Modal
        Mkeyone: "Convenient wireless operation.",
        Mkeytwo: "Enhanced mobility and flexibility.",
        MkeyTHREE: "Secure and reliable connection.",
        MkeyFOUR: "Sleek design for modern setups.",
        modalDescriptionp: "The Alarm Panel Wireless Keypad offers convenient wireless operation, enhancing mobility and flexibility in managing your alarm system. Its secure and reliable connection ensures consistent performance, while the sleek design integrates seamlessly into modern setups. Ideal for users seeking a hassle-free, high-performance control solution."
    },


    // 14 WAREHOUSE 2 PRODUCTS 
    {
        id: 103,
        category: 14,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Anti Collision Alarm",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Anti Collision.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Anti Collision.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Anti Collision.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Anti Collision.png"),

        // Card
        Cardsingleword: "Anti Collision",
        Cardthreeword: "Collision Alarm System",

        // Modal
        Mkeyone: "Advanced obstacle detection system.",
        Mkeytwo: "Real-time alerts for accident prevention.",
        MkeyTHREE: "Reliable operation in all conditions.",
        MkeyFOUR: "Seamless integration with machinery.",
        modalDescriptionp: "The Anti Collision Alarm is a state-of-the-art safety solution designed to enhance operational safety in high-risk environments. Featuring advanced obstacle detection and real-time alerts, it ensures accidents are minimized, and operations remain smooth. Its robust construction and seamless integration make it a reliable choice for industries requiring precision and safety. Ideal for warehouses, industrial sites, and construction areas."
    },

    {
        id: 104,
        category: 14,
        subcategory: 1,

        ModelNumber: "NI-N16A64-201",
        title: "Fork Lift Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Forklift Camera.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Forklift Camera.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Forklift Camera.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Forklift Camera.png"),

        // Card
        Cardsingleword: "Forklift Camera",
        Cardthreeword: "Enhanced Safety System",

        // Modal
        Mkeyone: "Real-time video monitoring.",
        Mkeytwo: "Improved operator visibility.",
        MkeyTHREE: "Durable and weather-resistant design.",
        MkeyFOUR: "Easy installation and integration.",
        modalDescriptionp: "The Fork Lift Camera enhances operational safety by providing real-time video monitoring and improved visibility for forklift operators. Its durable and weather-resistant design ensures reliability in demanding environments, while easy installation and integration make it a seamless addition to your safety systems. Ideal for warehouses, logistics hubs, and industrial facilities where precision and safety are critical."
    },

    {
        id: 105, // Updated ID
        category: 14,
        subcategory: 2, // Assuming this is a new subcategory

        ModelNumber: "SH-X12A45-301",
        title: "Smart Helmet",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/smart helmet.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/smart helmet.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/smart helmet.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/smart helmet.png"),

        // Card
        Cardsingleword: "Smart Helmet",
        Cardthreeword: "Advanced Safety Gear",

        // Modal
        Mkeyone: "Integrated communication system.",
        Mkeytwo: "Real-time environmental monitoring.",
        MkeyTHREE: "Lightweight and ergonomic design.",
        MkeyFOUR: "Enhanced safety compliance tracking.",
        modalDescriptionp: "The Smart Helmet redefines workplace safety with cutting-edge technology. Featuring an integrated communication system and real-time environmental monitoring, it ensures proactive safety measures. Its lightweight, ergonomic design guarantees user comfort, while enhanced compliance tracking keeps safety protocols in check. Ideal for construction sites, factories, and hazardous environments requiring advanced safety gear."
    },

    {
        id: 106, // Updated ID
        category: 14,
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "FD-CAM-400",
        title: "Fire Detection Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Fire Detection Camera.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Fire Detection Camera.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Fire Detection Camera.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/Fire Detection Camera.png"),

        // Card
        Cardsingleword: "Fire Camera",
        Cardthreeword: "Early Fire Detection",

        // Modal
        Mkeyone: "Real-time fire and smoke detection.",
        Mkeytwo: "High accuracy with thermal imaging.",
        MkeyTHREE: "Alerts and notifications for quick response.",
        MkeyFOUR: "Robust design for industrial environments.",
        modalDescriptionp: "The Fire Detection Camera is designed for early fire detection and prevention, utilizing advanced thermal imaging technology to identify fire and smoke in real-time. With high accuracy and robust industrial-grade design, it ensures quick alerts and notifications for immediate response. Ideal for factories, warehouses, and sensitive areas requiring 24/7 fire monitoring."
    },



    // 15 IOE COMMUNICATION 5 PRODUCTS 

    {
        id: 107, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "WM-SIP-10W",
        title: "Wall Mount 10W SIP PA Speaker",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 10W SIP PA SPEAKER.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 10W SIP PA SPEAKER.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 10W SIP PA SPEAKER.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 10W SIP PA SPEAKER.png"),

        // Card
        Cardsingleword: "SIP Speaker",
        Cardthreeword: "Clear Audio Communication",

        // Modal
        Mkeyone: "High-quality audio output.",
        Mkeytwo: "SIP protocol for seamless communication.",
        MkeyTHREE: "10W power for wide coverage.",
        MkeyFOUR: "Durable wall-mounted design.",
        modalDescriptionp: "The Wall Mount 10W SIP PA Speaker delivers high-quality audio for effective public address systems. Supporting the SIP protocol, it integrates seamlessly with communication networks for clear announcements. The 10W power output ensures wide-area coverage, making it ideal for offices, schools, and industrial environments. Its durable wall-mounted design ensures easy installation and long-term reliability."
    },

    {
        id: 108, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "WM-SIP-15W",
        title: "Wall Mount 15W SIP PA Speaker",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 15W SIP PA SPEAKER.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 15W SIP PA SPEAKER.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 15W SIP PA SPEAKER.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WALL MOUNT 15W SIP PA SPEAKER.png"),

        // Card
        Cardsingleword: "SIP Speaker",
        Cardthreeword: "Clear Audio Communication",

        // Modal
        Mkeyone: "High-quality 15W audio output.",
        Mkeytwo: "SIP protocol for seamless communication.",
        MkeyTHREE: "Wide coverage with 15W power.",
        MkeyFOUR: "Durable wall-mounted design.",
        modalDescriptionp: "The Wall Mount 15W SIP PA Speaker delivers powerful, crystal-clear audio for public address systems. Featuring SIP protocol support, it ensures seamless integration with communication networks. With its 15W power output, it covers large areas efficiently, making it ideal for schools, factories, and public spaces. The robust, wall-mounted design ensures reliability and ease of installation in any environment."
    },

    {
        id: 109, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "AI-SPEAKER-200",
        title: "AI Speaker",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SPEAKER.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SPEAKER.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SPEAKER.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SPEAKER.png"),

        // Card
        Cardsingleword: "AI Speaker",
        Cardthreeword: "Intelligent Audio Assistant",

        // Modal
        Mkeyone: "AI-powered voice recognition.",
        Mkeytwo: "Seamless integration with smart systems.",
        MkeyTHREE: "High-quality audio output.",
        MkeyFOUR: "Compact and modern design.",
        modalDescriptionp: "The AI Speaker combines advanced AI technology with superior audio performance to deliver an intelligent audio experience. Equipped with AI-powered voice recognition, it integrates seamlessly with smart systems for enhanced connectivity. Its compact and modern design ensures it fits effortlessly into any environment, while high-quality audio output makes it suitable for personal and professional use."
    },

    {
        id: 110, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "IP-PHONE-500",
        title: "IP Phone",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/IP PHONE.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/IP PHONE.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/IP PHONE.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/IP PHONE.png"),

        // Card
        Cardsingleword: "IP Phone",
        Cardthreeword: "Advanced Communication Device",

        // Modal
        Mkeyone: "High-definition audio for clear communication.",
        Mkeytwo: "Supports VoIP protocols for efficient calling.",
        MkeyTHREE: "Multiple lines and call management features.",
        MkeyFOUR: "Sleek design with intuitive user interface.",
        modalDescriptionp: "The IP Phone is a cutting-edge communication device designed for modern businesses. It features high-definition audio for crystal-clear calls and supports VoIP protocols for seamless and efficient communication. With multiple lines, advanced call management features, and a sleek, intuitive design, it is perfect for offices and enterprises looking to enhance their communication systems."
    },


    {
        id: 111, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "ANALOG-PHONE-300",
        title: "Analog Phone",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/ANALOG PHONE.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/ANALOG PHONE.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/ANALOG PHONE.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/ANALOG PHONE.png"),

        // Card
        Cardsingleword: "Analog Phone",
        Cardthreeword: "Reliable Voice Communication",

        // Modal
        Mkeyone: "Durable and user-friendly design.",
        Mkeytwo: "Crystal-clear analog voice quality.",
        MkeyTHREE: "Compatible with traditional phone lines.",
        MkeyFOUR: "Perfect for home and office use.",
        modalDescriptionp: "The Analog Phone is a dependable communication solution for both personal and professional environments. It offers crystal-clear analog voice quality and is compatible with traditional phone lines. Featuring a durable and user-friendly design, this phone is ideal for homes, small businesses, and offices looking for reliable voice communication without the complexity of digital systems."
    },


    {
        id: 112, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "IND-PHONE-400",
        title: "Industrial Phone",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INDUSTRIAL PHONE.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INDUSTRIAL PHONE.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INDUSTRIAL PHONE.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INDUSTRIAL PHONE.png"),

        // Card
        Cardsingleword: "Industrial Phone",
        Cardthreeword: "Robust Communication Solution",

        // Modal
        Mkeyone: "Rugged design for harsh environments.",
        Mkeytwo: "Reliable performance in industrial settings.",
        MkeyTHREE: "Weatherproof and shock-resistant.",
        MkeyFOUR: "Supports advanced communication protocols.",
        modalDescriptionp: "The Industrial Phone is engineered for extreme environments, offering unmatched durability and reliability. With its rugged, weatherproof, and shock-resistant design, it is ideal for factories, construction sites, and other demanding industrial settings. Supporting advanced communication protocols, this phone ensures clear and uninterrupted communication in critical operations. Its robust construction and advanced features make it a dependable choice for industrial applications."
    },

    {
        id: 113, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "VAC-500",
        title: "Visual Access Control",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/VISUAL ACCESS CONTROL.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/VISUAL ACCESS CONTROL.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/VISUAL ACCESS CONTROL.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/VISUAL ACCESS CONTROL.png"),

        // Card
        Cardsingleword: "Access Control",
        Cardthreeword: "Visual Security Solution",

        // Modal
        Mkeyone: "Real-time visual monitoring.",
        Mkeytwo: "Advanced facial recognition technology.",
        MkeyTHREE: "High-definition video output.",
        MkeyFOUR: "Seamless integration with security systems.",
        modalDescriptionp: "The Visual Access Control system provides a cutting-edge solution for managing access to secure areas. Featuring real-time visual monitoring and advanced facial recognition technology, it ensures secure and efficient access control. With high-definition video output and seamless integration into existing security systems, this product is ideal for sensitive areas requiring high security and monitoring capabilities. Its robust design ensures reliable performance in various environments."
    },


    {
        id: 114, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "WIFI-PHONE-400",
        title: "Wifi Land IP Phone",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI IP LAND PHONE.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI IP LAND PHONE.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI IP LAND PHONE.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI IP LAND PHONE.png"),

        // Card
        Cardsingleword: "IP Phone",
        Cardthreeword: "Seamless Wireless Communication",

        // Modal
        Mkeyone: "High-quality audio and video support.",
        Mkeytwo: "Supports WiFi and LAN connectivity.",
        MkeyTHREE: "Advanced communication features.",
        MkeyFOUR: "Sleek and durable design.",
        modalDescriptionp: "The Wifi Land IP Phone combines seamless wireless communication with advanced features for both audio and video. With support for both WiFi and LAN connectivity, it offers flexible installation options in both office and home environments. Its sleek, durable design ensures long-lasting performance, while high-quality audio and video make it ideal for both business and personal communication. A perfect solution for anyone needing reliable, modern communication technology."
    },

    {
        id: 115, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "AI-SIP-CAMERA",
        title: "AI SIP Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SIP CAMERA.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SIP CAMERA.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SIP CAMERA.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/AI SIP CAMERA.png"),

        // Card
        Cardsingleword: "SIP Camera",
        Cardthreeword: "Smart Video Surveillance",

        // Modal
        Mkeyone: "High-definition video capture.",
        Mkeytwo: "AI-powered motion detection.",
        MkeyTHREE: "Seamless integration with SIP networks.",
        MkeyFOUR: "Weatherproof and durable design.",
        modalDescriptionp: "The AI SIP Camera offers advanced video surveillance with high-definition capture and AI-powered motion detection for enhanced security. Seamlessly integrating with SIP networks, it provides reliable and scalable communication for video monitoring. Designed to withstand harsh conditions, its weatherproof and durable construction ensures long-lasting performance in outdoor environments. Ideal for security applications, it combines cutting-edge technology with robust functionality."
    },


    {
        id: 116, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "AI-SIP-CAMERA",
        title: "Boom Barrier",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/BOOM BARIERTALKIE.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/BOOM BARIERTALKIE.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/BOOM BARIERTALKIE.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/BOOM BARIERTALKIE.png"),

        // Card
        Cardsingleword: "Boom Barrier",
        Cardthreeword: "Access Control Solution",

        // Modal
        Mkeyone: "Automatic barrier arm control.",
        Mkeytwo: "Seamless integration with security systems.",
        MkeyTHREE: "Durable and weather-resistant construction.",
        MkeyFOUR: "Remote access and management features.",
        modalDescriptionp: "The Boom Barrier is an advanced access control solution designed for secure entry and exit management. Featuring automatic barrier arm control, it integrates seamlessly with security systems for efficient vehicle management. Its durable, weather-resistant construction ensures long-term reliability in outdoor environments. Ideal for parking lots, toll gates, and secure facilities, the Boom Barrier offers remote access and management features for enhanced convenience and security."
    },

    {
        id: 117, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "AI-SIP-CAMERA",
        title: "Intercom with Video and Sound",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM WITH VIDEO AND SOUND.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM WITH VIDEO AND SOUND.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM WITH VIDEO AND SOUND.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM WITH VIDEO AND SOUND.png"),

        // Card
        Cardsingleword: "Intercom",
        Cardthreeword: "Video & Audio Communication",

        // Modal
        Mkeyone: "Two-way video and audio communication.",
        Mkeytwo: "High-definition video support.",
        MkeyTHREE: "Remote unlocking features.",
        MkeyFOUR: "Seamless integration with security systems.",
        modalDescriptionp: "The Intercom with Video and Sound offers a comprehensive communication solution, combining high-quality video and audio for clear, two-way communication. This system supports high-definition video for enhanced clarity, while its remote unlocking features provide added convenience. Seamlessly integrating with security systems, it is ideal for residential and commercial buildings, offering both security and ease of communication."
    },

    {
        id: 118, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "AI-SIP-CAMERA",
        title: "Intercom SOS",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM SOS.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM SOS.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM SOS.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/INTERCOM SOS.png"),

        // Card
        Cardsingleword: "Intercom",
        Cardthreeword: "SOS Communication Solution",

        // Modal
        Mkeyone: "Two-way video and audio communication.",
        Mkeytwo: "Emergency SOS features for quick response.",
        MkeyTHREE: "High-definition video support.",
        MkeyFOUR: "Seamless integration with security systems.",
        modalDescriptionp: "The Intercom SOS system provides a robust communication solution with enhanced features for emergency situations. Combining high-definition video and audio, it offers two-way communication, allowing for clear conversations in critical moments. With built-in SOS features, it enables users to send emergency alerts, ensuring a quick response. Seamlessly integrating with security systems, it is a reliable solution for both residential and commercial applications."
    },

    {
        id: 119, // Updated ID
        category: 15, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "AI-SIP-CAMERA",
        title: "WIFI Phone",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI PHONES.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI PHONES.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI PHONES.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/IOE COMMUNICATION/WIFI PHONES.png"),

        // Card
        Cardsingleword: "WIFI Phone",
        Cardthreeword: "Seamless Wireless Communication",

        // Modal
        Mkeyone: "High-quality audio and video support.",
        Mkeytwo: "Supports WiFi and LAN connectivity.",
        MkeyTHREE: "Advanced communication features.",
        MkeyFOUR: "Sleek and durable design.",
        modalDescriptionp: "The WIFI Phone provides seamless wireless communication with advanced features for both audio and video. With support for both WiFi and LAN connectivity, it offers flexible installation options in both office and home environments. Its sleek, durable design ensures long-lasting performance, while high-quality audio and video make it ideal for both business and personal communication. A perfect solution for anyone needing reliable, modern communication technology."
    },


    // 9 AI VMS ADDITIONAL PRODUCTS

    {
        id: 120, // Updated ID
        category: 9, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "AI-SIP-CAMERA",
        title: "MDVR",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/MDVR.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/MDVR.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/MDVR.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/MDVR.png"),

        // Card
        Cardsingleword: "MDVR",
        Cardthreeword: "Mobile Digital Video Recorder",

        // Modal
        Mkeyone: "High-definition video recording.",
        Mkeytwo: "Supports multiple camera inputs.",
        MkeyTHREE: "Built-in WiFi and GPS support.",
        MkeyFOUR: "Durable and weather-resistant design.",
        modalDescriptionp: "The MDVR (Mobile Digital Video Recorder) is a versatile solution for vehicle-based video surveillance. It supports multiple camera inputs, enabling comprehensive monitoring. With high-definition video recording, built-in WiFi, and GPS functionality, the MDVR provides reliable data capture and real-time tracking. Its rugged, weather-resistant design ensures long-lasting performance in outdoor and mobile environments, making it ideal for transportation, fleet management, and security applications."
    },

    {
        id: 121, // Updated ID
        category: 9, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "AI-SIP-CAMERA",
        title: "360 Degree Vision Systems",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/360° Vision Systems.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/360° Vision Systems.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/360° Vision Systems.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/360° Vision Systems.png"),

        // Card
        Cardsingleword: "MDVR",
        Cardthreeword: "Mobile Digital Video Recorder",

        // Modal
        Mkeyone: "High-definition video recording.",
        Mkeytwo: "Supports multiple camera inputs.",
        MkeyTHREE: "Built-in WiFi and GPS support.",
        MkeyFOUR: "Durable and weather-resistant design.",
        modalDescriptionp: "The MDVR (Mobile Digital Video Recorder) is a versatile solution for vehicle-based video surveillance. It supports multiple camera inputs, enabling comprehensive monitoring. With high-definition video recording, built-in WiFi, and GPS functionality, the MDVR provides reliable data capture and real-time tracking. Its rugged, weather-resistant design ensures long-lasting performance in outdoor and mobile environments, making it ideal for transportation, fleet management, and security applications."
    },

    {
        id: 122, // Updated ID
        category: 9, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "AI-SIP-CAMERA",
        title: "Electric Mirror",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/ELECTRIC MIRROR.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/ELECTRIC MIRROR.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/ELECTRIC MIRROR.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/ELECTRIC MIRROR.png"),

        // Card
        Cardsingleword: "Electric Mirror",
        Cardthreeword: "Smart Reflective Surface",

        // Modal
        Mkeyone: "Adjustable heating and defogging.",
        Mkeytwo: "Touchscreen interface for controls.",
        MkeyTHREE: "Anti-glare and anti-scratch coating.",
        MkeyFOUR: "Energy-efficient and eco-friendly design.",
        modalDescriptionp: "The Electric Mirror is a smart, modern solution for residential and commercial spaces. With adjustable heating and defogging capabilities, it ensures a clear reflection at all times. The touchscreen interface allows for easy control, while the anti-glare and anti-scratch coating adds durability and clarity. Energy-efficient and eco-friendly, this mirror is designed for longevity and convenience, providing both functionality and style to any environment."
    },

    {
        id: 122, // Updated ID
        category: 9, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "AI-SIP-CAMERA",
        title: "Dashboard Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/DasHBOARD CAMERA FRONT.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/DasHBOARD CAMERA FRONT.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/DasHBOARD CAMERA FRONT.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/DasHBOARD CAMERA FRONT.png"),

        // Card
        Cardsingleword: "Dashboard Camera",
        Cardthreeword: "Vehicle Video Surveillance",

        // Modal
        Mkeyone: "Full HD video recording.",
        Mkeytwo: "Wide-angle lens for enhanced coverage.",
        MkeyTHREE: "Loop recording and G-sensor functionality.",
        MkeyFOUR: "Night vision and motion detection.",
        modalDescriptionp: "The Dashboard Camera offers full HD video recording to capture every detail on the road. With a wide-angle lens, it provides enhanced coverage, ensuring no blind spots. Featuring loop recording and G-sensor functionality, the camera automatically records and saves footage in case of an impact. Night vision and motion detection capabilities further ensure that the camera operates efficiently in all conditions, making it an essential tool for vehicle video surveillance."
    },

    {
        id: 123, // Updated ID
        category: 9, // Corrected category
        subcategory: 3, // Assuming this is a new subcategory

        ModelNumber: "AI-SIP-CAMERA",
        title: "Wireless Fork Lift Camera",
        image: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/wireless fork lift camera.png"),
        modalimage1: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/wireless fork lift camera.png"),
        modalimage2: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/wireless fork lift camera.png"),
        modalimage3: require("../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/AI-VMS/wireless fork lift camera.png"),

        // Card
        Cardsingleword: "Wireless Camera",
        Cardthreeword: "Fork Lift Video Surveillance",

        // Modal
        Mkeyone: "Wireless video transmission for ease of installation.",
        Mkeytwo: "High-definition video for clear visibility.",
        MkeyTHREE: "Rugged design for harsh warehouse environments.",
        MkeyFOUR: "Wide viewing angle to cover all critical areas.",
        modalDescriptionp: "The Wireless Fork Lift Camera provides high-definition video surveillance for forklifts, offering clear visibility of all critical areas during operation. Its wireless transmission makes installation quick and easy, without the need for complex wiring. Built with a rugged design, it is ideal for harsh warehouse and industrial environments. With a wide viewing angle, the camera ensures that every angle is covered, improving safety and operational efficiency."
    }
]
