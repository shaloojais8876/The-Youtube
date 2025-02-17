import { SiYoutubeshorts } from "react-icons/si";
import { BiHome, BiLike } from "react-icons/bi";
import { MdOutlineSubscriptions, MdOutlineSmartDisplay, MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { CgPlayList } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();
  const isWatchRoute = location.pathname === '/watch';
  if (!isMenuOpen) return null;

  const sidebarContent = (
    <div className="mx-3 cursor-pointer">
      <div className="w-48">
        <ul>
          <li className="px-2 py-3 flex items-center gap-3 hover:bg-gray-200 hover:rounded-lg">
            <BiHome className="w-6 h-6" /><Link to="/">
              Home </Link>
          </li>
          <li className="px-2 py-3 flex items-center gap-3 hover:bg-gray-200 hover:rounded-lg">
            <SiYoutubeshorts className="w-6 h-6" />
            Shorts</li>
          <li className="px-2 py-3 flex items-center gap-3 hover:bg-gray-200 hover:rounded-lg">
            <MdOutlineSubscriptions className="w-6 h-6" />
            Subscriptions</li>
        </ul>
      </div>
      <hr className="my-3" />

      <div>
        <ul>
          <li className="text-[15px] font-bold px-2 py-3 flex items-center gap-3 hover:bg-gray-200 hover:rounded-lg">
            You
            <IoIosArrowForward className="w-4 h-4" />
          </li>
          <li className="px-2 py-3 flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg">
            <FaHistory className="w-5 h-6" />
            History</li>
          <li className="px-2 py-3 flex items-center gap-3 hover:bg-gray-200 hover:rounded-lg">
            <CgPlayList className="w-6 h-6" />
            Playlist</li>
          <li className="px-2 py-3 flex items-center gap-3 hover:bg-gray-200 hover:rounded-lg">
            <MdOutlineSmartDisplay className="w-6 h-6" />
            Your videos</li>
          <li className="px-2 py-3 flex items-center gap-3 hover:bg-gray-200 hover:rounded-lg">
            <MdOutlineWatchLater className="w-6 h-6" />
            Watch Later</li>
          <li className="px-2 py-3 flex items-center gap-3 hover:bg-gray-200 hover:rounded-lg">
            <BiLike className="w-6 h-6" />
            Liked videos</li>
        </ul>
      </div>
      <hr className="my-3" />
    </div>
  );

  if (isWatchRoute) {
    return (
      <div
        className={`fixed top-14 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:w-48 md:w-56 lg:w-64`}
      >
        {sidebarContent}
      </div>
    );
  }

  return (
    <div className="hidden sm:block relative sm:w-48 md:w-56 lg:w-64">
      {sidebarContent}
    </div>
  );
}

export default Sidebar;