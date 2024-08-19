import React from "react";
import Card from "./Card"; // Import the Card component
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Doraemon"
        imgURL="https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg"
        phone=" +123 456 789"
        email="D@Doraemon.com"
      />

      <Card
        name="Shinchan"
        imgURL="https://ih1.redbubble.net/image.1824652942.6749/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
        phone="+987 654 321"
        email="Shinchan@nowhere.com"
      />

      <Card
        name="Dora"
        imgURL="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2013/09/event_hernandez_news-300x225.jpg"
        phone="+918 372 574"
        email="gmail@dora.com"
      />
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
