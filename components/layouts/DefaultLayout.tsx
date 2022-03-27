import Header from "components/Header";
import Head from "next/head";
import { Fragment } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <Head>
        <meta name="theme-color" content="#202124" />
        <title>TODOLIST</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>

      <Header />

      <main>{children}</main>
    </Fragment>
  );
};

export default DefaultLayout;
