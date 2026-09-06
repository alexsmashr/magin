export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-section__inner">
        <h2 className="contact-section__title">Hablemos de tu proyecto</h2>
        <p className="contact-section__text">
          Cuéntanos qué necesitas. Te respondemos para agendar una conversación.
        </p>
        <a href="tel:+59164633075" className="btn-primary">
          +591 64633075
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
