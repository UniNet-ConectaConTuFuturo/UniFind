import Aside from "./Aside";
import React from "react";
import PropTypes from "prop-types";
class Layout extends React.Component {
  render() {
    return (
      <>
        <aside>
          <Aside />
        </aside>
        <main className="bg-cyan-950 text-slate-50 m-0 w-full min-h-screen h-full">
          {this.props.children}
        </main>
      </>
    );
  }
}
Layout.propTypes = {
  children: PropTypes.element,
};
export default Layout;
