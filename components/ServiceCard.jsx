export default function ServiceCard({ service }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="font-semibold text-lg">{service.title}</h3>
      <p className="text-gray-600">{service.desc}</p>
    </div>
  );
}