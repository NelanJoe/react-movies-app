import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import PopularMovies from "./pages/PopularMovies";
import DetailMovie from "./pages/DetailMovie";

export default function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/popular-movies" element={<PopularMovies />} />
            <Route path="/movie/:id" element={<DetailMovie />} />
          </Route>
        )
      )}
    />
  );
}
