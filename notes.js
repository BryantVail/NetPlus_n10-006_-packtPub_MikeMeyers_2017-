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
                    name: "",
                    desc: "",
                    sectionTips: [
                        "",
                    ],
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
                        },
                    ]
                },
            ]
        },//end 'TCP/IP Basics' (7)
        {
            number: 8,
            name: "Routing",
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
        },//end 'Routing' (8)
        {
            number: 9,
            name: "TCP/IP Applications",
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
        },//end 'TCP/IP Applications' (9)
        {
            number: 10,
            name: "Network Naming",
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














