import React from "react";

const AboutContainer = () => {
  return (
    <section className="h-screen max-w-screen-lg mx-auto flex" id="about">
      <div className=" m-auto pb-20">
        <h1 className="text-4xl text-gray-500">About Me</h1>
        <div className="flex mb-4">
          <img
            className="border border-red-500 h-64 w-64"
            src="https://cdn1.iconfinder.com/data/icons/image-manipulations/100/13-512.png"
            alt="placeholder"
          />
          <p className="text-gray-400 pt-12 pl-3">
            God? God's turning people into insect monsters Beth. I'm the one beating them to death. Thank
            me. Nobody's killing me until after I catch my wife with another man. Listen to your sister
            Morty; to live is to risk it all; otherwise you're just an inert chunk of randomly assembled
            molecules drifting wherever the universe blows you. Oh, I'm sorry, Jerry, I didn't see you
            there, how much of that did you hear? Do you know how many characters there are in the
            Simpsons Morty? There's like a-a billion characters, M-Morty. There was an episode where
            Former President BUSH was their neighbor!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
