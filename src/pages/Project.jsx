import { Link } from 'react-router-dom'
import site from '../data/site.js'
import product from '../data/product.js'
import landscape from '../data/landscape.js'
import stages from '../data/stages.js'
import Icon from '../components/Icons.jsx'

const pad = (n) => String(n).padStart(2, '0')
const prototypeStage = stages.find((s) => s.slug === 'functional-prototype') || stages[0]

export default function Project() {
  return (
    <div className="page-section">
      <div className="page-head">
        <span className="eyebrow">The product</span>
        <h1>{product.headline}</h1>
        <p className="lead">{product.intro}</p>
      </div>

      <section className="block">
        <h2>{product.problem.heading}</h2>
        <p>{product.problem.body}</p>
        <div className="card-grid">
          {product.problem.difficulties.map((difficulty, i) => (
            <div key={difficulty.id} className="card">
              <span className="card__num" aria-hidden="true">
                {pad(i + 1)}
              </span>
              <h3 className="card__title">{difficulty.title}</h3>
              <p className="card__body">{difficulty.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>{product.audience.heading}</h2>
        <p>{product.audience.body}</p>
        <div className="role-grid">
          {product.audience.roles.map((role) => (
            <div key={role.id} className="role-card">
              <h3 className="role-card__title">{role.name}</h3>
              <p className="role-card__summary">{role.summary}</p>
              <ul className="tick-list">
                {role.needs.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>{product.goals.heading}</h2>
        <p>{product.goals.body}</p>
        <div className="card-grid">
          {product.goals.goals.map((goal, i) => (
            <div key={goal.id} className="card">
              <span className="card__num" aria-hidden="true">
                {pad(i + 1)}
              </span>
              <h3 className="card__title">{goal.title}</h3>
              <p className="card__body">{goal.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>Competitive analysis</h2>
        <p>
          Two families of tool cover parts of what {site.name} does. Neither
          combines sports-specific filtering - skill matching plus accessibility
          verification - with a gamified social feed built for ad-hoc group
          sports.
        </p>

        <div className="competitor-grid">
          {landscape.competitors.map((c) => (
            <article key={c.id} className="competitor-card">
              <h3 className="competitor-card__name">{c.name}</h3>
              <p className="competitor-card__focus">{c.focus}</p>

              <div className="pros-cons">
                <div>
                  <h4 className="pros-cons__label">Strengths</h4>
                  <ul className="tick-list">
                    {c.strengths.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="pros-cons__label">Weaknesses</h4>
                  <ul className="tick-list">
                    {c.weaknesses.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>{landscape.differentiators.heading}</h2>
        <p>{landscape.differentiators.body}</p>
        <div className="card-grid">
          {landscape.differentiators.items.map((item, i) => (
            <div key={item.id} className="card">
              <span className="card__num" aria-hidden="true">
                {pad(i + 1)}
              </span>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__body">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>{product.features.heading}</h2>
        <p>{product.features.body}</p>
        <div className="pillar-list">
          {product.features.pillars.map((pillar, i) => (
            <div key={pillar.id} className="pillar">
              <span className="pillar__num" aria-hidden="true">
                {pad(i + 1)}
              </span>
              <div>
                <h3 className="pillar__title">{pillar.title}</h3>
                <p className="card__body">{pillar.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <h2>{product.principles.heading}</h2>
        <ul className="check-list">
          {product.principles.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="block">
        <h2>Where the project goes next</h2>
        <p>
          This is the working scope for {site.name}. The six project stages take it
          from proposal to an evaluated prototype, and the feature set is expected to
          change based on what we learn in user testing.
        </p>
        <div className="button-row">
          <Link to={`/stages/${prototypeStage.slug}`} className="button button--primary">
            Explore the prototype
            <Icon name="arrowRight" size={16} />
          </Link>
          <Link to="/assignments" className="button">
            Assignments
          </Link>
        </div>
      </section>
    </div>
  )
}
