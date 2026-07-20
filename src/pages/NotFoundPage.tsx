import { SiteNav } from '../components/SiteNav'

export function NotFoundPage() {
  return (
    <main className="not-found-page">
      <SiteNav ariaLabel="Main navigation" />
      <section>
        <p className="not-found-code">404</p>
        <h1>That page isn't here.</h1>
        <a href="/">Return home</a>
      </section>
    </main>
  )
}
