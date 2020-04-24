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
    id: "10",
    message: "That is awesome! Good job!",
    end: true,
  },
];

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
              <ChatBot className="myvideo" steps={steps} />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);
