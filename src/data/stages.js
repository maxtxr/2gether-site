// Edit this file to update stage content - pages are generated from this data.
// status:  'upcoming' | 'active' | 'done'
// blurb:  one short line, used on the square cards on the home page
// report: URL of the stage report on Google Drive, or null when it has not
//         been published yet (the page then says so)

export const stageStatusLabel = {
  active: 'In progress',
  done: 'Complete',
  upcoming: 'Upcoming',
}

const stages = [
  {
    id: 1,
    slug: 'project-proposal',
    title: 'Project proposal',
    dates: '6 October',
    status: 'done',
    summary:
      'The one-page proposal: project title, group, the problem we solve for people who want to play sport locally, the target users, the goal and the competitors we fix.',
    blurb: 'The problem, the users, and what we set out to build.',
    report:
      'https://drive.google.com/file/d/1RlW9ZJXFVttSDPpETWg4Zo9pRXQEXTDu/view?usp=sharing',
    objectives: [
      'State the one-page proposal: title, group members, problem, target users and goal',
      'Describe the users’ needs and difficulties - not the solutions to them',
      'Identify at least one competitor and the design issues we will fix',
      'Discuss the proposal in class and deliver the report before 6 October',
    ],
    deliverables: [
      'One-page written project proposal',
      'Project web site (this site)',
      'Proposal discussion in the class sessions of 21–23 and 28–30 September',
    ],
  },
  {
    id: 2,
    slug: 'user-and-task-analysis',
    title: 'User and task analysis',
    dates: '14 October',
    status: 'done',
    summary:
      'Examine the problem space: who the main users of 2Gether are, what tasks they want to perform, what functionalities the system should offer, and how the work environment is.',
    blurb: 'User classes, high-level tasks, scenarios and interviews.',
    report: 'https://drive.google.com/file/d/19Vb-tNDuJOQP3jghX2VQnVmSPnMaV8YG/view?usp=drive_link',
    objectives: [
      'Identification and characterization of the target users, tasks and scenarios',
      'User analysis: identify the characteristics of the target user population, one entry per user class',
      'Task analysis: find and analyse 3-6 high-level tasks, each with a goal and subtasks',
      'Scenario design: write 3 scenarios that include the tasks considered in the task analysis',
      'Interview at least 3 representative users (at least 1 per user class), observing them in the real environment if possible',
      'Present conclusions justified by references to the observations, without extended narratives of the interviews',
    ],
    deliverables: [
      'Report (max. 6 pages): project title, problem, users, tasks, scenarios and interviews',
      'Task analysis: 3-6 high-level tasks with objective, pre-conditions, sub-tasks and exceptions',
      'Delivery: 14 October',
    ],
  },
  {
    id: 3,
    slug: 'first-prototype',
    title: '1st Prototype (mock-up)',
    dates: '26/28 October (tests) - 2 November (report)',
    status: 'done',
    summary:
      'Build a throw-away paper prototype of 2Gether that handles at least 3 of the scenarios from the task analysis, brief the test users, run the tests in class on 26/28 October and write the prototype report.',
    blurb: 'Paper prototype, storyboards and in-class user tests.',
    report: 'https://drive.google.com/file/d/1Z_F83wtGeYCJIOPvAHED0czw56tFsCzK/view?usp=drive_link',
    objectives: [
      'Sketch the interface by hand and brainstorm alternative designs before selecting the one to develop',
      'Describe how the preliminary interface performs each of the 3 scenarios (storyboards)',
      'Build the throw-away prototype: static background, screens, menus and interface components, plus the dynamic parts',
      'Write a short briefing for the test users (half a page, purpose and background only - no how-to-use instructions)',
      'Write the 3 scenarios as concrete goals (max. 5 minutes each) without specifying the actions to execute',
      'Assign the roles of computer, facilitator and observers, swapping them after every test, and practise running the prototype',
      'Brief each user, present one scenario at a time, watch the task execution and take observation notes (15 minutes max per user)',
      'Collect the usability problems found during the tests and possible solutions for the report',
    ],
    deliverables: [
      'Report: sketches, prototype photos, storyboards, briefing, scenarios and observations',
      'In-class testing session on 26/28 October (mandatory) - bring post-its, paper and colour pens',
      'Delivery: 2 November',
    ],
  },
  {
    id: 4,
    slug: 'computational-prototype',
    title: 'Computational prototype',
    dates: 'active',
    status: 'upcoming',
    summary: 'To be announced when the stage assignment is published.',
    blurb: 'To be announced.',
    report: null,
    objectives: ['TBA'],
    deliverables: ['TBA'],
  },
  {
    id: 5,
    slug: 'evaluation',
    title: 'Evaluation',
    dates: 'TBA',
    status: 'upcoming',
    summary: 'To be announced when the stage assignment is published.',
    blurb: 'To be announced.',
    report: null,
    objectives: ['TBA'],
    deliverables: ['TBA'],
  },
  {
    id: 6,
    slug: 'evaluation-results',
    title: 'Evaluation results and presentation/discussion',
    dates: 'TBA',
    status: 'upcoming',
    summary: 'To be announced when the stage assignment is published.',
    blurb: 'To be announced.',
    report: null,
    objectives: ['TBA'],
    deliverables: ['TBA'],
  },
]

export default stages
