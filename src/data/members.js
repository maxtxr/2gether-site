// number: student number
// status: 'tba' | 'in-progress' | 'done'
// report: Google Drive URL of that member's report, or null when unpublished

const members = [
  {
    id: 'member-1',
    member: 'Bernardo Vaz',
    number: '77662',
    assignments: [
      {
        id: 'm1-a1',
        title: 'Good and bad user interface design',
        description:
          'One example of good UI design and one of bad UI design, judged on a specific aspect and justified with concrete reasons.',
        dueDate: '5 November',
        status: 'done',
        report: 'https://drive.google.com/file/d/183WBO7fEG9ciS8DCIOppwEvNkkt7ebaE/view?usp=sharing',
      },
      { id: 'm1-a2', title: 'TBA', description: 'Assignment details to be announced.', dueDate: 'TBA', status: 'tba', report: null },
    ],
  },
  {
    id: 'member-2',
    member: 'Bruna Rossa',
    number: '77355',
    assignments: [
      {
        id: 'm2-a1',
        title: 'Good and bad user interface design',
        description:
          'One example of good UI design and one of bad UI design, judged on a specific aspect and justified with concrete reasons.',
        dueDate: '5 November',
        status: 'done',
        report: 'https://drive.google.com/file/d/1PNehGqaKVu815dTqnm6xQRJghRiGLqm0/view?usp=sharing',
      },
      { id: 'm2-a2', title: 'TBA', description: 'Assignment details to be announced.', dueDate: 'TBA', status: 'tba', report: null },
    ],
  },
  {
    id: 'member-3',
    member: 'Gonçalo Cascais',
    number: '77423',
    assignments: [
      {
        id: 'm3-a1',
        title: 'Good and bad user interface design',
        description:
          'One example of good UI design and one of bad UI design, judged on a specific aspect and justified with concrete reasons.',
        dueDate: '5 November',
        status: 'done',
        report: 'https://drive.google.com/file/d/1hZp0s47cQrOiWcjSgUjcAjnl-VA2BlHy/view?usp=sharing',
      },
      { id: 'm3-a2', title: 'TBA', description: 'Assignment details to be announced.', dueDate: 'TBA', status: 'tba', report: null },
    ],
  },
  {
    id: 'member-4',
    member: 'Marta Ferreira',
    number: '76993',
    assignments: [
      {
        id: 'm4-a1',
        title: 'Good and bad user interface design',
        description:
          'One example of good UI design and one of bad UI design, judged on a specific aspect and justified with concrete reasons.',
        dueDate: '5 November',
        status: 'in-progress',
        report: null,
      },
      { id: 'm4-a2', title: 'TBA', description: 'Assignment details to be announced.', dueDate: 'TBA', status: 'tba', report: null },
    ],
  },
]

export default members
