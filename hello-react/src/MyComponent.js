import React, { Component } from "react";
import propTypes from "prop-types";

// const MyComponent = ({ name, favoriteFruit }) => {
//   return (
//     <div>
//       {name}의 멋진 컴포넌트! 좋아하는 과일은 {favoriteFruit}
//     </div>
//   );
// };

class MyComponent extends Component {
  static defaultProps = {
    name: "승경씨가 아니라 기본이름",
    favFruit: "망고",
  };

  static propTypes = {
    name: propTypes.string,
    favoriteFruit: propTypes.string.isRequired,
  };

  render() {
    const { name, favFruit, children } = this.props;
    return (
      <div>
        {name}의 멋진 컴포넌트! <br />
        좋아하는 과일은 {favFruit} <br />
        children 값은 {children}
      </div>
    );
  }
}

// MyComponent.propTypes = {
//   name: propTypes.string,
//   favoriteFruit: propTypes.string.isRequired,
// };

export default MyComponent;
