import Head from "next/head";
import React from "react";

import Layout from "../components/Layout";
import YouTube from "react-youtube";
import ChatBot from "react-simple-chatbot";
// import dynamic from "next/dynamic";

// const ChatBot = dynamic(
//   () => import("react-simple-chatbot").then((mod) => mod.ChatBot),
//   {
//     ssr: false,
//   }
// );

const steps = [
  {
    id: "1",
    message: "Which side Mr.Shark should face to?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Left Clown Fish >", trigger: "3" },
      { value: 2, label: "Right Angel Fish <", trigger: "4" },
    ],
  },
  {
    id: "3",
    message: "Wrong answer, try again.",
    trigger: "2",
  },
  {
    id: "4",
    message: "Awesome! You are a telepath!",
    end: true,
  },
];

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

export default () => (
  <Layout>
    <Head>
      <title>Class Collection</title>
      <meta name="description" content="Generic Page" />
    </Head>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Course Demo</h1>
          </header>

          <div>
            <div className="pingxing">
              <YouTube className="myvideo" videoId="c259oePjiV8" opts={opts} />
              <ChatBot className="myvideo" steps={steps} />
            </div>
            <div className="box">
              <p>
                Felis sagittis eget tempus primis in faucibus vestibulum.
                Blandit adipiscing eu felis iaculis volutpat ac adipiscing
                accumsan eu faucibus. Integer ac pellentesque praesent tincidunt
                felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum
                primis in faucibus vestibulum. Blandit adipiscing eu ipsum
                primis in faucibus vestibulum. Blandit adipiscing eu felis
                iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);
