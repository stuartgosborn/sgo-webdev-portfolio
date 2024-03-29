
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <section>
      <h1 id='welcome'>WELCOME, I&apos;M STUART! </h1>
      <p>
        A Full Stack Web Developer with a passion for creating and developing
        web applications from ideas that have heart.
      </p>
      <p>
        <Link to='/portfolio' >
        <img className="logo" src='/logo.png' alt="" />
        </Link>
      </p>
    </section>
  );
}
