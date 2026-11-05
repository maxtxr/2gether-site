import { Link } from 'react-router-dom'
import site from '../data/site.js'
import product from '../data/product.js'
import stages from '../data/stages.js'
import members from '../data/members.js'
import Icon from '../components/Icons.jsx'
// import PhoneMockup from '../components/PhoneMockup.jsx'
import Logo from '../components/Logo.jsx'
import StageTimeline from '../components/StageTimeline.jsx'
import { scrollToId } from '../utils/scroll.js'

const goalIcons = ['target', 'flame', 'users']

const monogram = (name) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export default function Home() {
  const doneStages = stages.filter((stage) => stage.status === 'done').length
  const activeStage = stages.find((stage) => stage.status === 'active')

  const showStages = (e) => {
    e.preventDefault()
    scrollToId('process')
  }

  return (
    <>
      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__text">
            <p className="eyebrow eyebrow--on-green">{site.course} project</p>

            <h1>
              Find your people.
              <br />
              <em>Play your sport.</em>
            </h1>

            <p className="hero__lead">{site.oneLiner}</p>

            <div className="button-row">
              <button type="button" className="button button--primary" onClick={showStages}>
                See the stages
                <Icon name="arrowRight" size={16} />
              </button>
              <Link to="/project" className="button">
                Read the brief
              </Link>
            </div>
          </div>

          <div className="hero__art">
            {/* <PhoneMockup /> */}
            <Logo size={200} />
          </div>
        </div>
      </section>

      {/* The stages come first: they are the core of the site. */}
      <section
        className="section ruled"
        id="process"
        tabIndex={-1}
        aria-labelledby="process-title"
      >
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">The process - where we are</span>
            <h2 id="process-title">Six stages, from proposal to evaluation</h2>
            <p>
              {doneStages} of {stages.length} stages complete
              {activeStage
                ? ` - stage ${activeStage.id} (${activeStage.title}) is in progress`
                : ''}
              . Every stage has its own page with its objectives, deliverables and
              report  -  open any of them below.
            </p>
          </div>

          <StageTimeline />

          <p className="section-foot">
            <Link to="/stages" className="arrow-link">
              Open the stages overview
              <Icon name="arrowRight" size={16} />
            </Link>
          </p>
        </div>
      </section>

      <section className="section ruled" aria-labelledby="goals-title">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">What we are building</span>
            <h2 id="goals-title">{product.headline}</h2>
            <p>{product.intro}</p>
          </div>

          <div className="props">
            {product.goals.goals.map((goal, i) => (
              <div key={goal.id} className="prop">
                <span className="prop__icon" aria-hidden="true">
                  <Icon name={goalIcons[i]} size={19} />
                </span>
                <h3 className="prop__title">{goal.title}</h3>
                <p className="prop__body">{goal.body}</p>
              </div>
            ))}
          </div>

          <p className="section-foot">
            <Link to="/project" className="arrow-link">
              Read the full product brief
              <Icon name="arrowRight" size={16} />
            </Link>
          </p>
        </div>
      </section>

      <section className="section ruled" aria-labelledby="assignments-title">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">Individual assignments</span>
            <h2 id="assignments-title">Who is doing what</h2>
            <p>
              Every group member tracks their own assignments, each with its report
              link  -  follow the progress here or open the full list.
            </p>
          </div>

          <div className="assign-overview">
            {members.map((m) => {
              const done = m.assignments.filter((a) => a.status === 'done').length
              const total = m.assignments.length
              const pct = total ? (done / total) * 100 : 0
              const left = total - done
              const pending = m.assignments.find(
                (a) => a.status === 'in-progress' || a.status === 'open'
              )

              return (
                <Link key={m.id} to="/assignments" className="assign-member">
                  <span className="assign-member__top">
                    <span className="member-monogram" aria-hidden="true">
                      {monogram(m.member)}
                    </span>
                    <span className="assign-member__id">
                      <span className="assign-member__name">{m.member}</span>
                      <span className="assign-member__number">{m.number}</span>
                    </span>
                    <span className="assign-member__count">
                      {done}/{total} done
                    </span>
                  </span>

                  <span className="member-bar" aria-hidden="true">
                    <span style={{ width: `${pct}%` }} />
                  </span>

                  <span className="assign-member__foot">
                    <span>
                      {left === 0
                        ? 'All assignments done'
                        : pending
                          ? `${left} to go - next due ${pending.dueDate}`
                          : `${left} to go - details to be announced`}
                    </span>
                    <span className="assign-member__go" aria-hidden="true">
                      <Icon name="arrowRight" size={14} />
                    </span>
                  </span>
                </Link>
              )
            })}
          </div>

          <p className="section-foot">
            <Link to="/assignments" className="arrow-link">
              See all assignments
              <Icon name="arrowRight" size={16} />
            </Link>
          </p>
        </div>
      </section>

      <section className="closing">
        <div className="shell">
          <span className="eyebrow">Get involved</span>
          <h2>Follow the project, stage by stage.</h2>
          <p>
            The stages hold everything we have done so far: the proposal, the user
            and task analysis and the first prototype  -  and the assignments page
            tracks who did what.
          </p>
          <div className="button-row">
            <Link to="/stages" className="button button--primary">
              See all stages
              <Icon name="arrowRight" size={16} />
            </Link>
            <Link to="/assignments" className="button">
              Assignments
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
