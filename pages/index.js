import Head from "next/head";
import PageContainer from "../src/components/pageContainer/PageContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Seedly Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer />
    </>
  );
}
