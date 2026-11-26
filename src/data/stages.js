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
    report: 'https://drive.google.com/file/d/1RlW9ZJXFVttSDPpETWg4Zo9pRXQEXTDu/view?usp=sharing',
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
    slug: 'functional-prototype',
    title: 'Functional prototype',
    dates: '26 November',
    status: 'done',
    summary:
      'Build a high-fidelity interactive computational prototype on React Native and Supabase responding to Stage 3 user test findings. Features include real-time event discovery with OpenStreetMap/Leaflet geocoding, attendee chat threads, post-event accessibility accuracy auditing, and user management.',
    blurb: 'High-fidelity mobile prototype and comprehensive system evaluation setup.',
    report: 'https://drive.google.com/file/d/17Uu8K_JLqTuQOXAZIPDlNm0a7hWvoLJW/view?usp=drive_link',
    builds: [
      {
        label: 'Download Standalone Android App (.apk)',
        url: 'https://github.com/maxtxr/2gether-app/releases/download/v1.0.0/2gether-app.apk',
      },
      {
        label: 'Source Code Package (.zip)',
        url: 'https://github.com/maxtxr/2gether-app/releases/download/v1.0.0/2gether-app_stage4.zip',
      },
    ],
    objectives: [
      'Develop a functional prototype of the interactive system running on mobile (React Native + Expo SDK 58)',
      'High fidelity in look: establish color schemes, icons, typography, and card-based responsive mobile layouts',
      'High fidelity in feel: authentic system behavior including live chat, push-like notifications, waitlist logic, and avatar management',
      'Medium fidelity in breadth: fully support the 3 core scenarios and workflows tested in Stage 3',
      'Low fidelity in depth: focused backend implementation through Supabase Auth, Storage, and Realtime',
      'Package and distribute the prototype to colleagues for Stage 5 heuristic evaluation',
    ],
    deliverables: [
      'Functional prototype package (.apk download and .zip repository build)',
      'Startup and configuration instructions (Node.js 22.13+, Expo Go, Supabase credentials)',
      'Stage 4 Evaluation Report: Prototype URLs, startup instructions, updated briefing, evaluation scenarios, incomplete parts/scope, and development tools',
      'Delivery: 26 November',
    ],
  },
  {
    id: 5,
    slug: 'heuristic-evaluation',
    title: 'Heuristic evaluation',
    dates: '1 December',
    status: 'active',
    summary:
      'Conduct a thorough heuristic evaluation of an assigned peer group’s functional prototype using Nielsen’s 10 Usability Heuristics, compiling a structured evaluation report with severity ratings and constructive redesign recommendations.',
    blurb: 'Heuristic evaluation and severity rating of assigned peer prototype.',
    report: null,
    objectives: [
      'Install and run the assigned colleagues’ interactive prototype following their startup instructions',
      'Inspect the interface against Nielsen’s 10 Usability Heuristics across all supported user scenarios',
      'Identify usability problems, noting title, heuristic violated, detailed description, severity rating (0–4), proposed solution, and screenshot location',
      'Format detected issues using the standardized reporting table (Nº, Problem, Heuristic, Description, Severity, Solution, Screenshot)',
      'Document evaluation timeline: date prototype was received and date evaluation report is delivered',
      'Submit the evaluation report by email in reply to colleagues with CC to tir@fct.unl.pt',
    ],
    deliverables: [
      'Heuristic Evaluation Report with formatted findings table, severity assessments, and screenshot annotations',
      'Delivery by email to peer group and professor (tir@fct.unl.pt): 1 December',
    ],
  },
  {
    id: 6,
    slug: 'evaluation-results',
    title: 'Evaluation results and presentation/discussion',
    dates: 'TBA',
    status: 'upcoming',
    summary: 'Receive and analyze the peer evaluation report, document design iterations, and prepare final project presentation.',
    blurb: 'Consolidate evaluation findings and deliver final project presentation.',
    report: null,
    objectives: ['TBA'],
    deliverables: ['TBA'],
  },
]

export default stages
