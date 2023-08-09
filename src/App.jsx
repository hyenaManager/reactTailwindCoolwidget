import { Earning, FanSupport, SocialLink } from "./components/body";
import Navigations from "./components/navigation";
import { Adds, NotiFication } from "./components/other";

export default function App() {
  return (
    <>
      <div className=" grid lg:grid-cols-4 md:grid-rows-2 gap-4 m-3 ">
        <div className=" lg:row-span-3 bg-white rounded-xl relative shadow-lg ">
          <Navigations />
        </div>
        <div className=" lg:col-span-2 bg-white rounded-xl shadow-lg  ">
          <FanSupport />
        </div>
        <div className=" lg:row-span-2 bg-white rounded-xl shadow-lg ">
          <NotiFication />
        </div>
        <div className=" lg:col-span-2 bg-white rounded-xl shadow-lg ">
          <Earning />
        </div>
        <div className=" lg:col-span-2 bg-white rounded-xl shadow-lg ">
          <SocialLink />
        </div>
        <div className=" bg-blue-600 rounded-xl shadow-lg ">
          <Adds />
        </div>
      </div>
    </>
  );
}
