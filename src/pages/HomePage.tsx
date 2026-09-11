import { categories, reviews, services, site } from '../content/site'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export function HomePage() {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-image" src={asset('assets/salon-background.jpg')} alt="Мастера Heaven работают с гостями в салоне" />
        <div className="hero-shade" />
        <div className="mirror-line hero-line" aria-hidden="true"><span /></div>
        <div className="hero-copy">
          <p className="eyebrow">Салон красоты · Казань</p>
          <h1 id="hero-title">Heaven</h1>
          <p className="hero-tagline">Красота<br />в своём ритме</p>
        </div>
        <div className="hero-bottom">
          <p>{site.description}</p>
          <a className="button button-light" href={site.contact.whatsapp} target="_blank" rel="noreferrer">Записаться в WhatsApp <span aria-hidden="true">↗</span></a>
          <a className="hero-rating" href={site.contact.maps} target="_blank" rel="noreferrer" aria-label="Рейтинг 5,0 на Яндекс Картах">
            <strong>{site.rating.score}</strong><span>★★★★★<br />{site.rating.reviews} · Яндекс Карты ↗</span>
          </a>
        </div>
      </section>

      <section className="intro section-pad" aria-labelledby="intro-title">
        <div className="section-index">01 — Heaven</div>
        <div className="intro-heading">
          <p className="eyebrow copper">Салон, где всё рядом</p>
          <h2 id="intro-title">Один адрес.<br /><em>Ваш</em> ритм.</h2>
        </div>
        <p className="intro-text">Волосы, ногти, массаж, уход за лицом и телом — выберите нужное направление и напишите нам, чтобы подобрать время.</p>
        <div className="category-list">
          {categories.map((category) => (
            <a href="#prices" className="category-row" key={category.number}>
              <span>{category.number}</span><strong>{category.title}</strong><small>{category.items}</small><b aria-hidden="true">↘</b>
            </a>
          ))}
        </div>
      </section>

      <section className="service-stage" id="services" aria-labelledby="services-title">
        <div className="stage-image-wrap">
          <img src={asset('assets/loreal-care.jpg')} alt="Результат ухода за волосами" />
          <span className="image-caption">Уход за волосами</span>
        </div>
        <div className="stage-copy">
          <div className="section-index">02 — Услуги</div>
          <p className="eyebrow">Больше, чем стрижка</p>
          <h2 id="services-title">От нового цвета<br />до часа <em>тишины</em></h2>
          <p>Парикмахерские услуги, ногтевой сервис, массаж, уходы и лазерная эпиляция — в салоне на Академической.</p>
          <div className="promo-note"><span>До 30 сентября</span><strong>Уход L’Oréal в подарок при записи на стрижку</strong></div>
          <a className="text-link" href={site.contact.whatsapp} target="_blank" rel="noreferrer">Уточнить свободное время ↗</a>
        </div>
      </section>

      <section className="prices section-pad" id="prices" aria-labelledby="prices-title">
        <div className="mirror-line prices-line" aria-hidden="true"><span /></div>
        <div className="prices-head">
          <div className="section-index">03 — Каталог</div>
          <div><p className="eyebrow copper">Ориентир по стоимости</p><h2 id="prices-title">Выберите<br /><em>своё</em></h2></div>
          <p>Актуальную стоимость и длительность процедуры уточняйте при записи.</p>
        </div>
        <div className="price-list">
          {services.map((service, index) => (
            <article className="price-row" key={service.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{service.title}</h3>{service.note && <p>{service.note}</p>}</div>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
        <a className="button button-dark" href={site.contact.whatsapp} target="_blank" rel="noreferrer">Записаться в WhatsApp <span aria-hidden="true">↗</span></a>
      </section>

      <section className="trust" id="reviews" aria-labelledby="reviews-title">
        <div className="trust-score">
          <p className="eyebrow">Яндекс Карты</p><strong>{site.rating.score}</strong><span>★★★★★</span>
          <p>{site.rating.ratings}<br />{site.rating.reviews}</p><div className="award">✦ {site.rating.award}</div>
        </div>
        <div className="review-panel">
          <div className="section-index">04 — Отзывы</div>
          <h2 id="reviews-title">Слова наших<br /><em>гостей</em></h2>
          <div className="reviews">
            {reviews.map((review) => (
              <blockquote key={review.name}><p>«{review.text}»</p><footer><strong>{review.name}</strong><span>{review.date} · ★★★★★</span></footer></blockquote>
            ))}
          </div>
          <a className="text-link light" href={`${site.contact.maps}reviews/`} target="_blank" rel="noreferrer">Все отзывы на Яндекс Картах ↗</a>
        </div>
      </section>

      <section className="contact section-pad" id="contacts" aria-labelledby="contact-title">
        <div className="mirror-line contact-line" aria-hidden="true"><span /></div>
        <div className="section-index">05 — Контакты</div>
        <p className="eyebrow copper">Каждый день, 10:00–20:00</p>
        <h2 id="contact-title">До встречи<br />в <em>Heaven</em></h2>
        <div className="contact-grid">
          <div><span>Адрес</span><p>{site.contact.address}</p><a className="text-link" href={site.contact.route} target="_blank" rel="noreferrer">Построить маршрут ↗</a></div>
          <div><span>Запись</span><a className="phone" href={site.contact.phoneHref}>{site.contact.phoneLabel}</a><a className="button button-dark" href={site.contact.whatsapp} target="_blank" rel="noreferrer">Написать в WhatsApp ↗</a></div>
        </div>
        <div className="location-mark" aria-hidden="true">55°47′<br /><span>49°09′</span></div>
      </section>
    </>
  )
}
