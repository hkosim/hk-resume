const input_data ={
  en:{
    //first body
    title:"RESUME",
    data:[
      {
          subtitle:'PERSONAL INFORMATION',
          contents:[
            {
              type: "img",
              width: "50%",
              imgwidth:"auto",
              imgheight: "15em",
              content:[
                "pic_compressed.png"
              ]
            },
            {
              type: "table",
              width: "40%",
              firstcolumnwidth:"35%",
              content:[
                {
                    label:"First Name",
                    data:[{ title:"Henry", desc:""}]
                },
                {
                    label:"Last Name",
                    data:[{ title:"Kosim", desc:""}]
                },
                {
                    label:"Nationality",
                    data:[{ title:"Indonesian", desc:""}]
                },
                {
                    label:"E-mail",
                    data:[{ title:"henrykosim@gmail.com", desc:""}]
                },
              ]
            }
          ]
        }, //end of 1st body
        //second body
        {
          subtitle:'EDUCATION BACKGROUND',
          contents:[
            {
              type: "table-period",
              width: "90%",
              firstcolumnwidth:"23%",
              content:[
                //first data
                {
                    from:"08/2010",
                    to:"05/2013",
                    data:[
                        {
                            title:"Canisius College Catholic Junior High School, Jakarta.",
                            desc:""
                        }
                    ]
                }, //end of first data
                // second data
                {
                    from:"08/2013",
                    to:"05/2016",
                    data:[
                        {
                            title:"Canisius College Catholic Senior High School, Jakarta.",
                            desc:""
                        }
                    ]
                }, //end of second data
                //third data
                {
                    from:"08/2016",
                    to:"07/2020",
                    data:[
                        {
                            title:"Bachelor???s Degree in Information Engineering at Universitas Gadjah Mada, Yogyakarta, Central Java.",
                            desc:"Title: S.T. Information Engineering (equals to Bachelor of Engineering)"
                        }
                    ]
                }, //end of third data
              ]
            },
          ]
        },
        //end of 2nd body
        //third body
        {
          subtitle:'COURSES AND SEMINARS',
          contents:[
            {
              type: "table-period",
              width: "90%",
              firstcolumnwidth:"23%",
              content:[
                //first data
                {
                    from:"",
                    to:"10/2016",
                    data:[
                        {
                            title:"Web Development and Design Seminar, Yogyakarta.",
                            desc:"",
                        }
                    ]
                },
                //second data
                {
                    from:"",
                    to:"03/2018",
                    data:[
                        {
                            title:"National VR and AR Seminar, Yogyakarta.",
                            desc:""
                        }
                    ]
                },
                //third data
                {
                    from:"09/2020",
                    to:"06/2021",
                    data:[
                        {
                            title:"German Language Course Level B2 ??? C1.2 at Goethe-Institut, Jakarta.",
                            desc:""
                        }
                    ]
                }
              ]
            },
          ]
        },//end of third body
        //fourth body
        {
          subtitle:'WORK EXPERIENCES',
          contents:[
            {
              type: "table-period",
              width: "90%",
              firstcolumnwidth:"23%",
              content:[
                //first data
                {
                    from:"01/2019",
                    to:"02/2019",
                    data:[
                        {
                            title:"Internship in Software Development Department at Indonesian Cloud, Jakarta.",
                            desc:"My team and I were assigned to design and create a dashboard system that could read internal management data such as the absence of workers and worker???s productivity. The whole dashboard system was designed from scratch from the design of the database system and was deployed for internal use."
                        }
                    ]
                },
                //second data
                {
                    from:"10/2020",
                    to:"12/2020",
                    data:[
                        {
                            title:"Assistant Professor in Digital Talent Scholarship 2020, Jakarta.",
                            desc:"Digital Talent Scholarship is a training program that was led by the Ministry of Communication and Informatics. The program was taught by experts like professors or prominent institution. I assisted the professors through the program as an assistant and did various tasks such as grading the participant???s works, revising the modules, and teaching the participants."
                        }
                    ]
                },
              ]
            }
          ]
        },//end of fourth body
        //fifth body
        {
            subtitle:"LANGUAGE",
            contents:[
                {
                    type:"table",
                    width:"90%",
                    firstcolumnwidth:"23%",
                    content:[
                        {
                            label:"Mother Language",
                            data:[
                                {
                                    title:"Indonesian",
                                    desc:""
                                }
                            ]
                        },
                        {
                            label:"Another Language",
                            data:[
                                {
                                    title:"English",
                                    desc:"Advanced, IELTS Academic (Score: 7 from 9)."
                                },
                                {
                                    title:"German",
                                    desc:"Upper-Intermediate (Level C1)."
                                }
                            ]
                        },
                    ]
                }
            ]
        }, //end of fifth body
        //sixth body
        {
            subtitle:"ACHIEVEMENT",
            contents:[
                {
                    type:"table-period",
                    width:'90%',
                    firstcolumnwidth:"23%",
                    content:[
                        //first data
                        {
                            from:"10/2020",
                            to:"12/2020",
                            data:[
                                {
                                    title:"1st place in IT-Competition ???Business IT Case Find-IT???, Yogyakarta. ",
                                    desc:""
                                }
                            ]
                        }, //end of first data
                    ]
                }
            ]
        }, //end of sixth body
        // seventh body
        {
            subtitle:"HOBBIES AND INTERESTS",
            contents:[
                {
                    type:"table",
                    width:"90%",
                    firstcolumnwidth:"23%",
                    content:[
                        {
                            label:"",
                            data:[
                                {
                                    title:"Music, especially Piano",
                                    desc:""
                                },
                                {
                                    title:"Cooking",
                                    desc:""
                                },
                                {
                                    title:"Swimming",
                                    desc:""
                                },
                                {
                                    title:"Travelling",
                                    desc:""
                                },
                            ]
                        },
                    ]
                }
            ]
        }, //end of fifth body
    ]
  },
  de:{
    //first body
    title:"LEBENSLAUF",
    data:[
      {
          subtitle:'PERS??NLICHE INFORMATION',
          contents:[
            {
              type: "img",
              width: "50%",
              imgwidth:"auto",
              imgheight: "15em",
              content:[
                "pic_compressed.png"
              ]
            },
            {
              type: "table",
              width: "40%",
              firstcolumnwidth:"35%",
              content:[
                {
                    label:"Vorname",
                    data:[{ title:"Henry", desc:""}]
                },
                {
                    label:"Familienname",
                    data:[{ title:"Kosim", desc:""}]
                },
                {
                    label:"Nationalit??t",
                    data:[{ title:"Indonesien", desc:""}]
                },
                {
                    label:"E-mail",
                    data:[{ title:"henrykosim@gmail.com", desc:""}]
                },
              ]
            }
          ]
        }, //end of 1st body
        //second body
        {
          subtitle:'SCHULE UND STUDIUM ',
          contents:[
            {
              type: "table-period",
              width: "90%",
              firstcolumnwidth:"23%",
              content:[
                //first data
                {
                    from:"08/2010",
                    to:"05/2013",
                    data:[
                        {
                            title:"Katholische Mittelschule Canisius College, Jakarta.",
                            desc:""
                        }
                    ]
                }, //end of first data
                // second data
                {
                    from:"08/2013",
                    to:"05/2016",
                    data:[
                        {
                            title:"Katholische Oberschule Canisius College, Jakarta.",
                            desc:""
                        }
                    ]
                }, //end of second data
                //third data
                {
                    from:"08/2016",
                    to:"07/2020",
                    data:[
                        {
                            title:"Informatik (Information Engineering) Studium an der Universit??t ???Universitas Gadjah Mada???, Yogyakarta, Mittel Java.",
                            desc:"Titel: S.T. Information Engineering (entspricht Diplom Ingenieur in Deutschland)"
                        }
                    ]
                }, //end of third data
              ]
            },
          ]
        },
        //end of 2nd body
        //third body
        {
          subtitle:'COURSES AND SEMINARS',
          contents:[
            {
              type: "table-period",
              width: "90%",
              firstcolumnwidth:"23%",
              content:[
                //first data
                {
                    from:"",
                    to:"10/2016",
                    data:[
                        {
                            title:"Web-Entwicklung und Design Seminar, Yogyakarta.",
                            desc:"",
                        }
                    ]
                },
                //second data
                {
                    from:"",
                    to:"03/2018",
                    data:[
                        {
                            title:"Nationales VR und AR Seminar, Yogyakarta.",
                            desc:""
                        }
                    ]
                },
                //third data
                {
                    from:"09/2020",
                    to:"06/2021",
                    data:[
                        {
                            title:"Deutschkurs Niveau B2 ??? C1.2 am Goethe-Institut, Jakarta.",
                            desc:""
                        }
                    ]
                }
              ]
            },
          ]
        },//end of third body
        //fourth body
        {
          subtitle:'BERUFLICHER WERDEGANG',
          contents:[
            {
              type: "table-period",
              width: "90%",
              firstcolumnwidth:"23%",
              content:[
                //first data
                {
                    from:"01/2019",
                    to:"02/2019",
                    data:[
                        {
                            title:"Praktikum im Software-Entwicklung-Gebiet bei IT-Firma ???Indonesian Cloud???, Jakarta.",
                            desc:"Unser Team wurde beauftragt, ein Dashboard-System zu entwerfen und zu erstellen, Beobachtung und ??berpr??fung in den internen Managementdaten wie Abwesenheit und Produktivit??t von den Mitarbeitern. Wir fangen von Grundlage an bis zur der Entwicklung des Mock-Ups. "
                        }
                    ]
                },
                //second data
                {
                    from:"10/2020",
                    to:"12/2020",
                    data:[
                        {
                            title:"Als Assistent von Professoren bei ???Digital Talent Scholarship??? 2020, Jakarta.",
                            desc:"Digital Talent Scholarship ist ein Ausbildungsprogramm, das vom Ministerium f??r Kommunikation und Informatik geleitet wurde. Das Programm wurde von Experten wie Professoren oder renommierten Institutionen unterst??tzt. Ich habe die Professoren w??hrend des Seminars assistiert. Die Auftr??ge des Assistenten sind u.a. die Module zu ??berpr??fen, die Aufgaben der Teilnehmer/-innen zu bewerten und die Seminarteilnehmer/-innen zu unterrichten."
                        }
                    ]
                },
              ]
            }
          ]
        },//end of fourth body
        //fifth body
        {
            subtitle:"SPRACHEN",
            contents:[
                {
                    type:"table",
                    width:"90%",
                    firstcolumnwidth:"23%",
                    content:[
                        {
                            label:"Muttersprache",
                            data:[
                                {
                                    title:"Indonesisch",
                                    desc:""
                                }
                            ]
                        },
                        {
                            label:"Fremdsprachen",
                            data:[
                                {
                                    title:"Englisch",
                                    desc:"Sehr gut in Wort und Schrift, IELTS Academic (Note: 7 von 9)."
                                },
                                {
                                    title:"Deutsch",
                                    desc:"Gut in Wort und Schrift, C1 Niveau."
                                }
                            ]
                        },
                    ]
                }
            ]
        }, //end of fifth body
        //sixth body
        {
            subtitle:"HERVORRAGENDE LEISTUNG",
            contents:[
                {
                    type:"table-period",
                    width:'90%',
                    firstcolumnwidth:"23%",
                    content:[
                        //first data
                        {
                            from:"10/2020",
                            to:"12/2020",
                            data:[
                                {
                                    title:"Als Sieger des IT-Wettbewerbs ???Business IT-Case Find-IT???, Yogyakarta.",
                                    desc:""
                                }
                            ]
                        }, //end of first data
                    ]
                }
            ]
        }, //end of sixth body
        // seventh body
        {
            subtitle:"HOBBYS UND INTERESSE",
            contents:[
                {
                    type:"table",
                    width:"90%",
                    firstcolumnwidth:"23%",
                    content:[
                        {
                            label:"",
                            data:[
                                {
                                    title:"Klavier spielen",
                                    desc:""
                                },
                                {
                                    title:"Kochen",
                                    desc:""
                                },
                                {
                                    title:"Schwimmen",
                                    desc:""
                                },
                                {
                                    title:"Reisen",
                                    desc:""
                                },
                            ]
                        },
                    ]
                }
            ]
        }, //end of fifth body
    ]
  },
  
  
  
}

export default input_data;