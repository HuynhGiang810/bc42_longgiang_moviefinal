
import './App.css';
import Home from './modules/Home/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MovieDetails from './modules/MovieDetails/MovieDetails';
import ProtectedRoute from "./routes/ProtectedRoute";
import Booking from './modules/Booking/Booking';
import Signup from './modules/Auth/Signup/Signup';
import Signin from './modules/Auth/Signin/Signin';
import MainLayout from './layouts/MainLayout/MainLayout';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import AdminRoute from './routes/AdminRoute';
import MovieManagement from './modules/MovieManagement/MovieManagement';
import EditFilm from './modules/MovieManagement/EditFilm/EditFilm';
import MovieForm from './modules/MovieManagement/MovieForm/MovieForm';
import UserManagement from './modules/UserManagement/UserManagement';
import UserForm from './modules/UserManagement/UserList/UserList';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route
            path="/booking/:maLichChieu"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />

        </Route>


        <Route path="/" element={<AuthLayout />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route path="users" element={<UserManagement />} />
            <Route path="users/userform" element={<UserForm />} />
            <Route path="movies" element={<MovieManagement />} />
            <Route path="movies/editfilm/:id" element={<EditFilm />} />
            <Route path="movies/addfilm" element={<MovieForm />} />
          </Route>
      </Routes>



    </BrowserRouter>
  );
}

export default App;
