import React from "react";
import ReactDOM from "react-dom";

// const parent = React.createElement('div', { id: 'parent' }, [React.createElement('div', { id: 'child' },
//     [React.createElement('h1', {}, 'H1 Tag2'), React.createElement('h2', {}, 'H2 Tag')]),
// React.createElement('div', { id: 'child2' }, [React.createElement('h1', {}, 'H1 Tag'), React.createElement('h2', {}, 'H2 Tag')])]);

// const react = React.createElement('h1', { id: 'heading' }, 'Hello ReactJs Library!');
// create react element
const Title = ()=> (
  <h1 id="heading" className="head" tabIndex="1">
    This is Namaste JS
  </h1>
);

// create functional component
const HeadingComponent = () => {
  return (
    <div className="container">
        <Title/>
      <h1>React functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); // to make functional component to element we wrap inside </>
