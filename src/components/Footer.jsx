import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icons.jsx'
import site from '../data/site.js'
import stages, { stageStatusLabel } from '../data/stages.js'

const pad = (n) => String(n).padStart(2, '0')

export default function Footer() {
  const year = new Date().getFullYear()
  const completed = stages.filter((s) => s.status === 'done').length
  const active = stages.find((s) => s.status === 'active')

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Link to="/" className="site-footer__brand">
            <Logo size={24} />
            {site.name}
          </Link>
          <p className="site-footer__text">{site.oneLiner}</p>
          <p className="site-footer__text site-footer__text--muted">
            {site.course}  -  Project, {year}
          </p>
        </div>

        <nav aria-label="Project">
          <p className="site-footer__heading">Project</p>
          <ul className="site-footer__links">
            <li>
              <Link to="/project">The product</Link>
            </li>
            <li>
              <Link to="/assignments">Assignments</Link>
            </li>
            <li>
              <a href="https://github.com/maxtxr/2gether-site.git" target="_blank" rel="noreferrer">
                Repository
                <Icon name="arrowUpRight" size={13} />
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Stages">
          <p className="site-footer__heading">Stages</p>
          <ul className="site-footer__links">
            {stages.map((stage) => (
              <li key={stage.id}>
                <Link to={`/stages/${stage.slug}`}>
                  {pad(stage.id)}. {stage.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="site-footer__heading">Status</p>
          <ul className="site-footer__links">
            {active ? (
              <li>
                <Link to={`/stages/${active.slug}`}>
                  <span className={`status status--${active.status}`}>
                    {stageStatusLabel[active.status]}
                  </span>
                </Link>
              </li>
            ) : null}
            <li className="site-footer__text--muted">
              {completed} of {stages.length} stages complete
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>
          &copy; {year} Team {site.name}
        </span>
      </div>
    </footer>
  )
}
