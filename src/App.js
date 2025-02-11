import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

//createBrowserRouter will takess an array of objects.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },

      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

//3re thing need to provide our store to our App.Through <Provider>
function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-screen overflow-x-hidden">
        <Header /> 
        <RouterProvider router={appRouter} />{" "}
      </div>
    </Provider>
  );
}

export default App;
