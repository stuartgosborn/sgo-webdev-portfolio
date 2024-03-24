import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub  } from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Project({ name, github, live, img, isHovered }) {

    const gridImg = {backgroundImage: `url(${img})`};
    

  return (
    <div className="project">
        
        <h4>{name}</h4>
      <div className="portImg" style={gridImg}>
        <Link
            to={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Link"
            className="portLink"
            style = {{display: isHovered ? "block" : "none"}}

            >
                Repository
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
        <Link
            to={live}
            target="_blank"
            rel="noreferrer"
            aria-label="Live Link"
            className="portLink"
            style={{display: isHovered ? "block" : "none"}}
            >
                Web Service
            <FontAwesomeIcon icon={faGlobe} size="2x" />
        </Link>
        </div>
    </div>
    );
}
   
