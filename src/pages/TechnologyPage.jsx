import { useParams, useSearchParams, Link } from "react-router-dom";
export default function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const companySlug = searchParams.get("company");

  const technology = technologies.find((t) => t.slug === slug);

  if (!technology) return <p>Technology not found</p>;

  return (
    <div>
      <h2>{technology.name}</h2>
      <img src={technology.image} alt={technology.name} width="100" />
      <p>{technology.description}</p>

      {companySlug && (
        <Link to={`/company/${companySlug}`}>← Back to Company</Link>
      )}
    </div>
  );
};