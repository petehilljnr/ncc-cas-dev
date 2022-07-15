import Footer from "../components/Footer";
import Navigation
 from "../components/Navigation";
const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;