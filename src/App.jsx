import { useEffect, useRef } from "react";
import { config } from "./config.js";
import { profile, experience, projects, skills, education, certifications, languages } from "./data.js";

function Reveal({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return el.classList.add("in");
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (el.classList.add("in"), io.disconnect()), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className="reveal">{children}</div>;
}
const Section = ({ id, title, children }) => (
  <section id={id} className="section"><Reveal><h2>{title}</h2>{children}</Reveal></section>
);
const Points = ({ items }) => <ul>{items.map((p) => <li key={p}>{p}</li>)}</ul>;

export default function App() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="brand">KN</a>
        <nav aria-label="Primary">
          {["experience", "projects", "skills", "education", "cv", "contact"].map((s) => <a key={s} href={`#${s}`}>{s}</a>)}
        </nav>
      </header>
      <main id="top">
        <section className="hero">
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="lead">{profile.summary}</p>
          <div className="actions">
            <a className="btn primary" href={config.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn" href={config.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn" href={config.cvPath} download>Download CV</a>
          </div>
          <ul className="chips">{profile.interests.map((i) => <li key={i}>{i}</li>)}</ul>
        </section>

        <Section id="experience" title="Experience">
          <div className="timeline">{experience.map((e) => (
            <article key={e.role + e.org} className="card">
              <div className="row"><h3>{e.role}</h3><span className="muted">{e.period}</span></div>
              <p className="muted">{e.org} · {e.place}</p><Points items={e.points} />
            </article>))}</div>
        </Section>

        <Section id="projects" title="Selected Projects">
          <div className="grid">{projects.map((p) => (
            <article key={p.title} className="card"><h3>{p.title}</h3><p className="stack">{p.stack}</p><Points items={p.points} /></article>))}</div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <div className="grid">{skills.map((s) => (
            <article key={s.group} className="card"><h3>{s.group}</h3>
              <ul className="chips">{s.items.map((i) => <li key={i}>{i}</li>)}</ul></article>))}</div>
        </Section>

        <Section id="education" title="Education & Certifications">
          <div className="grid">
            <article className="card"><h3>{education.degree}</h3><p className="muted">{education.school} · {education.year}</p>
              <p>Graduation project: “{education.project}” — Grade: <strong>{education.grade}</strong></p></article>
            <article className="card"><h3>Certifications</h3><Points items={certifications} /></article>
            <article className="card"><h3>Languages</h3>{languages.map(([l, v]) => <p key={l}><strong>{l}</strong>: {v}</p>)}</article>
          </div>
        </Section>

        <Section id="cv" title="CV & QR Code">
          <div className="card cv">
            <div><h3>Download my CV</h3><p className="muted">PDF, latest version.</p>
              <div className="actions">
                <a className="btn primary" href={config.cvPath} download>Download PDF</a>
                <a className="btn" href={config.qrPng} download>QR (PNG)</a>
                <a className="btn" href={config.qrSvg} download>QR (SVG)</a>
              </div></div>
            <img className="qr" src={config.qrSvg} width="160" height="160" alt={`QR code linking to ${config.siteUrl}`} />
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p><a href={`mailto:${config.email}`}>{config.email}</a> · <a href={`tel:${config.phone.replace(/\s/g, "")}`}>{config.phone}</a></p>
        </Section>
      </main>
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
