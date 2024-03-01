/* const heading = React.createElement(
    "h1",
    {
      id: "title", // All our tag attributes comes from this object. In React these are called as Props. 
    },
    "Hello React"
  ); */

const heading1 = React.createElement(
  "h1",
  {
    id: "title", /* All our tag attributes comes from this object. In React these are called as Props. */
  },
  "Hello React"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title", /* All our tag attributes comes from this object. In React these are called as Props. */
  },
  "Hello React"
);

const heading3 = React.createElement(
  "h3",
  {
    id: "title", /* All our tag attributes comes from this object. In React these are called as Props. Props are like properties. */
  },
  "Hello React"
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
  heading3,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
//passing a react element inside the root.
root.render(container); // here it takes the element and modifies the DOM, injects into the DOM.

const subHeading = React.createElement(
  "h2",
  { className: "subTitle" },
  "Hello React JS to Everyone in the world."
);
const subtitle = ReactDOM.createRoot(document.getElementById("someDiv"));
subtitle.render(subHeading);

const obje = {
  firstName: "Akshay Kumar",
  printingName: () => {
    console.log(this.firstName);
  },
  printName: function () {
    console.log(this.firstName);
  },
};
obje.printName();
obje.printingName();
