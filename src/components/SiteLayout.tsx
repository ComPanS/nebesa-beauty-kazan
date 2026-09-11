import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { to: '#services', label: 'Услуги' },
  { to: '#prices', label: 'Цены' },
  { to: '#reviews', label: 'Отзывы' },
  { to: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Heaven — в начало" onClick={closeMenu}>
          <img src={`${import.meta.env.BASE_URL}assets/map-logo.jpg`} alt="" />
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? 'Закрыть' : 'Меню'}</span><i aria-hidden="true" />
        </button>
        <nav id="main-nav" aria-label="Основная навигация" data-open={menuOpen}>
          {navigation.map(({ to, label }) => <a key={to} href={to} onClick={closeMenu}>{label}</a>)}
        </nav>
        <a className="header-book" href={site.contact.whatsapp} target="_blank" rel="noreferrer">Записаться <span aria-hidden="true">↗</span></a>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <a className="footer-brand" href="#top">Heaven</a>
        <p>{site.contact.address}<br />{site.contact.hours}</p>
        <div className="footer-links">
          <a href={site.contact.phoneHref}>{site.contact.phoneLabel}</a>
          <a href={site.contact.telegram} target="_blank" rel="noreferrer">Telegram ↗</a>
          <a href={site.contact.vk} target="_blank" rel="noreferrer">ВКонтакте ↗</a>
        </div>
        <p className="legal">© {new Date().getFullYear()} {site.name}</p>
      </footer>
    </div>
  )
}
