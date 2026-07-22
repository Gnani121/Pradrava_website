export default function ServiceCard({ service }) {
  return (
    <article className="card service-card">
      {service.icon && <div className="feature-tile-icon">{service.icon}</div>}
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </article>
  );
}
