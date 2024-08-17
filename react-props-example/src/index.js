import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} alt="avatar_img" />
      <p>{props.phoneNo}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Doraemon"
      image="https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg"
      phoneNo=" +123 456 789"
      email="D@Doraemon.com"
    />

    <Card
      name="Shinchain"
      image="https://ih1.redbubble.net/image.1824652942.6749/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
      phoneNo="+987 654 321"
      email="Shinchain@nowhere.com"
    />

    <Card
      name="Dora"
      image="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2013/09/event_hernandez_news-300x225.jpg"
      phoneNo="+918 372 574"
      email="gmail@dora.com"
    />
  </div>,
  document.getElementById("root")
);
