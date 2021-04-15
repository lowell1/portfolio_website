import "../styles/meyer_reset.css";
import "../styles/global.scss";
import { app } from "../styles/app.module.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default ({ Component, pageProps }) => {
  return (
    <div className={app}>
      <header>
        <Nav />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
