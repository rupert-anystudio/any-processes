import { assign, createMachine } from 'xstate'

const initialContext = {
}

const actions = {
  onNext: (c, e) => {
    console.log('onNext', c, e)
  },
}

const guards = {
}

export const generalProcessMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QwHZgE4EMA2AFdA9gMZywB0AIgJaxEEBuGAnmQGJXqwAuABAMIEUXTES4BiNAA8uiUAAcCsKlyqDZISYgBMARgBsZAMw6tAFgAcpgAznDATj32ANCCaIdAdlNkrv3wFYdQPt-PQBfMJdUDBx8YlJKGjpGdBYKMAAzKhRsqB4AZTo5MAkwaXUFJRU1JA1EU0cfIL0tD0tdUztDUxc3BE9vPwCgnRDwyJBorDxCElhyaloGZjIBISxRUvLayuVVFHVNBD09bwbzD26uk5sPXvcvHz8da0NjE08IqLA0abi5hZJZapMj+KwAUh4AEkUPQCFQSFsZDtFHsaqAjnZ-HZQUFsVorMYrHpzDp7v1LmQ7NTqS09A4PHZCV9Jj8YjN4vMyPkuFguGAoCwAEpwMCYdBEAAWSIqqOqB1qRx0OjsZxpjis-gJ2PJKv8VJpdnMWmxOls-lMLKmsVmCR5fIFLAA6gR0ABrWCSghyGUoqr7Q7uazeXQXMHmLWnfy6rEGmnG03mjxWtl-W1c+2YfmC7m8rOOnhxSo4X3yOUBxXuE4GbqGDyBI1YqymO6udyxw1Gk12M2GC0p342znkTPZlijx2lkC7eWB-pdfX2YmtVp1vUx-WdhM9pMD9n-BJrflCVYEbDYMCifY8ABk-HQYvlU5nFYx2hN3lJZmNqo8OmbPRtggoZPL4ZpWB8uhaHuabDqeQg-FwZAwhkroALZZteACCEqSsol5cAArg+z7luidTAY4BheDShKGCcdgmuSIFDL434kuYNgwUOAJkAAQlgKAQLkZAirAYq4aR-rkUcBIGKEZiMv49FamCWjktim6GoyNEksmEzWhyvECZgQkiS67qet6Ulogqb4IKY+hkFoX56Jca7-h4egaR22l2LpFzcUZCQmWZKBQJQcBUFAKA8NQD5XoINmzpWxx-mQjL0rohitHRrZ9JpcbUjpnR6UFB5cqFwnhfxgnVVAyWvhRqr6mGzaEv4EYEupQGFZ2JUOOY5jlem5AAKKSJehHymQTpgAARlUYCUFmmA8AAsgQEBgNguSNTJ7iKWQ5ykm5TLhuYuqalYoFWGY9LKh4WiGCNcETVNM1zYt+HckQD4-HFUUxftdkUS8Q0Zd0pjGP4nUeH+ZJAf+YK3fdPaeM9r28e9RDTfss0LUt-EiG6PwQIDjDYN6aGISDc6eBcx3EkSxoqliPV9MjN1DGjj2YwZqY8QkON44IBPffybCEAhQkUzt1O01IyJltJoOyTY5gZWCmro25mqAZz123Xod3gYYEZY8Lk2459hM-XEECEYlKB06lZjKsdlimKEEbOEjRs8w06NPZbXIizN+DZEh6RKMDSuyqr9MqoYGV6KE2JuaYWihuSFxaEVPbQ5xJovQLg7BWH1uiygZCbTNMfRS78d+rZSddKn6cMlnOdAfSWk0h5XgWKH5BYRk-LoBhXCSmw2Q4DwfFUOee3NyrrduycOhGEXPYfsazZXY8PPNBYViMiPZBjxPU8zxQxCETTQiYUlq-TmRavaDSnuONSYLd4fapqRaD1lqIBF8eTinEK-F8B0EAAFo9Bb0cP4RkfYjSwyNLqawGVbD0TeKYFsXkdARAmCgLacB1CGQqoCJYKQWDsE4LwI8IhlZv0TqlJ6uoSSgiGNiHKRoTj+AvosZIKx0hZByOFAoRQwAJ3XvZQwEFIbQ3rD7LORp8pVk1p0GkHhNQmD0cQsu+5RqJFoSsI8GxWEwI-ggC02i6wWDrMVToiNObcO1gELoWgBFp2EUCOhPDIQwjhAiWRLcUr2RomQcw50mSxKzjYQwXDNasRsJ4R6jF-HmNSHIyJFELDkgcLdRRGszRamGsY2CvEJw5jEhJKUeSmpKjPt4LoXhzR4m6DGG6OjqQQWxJqTi4xvjl2obmB0OYLIei9HIJpsCDE4kYmaJkzN7AvB6TwvwjJs6uOglUoWGY8xjgmfmQUhZCDFmwPM2x4McSnGJFnN4CMrB2E2X0pkQRzqcVLqMkxcFanjmOY6G59N6xby8qEaGLZ7B6O8kjJkt07rDJaGYX5rIxmmMBaC1KXMqSOM6bDbpSMzQlIJPDEkRojF-OqYeQQx4kICHPARa8d4+APmfqDGxc5tQ3S-E456owVTMRMFs3w1JlS-30jSw55AjyIWQigVCk9OU8BwlKfCohiLhLXvk2S3QbrPRUQQmGeiDbaFFaxFsDgTD0ktAciucr6WIRxfZbqBh+W2EFcYRiWDuZ+ANW5FU0N9kysdbVUy9VRKinFI0iJzTEAXB8jdTxZ9HDGi8uiqhpiqrmVdDM70rqKI+K3kaAhxILRtBQUxXqiLU2ZozY4C+uaaoNxinFDgLLyLctSmCCFhIghDV0CgtyyaxVpvNq0Foza6oiRbVAItRx6weGcmaL8pIXjFTHaxE0uyz5CIdeM+di7ECOA0qSoYxhUEtmHoe0x4d8ZfSJhQVaG1yG7XCie-oryt4+PpMYdoAiObuAAmK2sFprWVLDeMh9Ysn0-UKP9WKbauXv3pm8fOsTiRPQ6f+CMV0CFgehhBxkUGMX-OxlXW2Etlp8RJmTOWVM5CP2sWh3FKDvDNByookNdYCPeE8eBghpGL6wZrvByWrBpbHnJukSmCshBfrNE9GJLluqKNOIg4D37COCeI8Jo0omqOPrtpLB2Tt8k9rdQMMgGSmwm0ehs-2hGeaMXNog6l5HaWVw+iZmjSnsPOQcF0M06jzAtCKSp3hEZXluVsEZ3zYtI4nhQwFnsQX-2hZ8eF7T4WV19LThxhoJwEs23xslpC5nnZKdaDiZTsNlSdT0pohA4WDCdmxBGBoWdSvVzIBVgLbkMshcAzl8kSlUaqTTsYEZXnZVkDE7XAg9cgaofYfZf86W-0jbCxF3udbL11jBFqe10H73GbFnXcrhBHbVfjQs2rtmwyBEHc18klKC7bl7LN7Nb0Ls1yu92tjG3AvbYA7t7TiDUl+FaMpO6gReuWeB2DZsKcwdZaAxpBot0fYQXBxfK+GAb6zxQPPRey9P33dsbu9rzNbDha1Nxq6HiA0mBco107c3w2E5VdPSg98WOcq-a0bHkK2irkYuF8137uFDEQT-ZUWbBbc-HkTrMkphdqSpHT9zjPnpFOKTDxRDgUG3HAcIdArH1sUTgdnWnKlkUmzeEmklrUbi9nrJ0awP3lcwaEl+94IZbBn0JA4Fol1-bcL6aVdGpJpVc+oV+23KMmQO5ck782LWzAlMcNYHsR39kRCAA */
createMachine({
  predictableActionArguments: true,
  context: initialContext,
  id: "generalProcess",
  initial: "Discovery",
  // invoke: {
  //   id: 'automaticNext',
  //   src: (c, e) => (callback, onReceive) => {
  //     const id = setInterval(() => callback('next'), 1000)
  //     return () => clearInterval(id)
  //   }
  // },
  states: {
    Discovery: {
      initial: "First Contact",
      meta: {
        index: 1,
        notes: [
          'First phase where we get things started',
        ],
      },
      states: {
        "First Contact": {
          meta: {
            index: 0,
            notes: [
              'Get to know meeting',
            ],
          },
          on: {
            next: {
              target: "Defining Scope",
            },
          },
        },
        "Defining Scope": {
          meta: {
            index: 1,
            notes: [
              'Timeframe',
              'List of Products',
            ],
          },
          on: {
            next: {
              target: "Contract",
            },
          },
        },
        Contract: {
          meta: {
            index: 2,
          },
          on: {
            next: {
              target: "50% Invoice",
            },
          },
        },
        "50% Invoice": {
          meta: {
            index: 3,
          },
          type: "final",
          on: {
            next: {
              target: "#generalProcess.Strategy",
            },
          },
        },
      },
    },
    Strategy: {
      meta: {
        index: 2,
      },
      initial: "Research",
      states: {
        Research: {
          meta: {
            index: 0,
            notes: [
              'Competitor Analysis',
              'Appropriate Workshops',
            ],
          },
          on: {
            next: {
              target: "Workshop",
            },
          },
        },
        Workshop: {
          meta: {
            index: 1,
            notes: [
              'Persona',
              'Golden Circle',
              'Benchmarking',
              'Stakeholder Map',
              'Elevator Pitch',
              'Value Check',
              'IKIGAI',
            ],
          },
          on: {
            next: {
              target: "Strategy Proposal",
            },
          },
        },
        "Strategy Proposal": {
          meta: {
            index: 2,
          },
          on: {
            next: {
              target: "Strategy",
            },
          },
        },
        Strategy: {
          meta: {
            index: 3,
            notes: [
              'Target audience',
              'Purpose & Vision',
              'Core Values',
              'Touch Points',
              'USP',
              'Content Strategy',
              'Mission Statement',
              'Brand Architecture',
            ],
          },
          type: "final",
          on: {
            next: {
              target: "#generalProcess.Content",
            },
          },
        },
      },
    },
    Content: {
      meta: {
        index: 3,
      },
      initial: "Collection & Creation",
      states: {
        "Collection & Creation": {
          meta: {
            index: 0,
            notes: [
              'Imagery',
              'Videos',
              'Textual Content',
              'Tabular Data',
              'Amount of data',
              'Languages',
            ],
          },
          on: {
            next: {
              target: "Information Architecture",
            },
          },
        },
        "Information Architecture": {
          meta: {
            index: 1,
            notes: [
              'Hirarchy of content',
              'Localisation',
              'Aggregated data',
            ],
          },
          type: "final",
          on: {
            next: {
              target: "#generalProcess.Branding",
            },
          },
        },
      },
    },
    Branding: {
      meta: {
        index: 4,
      },
      initial: "Research",
      states: {
        Research: {
          meta: {
            index: 0,
          },
          on: {
            next: {
              target: "Workshop",
            },
          },
        },
        Workshop: {
          meta: {
            index: 1,
            notes: [
              'Good & bad examples',
              'Competitor analysis',
            ],
          },
          on: {
            next: {
              target: "Design Direction",
            },
          },
        },
        "Design Direction": {
          meta: {
            index: 2,
          },
          on: {
            next: {
              target: "Branding",
            },
          },
        },
        Branding: {
          meta: {
            index: 3,
            notes: [
              'Color Sheme',
              'Typography',
              'Imagery',
              'Tone of voice',
              'Motion',
              'Logo & Iconography',
            ],
          },
          type: "final",
          on: {
            next: {
              target: "#generalProcess.Website",
            },
          },
        },
      },
    },
    Website: {
      meta: {
        index: 5,
      },
      initial: "Data Modeling",
      states: {
        "Data Modeling": {
          meta: {
            index: 0,
            notes: [
              'Reusability',
              'Data first approach',
              'Future proofing',
            ],
          },
          on: {
            next: {
              target: "Screen Design",
            },
          },
        },
        "Screen Design": {
          meta: {
            index: 1,
            notes: [
              'Mobile first',
              'Micro Interactions',
              'Animations',
            ],
          },
          on: {
            next: {
              target: "Backend Development",
            },
          },
        },
        "Backend Development": {
          meta: {
            index: 2,
            notes: [
              'Based on data modeling',
              'Headless CMS',
              'Preview deployment',
            ],
          },
          on: {
            next: {
              target: "Frontend Development",
            },
          },
        },
        "Frontend Development": {
          meta: {
            index: 3,
            notes: [
              'Components',
              'Pages',
              'Composition',
              'Preview deployment',
            ],
          },
          on: {
            next: {
              target: "Production",
            },
          },
        },
        Production: {
          meta: {
            index: 4,
            notes: [
              'Deployment',
              'Login Handover',
            ],
          },
          type: "final",
          on: {
            next: {
              target: "#generalProcess.Aftermath",
            },
          },
        },
      },
    },
    // Execution: {
    //   meta: {
    //     index: 5,
    //   },
    //   type: "parallel",
    //   states: {
    //     Website: {
    //       meta: {
    //         index: 0,
    //       },
    //       initial: "Data Modeling",
    //       states: {
    //         "Data Modeling": {
    //           meta: {
    //             index: 0,
    //             notes: [
    //               'Reusability',
    //               'Data first approach',
    //               'Future proofing',
    //             ],
    //           },
    //           on: {
    //             next: {
    //               target: "Screen Design",
    //             },
    //           },
    //         },
    //         "Screen Design": {
    //           meta: {
    //             index: 1,
    //             notes: [
    //               'Mobile first',
    //               'Micro Interactions',
    //               'Animations',
    //             ],
    //           },
    //           on: {
    //             next: {
    //               target: "Backend Development",
    //             },
    //           },
    //         },
    //         "Backend Development": {
    //           meta: {
    //             index: 2,
    //             notes: [
    //               'Based on data modeling',
    //               'Headless CMS',
    //               'Preview deployment',
    //             ],
    //           },
    //           on: {
    //             next: {
    //               target: "Frontend Development",
    //             },
    //           },
    //         },
    //         "Frontend Development": {
    //           meta: {
    //             index: 3,
    //             notes: [
    //               'Components',
    //               'Pages',
    //               'Composition',
    //               'Preview deployment',
    //             ],
    //           },
    //           on: {
    //             next: {
    //               target: "Production",
    //             },
    //           },
    //         },
    //         Production: {
    //           meta: {
    //             index: 4,
    //             notes: [
    //               'Deployment',
    //               'Login Handover',
    //             ],
    //           },
    //           type: "final",
    //           on: {
    //             next: {
    //               target: "#generalProcess.Aftermath",
    //             },
    //           },
    //         },
    //       },
    //     },
    //     Print: {
    //       meta: {
    //         index: 1,
    //       },
    //       initial: "Design",
    //       states: {
    //         Design: {
    //           meta: {
    //             index: 0,
    //           },
    //           on: {
    //             next: {
    //               target: "Production",
    //             },
    //           },
    //         },
    //         Production: {
    //           meta: {
    //             index: 1,
    //           },
    //           type: "final",
    //         },
    //       },
    //     },
    //     Motion: {
    //       initial: "Design",
    //       meta: {
    //         index: 2,
    //       },
    //       states: {
    //         Design: {
    //           meta: {
    //             index: 0,
    //           },
    //           on: {
    //             next: {
    //               target: "Production",
    //             },
    //           },
    //         },
    //         Production: {
    //           meta: {
    //             index: 1,
    //           },
    //           type: "final",
    //         },
    //       },
    //     },
    //   },
    // },
    Aftermath: {
      initial: "Final Billing",
      meta: {
        index: 6,
      },
      states: {
        "Final Billing": {
          meta: {
            index: 0,
          },
          on: {
            next: {
              target: "Documentation",
            },
          },
        },
        Documentation: {
          meta: {
            index: 1,
          },
          type: "final",
          on: {
            next: {
              target: "#generalProcess.Discovery",
            },
          },
        },
      },
    },
  },
}, {
  actions,
  guards,
})