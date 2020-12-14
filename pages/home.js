import Head from "next/head";
import PageContainer from "../src/components/pageContainer/PageContainer";
import fetch from "isomorphic-unfetch";

export default function Home({ topics }) {
  console.log("initial data", topics);
  return (
    <>
      <Head>
        <title>Seedly Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer topics={topics} />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("http://localhost:7000/topics", { method: "GET" });
  const json = await res.json();

  return { topics: json };
};
