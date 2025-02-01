import { Menu, Search, Mic, Bell, User } from "lucide-react";
import { YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../utils/constants";
import Button from "../utils/buttonStyles";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";


const Header = () => {

const [searchQuery, setSearchQuery] = useState("");
const [suggestions, setSuggestions] = useState([]);
const [showSuggestions, setShowSuggestions] = useState(false);

useEffect(() => {
 const timer = setTimeout(() => 
  getSearchSuggestions(),200);

   return() =>{
    clearTimeout(timer);
};
},[searchQuery]);

const getSearchSuggestions = async() => {
  console.log("API call-" + searchQuery)
  const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  const json = await data.json();
  setSuggestions(json[1]);
  //console.log(json);
};

const dispatch = useDispatch();

const toggleMenuHandler = () => {
   dispatch(toggleMenu());
};
  return (
    <div className="flex w-full lg:gap-20 justify-between pt-2 mb-6">
       
        {/* Section-1 */}
      <div className="flex gap-4 items-center flex-shrink-0 mx-3">
        {/* 4th thing need to add onClick button Handler to our HamBurger icon. */}
        <Button
           onClick ={ ()=> toggleMenuHandler() }
           type="button" varient="ghost" size="icon" className="flex-shrink-0 bg-transparent">
           <Menu />
        </Button>

        <img 
           className="h-6 mx-2"
           alt="Logo"
           src= {YOUTUBE_LOGO}
        />
      </div>

         {/* Section-2 */}
    <div className="flex flex-grow max-w-[600px] mx-4 items-center">
      <div className="relative flex-grow">
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-l-full border border-secondary-border shadow-inner shadow-secondary px-4 py-2 focus:border-blue-500 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          {showSuggestions && (
            <ul className="absolute w-full bg-white rounded-xl mt-1 z-10">
              {suggestions.map((s) => (
                <li key={s} className="px-4 py-2 mt-2 mb-2 hover:bg-gray-100 flex items-center">
                  <Search className="mr-2" size={16} />
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>

      <Button className="px-4 rounded-r-full  border-secondary-border border border-l-0 flex-shrink-0">
          <Search />
      </Button>
      <Button type="button" size="icon" className="mx-2 flex-shrink-0">
          <Mic />
      </Button>
      </div>

    
   

         {/* Section-3 */}
    <div className="flex">

        <Button size="icon" variant="ghost">
             <Bell />
        </Button>

        <Button size="icon" variant="ghost">
            <User />
        </Button>
      </div>
    </div>
  )
}

export default Header;
