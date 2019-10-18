({
    media: "video",
    author: "Mike Meyers",
    publicationYear: "2017",
    chapters: [
        {
            number: 1
        },
        {
            number: 2, 
            name: "meet the frame",
            desc: "",
            notes: [
                "",
            ],
            sections: [
                {
                    name: "meet the frame",
                    desc: "",
                    sectionTips: [
                        "maximun 1,500 bytes",
                        "discrete beginning and end",
                        "NICs send & receive network frames"
                    ],
                    notes: [
                        ,
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                
                            ]
                        }
                    ]
                },//end meet the frame
                {
                    name: "The MAC address",
                    desc: "hardware address",
                    sectionTips: [
                        "MAC address is a 48-bit identifier for a NIC",
                        "Frames have Destination and source MAC addresses",
                        "NICs use MAC addresses to decide whether or not to process a frame",
                    ],
                    notes: [
                        "broadcasting messages to all computers",
                        "Media Access Control",
                        "48 bits",
                        "first 6; oem",
                        "last 6; device specific"
                    ],
                    aspects: [
                        {
                            name: "IpConfig",
                            desc: "cmd command for network info",
                            notes: [
                                "/all"
                            ],
                            aspects: [
                                {

                                }
                            ]
                        },
                        {
                            name: "packets and MACs",
                            notes: [
                                "'from' MAC",
                                "'to' MAC",
                                "cyclic redundancy Check"
                            ]
                        },
                        {
                            name: "cyclic redundancy Check",
                            desc: "verify that the data is good"
                        }
                    ]
                },//end "The mac address"
                {
                    name: "Broadcast vs Unicast",
                    desc: "",
                    sectionTips: [
                        ""
                    ],
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "Broadcast",
                            desc: "ff-ff-ff-ff-ff-ff; every NIC will grab it & evaluate it.",
                            notes: [
                                "will have a MAC of 'ff-ff-ff--ff-ff-ff'"
                            ]
                        }
                        {
                            name: "unicast",
                            desc: "sent to a specific MAC on the network",
                            notes: [

                            ]
                        }
                    ]
                },//end Broadcast vs Unicast
                {
                    name: "Hubs vs Switches",
                    desc: "",
                    sectionTips: [
                        "hub is a repeater",
                        "switch keeps track of what MACs are on what port",
                        "switches promote using the entire bandwidth of the network"
                    ],
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "Hubs",
                            desc: "repeater",
                            notes: [

                            ]
                        },
                        {
                            name: "Switch",
                            desc: "associates MAC address with Port number; frame is only sent to the singular intended destination",
                            notes: [

                            ]
                        },
                    ]
                },//end Hubs vs Switches
                {
                    name: "Introduction to IP Addressing",
                    desc: "a type of logical addressing",
                    sectionTips: [
                        "Ip Address: 4 8bit octets",
                        "router: connects multiple LANs",
                        "IP packet always exists inside a frame"
                    ],
                    notes: [
                        "PC determines whether the recieving party is on the current network or not.",

                    ],
                    aspects: [
                        {
                            name: "limitations of Physical Addressing",
                            desc: "",
                            notes: [
                                "identify the local network the devices are on."
                            ]
                        },
                        {
                            name: "IP Packet",
                            desc: "sits within frames",
                            notes: [
                                "there's an IP packet within EACH frame"
                            ]
                        },
                        {
                            name: "ipv4",
                            desc: "",
                            notes: [

                            ]
                        },
                        {
                            name: "ipv6",
                            desc: "",
                            notes: [

                            ]
                        },
                        {
                            name: "router",
                            desc: "2 connections or more",
                            notes: [
                                "outer network port/access, and inner port/access",
                                "many routers have a built in switch",
                                "router adds sending & target IP addresses "
                            ],
                            aspects: [
                                {
                                    name: "Network Address Translation",
                                    abbreviation: "NAT",

                                },
                                {
                                    name: "routing table",
                                    desc: "choose to send inside or outside the network"

                                }
                            ]
                        }
                    ]
                },//end Introduction to IP Addressing
                {
                    name: "Packets and Ports",
                    desc: "",
                    sectionTips: [
                        "Port numbers help direct packet traffic between source & destination",
                        "packets have sequence numbers so the network software can reassemble",
                        "TCP is connection oriented, UDP is not (connectionless)"
                    ],
                    notes: [
                        "how do I make sure it gets to the right application in full",
                    ],
                    aspects: [
                        {
                            name: "port numbers",
                            desc: "identifier of software port",
                            notes: [
                                "'to' port", 
                                "'from' port",
                                "'from' and 'to' ports swap when ready to respond",
                                "1024 port numbers are \"well known ports\" ",
                            ],
                            aspects: [
                                {
                                    number: "80",
                                    desc: "Web browser/ web page"
                                },
                                {
                                    number: "20, 21",
                                    desc: "File transfer Protocol",
                                    abbreviation: "FTP"
                                }
                            ]
                        },
                        {
                            name: "Transmission Controll Protocol",
                            abbreviation: "TCP",
                            desc: "Connection Oriented Conversation to ensure completion",
                            notes: [

                            ],
                            aspects: [
                                {
                                    name: "sequencing number",
                                    desc: "keeps payload in order"
                                },
                                {
                                    name: "acknowledgement",
                                    desc: "affirmation of completion"
                                }
                            ]
                        },
                        {
                            name: "User Datagram Protocol",
                            abbreviation: "UDP",
                            desc: "does not ensure all parts of message were received; sequencing number, no acknowledgement",
                            notes: [
                                "not connection oriented"
                            ],
                            aspects: [
                                {
                                    name: "sequencing number",
                                    desc: "keeps order straight"
                                }
                            ]
                        },
                        
                    ]
                },//end Packets and Ports
                {
                    name: "What is a model ",
                    desc: "",
                    sectionTips: [
                        "We use models to represent how networks function",
                        "There are two very popular network models: OSI '7-Layer', and 'TCP/IP'"
                    ],
                    notes: [
                        "representation",
                        "perhaps idealized; no oil stains",
                        "simplified",

                    ],
                    aspects: [
                        {
                            name: "OSI 7 Layer Model",
                            desc: "",
                            notes: [

                            ]
                        },
                        {
                            name: "TCP/IP model",
                            desc: "",
                            notes: [

                            ]
                        },
                        
                    ]
                },//end what is a model
                {
                    name: "OSI vs TCP/IP Model",
                    desc: "",
                    sectionTips: [
                        "know the OSI 7 layers ",
                        "know 4 TCP/IP layers"
                    ],
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "",
                            abbreviation: "OSI",
                            desc: "",
                            notes: [

                            ],
                            aspects: [
                                {
                                    name: "Physical",
                                    number: 1,
                                    desc: "cables; physical data implementation",
                                    notes: [
                                        "",
                                        ""
                                    ]
                                },
                                {
                                    name: "data link",
                                    number: 2,
                                    desc: "Deals with 'link' or MAC addresses",
                                    notes: [
                                        "NICs",
                                        "Switches"
                                    ]
                                },
                                {
                                    name: "Network",
                                    number: 3,
                                    desc: "logical addresses; IP addresses and routers",
                                    notes: [
                                        "Ips",
                                        "routers"
                                    ]
                                },
                                {
                                    name: "Transport",
                                    number: 4,
                                    desc: "assembly and dis-assembly",
                                    notes: [
                                        "",
                                        ""
                                    ]
                                },
                                {
                                    name: "Session",
                                    number: 5,
                                    desc: "managing the connection between two nodes on a network",
                                    notes: [
                                        "web server & client",
                                        "email message",
                                    ]
                                },
                                {
                                    name: "Presentation",
                                    number: 6,
                                    desc: "format for reading/user",
                                    notes: [
                                        "convert data into readable data",
                                        ""
                                    ]
                                },
                                {
                                    name: "Application",
                                    number: 7,
                                    desc: "network logic in an application",
                                    notes: [
                                        "ms word, looking in the file system or network",
                                        "programming that allows the application to be network aware"
                                    ]
                                },
                                
                            ]
                        },
                        {
                            name: "Transmission Control Protocol",
                            abbreviation: "TCP",
                            desc: "",
                            notes: [
                                ""
                            ],
                            aspects: [
                                {
                                    name: "Network Interface",
                                    number: 1,
                                    desc: "Data Link & Physical",
                                    notes: [
                                        "phys cabling",
                                        "switches",
                                        "NIC",
                                        "MACs"
                                    ]
                                },
                                {
                                    name: "Internet",
                                    number: 2,
                                    desc: "",
                                    notes: [
                                        "routers",
                                        "IP addresses"
                                    ]
                                },
                                {
                                    name: "Transport",
                                    number: 3,
                                    desc: "TCP or UDP",
                                    notes: [
                                        "assembly",
                                        "dis-assembly",
                                        "connect to other system",
                                        "mike meyers would put 'session' on this step"
                                    ]
                                },
                                {
                                    name: "Application",
                                    number: 4,
                                    desc: "session, presentation, application",
                                    notes: [
                                        "applications are applications; email, ",
                                        "",
                                        ""
                                    ]
                                },
                            ]
                        }
                    ]
                },//end OSI vs TCP/IP Model
                {
                    name: "OSI and TCP/IP Model Walkthroughs",
                    desc: "client to server & back walkthrough",
                    sectionTips: [
                        ""
                    ],
                    notes: [
                        "Steve Martin, \"talking about art is like dancing about 'architecture'.\"",
                    ],
                    aspects: [
                        {
                            name: "'Physical' and 'Network Interface'",
                            number: "1",
                            desc: "receive packet, verify its for this computer."
                        },
                        {
                            name: "'data link' and 'network interface'",
                            number: 2,
                            desc: "check sequence, strip MACs off- leaving just an IP packet",
                            notes: [
                                "keep MAC addresses for return addressing",
                                "reduces to an IP packet"
                            ]
                        },
                        {
                            name: "'network' and 'internet' layers",
                            number: 3,
                            desc: "leaves a TCP segment; determines its for the given computer, then saves it for return address- leaving only: port numbers, payload",
                            notes: [
                                "analyze that its supposed to be for an IP that 'I' have",
                                "save 'from' address for return addressing"
                            ]
                        },
                        {
                            name: "transport layer",
                            number: 4,
                            timestamp: "4:40mins",
                            desc: "assembler and disassembler of data",
                            notes: [
                                "sequencing check & use",
                                "out: cut into bite sized chunks (1500bytes)",
                                "in: re-assemble using sequence",
                                "inbound data is complete after assembly",
                                "returns: port (to & from), data"
                            ]

                        },
                        {
                            name: "session, presentation, application",
                            number: "5,6,7",
                            timestamp: "6:30mins",
                            desc: "",
                            notes: [
                                "",
                                ""
                            ],
                            aspects: [
                                {
                                    name: "session",
                                    number: 5,
                                    desc: "",
                                    notes: [
                                        "word would not necessarily be able to save over the network",
                                    ]
                                },
                                {
                                    name: "presentation",
                                    number: 6,
                                    desc: "get data to the application but not in the proper format; ASCII, Ebsidic*",
                                    notes: [
                                        "mike says it should be erased",
                                    ]
                                },
                                {
                                    name: "application",
                                    number: 7,
                                    desc: "",
                                    notes: [
                                        "NOT the computer application",
                                        "port number check, save the return port"
                                    ]
                                },
                                
                            ]
                        }
                    ]
                },//end OSI and TCP/IP Model
                
            ]
        },
        {
            number: 3,
            name: "Cabling and Topology",
            desc: "",
            sections: [
                {
                    name: "Coaxial Cable",
                    desc: "2 conductors around a single axis",
                    sectionTips: [
                        "Coaxial cables use 'RG' numbers",
                        "Coaxial Cables have impedance measured in Ohms",
                        "BNC (twist and lock), T-Conn (3 ports), F-Type (twist on tight)"
                    ],
                    notes: [
                        "RG_; for example",
                        "measured by Impedance/insulation level",
                        
                    ],
                    examples: [
                        {
                            name: "RG58",
                            connector: "BNC Connector (twist)",
                        },
                        {
                            name: "RG6",
                            connector: "F-Type, or FC-Connector",
                            impedance: 75,
                            notes: [
                                "most common today"
                            ]
                        }
                    ],
                    aspects: [
                        {
                            name: "conductor",
                            desc: "",
                        },
                        {
                            name: "insulator",
                            desc: "",
                            notes: [
                                ""
                            ]
                        },
                        {
                            name: "2nd conductor",
                            desc: "",
                            notes: [
                                ""
                            ]
                        },
                        
                    ]
                },
                {
                    name: "UTP and STP Cabling",
                    desc: "twisted pair",
                    reviewTips: [
                        "UTP Normally consists of 4 Pairs",
                        "Make sure to know the 'Cat' levels",
                        "STP is used in 'high interference' environments"
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "Unsheilded Twisted Pair",
                            abbreviation: "UTP",
                            desc: "twisted pairs (4), reduces interference by twisting them together",
                            notes: [
                                "kevlar used in the cable"
                            ]
                        },
                        {
                            name: "Shielded Twisted Pair",
                            abbreviation: "",
                            desc: "aluminum shielding",
                            notes: [
                                ""
                            ]
                        },
                        {
                            name: "categories of Twisted Pair",
                            distance: "100m",
                            categories: [
                                {
                                    name: "CAT3",
                                    speed: "10mbps",
                                },
                                
                                {
                                    name: "CAT5e",
                                    speed: "100mbps",
                                    notes: [
                                        "successor to CAT5, as the improved version"
                                    ]
                                },
                                {
                                    name: "CAT6",
                                    speed: "1000mbps",
                                    notes: [
                                        "10gbps at 55meters"
                                    ]
                                },
                                {
                                    name: "CAT6a",
                                    speed: "10gbps",
                                },
                                
                            ]
                        }
                    ]
                },//end Twisted Pair Section
                {
                    name: "Fiber Optic Cabling",
                    desc: "",
                    sectionTips: [
                        "multi-mode cables use LED signals",
                        "single-mode uses 'laser' signals",
                        "regognize the connector types for fiber"
                    ],
                    notes: [
                        "fiber optic is duplex generally",
                    ],
                    aspects: [
                        {
                            name: "connectors",
                            desc: "",
                            types: [
                                {
                                    name: "ST",
                                    desc: "push in & twist to lock on",
                                    notes: [
                                        "earliest type of connector for fiber"
                                    ]
                                },
                                {
                                    name: "SC",
                                    desc: "Squre, clip in, and pull out",
                                },
                                {
                                    name: "FC",
                                    desc: "Screws in like the 'f' type connector of 'Coax'",
                                },
                                {
                                    name: "LC",
                                    desc: "",
                                    notes: [
                                        "One of the first to put both optic fiber in one connector"
                                    ]
                                },
                                {
                                    name: "MT-RJ",
                                    desc: "very small single connector for duplex fiber",
                                    notes: [
                                        "found in 'high density' connections"
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Modes of the light/optic signal",
                            desc: "",
                            notes: [
                                "",
                            ],
                            modes: [
                                {
                                    name: "Single-mode",
                                    desc: "designed for 'lasers'",
                                    notes: [
                                        "Yellow; almost always the same color"
                                    ]
                                },
                                {
                                    name: "Multi-Mode",
                                    desc: "designed to propogate light; an LED that generates the light",
                                    notes: [
                                        "Orange; almost always the same color"
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Polish types on Fiber-Optic",
                            desc: "",
                            types: [
                                {
                                    name: "PC; Polished Connector",
                                    desc: "square-rounded"
                                },
                                {
                                    name: "UPC; Ultra Polished Connector",
                                    desc: "rounded"
                                },
                                {
                                    name: "APC; Angle Polished Connector",
                                    desc: "loses very little light at the contact point"
                                }
                            ]
                        }
                    ]
                },//end 'fiber'
                
            ]
        },//end Cabling and Topology
        {
            number: 3,
            desc: "",
            sections: [
                {
                    name: "what is ethernet",
                    desc: "A standard- 'IEEE 802.3'- that defines every part of a network",
                    sectionReview: [
                        "Ethernet is defined by the IEEE 802.3 standard",
                        "There are many versions of Ethernet",
                        "Recognize Ethernet Naming syntax"
                    ],
                    notes: [
                        "layman 'ethernet'; its a standard",
                        "frame construction, voltage, connections, etc",
                        "frame check sequence",
                        "package/payload",
                        ""
                    ],
                    aspects: [
                        {
                            name: "Ethernet Frame",
                            desc: "the frame has been the same essentially from the beginning",
                            notes: [
                                "1500 byte practical limit",
                                "backward compatibility",
                                "modularity; medium to medium- there's no real challenge to connect networks"
                            ],
                            aspects: [
                                {
                                    name: "Cyclical Redundancy Check",
                                    desc: "Frame check sequence",
                                },
                                {
                                    name: "MAC addresses",
                                    desc: "'to' and 'from' MACs"
                                },
                                {
                                    name: "payload",
                                    desc: "body of the message"
                                }
                            ]
                        },//end 'Ethernet Frame
                        {
                            name: "Ethernet Nomenclature",
                            desc: "",
                            example: "100Base5",
                            aspects: [
                                {
                                    name: "center",
                                    desc: "",
                                    illustration: "10{Base}5",
                                    examples: [
                                        {
                                            name: 'broad',
                                            desc: 'broadband; with channels'
                                        },
                                        {
                                            name: "base",
                                            desc: "bandwidth is on a single channel",
                                        }
                                    ]
                                },
                                {
                                    name: "End",
                                    desc: "length of the cable on the last run",
                                    illustration: "10Base{5}",
                                    examples: [
                                        {
                                            name: "number",
                                            desc: "the length of the cable- used back when workstations had to hook into the ethernet cable"
                                        },
                                        {
                                            name: "T",
                                            desc: ""
                                        }
                                    ]
                                },
                                {
                                    name: "beginning",
                                    desc: "",
                                    example: ""
                                },
                            ]
                        }
                    ]
                },//end what is ethernet
                {
                    name: "Early Ethernet",
                    desc: "",
                    sectionReview: [
                        "CSMA/CD; Carrier Sense Multiple Access/ Collision Detection",
                        "10Base5 and 10Base2 require terminating resistors at both end of a segmented cable",
                        "10Base2 requires a 'T' connector"
                    ],
                    notes: [
                        "box or switch usually goes out to each terminal- not in early ethernet; 10Base5",
                    ],
                    aspects: [
                        {
                            name: "Segmented Ethernet",
                            desc: "vampire connector into thick cable",
                            notes: [
                                "f connector",
                                "where the term 'drops' came from",
                                "10Base5"
                            ]
                        },
                        {
                            name: "Carrier Sense Multiple Access/ Collision Detection",
                            abbreviation: "CSMA/CD",
                            notes: [
                                "",
                                ""
                            ],
                            aspects: [
                                {
                                    name: "carrier sense",
                                    desc: "check if someone is trying to talk, if not, send.",
                                    notes: [
                                        "when the signal hits the end, theres 'reflection'"
                                    ],
                                    aspects: [
                                        {
                                            name: "terminating resistor",
                                            desc: "'eats' the signal to prevent 'reflection' of the signal back on to the communication medium"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "10Base2",
                            desc: "10mbps, 'base' band, 200m segments (185m)",
                            notes: [
                                "terminators on the end",
                                "can handle up to 30 devices per segment",
                                ""
                            ]
                        }
                    ]
                },
                {
                    name: "The Daddy of Ethernet - 10BaseT",
                    desc: "",
                    notes: [
                        "break of segments at any point of the old 10base2, would shut down the whole network ",
                    ],
                    sectionTips: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "token ring",
                            desc: "IBM defined - circa 1984 - standard for network communication to aleive the industry concern of 'contention-based' access methods.",
                            notes: [
                                "proprietary; from IBM",
                                "fair access for all stations/terminals; eliminates the collisions of 'contention-based' access methods"
                            ]
                        }
                    ]
                },
            ]
        }
    ]
})();