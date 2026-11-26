import { Link, useParams } from 'react-router-dom'
import stages, { stageStatusLabel } from '../data/stages.js'
import NotFound from './NotFound.jsx'

export default function Stage() {
  const { slug } = useParams()
  const index = stages.findIndex((s) => s.slug === slug)

  if (index === -1) return <NotFound />

  const stage = stages[index]
  const prev = stages[index - 1]
  const next = stages[index + 1]

  return (
    <div className="page-section">
      <article className="stage">
        <div className="page-head">
          <div className="stage__eyebrow">
            <span>
              Stage {stage.id} of {stages.length}
            </span>
            <span className={`status status--${stage.status}`}>
              {stageStatusLabel[stage.status]}
            </span>
          </div>
          <h1>{stage.title}</h1>
          <p className="stage__summary">{stage.summary}</p>
        </div>

        <dl className="stage__meta">
          <div>
            <dt>Status</dt>
            <dd>{stageStatusLabel[stage.status]}</dd>
          </div>
          <div>
            <dt>Dates</dt>
            <dd>{stage.dates}</dd>
          </div>
        </dl>

        <div className="stage__columns">
          <section>
            <h2>Objectives</h2>
            <ul className="check-list">
              {stage.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Deliverables</h2>
            <ul className="check-list">
              {stage.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section>
          <h2>Report</h2>
          <div className="report" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {stage.builds && stage.builds.length > 0 && (
              <div
                className="builds-row"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                {stage.builds.map((build) => (
                  <a
                    key={build.url}
                    href={build.url}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--secondary"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {build.label} →
                  </a>
                ))}
              </div>
            )}

            {stage.report ? (
              <a href={stage.report} target="_blank" rel="noreferrer">
                Stage report - Google Drive
              </a>
            ) : (
              <p className="report__empty">
                The report for this stage is being finalized. It will be published here once available.
              </p>
            )}
          </div>
        </section>

        <nav className="stage__pager" aria-label="Stage navigation">
          {prev ? (
            <Link to={`/stages/${prev.slug}`} className="pager-link pager-link--prev">
              <span className="pager-link__label">Previous stage</span>
              <span>{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/stages/${next.slug}`} className="pager-link pager-link--next">
              <span className="pager-link__label">Next stage</span>
              <span>{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </div>
  )
}
