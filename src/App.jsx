import { Earning, FanSupport, SocialLink } from "./components/body";
import Navigations from "./components/navigation";
import { Adds, NotiFication } from "./components/other";

export default function App() {
  return (
    <>
      <div className=" grid grid-cols-4 gap-4 m-3 relative">
        <div className="row-span-3 bg-white rounded-xl ">
          <Navigations />
        </div>
        <div className="col-span-2 bg-white rounded-xl shadow-lg">
          <FanSupport />
        </div>
        <div className="row-span-2  bg-white rounded-xl shadow-lg">
          <NotiFication />
        </div>
        <div className="col-span-2  bg-white rounded-xl shadow-lg">
          <Earning />
        </div>
        <div className="col-span-2 bg-white rounded-xl shadow-lg">
          <SocialLink />
        </div>
        <div className=" row-span-1 bg-blue-600 rounded-xl shadow-lg">
          <Adds />
        </div>
      </div>
    </>
  );
}
