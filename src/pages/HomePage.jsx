import { Link } from "react-router-dom";

export default function HomePage({ companies }) {
  return (
    <div>
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.slug}>
            <Link to={`/company/${company.slug}`}>
              <img src={company.logo} alt={company.name} width="50" />
              {company.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};