import React from "react";
import crwn from "../assets/portfolio/crwn.jpg";
import crypto from "../assets/portfolio/crypto.jpg";
import discord from "../assets/portfolio/discord.jpg";
import paytm from "../assets/portfolio/paytm.jpg";
import pomodoro from "../assets/portfolio/pomodoro.jpg";
import todo from "../assets/portfolio/todo.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: crwn,
      href: "https://main--iridescent-syrniki-54f5ae.netlify.app/",
      code: "https://github.com/shkhrtrxsh/crwn-/tree/main/crwn-clothing-v2-main",
      desc: "Full Stack shopping website"
    },
    {
      id: 2,
      src: pomodoro,
      href: "https://pomodoroshkhrtrxsh.netlify.app/",
      code: "https://github.com/shkhrtrxsh/Pomodoro-Timer-App",
      desc: "Pomdodoro Timer"
    },
    {
      id: 3,
      src: crypto,
      href: "https://gleaming-rolypoly-c5919a.netlify.app/",
      code: "https://github.com/shkhrtrxsh/Cryptotracker-project",
      desc: "Cryptotracker"
    },
    {
      id: 4,
      src: discord,
      href: "https://lovely-ganache-aa93f4.netlify.app/",
      code: "https://github.com/shkhrtrxsh/discordclone",
      desc: "Discord Clone"
    },
    {
      id: 5,
      src: todo,
      href: "https://todo-list-app-muuz-7yezaml18-shkhrtrxsh.vercel.app/login",
      code: "https://github.com/shkhrtrxsh/Todo-List-App",
      desc: "Todo List App"
    },
    {
      id: 6,
      src: paytm,
      href: "https://keen-hotteok-76af2d.netlify.app/",
      code: "https://github.com/shkhrtrxsh/paytm-clone",
      desc: "PayTm Clone"
    },
  ];

  return (
    <div
      name="portfolio"
      className=" pb-20 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, code, desc }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noreferrer" className="hover:cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
              <div>
                <p className="p-1 flex justify-center">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
