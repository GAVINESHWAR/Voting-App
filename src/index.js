import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Divi from "./divi";
function Greeting() {
  return (
    <div>
      <h3>Web developement</h3>
      <ul>
        <li>
          <a href="#">HTML</a>
        </li>
        <li>
          <a href="#">CSS</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">JS</a>
        </li>
      </ul>
    </div>
  );
}
const firstBook = {
  author: "harry potter",
  title: "james merthon",
  img: "https://m.media-amazon.com/images/I/4120695j67L._SY445_SX342_.jpg",
  id: 1,
};
const secondBook = {
  author: "Kristin Hannah",
  title: "The Women: A Novel",
  img: "https://m.media-amazon.com/images/I/913C+MR3S5L._SY342_.jpg",
  id: 2,
};
const books = [
  {
    author: "Jordan Moore",
    title: "Intersting Facts for curious Mind",
    img: "https://m.media-amazon.com/images/I/4120695j67L._SY445_SX342_.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/913C+MR3S5L._SY342_.jpg",
    id: 1,
  },
];
const BookList = () => {
  // //just like using function calls
  return (
    <>
      // using arrays method
      <EventExamples />
      <section className="booklist">
        {books.map((book) => {
          // console.log(book)
          // const { author, title, img, id } = book;
          // ...book for the values of books
          return <Book {...book} key={book.id} />;
        })}
        {/* <h2>Using in the object method</h2> */}
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        />
        <Book
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img}
        />
        <Book
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img}
        />
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        />
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        />
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        />
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        />
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        />
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        />
      </section>
    </>
  );
};
const EventExamples = () => {
  const handleFormatInput = () => {
    alert("handle form input");
  };
  const handledButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <form>
        <h1>events</h1>
        <input type="text" name="example" style={{ margin: "1rem 0" }} />
      </form>
      <button onClick={handledButtonClick}>Click me</button>
    </section>
  );
};
const Book = (props) => {
  //props means attributes of the function calls
  // const {author, title,img} = props;
  // const { img, title, author, children } = props;
  // console.log(props);
  const { author, title, img } = props;
  // console.log(children);
  return (
    <article className="book">
      <img src={img}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* {children} */}
      <p>
        The intake to all these programmes is 25. The department is also having
        state of the art facilities for carrying out research Department is
        equipped with three laboratories, One lab is dedicated for B.Tech
        students, one for Master’s programmes, and one lab for the research to
        carry out their research.
      </p>
      <button>Click me </button>
      {/* <p>Lorem</p> */}
      {/* <p>{props.job}</p>
    <p>{props.title}</p>
    <p>{props.number}</p> */}
      {/* {console.log(props)}  */}
    </article>
  );
};
// const Image = () => (
//   <img
//     src={img}
//     alt="Worthy: How to Believe You Are Enough and Transform Your Life"
//   ></img>
// );
// const Title = () => <h2>{title}</h2>;
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return <h4 style={inlineHeadingStyles}> {author.toUpperCase()} </h4>;
// };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Divi/>
    {/* <Greeting /> */}
    {/* <BookList /> */}
  </React.StrictMode>
);
