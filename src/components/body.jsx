import {
  faAutomobile,
  faCab,
  faGamepad,
  faMagnet,
  faReceipt,
  faRectangleAd,
  faSailboat,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function FanSupport() {
  return (
    <>
      <span className="flex justify-start p-3 font-bold ">Users</span>
      {/* // user analyser */}
      <div className="flex justify-start mr-3 p-2">
        {/* //chart pie percentage */}
        <svg id="circle" width="160" height="160" className=" ">
          <circle
            cx="70"
            cy="70"
            r="50"
            fill="none"
            stroke="#ccc"
            strokeWidth="30"
          ></circle>
          <circle
            id="progressCircle"
            cx="70"
            cy="70"
            r="50"
            fill="none"
            className=" stroke-sky-600 shadow-lg rounded"
            strokeWidth="40"
            strokeDasharray="100 400"
          ></circle>
        </svg>
        {/* //gender identifier */}
        <div className="flex justify-center flex-col">
          <h4 className=" font-bold">Gender</h4>
          <div className="flex justify-start items-center m-1">
            <span className=" w-6 h-6 bg-blue-400 mr-2 p-1"></span>
            <span>Male</span>
          </div>
          <div className="flex justify-start items-center m-1">
            <span className=" w-6 h-6 bg-gray-200 mr-2 p-1"></span>
            <span>Female</span>
          </div>
        </div>
        {/* user in out analyser */}
        <div className=" flex justify-center flex-col">
          <h4 className=" font-bold">Activities</h4>
          <div className="flex justify-start items-center m-1">
            <span className=" w-6 h-6 bg-green-400 mr-2 p-1"></span>
            <span>+1000</span>
          </div>
          <div className="flex justify-start items-center m-1">
            <span className=" w-6 h-6 bg-orange-200 mr-2 p-1"></span>
            <span>-100</span>
          </div>
        </div>
      </div>
    </>
  );
}
///Earing start
export function Earning() {
  return (
    <>
      <Heading />
      <Profits />
    </>
  );
}

function Heading() {
  const [selectedLi, setSelectedLi] = useState("day");
  return (
    <>
      {/* Heading */}
      <div className="flex justify-between p-2">
        <div className="flex justify-center items-center text-lg font-bold">
          Earning
        </div>
        <ul className=" flex flex-row">
          <li
            className={
              " text-slate-400 hover:text-slate-800 m-1 rounded-md hover:bg-slate-200 w-8 h-8 flex items-center justify-center cursor-pointer flex-row " +
              (selectedLi === "day" && " text-white bg-black")
            }
            onClick={() => setSelectedLi("day")}
          >
            <span className="">ID</span>
          </li>
          <li
            className={
              " text-slate-400 hover:text-slate-800 m-1 rounded-md hover:bg-slate-200 w-8 h-8 flex items-center justify-center cursor-pointer " +
              (selectedLi === "week" && " text-white bg-black")
            }
            onClick={() => setSelectedLi("week")}
          >
            <span className="">IW</span>
          </li>
          <li
            className={
              " text-slate-400 hover:text-slate-800 m-1 rounded-md hover:bg-slate-200 w-8 h-8 flex items-center justify-center cursor-pointer " +
              (selectedLi === "month" && " text-white bg-black")
            }
            onClick={() => setSelectedLi("month")}
          >
            <span className="">IM</span>
          </li>
          <li
            className={
              " text-slate-400 hover:text-slate-800 m-1 rounded-md hover:bg-slate-200 w-8 h-8 flex items-center justify-center cursor-pointer " +
              (selectedLi === "year" && " text-white bg-black")
            }
            onClick={() => setSelectedLi("year")}
          >
            <span className="">IY</span>
          </li>
          <li
            className={
              " text-slate-400 hover:text-slate-800 m-1 rounded-md hover:bg-slate-200 w-16 h-8 flex items-center justify-center cursor-pointer " +
              (selectedLi === "all-time" && " text-white bg-black")
            }
            onClick={() => setSelectedLi("all-time")}
          >
            <span className="w-18">All time</span>
          </li>
        </ul>
      </div>
      <div></div>
    </>
  );
}

function Profits() {
  return (
    <>
      <div className=" grid grid-cols-4 gap-3 p-2">
        <div className=" col-span-2 border-b-2 border-b-slate-400  text-slate-400 p-1">
          Sources
        </div>
        <div className=" border-b-2 border-b-slate-400 flex justify-center  text-slate-400 p-1">
          Current pledge
        </div>
        <div className=" border-b-2 border-b-slate-400 flex justify-center  text-slate-400 p-1">
          Available Storage
        </div>
        <div className=" col-span-2">
          <div className=" flex items-center justify-start">
            <div className="rounded-md bg-blue-400 text-white p-2 m-3 mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 "
              >
                <path
                  fillRule="evenodd"
                  d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
                  clipRule="evenodd"
                />
                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
              </svg>
            </div>

            <div className=" flex flex-col justify-center">
              <span className="font-bold">Posts</span>
              <span className=" text-slate-400">facebook based</span>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <span className=" font-bold ">$53.00</span>
        </div>
        <div className=" flex items-center justify-center">
          <span className="  ">120/</span>
          <span className="  text-slate-500">250 Gb</span>
        </div>
        <div className=" col-span-2">
          <div className=" flex items-center justify-start">
            <div className="rounded-md bg-red-400 text-white p-2 m-3 mr-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className=" flex flex-col justify-center">
              <span className="font-bold">Videos</span>
              <span className=" text-slate-400">titok based</span>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <span className=" font-bold">$49.00</span>
        </div>
        <div className=" flex items-center justify-center">
          <span className=" ">200/</span>
          <span className=" text-slate-500">500 Gb</span>
        </div>
      </div>
    </>
  );
}
///earning end

///social link
export function SocialLink() {
  return (
    <>
      <ul className=" flex flex-row justify-evenly p-2">
        <li className=" cursor-pointer ">
          <div className=" w-11 h-11 hover:bg-blue-600 bg-blue-300 rounded-md p-1 m-1 flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faAutomobile} />
          </div>
        </li>
        <li className=" cursor-pointer ">
          <div className=" w-11 h-11 hover:bg-blue-600 bg-blue-300 rounded-md p-1 m-1 flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faMagnet} />
          </div>
        </li>
        <li className=" cursor-pointer ">
          <div className=" w-11 h-11 hover:bg-blue-600 bg-blue-300 rounded-md p-1 m-1 flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faSailboat} />
          </div>
        </li>
        <li className=" cursor-pointer ">
          <div className=" w-11 h-11 hover:bg-blue-600 bg-blue-300 rounded-md p-1 m-1 flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faRectangleAd} />
          </div>
        </li>
        <li className=" cursor-pointer ">
          <div className=" w-11 h-11 hover:bg-blue-600 bg-blue-300 rounded-md p-1 m-1 flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faWallet} />
          </div>
        </li>
        <li className=" cursor-pointer ">
          <div className=" w-11 h-11 hover:bg-blue-600 bg-blue-300 rounded-md p-1 m-1 flex items-center justify-center text-white">
            <FontAwesomeIcon icon={faGamepad} />
          </div>
        </li>
      </ul>
    </>
  );
}
