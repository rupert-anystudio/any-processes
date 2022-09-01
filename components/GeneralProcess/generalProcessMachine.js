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
  //     // This will send the 'INC' event to the parent every second
  //     const id = setInterval(() => callback('next'), 200)
  //     // Perform cleanup
  //     return () => clearInterval(id)
  //   }
  // },
  states: {
    // Idle: {
    //   index: 0,
    //   on: {
    //     next: {
    //       target: "Discovery",
    //       // actions: ['onNext']
    //     },
    //   },
    // },
    Discovery: {
      index: 1,
      initial: "First Contact",
      states: {
        "First Contact": {
          index: 0,
          on: {
            next: {
              target: "Defining Scope",
              // actions: ['onNext']
            },
          },
        },
        "Defining Scope": {
          index: 1,
          on: {
            next: {
              target: "Contract",
              // actions: ['onNext']
            },
          },
        },
        Contract: {
          index: 2,
          on: {
            next: {
              target: "50% Invoice",
              // actions: ['onNext']
            },
          },
        },
        "50% Invoice": {
          index: 3,
          type: "final",
          on: {
            next: {
              target: "#generalProcess.Strategy",
              // actions: ['onNext']
            },
          },
        },
      },
    },
    Strategy: {
      index: 2,
      initial: "Research",
      states: {
        Research: {
          index: 0,
          on: {
            next: {
              target: "Workshop",
              // actions: ['onNext']
            },
          },
        },
        Workshop: {
          index: 1,
          on: {
            next: {
              target: "Strategy Proposal",
              // actions: ['onNext']
            },
          },
        },
        "Strategy Proposal": {
          index: 2,
          on: {
            next: {
              target: "Strategy",
              // actions: ['onNext']
            },
          },
        },
        Strategy: {
          index: 3,
          type: "final",
          on: {
            next: {
              target: "#generalProcess.Content",
              // actions: ['onNext']
            },
          },
        },
      },
    },
    Content: {
      index: 3,
      initial: "Collection & Creation",
      states: {
        "Collection & Creation": {
          index: 0,
          on: {
            next: {
              target: "Information Architecture",
              // actions: ['onNext']
            },
          },
        },
        "Information Architecture": {
          index: 1,
          type: "final",
          on: {
            next: {
              target: "#generalProcess.Branding",
              // actions: ['onNext']
            },
          },
        },
      },
    },
    Branding: {
      index: 4,
      initial: "Research",
      states: {
        Research: {
          index: 0,
          on: {
            next: {
              target: "Workshop",
              // actions: ['onNext']
            },
          },
        },
        Workshop: {
          index: 1,
          on: {
            next: {
              target: "Design Direction",
              // actions: ['onNext']
            },
          },
        },
        "Design Direction": {
          index: 2,
          on: {
            next: {
              target: "Branding",
              // actions: ['onNext']
            },
          },
        },
        Branding: {
          index: 3,
          type: "final",
          on: {
            next: {
              target: "#generalProcess.Execution",
              // actions: ['onNext']
            },
          },
        },
      },
    },
    Execution: {
      index: 5,
      type: "parallel",
      states: {
        Website: {
          index: 0,
          initial: "Data Modeling",
          states: {
            "Data Modeling": {
              index: 0,
              on: {
                next: {
                  target: "Screen Design",
                  // actions: ['onNext']
                },
              },
            },
            "Screen Design": {
              index: 1,
              on: {
                next: {
                  target: "Backend Development",
                  // actions: ['onNext']
                },
              },
            },
            "Backend Development": {
              index: 2,
              on: {
                next: {
                  target: "Frontend Development",
                  // actions: ['onNext']
                },
              },
            },
            "Frontend Development": {
              index: 3,
              on: {
                next: {
                  target: "Production",
                  // actions: ['onNext']
                },
              },
            },
            Production: {
              index: 4,
              type: "final",
              on: {
                next: {
                  target: "#generalProcess.Aftermath",
                  // actions: ['onNext']
                },
              },
            },
          },
        },
        Print: {
          index: 1,
          initial: "Design",
          states: {
            Design: {
              index: 0,
              on: {
                next: {
                  target: "Production",
                  // actions: ['onNext']
                },
              },
            },
            Production: {
              index: 1,
              type: "final",
            },
          },
        },
        Motion: {
          initial: "Design",
          index: 2,
          states: {
            Design: {
              index: 0,
              on: {
                next: {
                  target: "Production",
                  // actions: ['onNext']
                },
              },
            },
            Production: {
              index: 1,
              type: "final",
            },
          },
        },
      },
    },
    Aftermath: {
      initial: "Final Billing",
      index: 6,
      states: {
        "Final Billing": {
          index: 0,
          on: {
            next: {
              target: "Documentation",
              // actions: ['onNext']
            },
          },
        },
        Documentation: {
          index: 1,
          type: "final",
          on: {
            next: {
              target: "#generalProcess.Discovery",
              // actions: ['onNext']
            },
          },
        },
      },
    },
    // End: {
    //   index: 7,
    //   // type: "final",
    //   on: {
    //     next: {
    //       target: "Discovery",
    //     },
    //   },
    // },
  },
}, {
  actions,
  guards,
})