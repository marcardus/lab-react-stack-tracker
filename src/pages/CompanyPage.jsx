import { useParams, Link } from "react-router-dom";
export default function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const company = companies.find((c) => c.slug === companySlug);

  if (!company) return <p>Company not found</p>;

  return (
    <div>
      <h2>{company.name}</h2>
      <img src={company.logo} alt={company.name} width="100" />
      <p>{company.description}</p>
      <a href={company.website} target="_blank" rel="noreferrer">Visit Website</a>

      <h3>Tech Stack:</h3>
      <ul>
        {company.techStack.map((tech) => (
          <li key={tech.slug}>
            <Link to={`/tech/${tech.slug}?company=${company.slug}`}>
              <img src={tech.image} alt={tech.name} width="30" />
              {tech.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};