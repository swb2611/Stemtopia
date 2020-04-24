import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";

export default () => (
  <Layout>
    <div>
      <Banner />

      <div id="main">
        <section id="one" className="tiles">
          <article
            style={{ backgroundImage: `url('/static/images/pic01.png')` }}
          >
            <header className="major">
              <h3>STEM Playground</h3>
              <p>Play with our STEM toys</p>
            </header>
            <Link href="/xuanke">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic02.png')` }}
          >
            <header className="major">
              <h3>Course Offerings</h3>
              <p>Explore our Course Options</p>
            </header>
            <Link href="/xuanke">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic03.jpg')` }}
          >
            <header className="major">
              <h3>Community News</h3>
              <p>Learn more about science and technology</p>
            </header>
            <Link href="/xuanke">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic04.jpg')` }}
          >
            <header className="major">
              <h3>Outdoor Activities</h3>
              <p>Bring your learning to play</p>
            </header>
            <Link href="/xuanke">
              <a className="link primary"></a>
            </Link>
          </article>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>About Us</h2>
            </header>
            <p>
            This is a mini course for 3-5 years old kids to help them to setup an idea of comparison. In the previous lesson  already knew how to compare two bunch of item and choose which buntch is greater by connecting line of them. In this lesson, kids will first learn how to use the Mr. Shark to represent the meaning of "greater". This in the future will be simpleize to greater and less symbol, which will be learned in their 1 grade class. Kids will also learn how to use their previous knowledge to solve a new problem. This is an important part of problem solving skills.
            </p>
            <ul className="actions">
              <li>
                <Link href="/xuanke">
                  <a className="buttona next">Get Started</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
