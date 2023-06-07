import Navbar from "@/components/mainNavigation/Navbar";
import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "https://graphqlzero.almansi.me/api",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>User Diaries</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
