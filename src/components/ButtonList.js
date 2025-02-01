
import Button from '../utils/buttonStyles';



const list = ["JavaScript", "Nodejs", "Reactjs", "Programming", "CSS", 
              "HTML", "Music", "Movie", "Cooking", "Tailwind-CSS",
              "Data-Structures", "T-Series", "React-Routers", "Live",
               "PodCasts", "Parrots", "ShinChan", "New to You"]
            



const ButtonList = () => {
  

 return (
  <div className="flex w-full overflow-x-auto scrollbar-hide scroll-smooth">
 

<div className= "px-4 flex w-full">
  {/* Sliding Content */}
  <Button variant = "dark" className="font-medium px-3 py-1 mx-2 rounded-lg  ">
    All
  </Button>

 {list?.map((items, index) => (
  <div key={index}>
  <Button className="font-medium  px-3 py-1  mx-2 rounded-lg">
  <span className="whitespace-nowrap">{items}</span>
  </Button>
</div>
 ))
 }
</div>

</div>

 ) 
}
export default ButtonList;
