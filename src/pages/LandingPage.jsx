import React, { useRef } from "react";
import logo from "../img/MainLogo.png";
import { Link } from "react-router-dom";
import "../css/Landing.css";

const Landing = () => {
  const fetchers = useRef(null);
  // const Use = useRef(null);

  const fetchersScroll = () => fetchers.current.scrollIntoView();
  // const UseScroll = () => Use.current.scrollIntoView();
  return (
    <div>
      {/* <Link to={"/login"}>login</Link> */}
      <header>
        <h2>
          <Link to="/">
            <img alt="" src={logo}></img>
          </Link>
        </h2>
        <nav>
          <li>
            <button onClick={fetchersScroll}>Fetchers</button>
          </li>
          {/* <li>
            <button onClick={UseScroll}>Use</button>
          </li> */}
          <li>
            <Link to="/login">Login</Link>
          </li>
        </nav>
      </header>

      <section className="hero">
        <div className="background-image"></div>
        <div className="hero-content-area">
          <h1>Life is a party!</h1>
          <h3>Capture moments in photos and store it on Friend Drive</h3>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </section>

      {/* <section className="destinations">
        <h3 className="title">Some of our destinations:</h3>
        <p>
          Tired of the beach alone? Are the plains too plain? Come along with us
          on one of our unusual adventures with yout friends. Here are some
          pictures from people who have had elevated experiences with us.
        </p>
        <hr />

        <ul className="grid">
          <li className="small image-1"></li>
          <li className="large image-2"></li>
          <li className="large image-3"></li>
          <li className="small image-4"></li>
        </ul>
      </section> */}

      <section ref={fetchers} className="packages">
        <h3 className="title">Quality features</h3>
        <p>
          A fun and easy-to-use Drive space web application build in ReactJS
          where you can store Photos.
        </p>
        <hr />

        <ul className="grid">
          <li>
            <h4>Easy SignIn with Google</h4>
            {/* <p>
              Looking for the complete experience? Take a tour with one of our
              experts. They'll show you secrets that you're likely to miss
              otherwise.
            </p> */}
          </li>
          <li>
            {/* <i className="fa fa-camera-retro fa-4x"></i> <i class="fa-solid fa-folder-image fa-4x"></i>*/}
            <h4>Upload multiple Photos</h4>
            {/* <p>
              Want to experience nature's beauty without all of that annoying
              exercise? Take a photo tour on one of our{" "}
              <em>Life is a party!</em> buses.
            </p> */}
          </li>
          <li>
            {/* <i className="fa fa-bicycle fa-4x"></i> */}
            <h4>Create new Album</h4>
            {/* <p>
              If bicycles are more your speed, consider taking a tour through
              one of our mountain or city bike paths. We'll provide the bikes,
              and lunch too!
            </p> */}
          </li>
          <li>
            {/* <i className="fa fa-flag-checkered fa-4x"></i> */}
            <h4>Delete Photos / Albums</h4>
            {/* <p>
              Got a competitive spirit? Sign up for one of our challenge-based
              marathons! Try to reach the summit before any other group.
            </p> */}
          </li>
          <li>
            {/* <i className="fa fa-flag-checkered fa-4x"></i> */}
            <h4>Download Photos</h4>
            {/* <p>
              Got a competitive spirit? Sign up for one of our challenge-based
              marathons! Try to reach the summit before any other group.
            </p> */}
          </li>
        </ul>
      </section>

      {/* <section className="testimonials" >
        <h3 className="title">Testimonials from our adventurers:</h3>
        <hr />
        <p className="quote">
          Wow! This tour made me realize how much I love being outside with my
          friends. After going on one of these tours, I can safely say that beer
          pong is my favorite game all time, also the cultural programs were
          really interesting!
        </p>
        <p className="author">- Albert Herter</p>
        <p className="quote">
          Wow, this really blew my mind. We had so much fun at the beach, and
          also some hidden secrets revealed. Come on, I'm living in this city
          for 5 years. Amazing!
        </p>
        <p className="author">- Sharon Rosenberg</p>
        <p className="quote">
          If you want to understand your friends better, head to the mountains.
          I mean, seriously. It's like sitting next to a campfire and just talk
          in the sunset, woah. You know? It's like that.
        </p>
        <p className="author">- Luis Mendoza</p>
      </section> */}

      {/* <section className="contact">
        <h3 className="title">Learn more</h3>
        <p>
          A fun and easy-to-use Drive space web application build in ReactJS
          where you can store Photos.
        </p>
        <hr />
        <form>
          <input type="email" placeholder="Email" />
          <Link to="/" className="btn">
            Subscribe now
          </Link>
        </form>
      </section> */}

      <footer>
        <p>
          Made by{" "}
          <Link to="https://prathmeshdhatrak.com/">Prathmesh Dhatrak</Link>
        </p>
        <p>
          A fun and easy-to-use Drive space web application build in ReactJS
          where you can store Photos.
        </p>
        <ul>
          <li>
            <Link to="https://twitter.com/PrathmeshSanto2">
              <i className="fa fa-twitter-square fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link to="https://github.com/Prathmesh-Dhatrak">
              <i className="fa fa-github-square fa-2x"></i>
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/hellioncoder/">
              <i className="fa fa-instagram fa-2x"></i>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Landing;
