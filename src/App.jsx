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
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/popular-movies" element={<PopularMovies />} />
            <Route path="/movie/:id" element={<DetailMovie />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        )
      )}
    />
  );
}
