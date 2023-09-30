import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <div className="max-w-[1200px] mx-4 md:mx-auto">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
