// Footer component that displays information and social icons
const Footer = () => {
  return (
    <div className="footer">
      {/* Copyright information */}
      <p>© {new Date().getFullYear()} World Information app created by Segun Oluwatayo. All rights reserved.</p>

      {/* Social icons with links */}
      <ul className="social-icons">
        {/* GitHub icon with a link */}
        <li>
          <a href="https://github.com/segunOluwatayo" target="_blank" rel="noreferrer">
            <img src="https://github.com/favicon.ico" alt="GitHub icon" />
          </a>
        </li>

        {/* LinkedIn icon with a link */}
        <li>
          <a href="https://www.linkedin.com/in/oluwatayo-segun-b0612a233/" target="_blank" rel="noreferrer">
            <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn icon" />
          </a>
        </li>

        {/* Instagram icon with a link */}
        <li>
          <a href="https://www.instagram.com/segun.xo/" target="_blank" rel="noreferrer">
            <img src="https://www.instagram.com/favicon.ico" alt="Instagram icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

// Export the Footer component as the default export
export default Footer;
