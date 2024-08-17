import React from "react";
import Card from "./Card"; // Import the Card component

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
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        imgURL="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        phone="+918 372 574"
        email="gmail@chucknorris.com"
      />
    </div>
  );
}

export default App;
