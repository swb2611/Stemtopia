import Head from "next/head";
import React from "react";

import Layout from "../components/Layout";
import YouTube from "react-youtube";
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "1",
    message: "Which side Mr.Shark should face to?",
    trigger: "2",
  },
  {
    id: "2",
    component: (
      <div>
        <img className="questionimg" src="/static/images/question.png" alt="" />
      </div>
    ),
    trigger: "3",
  },

  {
    id: "3",
    options: [
      { value: 1, label: "Left Clown Fish >", trigger: "4" },
      { value: 2, label: "Right Angel Fish <", trigger: "6" },
    ],
  },
  {
    id: "4",
    message: "Wrong answer, Can you tell us your thinking process?",
    trigger: "5",
  },
  {
    id: "5",
    user: true,
    trigger: "2",
  },
  {
    id: "6",
    message:
      "Awesome! You got the right answer! Can you tell us your thinking process?",
    trigger: "7",
  },
  {
    id: "7",
    user: true,
    trigger: "8",
  },
  {
    id: "8",
    message:
      "Can you tell us which computational thinking method did you used?",
    trigger: "9",
  },
  {
    id: "9",
    user: true,
    trigger: "10",
  },
  {
    id: "9",
    message: "That is awesome! Good job!",
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
              {/* <ChatBot className="myvideo" steps={steps} /> */}
            </div>
            <div className="myvideoa">
              <a href="/question" className="buttona">
                Evaluation question
              </a>
            </div>
            <div className="box">
              <p>
                This is a mini course for 3-5 years old kids to help them to
                setup an idea of comparison. In the previous lesson already knew
                how to compare two bunch of item and choose which buntch is
                greater by connecting line of them. In this lesson, kids will
                first learn how to use the Mr. Shark to represent the meaning of
                "greater". This in the future will be simpleize to greater and
                less symbol, which will be learned in their 1 grade class. Kids
                will also learn how to use their previous knowledge to solve a
                new problem. This is an important part of problem solving
                skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);
