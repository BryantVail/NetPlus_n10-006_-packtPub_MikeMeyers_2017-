const book = {
    media: "video",
    author: "Mike Meyers",
    publicationYear: "2017",
    chapters: [
        {
            number: 1
        },
        {
            number: 2, 
            name: "network models",
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
                            number: 1,
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
                },//end 'OSI and TCP/IP Model Walkthroughs'
            ]
        },//end 'network models' (2)
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
                },//end 'coaxial cabling'
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
                },//end 'UTP and STP Cabling'
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
        },//end 'cabling and topology'(3)
        {
            number: 4,
            name: "Fiber Optic Cabling",
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
                },//end 'Early Ethernet'
                {
                    name: "The Daddy of Ethernet - 10BaseT",
                    desc: "",
                    notes: [
                        "break of segments at any point of the old 10base2, would shut down the whole network ",
                        "multi-station-action Unit"
                    ],
                    sectionTips: [
                        "10mbps",
                        "100m between switch & node",
                        "max 1024 nodes per switch",
                        "CAT3 or better UTP; designed"
                    ],
                    aspects: [
                        {
                            name: "token ring",
                            desc: "IBM defined - circa 1984 - standard for network communication to aleive the industry concern of 'contention-based' access methods.",
                            notes: [
                                "proprietary; from IBM",
                                "fair access for all stations/terminals; eliminates the collisions of 'contention-based' access methods",
                                "multi-station-action Unit (MSAU)",
                                "millions of PCs used to run TokenRing"
                            ],
                            problems: [
                                "proprietary",
                                "exclusionarily expensive"
                            ]
                        },
                        {
                            name: "Hub",
                            desc: "bus in a box",
                            notes: [
                                "10BaseT is the first Hub network",
                                "cornerstone of every future network config"
                            ],
                            aspects: [
                                {
                                    name: "",
                                    desc: "",
                                }
                            ]
                        },
                        {
                            name: "10BaseT",
                            desc: "",
                            notes: [
                                "10mbps",
                                "100m between switch & node",
                                "max 1024 nodes per switch",
                                "CAT3 or better UTP; designed"
                            ]
                        }
                    ]
                },//end The Daddy of Ethernet - 10BaseT
            ]
        },
        {
            number: 5,
            name: "Modern Ethernet",
            desc: "",
            notes: [
                "",
                "",
            ],
            sections: [
                {
                    name: "Modern Ethernet, Switches, and Duplex",
                    desc: "",
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "ethernet",
                            desc: "",
                            notes: [
                                "10BaseT march toward what we have today",
                            ]
                        },
                        {
                            name: "100Base",
                            desc: "",
                            notes: [
                                "",
                            ]
                        }
                    ]
                },
                {
                    name: "Connecting Switches",
                    desc: "",
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        }
                    ]
                },
                {
                    name: "Gigabit Ethernet and 10 Gigabit Ethernet",
                    desc: "",
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        }
                    ]
                },
                {
                    name: "Switch Backbones",
                    desc: "",
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        }
                    ]
                },//end 'The Daddy of Ethernet - 10BaseT'
            ]
        },
        {
            number: 5,
            name: "Modern Ethernet",
            sections: [
                {
                    name: "Modern Ethernet, Switches, and Duplex",
                    desc: "",
                    sectionTips: [
                        "know the 10BaseTypes: names, distances, node number, etc",
                        "know your 100BaseTypes: names, distances, node number, etc"
                    ],
                    notes: [
                        "can't look at NICs and know what their standard is",
                        "full duplex starting with 100BaseT",
                        "'half' vs 'full' duplex"
                    ],
                    aspects: [
                        {
                            name: "100Base",
                            desc: "",
                            notes: [
                                "100BaseT & 100BaseTX is the same standard",
                                "100mbps",
                                "1024 nodes per hub",
                                "100m from node to hub",
                                "CAT5e or better"
                            ]
                        },
                        {
                            name: "100BaseFX",
                            desc: "",
                            notes: [
                                "1024 nodes per hub",
                                "multimode",
                                "2km distance",
                                "100BaseFX or 100BaseF"
                            ]
                        },
                        {
                            name: "switch",
                            desc: "",
                            notes: [
                                "keeps track of the computer on each physical 'port'; what a switch does that a hub 'doesn't' do.",
                                "sends only to the port that matches the destination MAC",
                                "'point to point' communication can happen with multiple users/PCs at the full bandwidth",
                            ],
                            aspects: [
                                {
                                    name: "broadcast",
                                    desc: "",
                                    notes: [
                                        "switch can also do a broadcast"
                                    ]
                                }
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end section 'Modern Ethernet, Switches, and Duplex'
                {
                    name: "Connecting Switches",
                    desc: "expand broadcast domain by bringing in another switch",
                    sectionTips: [
                        "Straight through cables have identical ends",
                        "cross-over cables have opposite ends",
                        "connect switches directly with crossover cables"
                    ],
                    notes: [
                        "connect one end of the crossover cable to one switch & the other end into an empty port on the other",
                    ],
                    aspects: [
                        {
                            name: "patch cables",
                            desc: "short cable with a  strand-core meant to be moved with relative long life",
                            notes: [
                                "NetPlusTip: any port on one switch and any port on the other to connect switches.",
                            ],
                            aspects: [
                                {
                                    name: "simple method",
                                    desc: "with a crossover cable, connect any port on one switch and any port on the other to connect switches",
                                    notes: [
                                        "",
                                    ]
                                },
                                {
                                    name: "alternative method",
                                    desc: "uplink port is used to crossover with a 'straight through' cable",
                                    notes: [
                                        "many switches today are 'auto sensing' removing the need for such intentional monitoring of the crossover cable or port.",
                                    ],
                                    aspects: [
                                        {
                                            name: "uplink port",
                                            desc: "a port with the wires 'pre crossed over'; a crossover port to use straight through cables to crossover",
                                            notes: [
                                                "buttons or jumpers are sometimes used to make this transition",
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "straight through cable",
                                    desc: "same standard on both sides of the Twisted Pair cable; tia568b or tia568a respectively",
                                },
                                {
                                    name: "crossover cable",
                                    desc: "opposite standard on each end of the cable; tia568a on one end, and tia568b on the other",
                                    notes: [
                                        "send goes to receive & vice versa",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end section 'Connecting Switches'
                {
                    name: "Gigabit Ethernet and 10 Gigabit Ethernet",
                    desc: "1000Base_; ",
                    sectionTips: [
                        "know 1000Base/1gb types: names, distances, node number, etc",
                        "know 10GBase types: names, distances, node number, etc"
                    ],
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "1000BaseCX",
                            desc: "",
                            notes: [
                                "25m between nodes",
                                "twinax",
                                "twisted pair but with a coax like connector",
                                "rare"
                            ],
                            aspects: [
                                {
                                    name: "connector",
                                    connector: "twinax",
                                    desc: "like a coax connector",
                                    notes: [
                                        "",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "1000 Base SX",
                            desc: "",
                            notes: [
                                "multimode FiberOptic Cable",
                                "500meters"
                            ]
                        },
                        {
                            name: "1000 Base LX",
                            desc: "",
                            notes: [
                                "5 kilometers",
                                "single mode fiber optic cable"
                            ]
                        },
                        {
                            name: "1000 Base T",
                            desc: "Twisted Pair",
                            notes: [
                                "CAT 6 UTP",
                                "100 meters",

                            ]
                        },
                        {
                            name: "10 GBase T",
                            desc: "twisted pair 10gb networks",
                            notes: [
                                "Twisted Pair",
                            ],
                            aspects: [
                                {
                                    name: "CAT6",
                                    desc: "55m limitation for 10gb performance",
                                    notes: [
                                        "",
                                    ]
                                },
                                {
                                    name: "CAT 6a",
                                    desc: "100m limitation for 10gb performance",
                                    notes: [
                                        "",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "10 GBase SR",
                            desc: "",
                            notes: [
                                "multi-mode cable",
                                "26m - 400m effective range"
                            ],
                            aspects: [
                                {
                                    name: "10GBase 'SW'",
                                    desc: "'SoNet' variant",
                                    notes: [
                                        "",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "10 GBase LR (Long Range)",
                            desc: "Long range 10gb network",
                            notes: [
                                "single-mode",
                                "1310nm fiber",
                                "10 kilometers",
                            ],
                            aspects: [
                                {
                                    name: "10GBase 'LW'",
                                    desc: "'SoNet' variant",
                                    notes: [
                                        "",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "10 GBase ER (extended range?)",
                            desc: "",
                            notes: [
                                "single-mode",
                                "1550nm fiber",
                                "40 kilometers"

                            ],
                            aspects: [
                                {
                                    name: "10GBase 'EW'",
                                    desc: "'SoNet' variant",
                                    notes: [
                                        "",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "10GbE",
                            desc: "10 Gigabit Ethernet",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end section 'Gigabit Ethernet and 10 Gigabit Ethernet'
                {
                    name: "Swtich Backbones",
                    desc: "",
                    sectionTips: [
                        "Bridge Loops from improper cabling",
                        "STP automatically shuts down bridge loops",
                        "'Backbones': High-Speed switches connecting secondary switches"
                    ],
                    notes: [
                        "'Backbone' is relating to the connected switches to facilitate resource management",
                        "",
                    ],
                    aspects: [
                        {
                            name: "managing interconnected networks",
                            desc: "",
                            notes: [
                                "high speed switch in the middle, then branch out to other networks that can be limited",
                                "",
                            ],
                            aspects: [
                                {
                                    name: "Gigabit Interface Converter",
                                    abbreviation: "GBIC",
                                    desc: "designed to move in & out of switches to interconnect different data mediums & cables",
                                    notes: [
                                        "",
                                    ]
                                },
                                {
                                    name: "Bridge Loop",
                                    abbreviation: "B-Loop; BLoop",
                                    desc: "sending data can get stuck in a loop between the interconnected switches; resources can be taken up by redundant requests, perhaps spamming and bringing down the receiver on the switch.",
                                    notes: [
                                        "closed loop of switch to a switch thats already on the backbone",
                                    ]
                                },
                                {
                                    name: "spanning tree protocol",
                                    desc: "checks for a loop in the tree",
                                    abbreviation: "STP",
                                    notes: [
                                        "will disable a port connected that would facilitate the Bridge Loop",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end section 'Swtich Backbones'
            ]
        },//end 'Modern Ethernet' (5)
        {
            number: 6,
            name: "Installing a Physical Network",
            desc: "",
            sections: [
                {
                    name: "Introduction to Structured Cabling",
                    desc: "means of connecting machines to a network in a managed way to avoid clutter & promote systematic layout.",
                    sectionTips: [
                        "Structured Cabling defines how we install cabling",
                        "Telecomm closet/Equip Room, Horizontal Runs, Work Area",
                        "Patch Panels terminate one end of 'horizontal runs'"
                    ],
                    notes: [
                        "switch & PC makes a network, but cabling needs to be managed or organized",
                    ],
                    aspects: [
                        {
                            name: "Equipment Room/ Telecomm Closet",
                            desc: "",
                            notes: [
                                "",
                            ],
                            aspects: [
                                {
                                    name: "",
                                    desc: "",
                                    notes: [
                                        "",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Horizontal Run",
                            desc: "length of cable from the equipment room to the workstations or computers, otherwise where the machine will hook up to the network",
                            notes: [
                                "runs horizontal- often parallel with the cieling",
                                "uses solid core cable, not to be moved often"
                            ]
                        },
                        {
                            name: "Patch Panel",
                            desc: "",
                            notes: [
                                "19inches wide commonly",
                                "where the Horizontal Run terminates on one end",
                                ""
                            ]
                        }
                    ]
                },//end section 'Introduction to Structured Cabling'
                {
                    name: "Crimping Cables",
                    desc: "",
                    sectionTips: [
                        "recognize T568A & T568B",
                        "straight through: same standard on each side",
                        "crossover: different TIA standard on each side"
                    ],
                    notes: [
                        "massage the wires to get them to align next to each other",
                        "end of sheathing to the end of the bare wire should be ~1/2 inch",
                        "wire #1 & #2 are 'transmits', and wire #3 & #6 are receiving"
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "TIA Standards",
                            desc: "standards for wiring Twisted Pair",
                            notes: [
                                "Colors that start with 'B' don't move",
                                "#1 wire: Striped",
                                "#8 wire: solid",
                                "blue: 4",
                                "Blue & white: 5",
                                "Brown & White: 7",
                                "Brown: 8"
                            ],
                            standards: [
                                {
                                    name: "TIA 568 A",
                                    desc: "",
                                    notes: [
                                        "",
                                    ],
                                    wireOrder: [
                                        "Green & white",
                                        "Green",
                                        "Orange & White",
                                        "Blue",
                                        "Blue & White",
                                        "Orange",
                                        "Brown & White",
                                        "Brown"
                                    ]
                                },
                                {
                                    name: "TIA 568 B",
                                    desc: "",
                                    notes: [
                                        ""
                                    ],
                                    wireOrder: [
                                        "Orange & White",
                                        "Orange",
                                        "Green & White",
                                        "Blue",
                                        "Blue & White",
                                        "Green",
                                        "Brown & White",
                                        "Brown"
                                    ]
                                },
                            ]
                        },//end aspect 'TIA Standards'
                    ]
                },//end section 'Crimping Cables'
                {
                    name: "Punchdown Blocks",
                    desc: "",
                    sectionTips: [
                        "RJ-45 crimps are used ONLY in Patch Cables",
                        "horizontal Runs are terminated with 110 punchdowns",
                        "patch panels and RJ-45 Plugs also have CAT Ratings"
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "110 Punchdown",
                            desc: "connection made on the back of the patch panel",
                            notes: [
                                "CAT Rating is labeled on the patch panel",
                            ]
                        },
                    ]
                },//end 'Punchdown Blocks'
                {
                    name: "MDF, IDF, DMarc, and the Equipment Room",
                    desc: "",
                    sectionTips: [
                        "MDF",
                        "IDF",
                        "DMarc"
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "Main Distribution Frame",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Intermediate Distribution Frame",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "DMarc",
                            desc: "separates the service line owned by the provider- from the equipment owned by the tenant",
                            notes: [
                                "",
                            ],
                            aspects: [
                                {
                                    name: "dmarc extension",
                                    desc: "extends the DMarc for the whole building, out to the equipment specific to a tenant."
                                }
                            ]
                        },
                        {
                            name: "U",
                            desc: "1 'Unit' of an equipment rack; 1&3/4\" (1.75\") [1.75inches]"
                        }
                    ]
                },//end section 'MDF, IDF, DMarc, and the Equipment Room'
                {
                    name: "Testing Cable",
                    desc: "",
                    sectionTips: [
                        "wiremap",
                        "continuity",
                        "TDR"
                    ],
                    notes: [
                        "other tests"
                    ],
                    aspects: [
                        {
                            name: "wiremap",
                            desc: "matches the wires on each end of the cable to test continuity",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Continuity",
                            desc: "correct pin matching",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Time Domain Reflectometer",
                            abbreviation: "TDR",
                            desc: "Verifies distance between Horizonal Run ends",
                            notes: [
                                "90m for Horizontal run, leaves 10m on each end for the 'patch' cable",
                                "fiber optic as well as Twisted Pair"
                            ],
                            aspects: [
                                {
                                    name: "Optical TDR",
                                    abbreviation: "OTDR",
                                    desc: "TDR for Fiber"
                                }
                            ]
                        },
                        {
                            name: "other tests",
                            tests: [
                                "near end cross-talk",
                                "far end cross-talk",
                                ""
                            ]
                        }
                    ]
                },//end section 'Testing Cable'
                {
                    name: "Troubleshooting Structured Cabling pt. 1",
                    desc: "",
                    sectionTips: [
                        "loopback plugs to test the NICs ability to send and receive",
                        "Net+ will give the loopback plug credit for working",
                        "patch cables and wall outlets are the most common of the Structured cabling failures"
                    ],
                    notes: [
                        "check the link light for activity",
                        "is the Network Card enabled in 'device manager'",
                        "check for bad device drivers",
                        "loopback plug",
                        "check patch cables; vacuum cleaner syndrome",
                        "replace the wall punchdown"
                    ],
                    aspects: [
                        {
                            name: "loopback adapter",
                            desc: "",
                            notes: [
                                "run a ping to the loopback with the adapter",
                                "ancient history for the most part; NICs typically respond automatically these days",
                            ]
                        },
                    ]
                },//end section 'Troubleshooting Structured Cabling pt. 1'
                {
                    name: "Troubleshooting Structured Cabling pt. 2",
                    desc: "typically impacting more than just one user",
                    sectionTips: [
                        "Voltage monitors track & record power problems",
                        "Environmental/Temperature monitors track & record heat & humidity problems",
                        "TDRs are great tools to check for Horizontal Run problems"
                    ],
                    notes: [
                        "Most errors happen at the workstation"
                    ],
                    aspects: [
                        {
                            name: "switch",
                            desc: "if the switch goes down, then everyone goes down",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "voltage",
                            desc: "ensure the cable is carrying the voltage, check on intermittent or slight voltage flux",
                            notes: [
                                "UPS (uninteruptable Power Supply)",
                                "19inch rack mountable UPS's are available"
                            ]
                        },
                        {
                            name: "Environmental/Temperature Monitors",
                            desc: "",
                            notes: [
                                "",
                            ],
                            aspects: [
                                {
                                    name: "Humidity",
                                    desc: "",
                                    notes: [
                                        "computers don't like moisture",
                                    ]
                                },
                                {
                                    name: "temperature",
                                    desc: "",
                                    notes: [
                                        "computers don't like heat",
                                    ]
                                },
                            ]
                        },
                        {
                            name: "Horizontal Run",
                            desc: "",
                            notes: [
                                "meant to be left alone",
                                "use the TDR if a break is suspected, to check the distance to the end of the cable",
                                "very rare for the Horizontal Line to break"
                            ]
                        },
                        {
                            name: "interference",
                            desc: "",
                            notes: [
                                "AFTER certification, retro-active changes can impact the interference level of a line.",
                                "is there a certain time of day",
                                "'it only happens when its hot'",
                                "light bulb fixtures"
                            ],
                            aspects: [
                                {
                                    name: "Modal Distortion",
                                    desc: "fiber optic (especially multi-mode), can be distorted over the length of travel; multi-mode is not a laser, so the light 'beam' can become less defined over distance in some cases",
                                    notes: [
                                        "",
                                    ]
                                },
                                {
                                    name: "",
                                    desc: "",
                                    notes: [
                                        "",
                                    ]
                                },
                                {
                                    name: "",
                                    desc: "",
                                    notes: [
                                        "",
                                    ]
                                },
                            ]
                        }
                    ]
                },//end section 'Troubleshooting Structured Cabling pt. 2'
                {
                    name: "Using a Toner & Probe",
                    desc: "",
                    sectionTips: [
                        "tone & probes are used to locate cables & connections",
                        "tone generator: creates the signal",
                        "tone probe: translates the signal into audible tone",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "fox and hound",
                            desc: "",
                            notes: [
                                "tone generator(creates) & tone probe(listener)",
                            ]
                        },
                    ]
                },//end section 'Using a Toner & Probe'
            ]
        },//end 'Installing a Physical Network' (6)
        {
            number: 7,
            name: "TCP/IP Basics",
            desc: "",
            sections: [
                {
                    name: "Intro to IP Addressing and Binary",
                    desc: "",
                    sectionTips: [
                        "each computer on a TCP/IP Network must have a unique IP address",
                        "IP addresses are written as four Octets, such as: 192.168.1.1",
                        "Each octet represents a binary string. 192, for example = 11000000"
                    ],
                    notes: [
                        "every computer on a Network MUST have a unique IP address on the network",
                        "32 1's and 0's",
                        "'dots' in an IP address are just visual aids; 'dots' in an IP address are like the dashes in a phone number",
                        "128, 64, 32, ,16, 8, 4, 2, 1"
                    ],
                    aspects: [
                        {
                            name: "Binary",
                            desc: "",
                            notes: [
                                "just 1's and 0's",
                                "'on' pulse or 'off'",
                                ""
                            ]
                        },
                        {
                            name: "IP Address",
                            desc: "",
                            notes: [
                                "32 1's and 0's",
                                "4 groups of 8 bits",
                                ""
                            ],
                        },
                        {
                            name: "Octet",
                            desc: "binary octet is a value between 0 and 255 (256 values || 2^8th)",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Binary to Numeral",
                            desc: "from left to right, add the values -respectively- for each value from 2^0 -> 2^8 (1-128)",
                            notes: [
                                "128 is the magic number",
                                "2^8 = 128",
                                
                            ],
                            examples: [
                                "0 0 0 0 0 0 0 1 = 1",
                                "0 0 0 0 0 0 1 1 = 3",
                                "1 0 0 0 0 0 0 0 = 128",
                            ]
                        },
                        {
                            name: "Numeral to Binary",
                            desc: "divide the numbers from 2^8 - starting from 128 - into the numeral representation and add a binary value of 1 for each number that can divide into the remainder of the numeral value",
                            notes: [
                                "192.168.1.200; \
                                    192/128= 1- 64/128, 64/64 = 1, 0/32 = 0, 0/16 = 0, 0/8 = 0, 0/4 = 0, 0/2 = 0, 0/1 = 0; \
                                    168/128 = 1- 40/128, 40/64 = 0, 40/32 = 1- 8/32, 8/16 = 0, 8/8 = 1, 0/4  = 0, 0/2 = 0, 0/1 = 0; \
                                    1/128 = 0, 1/64  = 0, 1/32 = 0, 1/16 = 0, 1/8 = 0, 1/4 = 0, 1/2 = 0, 1/1 = 1,            \
                                    200/128 = 1- 72/128, 72/64 = 0, 72/32 = 1- 40/32, 8/16 = 0, 8/8 = 1, 0/4 = 0, 0/2 = 0, 0/1 = 0,\
                                    ",
                            ]
                        },
                    ]
                },//end Intro to IP Addressing and Binary
                {
                    name: "Introduction to Address Resolution Protocol (ARP)",
                    desc:"a broadcast that sends out to a network saying, 'if you have this IP, please respond with your MAC",
                    abbreviation: "ARP",
                    sectionTips: [
                        "ARP resolved IP addresses",
                        "Type: 'arp -a' to see 'all' of the ARP Cache",
                        "ARP requests are broadcast over a network"
                    ],
                    notes: [
                        "necessary between networks- when I have someone's IP, but not their MAC",
                        "send a packet to another computer that's on my broadcast domain",
                    ],
                    aspects: [
                        {
                            name: "ARP command",
                            desc: "check the cache of MACs",
                            notes: [
                                "refreshes frequently",
                            ]
                        },
                    ]
                },//end 'Introduction to ARP'
                {
                    name: "Subnet Masks",
                    desc: "",
                    sectionTips: [
                        "Each host needs a subnet",
                        "SubnetMask of the host is used to know if the destination is on the local network or a remote net",
                        "'default gateway' must be known by the host so that it can forward traffic to remote networks"
                    ],
                    notes: [
                        "if the IP address is not in the subnet, then the computer would need to ARP for the 'Default Gateway'",
                        "IP address is needed",
                        "Subnet is needed",
                        "default gateway is needed"
                    ],
                    aspects: [
                        {
                            name: "default gateway",
                            desc: "",
                            notes: [
                                "default gateway is where packets are sent that have an address OUTSIDE of the subnet",
                            ]
                        },
                        {
                            name: "network Id",
                            desc: "the part of the IP address that has to be the same for everyone on the network",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Host Id",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "subnet Mask",
                            desc: "defines where -in the IP address- the address can deviate from the NetworkId and remain in the network",
                            notes: [
                                "common terminology for '/{1's in the subnet}' is 'whack {1's in the subnet}",
                                "computers use the subnet mask to determine if the IP that is being used to direct the packet is a 'local' or 'long distance' call. "
                            ]
                        },
                    ]
                },//end 'Subnet Masks'
                {
                    name: "Classful Addressing",
                    desc: "",
                    sectionTips: [
                        "classful subnetting was the first effor to divide NetworkIds",
                        "Class A, B, and C Licenses",
                        "Memorize the first Octet to know your Class Licenses",
                    ],
                    notes: [
                        "",
                        "",
                    ],
                    aspects: [
                        {
                            name: "Internet Assigned Numbers Authority",
                            abbreviation: "IANA",
                            desc: "passes out network addresses to the governing authority",
                            notes: [
                                "the governing authority is still a high level entity",
                            ]
                        },
                        {
                            name: "Regional Internet Registry",
                            desc: "",
                            notes: [
                                "there are 5 regions",
                            ],
                            aspects: [
                                {
                                    name: "Regions",
                                    desc: "",
                                    regions: [
                                        {
                                            name: "African Network Information Center",
                                            abbreviation: "AfriNIC",
                                            desc: "africa"
                                        },
                                        {
                                            name: "Asia-Pacific Network Information Center",
                                            abbreviation: "APNIC",
                                            desc: "asia(se asia, china, india, japan) & australia"
                                        },
                                        {
                                            name: "American Registry for Internet Numbers",
                                            abbreviation: "ARIN",
                                            desc: "North America",
                                        },
                                        {
                                            name: "Latin American Network Information Center",
                                            abbreviation: "LACNIC",
                                            desc: "central & south america, and the Caribbean"
                                        },
                                        {
                                            name: "",
                                            abbreviation: "RIPE NCC",
                                            desc: "Greenland, western europe, middleEast(saudi arabia, yemen, oman, iraq), russia"

                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Class Licenses",
                            desc: "",
                            notes: [
                                "",
                            ],
                            aspects: [
                                {
                                    name: "class A",
                                    desc: "0-126, /8",
                                    notes: [
                                        "16.7 million IPs",
                                        "service providers, not many people got them",
                                    ]
                                },
                                {
                                    name: "class B",
                                    desc: "128-191, /16s",
                                    notes: [
                                        "65,534 addresses",
                                    ]
                                },
                                {
                                    name: "class C",
                                    desc: "192-223, /24",
                                    notes: [
                                        "254 hosts",
                                    ]
                                },
                            ]
                        },
                        {
                            name: "subnetting",
                            desc: "divides Network Ids into two or more networks",
                            notes: [
                                "/16's can be broken down into /24's within the network",
                                "subnets do not have to happen at the byte increment",
                                ""
                            ]
                        }
                    ]
                },//end Classful Addressing
                {
                    name: "Subnetting with Classless Inter-Domain Routing (CIDR)",
                    abbreviation: "CIDR",
                    desc: "",
                    sectionTips: [
                        "CIDR: Classless Inter-Domain Routing",
                        "Subnet Masks all have a string of 1's, then a string of 0's (not intermingled)",
                        "The more subnets, the fewer hosts are available"
                    ],
                    notes: [
                        "around since mid-90's",
                        "IP Address is actually 'just a binary string', not added up numbers, or divided by dots.",
                        "subnets are: 'a string of 1's, followed by a string of 0's",
                        "",
                    ],
                    aspects: [
                        {
                            name: "Classless Addressing",
                            desc: "subnetting outside of the 'byte' structure; splitting up networks absent the 'classful addressing (/8, /16, /24) paradigm",
                            notes: [
                                " ",
                                ""
                            ],
                            examples: [
                                {
                                    name: "",
                                    steps: [
                                        "subnet & network as described",
                                        "move subnet 'up' by 1, making it a /25",
                                        "One set of netIds can be 208.25.160.0, and others can be 208.25.160.126 ("
                                    ],
                                    subnetMask: "/24",
                                    networkId: "208.25.160.0",
                                    notes: "252 hosts between the two networks in the /25 nets",
                                    aspects: [
                                        {
                                            name: "network1",
                                            subnetMask: "255.255.255.128 or /25",
                                            networkId: "208.25.160.0",
                                            implications: [
                                                "one group of addresses is 208.25.160.1-126 (can't be 0 or 127)"
                                            ]
                                        },
                                        {
                                            name: "network2",
                                            subnetMask: "255.255.255.128 or /25",
                                            networkId: "208.25.160.128",
                                            implications: [
                                                "one group of addresses is 208.25.160.128 - 254 (can't be 128 or 255)"
                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: "Breakdown /24 into a /26",
                                    desc: "with 2+ bits added to the given subnet of /24 -being /26-, there are now 4 different combinations/networks that can be made; 00, 01, 10, 11. ",
                                    steps: [
                                        "subnet & network as described",
                                        "move class-C subnet 'over' by 2, making it a /26",
                                        "determine the 4 networkIds possible, host range on the net, and how many hosts per network",
                                    ],
                                    subnetMask: "/26",
                                    networkId: "208.25.160.0",
                                    notes: "{62} hosts between the 4 networks in the /26 nets",
                                    aspects: [
                                        {
                                            name: "network1",
                                            subnetMask: "255.255.255.192 or /26",
                                            networkId: "208.25.160.0",
                                            implications: [
                                                "one group of addresses is 208.25.160.1-62 (can't be 0 or 63)"
                                            ]
                                        },
                                        {
                                            name: "network2",
                                            subnetMask: "255.255.255.192 or /26",
                                            networkId: "208.25.160.64",
                                            implications: [
                                                "one group of addresses is 208.25.160.65 - 126 (can't be 64 or 127)"
                                            ]
                                        },
                                        {
                                            name: "network3",
                                            subnetMask: "255.255.255.192 or /26",
                                            networkId: "208.25.160.128",
                                            implications: [
                                                "one group of addresses is 208.25.160.129 - 190 (can't be 128 or 191)"
                                            ]
                                        },
                                        {
                                            name: "network3",
                                            subnetMask: "255.255.255.192 or /26",
                                            networkId: "208.25.160.192",
                                            implications: [
                                                "one group of addresses is 208.25.160.193 - 254 (can't be 192 or 255)"
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end Subnetting with CIDR
                {
                    name: "More CIDR Subnetting Practice",
                    desc: "",
                    sectionTips: [
                        "CIDR: Classless Inter-Domain Routing",
                        "Subnet Masks: all 1's on the left, then all 0's to the right",
                        "more subnets from the NetworkId, the fewer amount of hosts are available",
                    ],
                    notes: [
                        "/24 gives 254 hosts",
                    ],
                    aspects: [
                        {
                            name: "Dynamic IP Addresses",
                            desc: "the IP changes",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Static IP Address",
                            desc: "An IP that is set not to change",
                            notes: [
                                "",
                            ]
                        },
                    ],
                    examples: [
                        {
                            name: "example#1",
                            timestamp: "4:36",
                            desc: "4 IPs for 4 servers in the Rack",
                            notes: [
                                "1, 5, or 14 IPs",
                                "always have an IP for the Router/Gateway",
                                "instead of 6, they're keeping the 6th for the router",
                                "/29 is what will be used; (255.255.255.248) leaves 6 addresses, -1 for the router, 5-4 for each server, 1 is left over",
                                
                            ]
                        },
                        {
                            name: "example#2",
                            timestamp: "6:15",
                            desc: "8 IPs needed as a minimum.",
                            notes: [
                                "/28 given for the subnet, 14 addresses",
                                ""
                            ],
                            subnet: "/28; 255.255.255.240",
                            networkId: "199.44.6.80; ",
                            implications: [
                                "/28.81-94 are the addresses; 14IPs - 1 for the router = 13",
                                ""
                            ]
                        },
                    ],
                },//end 'More CIDR Subnetting Practice'
                {
                    name: "Dynamic and Static IP addressing",
                    desc: "",
                    sectionTips: [
                        "ONLY 1 DHCP server in each broadcast domain",
                        "every modern OS comes with DHCP enabled by default",
                        "DHCP Relay enables a single DHCP server to service more than 1 broadcast domain",
                    ],
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "static IP addressing",
                            desc: "set the IP for the device",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Dynamic IP",
                            desc: "changes according to a protocol",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Dynamic Host Configuration Protocol",
                            abbreviation: "DHCP",
                            desc: "changes according to a protocol",
                            notes: [
                                "Linux: 'BootP' or 'Bootstrap Protocol'",
                            ],
                            aspects: [
                                {
                                    name: "Commands",
                                    commands: [
                                        {
                                            command: "ipconfig",
                                            desc: "shows network info for windows device; gateway, mask, ipV4, dhcp server",
                                            notes: [
                                                "mac & linux version is 'ifConfig'",
                                                "",
                                            ],
                                            subCommands: [
                                                {
                                                    name: "/all",
                                                    desc: "gets the full request from this command",
                                                    notes: [
                                                        "includes 'default gateway'"
                                                    ]
                                                },
                                                {
                                                    name: "ipconfig /release",
                                                    desc: "lets go of the IP address",
                                                    notes: [
                                                        "removes IP address",
                                                    ]
                                                },
                                                {
                                                    name: "/renew",
                                                    desc: "re-establishes IP address",
                                                    notes: [
                                                        "",
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },//end commands
                                {
                                    name: "DHCP Clients",
                                    desc: "computers that use the DHCP server",
                                    notes: [
                                        "most or all OS's use DHCP by default",
                                    ]
                                },//end DHCP Clients
                                {
                                    name: "dhcp process",
                                    steps: [
                                        {
                                            name: "DHCP Discover",
                                            desc: "sends out this message to obtain an IP",
                                            notes: [
                                                "sends a broadcast to all devices on the 'Broadcast Domain'",
                                                "waiting for a 'DHCP' offer"
                                            ]
                                        },
                                        {
                                            name: "DHCP Offer",
                                            desc: "Uni-cast response to a 'DHCP Discover' directly to the requester",
                                            notes: [
                                                "",
                                            ]
                                        },
                                        {
                                            name: "DHCP Request",
                                            desc: "response to offer, to obtain an IP",
                                            notes: [
                                                "",
                                            ]
                                        },
                                        {
                                            name: "DHCP Acknowledgement",
                                            desc: "stores the client info",
                                            notes: [
                                                "",
                                            ]
                                        },
                                    ]
                                },//end dhcp process
                                {
                                    name: "DHCP Server",
                                    desc: "",
                                    notes: [
                                        "only have One DHCP Server on the broadcast domain",
                                        "often comes with the router these days"
                                    ],
                                    tips: [
                                        {
                                            type: "Security",
                                            desc: "cannot alter settings for the Router/DHCP server over a wireless connection"
                                        },
                                        {
                                            type: "",
                                            desc: "",
                                        }
                                    ],
                                    aspects: [
                                        {
                                            name: "dchp relay",
                                            desc: "field that enables a DHCP server that's not on the broadcast domain"
                                        },
                                        {
                                            name: "scope",
                                            desc: "",
                                            notes: [
                                                "",
                                            ],
                                            aspects: [
                                                {
                                                    name: "starting IP",
                                                    desc: "first address in the DHCP Pool",
                                                    notes: [
                                                        "",
                                                    ]
                                                },
                                                {
                                                    name: "ending IP",
                                                    desc: "",
                                                    notes: [
                                                        "",
                                                    ]
                                                },
                                                {
                                                    name: "Length",
                                                    desc: "this is the 'bit' length of the subnet",
                                                    notes: [
                                                        "this can also be controlled by the 'Subnet Mask' field",
                                                    ]
                                                },
                                                {
                                                    name: "Subnet Mask",
                                                    desc: "this is the 'bit' length of the subnet represented in decimal",
                                                    notes: [
                                                        "this can also be controlled by the 'Length' field",
                                                    ]
                                                },
                                                {
                                                    name: "Exclusions and Delay",
                                                    desc: "parts of the scope not to be included- perhaps another DHCP Server manages this part of the Scope",
                                                    notes: [
                                                        "",
                                                    ]
                                                },
                                                {
                                                    name: "lease duration",
                                                    desc: "how long until our router releases the IPs",
                                                    notes: [
                                                        "in a coffee shop/public place- may want to make these leases shorter to return IPs to the pool as people leave"
                                                    ]
                                                }
                                            ]
                                        }
                                    ],//end 'DHCP Server' aspects within section "Dynamic and Static IP Addressing"
                                },//end DHCP Server aspect within "Dynamic and Static IP Addressing"
                            ]
                        },
                    ],
                },//end Dynamic and Static IP addressing
                {
                    name: "Rogue DHCP Servers",
                    desc: "",
                    sectionTips: [
                        "If APIPA address is had, check if there is a registered DHCP server",
                        "if connected to DHCP & still have APIPA address, check the DHCP server parameters",
                        "If IP is not on the networkId, there may be a rogue DHCP server"
                    ],
                    notes: [
                        "when the DHCP Server doesn't work, it'll bring up an error in the web browser/ web application",
                        "when first on a network, lookup the networkId, and Subnet Mask.",
                        "if given an IP not on the expected NetworkId + Subnet, there may be 2 dhcp servers.",
                        "APIPA: '169.254.0.0/16'",
                    ],
                    
                    aspects: [
                        {
                            name: "No DHCP Server- what happens",
                            desc: "",
                            notes: [
                                "may still be able to communicate on the broadcast domain for local resources.",
                            ],
                            aspects: [
                                {
                                    name: "AutoConfiguration IPv4 Address",
                                    desc: "169.254.0.0; this is not what we typically set up for our DHCP pool.",
                                    notes: [
                                        "",
                                    ]
                                },
                                {
                                    name: "/16",
                                    desc: "may come up with a /16 subnet, not typical of the smallest types of networks",
                                }
                            ]
                        },
                        {
                            name: "Automatic Private IP Addressing",
                            abbreviation: "APIPA",
                            desc: "what is used when there is not a DHCP server found",
                            notes: [
                                "'169.254.0.0/16' always starts with",
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end 'Rogue DHCP Servers'
                {
                    name: "Special IP addresses",
                    desc: "",
                    sectionTips: [
                        "APIPA, Automatic Private IP Addressing; 192.254.0.0/16 ",
                        "loopback address: 127.0.0.1",
                        "private IPs; know the /8, /16, & /24"
                    ],
                    notes: [
                        "APIPA: 168.254.0.0/16",
                        "loopBack: 127.0.0.1",
                        ""
                    ],
                    aspects: [
                        {
                            name: "Private IP addresses",
                            desc: "",
                            notes: [
                                "public devices- maybe -web servers can't use common Private IPs",
                            ],
                            commonlyUsed: [
                                {
                                    name: "10.0.0.0/8",
                                    desc: "",
                                    notes: [
                                        "",
                                    ]
                                },
                                {
                                    name: "172.16.0.0/16",
                                    desc: "",
                                    notes: [
                                        "",
                                    ]
                                },
                                {
                                    name: "192.168.0.0/24",
                                    desc: "",
                                    notes: [
                                        "",
                                    ]
                                },
                            ]
                        },
                    ]
                },// end 'Special IP addresses'
            ]
        },//end 'TCP/IP Basics' (7)
        {
            number: 8,
            name: "Routing",
            desc: "",
            sections: [
                {
                    name: "Introducing Routers",
                    desc: "Router- a box that connects NetworkIds; filtering & forwarding based on IP address",
                    sectionTips: [
                        "routers only care about destinations",
                        "routers can use any network medium",
                        "routing table can be found on all routers"
                    ],
                    notes: [
                        "Switches: filter & forward conversely based on MAC address",
                        "in order for a router to function it must have 2 connections",
                        "routers don't care where a packet came from- only where its going",

                    ],
                    aspects: [
                        {
                            name: "routing table",
                            desc: "",
                            notes: [
                                "",
                            ],
                            columns: [
                                {
                                    name: "address",
                                    desc: "",
                                    examples: [
                                        {
                                            ip: "192.168.15.0",
                                            desc: "routers use the '0' ip when necessary"
                                        }
                                    ]
                                },
                                {
                                    name: "subnet",
                                    desc: ""
                                },
                                {
                                    name: "gateway",
                                    desc: "an IP describing the relationship",
                                    examples: [
                                        {
                                            ip: "0.0.0.0",
                                            desc: "means the router is directly connected to the network"
                                        }
                                    ]
                                },
                                {
                                    name: "interface",
                                    desc: "NetworkId of the corresponding broadcast domain or network"
                                },
                                {
                                    name: "Metric",
                                    desc: "used to prioritize traffic when there are 2 possible results for the same purpose",
                                    notes: [
                                        "2 ISPs would warrant this type of Prioritization",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "default route",
                            desc: "",
                            notes: [
                                "address always shows '0.0.0.0'",
                                "subnet always shows: '0.0.0.0'",
                                "send the the gatway listed as the 'default route'",
                                "also called 'default gateway'",
                            ],
                            examples: [
                                {
                                    name: "2 ISPs",
                                    desc: "2 avenues to the WAN or greater network through ISP, so the 'Metric' value is used to prioritize",
                                },

                            ]
                        },
                        {
                            name: "Upstream Router",
                            desc: "ISP's router on their service line, away from the consumer service location.",
                            notes: [
                                
                                ""
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end 'Introducing Routers'
                { 
                    name: "Understanding Ports",
                    desc: "",
                    sectionTips: [
                        "Every TCP/IP packet has source & destination port numbers",
                        "well know ports are from 0-1023 (1024 count)",
                        "ephemeral port numbers: 1024 - 65,535"
                    ],
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "destination ports",
                            desc: "set by the type of application being used",
                            notes: [
                                "first 1024 (0-123) are 'well known' ports",
                            ],
                            ports: [
                                {
                                    port: "80",
                                    desc: "web page",
                                },
                            ]
                        },
                        {
                            name: "source ports",
                            desc: "'ephemeral' port, created by the sending user device",
                            notes: [
                                "could be up to '65,000'- depending on the OS",
                            ]
                        },
                    ],
                    examples: [
                        {
                            desc: "",
                            notes: [
                                "destination & source IP",
                                "sequencing# & package itself",
                            ],
                            computers: [
                                {
                                    name: "Windows Machine",
                                    ip: "32.44.17.231",
                                },
                                {
                                    name: "web address",
                                    ip: "144.22.17.191",
                                }
                            ],
                            steps: [
                                {
                                    desc: "packet sent to the web server",
                                    notes: [
                                        "from IP- save",
                                        "ephemeral port- save",
                                    ]
                                },
                                {
                                    desc: "respond to the web client",
                                    notes: [
                                        "reverse the order to/from, and reply"
                                    ]
                                }
                            ]
                        }
                    ]
                },//end 'Understanding Ports'
                {
                    name: "Network Address Translation",
                    desc: "",
                    sectionTips: [
                        "DNAT: has a limited pool of internet addresses to give to a number fo internal devices",
                        "SNAT: sends specific traffic to 1 internal IP address; router will assign 1 IP address for a certain client",
                        "PAT: translates internal IP addresses to an internet address & tracks the returning packets"
                    ],
                    notes: [
                        "built into routers",
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ],
                    steps: [
                        {
                            name: "initial frame with IP of client"
                        },
                        {
                            name: "router 'plugs' in its own IP address, and saves info",
                        },
                        {
                            name: "retrieval by router",
                            desc: "adds client's IP back onto the frame"
                        }
                    ],
                    versions: [
                        {
                            name: "Static NAT",
                            abbreviation: "SNAT",
                            desc: "sends specific traffic to 1 internal IP address; router will assign 1 IP address for a certain client",
                            notes: [
                                "port forwarding is around this concept",
                                "Assign 1 particular IP, a given NAT address for that 1 computer"
                            ]
                        },
                        {
                            name: "dynamic NAT",
                            abbreviation: "DNAT",
                            desc: "has a limited pool of internet addresses to give to a number fo internal devices.",
                            notes: [
                                "'pooled NAT' is also a reference name for this",
                            ],
                            examples: [
                                "in a Case with 4 IPs/Devices on the broadcast, and router would have a finite and fixed number of NAT addresses that may not be enough to serve all clients."
                            ]
                        },
                        {
                            name: "Port Address Translation",
                            desc: "translates internal IP addresses to an internet address & tracks the returning packets",
                            notes: [
                                "'regular' NAT",
                                "PCs have to start the conversation to initialize the NAT-ing process to get it back to the local machine."
                            ]
                        },
                    ]
                },//end 'Network Address Translation'
                {
                    name: "Implementing NAT",
                    desc: "",
                    sectionTips: [
                        "SOHO routers ship with NAT enabled",
                        "NAT on a SOHO router can be disabled from the router's configuration page",
                        "'gateway/router mode' is sometimes what will be seen for NAT settings on older routers."
                    ],
                    notes: [
                        "almost all private routers have NAT turned on automatically",
                        "NAT could be called 'gateway' on some routers",
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ],
                },//end 'Implementing NAT'
                {
                    name: "Port Forwarding",
                    desc: "",
                    sectionTips: [
                        "port forwarding is used to access server systems behind a NAT router",
                        "any outside queries based on a specific port number are forwarded to a specific computer",
                        "using a non-standard port number is common for security",
                    ],
                    notes: [
                        "purpose: one or more devices on the LAN side of our devices; public access on the private side of the network",
                        "web browser, then IP address- but from outside; Private IPs aren't available from outside the LAN generally",
                        "could be called: 'NAT/QoS' section on the router.",
                    ],
                    aspects: [
                        {
                            name: "application",
                            desc: "in-consequential name",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Protocol",
                            desc: "TCP or UDP",
                            notes: [
                                "when in doubt, put both",
                            ]
                        },
                        {
                            name: "Source Net",
                            desc: "If there's a network that we should automatically receive traffic from",
                            notes: [
                                "'empty' or 'blank' typically means ANYONE can access the resource.",
                            ]
                        },
                        {
                            name: "port-from",
                            desc: "the port that the request will come from",
                            notes: [
                                "if the web browser makes the call, then it'll be '80'- this is the 'easy' and not so secure method",
                                "change follow-up example to an ephemeral; maybe 12,001",
                                "{publicIpAddress}:{portNumber}"
                            ]
                        },
                        {
                            name: "IP Address",
                            desc: "destination or resource IP",
                            notes: [
                                "the private IP",
                                "WAN IP of the router is also necessary; Public IP from ISP",
                                
                            ]
                        },
                        {
                            name: "port-to",
                            desc: "",
                            notes: [
                                "use port '80' to return the response back to a web client",
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end 'Port Forwarding'
                {
                    name: "DMZ, Port Range Forwarding, and Port Triggering",
                    desc: "",
                    sectionTips: [
                        "Port Range Forwarding: opens more than 1 port number to a single server behind a NAT router.",
                        "DMZ: opens a single computer to the internet & is not recommended",
                        "Port Triggering: opens a network to accept other port numbers from incoming traffic or responses from a different sending port",
                    ],
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "Port Range Forwarding",
                            desc: "",
                            notes: [
                                "",
                            ],
                            aspects: [
                                {
                                    name: "application",
                                    desc: "in-consequential name for the port range",
                                },
                                {
                                    name: "start",
                                    desc: "starting port",
                                },
                                {
                                    name: "end",
                                    desc: "ending port",
                                },
                                {
                                    name: "protocol",
                                    desc: "TCP or UDP",
                                },
                                {
                                    name: "IP Address",
                                    desc: "address of the server",
                                },
                            ],
                            examples: [
                                {
                                    premise: "a network is hosting a game, multiple people need access from outside the LAN",
                                    name: "counter strike server",
                                    portsNeeded: [1200, 3478, 4379, 4380, "27000-27050"],
                                }
                            ]
                        },
                        {
                            name: "DeMilitarized Zone",
                            time: "1:31mins",
                            abbreviation: "DMZ",
                            desc: "exposing 1 particular computer, ANY request from the internet will be able to access; we 'hate' DMZ",
                            notes: [
                                "do not use",
                            ],
                        },
                        {
                            name: "port triggering",
                            time: "4:45mins",
                            desc: "sending & receiving on different ports",
                            notes: [
                                "FTP servers respond on port 20 to some extent & receive traffic on port 21",
                            ],
                            aspects: [
                                {
                                    name: "triggered port range",
                                    desc: "targetting any LAN clients sending on port '21'"
                                },
                                {
                                    name: "forwarded port range",
                                    desc: "send it back to the client on port '20'",
                                },
                                {
                                    name: "protocol",
                                    value: "TCP",
                                }
                            ]
                        },
                    ],
                    examples: [
                    ]
                },//end "DMZ, Port Range Forwarding, and Port Triggering"
                {
                    name: "Tour of a SOHO Router",
                    desc: "",
                    sectionTips: [
                        "All Home routers have default IPs, username, & password",
                        "Almost all home routers are DHCP servers",
                        "Router WAN Connections are commonly DHCP clients by default",
                    ],
                    notes: [
                        "documentation usually comes with the router",
                        "typical default LAN would be 192.168.1.1 or 192.168.0.1",
                        "default username & password- that should be changed.",
                        "dd-wrt: a generically defined interface that can be used",
                    ],
                    aspects: [
                        {
                            name: "WAN Connection Type",
                            desc: "typically DHCP from the ISP",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "router IP",
                            desc: "",
                            notes: [
                                "",
                            ],
                            aspects: [
                                {
                                    name: "Local IP",
                                    desc: "address of the router",
                                    notes: [
                                        "change it from the default",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "MAC Address clone",
                            desc: "PC in the cable modem",
                            notes: [
                                "clone the ISPs MAC from the Modem/Router to replace it with one's own equipment.",
                            ]
                        },
                        {
                            name: "SSH",
                            desc: "",
                            notes: [
                                "doesn't come default on common routers; 3rd party may be worth it",
                            ]
                        },
                        {
                            name: "Telnet",
                            desc: "",
                            notes: [
                                "doesn't come default on common routers; 3rd party may be worth it",
                            ]
                        },
                        {
                            name: "Username & password",
                            desc: "",
                            notes: [
                                "change from default",
                            ]
                        },
                        {
                            name: "Web Access",
                            desc: "",
                            notes: [
                                "",
                            ],
                            aspects: [
                                {
                                    name: "protocol",
                                    desc: "http or https",
                                    notes: [
                                        "",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Remote Access",
                            desc: "should machines outside of the LAN be able to access this router.",
                            notes: [
                                "don't do it unless necessary",
                            ]
                        },
                        {
                            name: "Firewall",
                            desc: "usually just on/off; will block some known threats.",
                            notes: [
                                "don't do it unless necessary",
                            ]
                        },
                        {
                            name: "Firmware",
                            desc: "carefully update firmware; only do this with purpose, to avoid rendering the router useless",
                            notes: [
                                "failure usually 'bricks' the router",
                            ]
                        },
                        {
                            name: "factory reset",
                            tips: [
                                {
                                    name: "30-30-30 rule",
                                    desc: "30 secs with button down & power on, 30secs with button down & power off, then 30secs with button still pressed  & power back in"
                                }
                            ]
                        }
                    ]
                },//end 'Tour of a SOHO Router'
                {
                    name: "Introduction to Routing Protocols",
                    desc: "protocols facilitate connection with dynamically available resources; routers go down, some routers go offline from different circumstances",
                    sectionTips: [
                        "Dynamic Routing protocols use metrics in differing ways to determine routes; Distance Vector, or Link State",
                        "Dynamic Routing is either 'Interior Gateway Protocol' within an 'Autonomous System' or 'Exterior Gateway Protocol' (Border Gatway Protocol)",
                        "BGP is the protocol that runs between autonomus systems"
                    ],
                    notes: [
                        "internet is a lot of routers & a bunch of computers with higher level routers",
                        "dynamically acting routing tables"
                    ],
                    protocolGroups: [
                        {
                            name: "Interior Gateway Protocol",
                            abbreviation: "IGP",
                            desc: "Communicating within an 'Autonomous System'",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Exterior Gateway Protocol",
                            abbreviation: "EGP",
                            desc: "communicating outside of an 'Autonomous System' ",
                            notes: [
                                "Only One EGP",
                            ],
                            examples: [
                                "Border Gateway Protocol; BGP"
                            ]
                        },
                    ],
                    protocolTypes: [
                        {
                            name: "Distance Vector",
                            desc: "sends routing table to all neighbors, neighbors will evaluate their own, then determine shortest path",
                            notes: [
                                "Grandaddy",
                                "uses hop count",
                                "operates on an interval to update, so the data may be stale."
                            ],
                            examples: [
                                "RIP",
                            ]
                        },
                        {
                            name: "Link State",
                            desc: "link state adverts to check if the resource/neighbor would like to update since the machine that 'has' updated just has.",
                            notes: [
                                "modern",
                                "establishes 'convergence' much faster"
                            ],
                            aspects: [
                                {
                                    name: "link state advertisement",
                                    desc: ""
                                }
                            ]
                        },
                    ],
                    aspects: [
                        {
                            name: "convergence",
                            desc: "where all router tables reflect all routes",
                        },
                        {
                            name: "Metric Value",
                            desc: "allows for prioritization; complex",
                            notes: [
                                "early protocols used the 'hop count' as a metric value",
                                "different protocols use this field in different ways to implement efficient transmission"
                            ]
                        },
                        {
                            name: "Maximum Transmission Unit",
                            abbreviation: "MTU",
                            desc: "how much info can be carried within a frame",
                            notes: [
                                "ethernet: default 1,500bytes",
                                "the internet is made up of modem DOSIS, DSL, not just ethernet"
                            ]
                        },
                        {
                            name: "bandwidth",
                            desc: "bandwidth logically undercuts other methods like 'hop count' for analysis on efficient communication/transmission."
                        },
                        {
                            name: "Cost",
                            desc: "",
                        },
                        {
                            name: "latency",
                            desc: "how long does this route take to respond; satellite distance can make a difference."
                        }
                    ]
                },//end 'Introduction to Routing Protocols'
                {
                    name: "Routing Information Protocol",
                    abbreviation: "RIP",
                    desc: "",
                    sectionTips: [
                        "RIP is a Distance Vector protocol that uses Hop counts to determine routes",
                        "RIP1 used only Classful networks",
                        "RIP's max Hop count is 15",
                    ],
                    notes: [
                        "one of the oldest routing protocols",
                        "IGP (interior gateway protocol)",
                        "distance vector protocol",
                        "fixed interval on sharing routing table; convergence can be faster",
                        "uses hop counts",
                        "max hop count of 15 hops"
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ],
                    process: [
                        {
                            name: "initial setup",
                            details: [
                                "routers x,y,z have their respective networks on the routing table: a,b,c",
                            ]
                        },
                        {
                            name: "first run on the fixed interval",
                            details: [
                                "routers share their own routing tables to each other, and now can account for the location of the networks attached to the neighboring routers."
                            ]
                        }
                    ]
                },//end RIP
                {
                    name: "Open Shortest Path First",
                    abbreviation: "OSPF",
                    desc: "",
                    sectionTips: [
                        "OSPF is a link state protocol",
                        "OSPF uses Area IDs",
                        "OSPF Converges Very quickly"
                    ],
                    notes: [
                        "link state",
                        "Interior Gateway Protocol",
                        "#1 dynamic protocol on individual areas",
                        "not terribly easy to configure",
                        "set up: not on the net plus",
                        "designated router: needed to 'lead' the network",
                        "convergence can happen in 'seconds'",
                        "CIDR compatible",
                        "works well with BGP"
                    ],
                    aspects: [
                        {
                            name: "link state advertisements",
                            desc: "offers to show routing table once the net is connected",
                            notes: [
                                "talking to others to determine 'master' automatically",
                            ]
                        },
                        {
                            name: "area ID",
                            desc: "",
                            notes: [
                                "look like IP addresses",
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end OSPF
                {
                    name: "Border Gateway Protocol",
                    abbreviation: "BGP",
                    desc: "",
                    sectionTips: [
                        "BGP is a hybrid between 'link state' and 'distance vector'",
                        "BGP is the primary protocol for the internet",
                        "BGP is based around the concept of Autonomous Systems",
                    ],
                    notes: [
                        "hybrid: Link State & Distance Vector",
                        "BGP breaks all networks down into about 20,000 Autonomous Systems or AS",
                        "exterior gateway protocol",
                    ],
                    aspects: [
                        {
                            name: "Router Networks",
                            desc: "Often the ISP's, and miles apart- carrying data from LAN to LAN",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Autonomous Systems",
                            abbreviation: "AS",
                            desc: "",
                            notes: [
                                "Has direct or indirect control over all routers & networks within the AS",
                                ""
                            ],
                            aspects: [
                                {
                                    name: "Autonomous Systems Number",
                                    desc: "32bit number; 1-4billion",
                                    notes: [
                                        "for a long time just 16bit#, which would only have 65,535",
                                        "most are from 1-50,000"
                                    ]
                                }
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end BGP
            ]
        },//end 'Routing' (8)
        {
            number: 9,
            name: "TCP/IP Applications",
            desc: "",
            sections: [
                {
                    name: "Introduction to TCP and UDP",
                    desc: "",
                    sectionTips: [
                        "TCP Segments vs UDP Datagrams",
                        "TCP is connection-based; allows the computer to detect when a packet is missing and make correction",
                        "UDP is connection-less; used when speed is valued over verification of the full payload's delivery."
                    ],
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "Server",
                            desc: "Offering services",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Client",
                            desc: "Consuming services",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ],
                    TCP: {
                        desc: "Connection-Based Communication",
                        notes: [
                            "",
                        ],
                        aspects: [
                            {
                                name: "TCP Segment",
                                desc: "",
                                notes: [
                                    "",
                                ],
                                aspects: [
                                    "port-to",
                                    "port-from",
                                    {
                                        name: "Sequence Number",
                                        desc: "keeps the order",
                                    },
                                    {
                                        name: "Acknowledgement",
                                        abbreviation: "ACK",
                                        desc: "",
                                        notes: [
                                            "called a 3-way handshake",
                                            "handshake progress flag involved"
                                        ],
                                        steps: [
                                            {
                                                desc: "server is listening, Client sends a 'SYN'",
                                                aspects: [
                                                    {
                                                        name: "SYN",
                                                        desc: "",
                                                        notes: [
                                                            "sequence number is incremented, among other tasks of the SYN",
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                desc: "Server responds to the SYN, to the client, with a 'SYN ACK'",
                                                aspects: [
                                                    {
                                                        name: "SYN ACK",
                                                        desc: "",
                                                        notes: [
                                                            "",
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                desc: "client finally replies with an 'ACK'",
                                                notes: [
                                                    "TCP connection complete",
                                                ]
                                            },
                                            {
                                                desc: "close the connection",
                                                notes: [
                                                    "can occur at the client or server."
                                                ],
                                                methods: [
                                                    {
                                                        name: "client closes",
                                                        aspects: [
                                                            {
                                                                name: "FIN",
                                                                desc: "tells the server to close the connection",
                                                            }
                                                        ],
                                                        steps: [
                                                            "client sends 'FIN'",
                                                            "server sends 'FIN ACK'",
                                                            "client responds with 'ACK'"
                                                        ]
                                                    },
                                                    {
                                                        name: "server closes",
                                                        desc: "server timeout or otherwise stops responding",
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    UDP: {
                        desc: "connectionless communication",
                        notes: [
                            "no handshake",
                            "VoIP",
                            "less overhead",
                            "where speed is valued",
                            "DHCP uses Datagram Protocol"
                        ],
                        aspects: [
                            {
                                name: "UDP Datagram",
                                desc: "",
                                notes: [
                                    "",
                                ],
                                aspects: [
                                    "port-to",
                                    "port-from",
                                    "length",
                                    {
                                        name: "checksum",
                                        desc: "verifies the length",
                                        notes: [
                                            "",
                                        ]
                                    },
                                    "data"
                                ]
                            }
                        ]
                    }
                },//end Introduction to TCP and UDP
                {
                    name: "ICMP and IGMP",
                    desc: "",
                    sectionTips: [
                        "ICMP works at the IP Layer of the OSI model; Ping and ARP are ICMP applications",
                        "IGMP (Internet Group Management Protocol) provides Multicasting support",
                        "Multicasting addreses always start with 224.{anything}"
                    ],
                    notes: [
                        "",
                    ],
                    aspects: [
                        {
                            name: "Internet Control Message Protocol",
                            abbreviation: "ICMP",
                            desc: "",
                            notes: [
                                "doesn't work at the transport layer",
                                "works at Layer3 (Internet or Logical layer) of the OSI model",
                                "isn't concerned with port numbers which would be at the 'transport' layer",
                            ],
                            aspects: [
                                {
                                    name: "Type",
                                    desc: "40-50 different types, qualifying the type of message being sent.",
                                    examples: [
                                        {
                                            name: "Ping",
                                            desc: "just says 'hello' and leaves it up to the receiving machine to respond."
                                        },
                                        {
                                            name: "ARP",
                                            desc: "also just needs a simple response from a machine to verify or satisfy a flag",
                                        }
                                    ]
                                }
                            ]
                        },//end ICMP (Internet Control Message Protocol)
                        {
                            name: "Internet Group Management Protocol",
                            abbreviation: "IGMP",
                            desc: "",
                            notes: [
                                "works at Layer3 (Internet or Logical layer) of the OSI model",
                            ],
                            examples: [
                                {
                                    desc: "having friends connect to watch the video",
                                    implications: [
                                        
                                    ]
                                }
                            ],
                            aspects: [
                                {
                                    name: "multi-cast",
                                    aspects: [
                                        {
                                            name: "IP Reservation",
                                            desc: "224.{anything}; a whole group of IPs for this function",
                                            notes: [
                                                "224.{anything} is the multicast",
                                            ]
                                        }
                                    ],
                                    notes: [
                                        "will send out a multicast address so that the resource can be multiplied to different users that have the multicast",
                                    ]
                                }        
                            ]
                        },
                    ]
                },//end ICMP and IGMP
                {
                    name: "Introduction to Wireshark",
                    desc: "wireshark is a protocol/packet analyzer",
                    sectionTips: [
                        "wireshark is a packet/protocol analyzer",
                        "3rd Party tool that is free; Wireshark",
                        "the Exam: expects one to know what Wireshark is, not necessarily be an expert using it",
                    ],
                    notes: [
                        "download wireshark: www.wireshark.org",
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end 'Introduction to Wireshark'
                {
                    name: "Introduction to netstat",
                    desc: "a command that lists all the open ports and connections between my PC and others.",
                    sectionTips: [
                        "netstat lists all open ports and network connections on the machine",
                        "run netstat at the command prompt",
                        "know the 'netstat' switches/parameters"
                    ],
                    notes: [
                        "process explorer: 3rd party great tool; Mark Rissinovic",
                        "TCP View: 3rd party great tool; Mark Rissinovic"
                    ],
                    subCommands: [
                        {
                            name: "/n",
                            desc: "gives raw numbers instead of descriptions in letters",
                        },
                        {
                            name: "/b",
                            desc: "shows the 'executable' for every connection",
                        },
                        {
                            name: "/o",
                            desc: "shows the 'processId' for every connection",
                        },
                        {
                            name: "/a",
                            desc: "active ports, even the ones without current connections",
                        },
                        {
                            name: "/r",
                            desc: "routing table",
                            notes: [
                                "the same return as 'route print'"
                            ]
                        }
                    ],
                    aspects: [
                        {
                            name: "Port 443",
                            desc: "HTTPS; Secure HTTP",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end Introduction to netstat
                {
                    name: "Web Servers",
                    desc: "",
                    sectionTips: [
                        "Web servers host web resources, clients request access to these resources",
                        "HTTP uses TCP port 80 by default",
                        "HTTPS uses TCP port 443 by default, and TLS encryption",
                    ],
                    notes: [
                        "server is just software",
                        "web server can be run on 'any' computer",
                        "determine whether a web server is running on the machine",
                        "CompTIA is concerned with knowledge as a client; internet explorer",
                    ],
                    aspects: [
                        {
                            name: "protocols",
                            desc: "",
                            notes: [
                                "",
                                ""
                            ],
                            aspects: [
                                {
                                    name: "HTTP",
                                    port: 80,
                                    desc: "grandaddy of web protocols",
                                    notes: [
                                        "problem: not secure",
                                    ]
                                },
                                {
                                    name: "HTTPS",
                                    port: 443,
                                    desc: "Secure HTTP",
                                    notes: [
                                        "uses SSL (old) & TLS; HTTPS' encryption",
                                    ],

                                }
                            ]
                            
                        },
                        {
                            name: "Server Software",
                            desc: "",
                            notes: [
                                "",
                            ],
                            aspects: [
                                {
                                    name: "Microsoft IIS (Internet Information Service)",
                                    desc: ""
                                },
                                {
                                    name: "APACHE",
                                    desc: "open source server"
                                },
                            ]
                        },
                        {
                            name: "internet explorer",
                            desc: "",
                            notes: [
                                "",
                            ],
                            tasks: [
                                {
                                    name: "tools",
                                    desc: "settings gear is considered 'tools'",
                                    notes: [
                                        "'tools > internet options' is the 'settings' or 'help' destination",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end Web Servers
                {
                    name: "File Transfer Protocol",
                    abbreviation: "FTP",
                    ports: [21, 20],
                    desc: "",
                    sectionTips: [
                        "FTP is older, but still popular and useful for transferring files",
                        "FTP servers listen on port 21, and send data back on port 20",
                        "FTP is NOT encrypted & sends data in plain text"
                    ],
                    notes: [
                        "FTP servers aren't generally built into windows",
                        "pre-dates the World Wide Web",
                        "not encrypted, plain text"
                    ],
                    aspects: [
                        {
                            name: "Home Directory",
                            desc: "where the client initially has access to when opening the connection",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "Anonymous Account",
                            desc: "'Anonymous' accounts enable public access to FTP Servers",
                            notes: [
                                "no password",
                                "good manners to use an email client as the 'password' value since its not being used for authentication",
                            ]
                        },
                        {
                            name: "commands",
                            desc: "",
                            notes: [
                                "",
                            ],
                            commands: [
                                {
                                    name: "get",
                                    desc: "request a resource"
                                },
                                {
                                    name: "put",
                                    desc: "write a resource to the disk",
                                }
                            ]
                        },
                        {
                            name: "Trivial FTP",
                            abbreviation: "TFTP",
                            desc: "UDP port 69, not as robust as FTP",
                            notes: [
                                "identical but more light weight compared to FTP",
                            ]
                        }
                    ]
                },//end FTP
                {
                    name: "Email Servers and Clients",
                    desc: "",
                    sectionTips: [
                        "SMTP: TCP - 25",
                        "POP3: TCP - 110",
                        "IMAP: TCP - 143"
                    ],
                    notes: [
                        "email: sending & receiving",
                        "client application: outlook, thunderbird",
                        "email is based on domainNames",
                        ""
                    ],
                    aspects: [
                        {
                            name: "setting up an email client",
                            aspects: [
                                {
                                    name: "outgoing server",
                                    protocol: "SMTP",
                                    ports: [25, 587],

                                },
                                {
                                    name: "incoming server",
                                    protocol: "",
                                    ports: [

                                    ],
                                    desc: "",
                                    notes: [
                                        "",
                                    ]
                                }
                            ]
                        }
                        {
                            name: "client",
                            desc: "sending email to the other clients, and receiving from other clients",
                            notes: [
                                "",
                            ]
                        },
                        {
                            name: "protocols",
                            desc: "",
                            notes: [
                                "Plain Text: smtp, IMAP, and POP3 are all in the clear",
                            ],
                            types: [
                                {
                                    name: "Simple Mail Transfer Protocol",
                                    abbreviation: "SMTP",
                                    portType: "TCP",
                                    port: 25,
                                    desc: "sending email",
                                    notes: [
                                        "",
                                    ]
                                },
                                {
                                    name: "Post Office Protocol v3",
                                    abbreviation: "POPv3",
                                    portType: "TCP",
                                    port: 110,
                                    desc: "for receiving email",
                                    notes: [
                                        "all emails are downloaded to the computer",
                                    ]
                                },
                                {
                                    name: "Internet message Access Protocol v4",
                                    abbreviation: "IMAP4",
                                    portType: "TCP",
                                    port: 143,
                                    desc: "receiving email",
                                    notes: [
                                        "copies of the email are left in the server, but a view of the emails is accessible on the local client",
                                    ]
                                }
                            ]
                        },
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end 'Email Servers and Clients'
                {
                    name: "Telnet and SSH",
                    desc: "remotely access a system or file system",
                    sectionTips: [
                        "Telnet is un-encrypted and runs over TCP port 23",
                        "SSH: port: 22, tcp type",
                        "SSH is fully encrypted and has replaced telnet almost entirely"
                    ],
                    notes: [
                        ""

                    ],
                    tools: [
                        {
                            name: "freeSSHd Telnet Server",
                            url: "http://www.freesshd.com/?ctt=download",
                            notes: [
                                "user profiles needed",
                                "NT password"
                            ],
                            blindspots: [
                                "NT Password",
                                "setting up the Telnet Server on the Public IP"
                            ]
                        },
                        {
                            name: "PuTTY",
                            url: "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",
                            desc: "telnet/SSH client",
                            notes: [
                                "free",
                                "robust"
                            ]
                        }
                    ],
                    aspects: [
                        {
                            name: "Telnet",
                            port: 23,
                            desc: "",
                            notes: [
                                "original remote management tool",
                                "plain text or 'in the clear' comms",
                                "allows access to the command prompt",
                                "SSH is a secure version of Telnet",
                                "router & switch connection mostly bc its not encrypted"
                            ],
                            wireshark: [
                                {
                                    time: "4:10",
                                    notes: [
                                        "telnet imulates the command line"
                                    ]
                                }
                            ]
                        },
                        {
                            name: "SecureSHell",
                            abbreviation: "SSH",
                            port: 22,
                            encrypted: true,

                        },
                        {
                            name: "rlogon",
                            port: 513,
                            desc: "Just connect, no authentication; obsolete way to remote access",
                        }
                    ]
                },//end Telnet and SSH
            ]
        },//end 'TCP/IP Applications' (9)
        {
            number: 10,
            name: "Network Naming",
            desc: "",
            sections: [
                {
                    name: "The Domain Name System (DNS), part: 1",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: [
                        ""
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end The Domain Name System (DNS), part: 1
                {
                    name: "The Domain Name System (DNS), part: 2",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: [
                        ""
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end The Domain Name System (DNS), part: 2
                {
                    name: "The Hosts File",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: [
                        ""
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end 'The Hosts File'
                {
                    name: "Windows Name Resolution",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: [
                        ""
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end Windows Name Resolution
                {
                    name: "NET Command",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: [
                        ""
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end 'NET Command'
                {
                    name: "Dynamic DNS",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: [
                        ""
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end Dynamic DNS
                {
                    name: "DNS Troubleshooting",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: [
                        ""
                    ],
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },//end 'DNS Troubleshooting'
            ]
        },//end 'Network Naming' (10)
        {
            number: 11,
            name: "Securing TCP/IP",
            desc: "",
            sections: [
                {
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },
            ]
        },//end 'Securing TCP/IP' (11)
        {
            number: 12,
            name: "Advanced Networking Devices",
            desc: "",
            sections: [
                {
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },
            ]
        },//end 'Advanced Networking Devices' (12)
        {
            number: 13,
            name: "IPv6",
            desc: "",
            sections: [
                {
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },
            ]
        },//end 'IPv6' (13)
        {
            number: 14,
            name: "Remote Connectivity",
            desc: "",
            sections: [
                {
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },
            ]
        },//end 'Remote Connectivity' (14)
        {
            number: 15,
            name: "Wireless Networking",
            desc: "",
            sections: [
                {
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },
            ]
        },//end 'Wireless Networking' (15)
        {
            number: 16,
            name: "Virtualization & Cloud Computing",
            desc: "",
            sections: [
                {
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },
            ]
        },//end 'Virtualization & Cloud Computing' (16)
        {
            number: 17,
            name: "Building a Real-World Network",
            desc: "",
            sections: [
                {
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },
            ]
        },//end 'Building a Real-World Network' (17)
        {
            number: 18,
            name: "Managing Risk",
            desc: "",
            sections: [
                {
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },
            ]
        },//end 'Managing Risk' (18)
        {
            number: 19,
            name: "Protecting Your Network",
            desc: "",
            sections: [
                {
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },
            ]
        },//end 'Protecting Your Network' (19)
        {
            number: 20,
            name: "Network Monitoring",
            desc: "",
            sections: [
                {
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },
            ]
        },//end 'Network Monitoring' (20)
        {
            number: 21,
            name: "Network Troubleshooting",
            desc: "",
            sections: [
                {
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
                    notes: "",
                    aspects: [
                        {
                            name: "",
                            desc: "",
                            notes: [
                                "",
                            ]
                        },
                    ]
                },
            ]
        },//end 'Network Troubleshooting' (21)
    ]
};





/*
    //chapter template
    {
        number: ,
        name: "",
        desc: "",
        sections: [
            {
                name: "",
                desc: "",
                sectionTips: [
                    "",
                ],
                notes: "",
                aspects: [
                    {
                        name: "",
                        desc: "",
                        notes: [
                            "",
                        ]
                    },
                ]
            },
        ]
    }
*/














