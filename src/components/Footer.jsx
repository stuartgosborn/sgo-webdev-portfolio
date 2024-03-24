import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const github = "https://github.com/stuartgosborn";
  const linkedin = "https://www.linkedin.com/in/stuartgosborn/";

  return (
    <footer className="footer">
      <p>© 2024 by Stuart G. Osborn</p>
      <Link
        to={github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Link"
      >
        
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Link>
      <Link
        to={linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="linkedin Link"
      >
        
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </Link>
    </footer>
  );
}
