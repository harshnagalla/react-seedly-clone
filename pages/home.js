import Head from "next/head";
import PageContainer from "../src/components/pageContainer/PageContainer";
import fetch from "isomorphic-unfetch";
import React, { useState } from "react";
import AppContext from "../src/context/index";

export default function Home({ topic }) {
  const [topics, setTopics] = useState(topic);
  const context = {
    setTopics,
    topics,
  };
  return (
    <>
      <Head>
        <title>Seedly Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContext.Provider value={context}>
        <PageContainer/>
      </AppContext.Provider>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:7000/topics", { method: "GET" });
  const json = await res.json();
  return { topic: json };
};
