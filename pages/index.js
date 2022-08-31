import NestedSteps from '../components/NestedSteps'

const steps = [
  {
    id: 'discovery',
    title: 'Discovery',
    category: 'prepost',
    steps: [
      {
        id: '1',
        title: 'Firt Contact',
      },
      {
        id: '2',
        title: 'Defining Scope',
      },
      {
        id: '3',
        title: 'Contract',
      },
      {
        id: '4',
        title: '50% Invoice',
      },
    ]
  },
  {
    id: 'strategy',
    title: 'Strategy',
    category: 'conceptual',
    steps: [
      {
        id: '1',
        title: 'Research',
      },
      {
        id: '2',
        title: 'Workshop',
      },
      {
        id: '3',
        title: 'Strategy Proposal',
      },
      {
        id: '4',
        title: 'Strategy',
      },
    ]
  },
  {
    id: 'content',
    title: 'Content',
    category: 'conceptual',
    steps: [
      {
        id: '1',
        title: 'Collection & Creation',
      },
      {
        id: '2',
        title: 'Information Architecture',
      },
    ]
  },
  {
    id: 'branding',
    title: 'Branding',
    category: 'conceptual',
    steps: [
      {
        id: '1',
        title: 'Research',
      },
      {
        id: '2',
        title: 'Workshop',
      },
      {
        id: '3',
        title: 'Design Direction',
      },
      {
        id: '4',
        title: 'Branding',
      },
    ]
  },
  {
    id: 'execution',
    title: 'Execution',
    category: 'concrete',
    steps: [
      {
        id: 'website',
        title: 'Website',
        steps: [
          {
            id: '1',
            title: 'Data Modeling',
          },
          {
            id: '2',
            title: 'Screen Design',
          },
          {
            id: '3',
            title: 'Backend Development',
          },
          {
            id: '4',
            title: 'Frontend Development',
          },
          {
            id: '5',
            title: 'Production',
          },
        ]
      },
      {
        id: 'print',
        title: 'Print',
        steps: [
          {
            id: '1',
            title: 'Design',
          },
          {
            id: '2',
            title: 'Production',
          },
        ]
      },
      {
        id: 'motion',
        title: 'Motion',
        steps: [
          {
            id: '1',
            title: 'Design',
          },
          {
            id: '2',
            title: 'Production',
          },
        ]
      },
    ]
  },
  {
    id: 'postproject',
    title: 'Post Project',
    category: 'prepost',
  },
]

export default function Home() {
  return (
    <>
      {/* <BoxFlow steps={steps} /> */}
      <NestedSteps steps={steps} />
    </>
  )
}
