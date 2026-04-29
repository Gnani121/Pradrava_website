export default function ServiceCard({ service }) {
  return (
    <article className="card service-card">
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </article>
  );
}