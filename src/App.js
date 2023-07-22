import React, { useEffect } from "react";
import "./components/layout/Font.css";
import Navbar from "./components/layout/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
import TopDown from "./components/layout/TopDown";
import { useDispatch, useSelector } from "react-redux";
import { ProtectedRoute } from "protected-route-react";
import toast, { Toaster } from "react-hot-toast";
import { loadUser } from "./redux/actions/user";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/layout/NotFound";
import HomeLoader from "./components/layout/HomeLoader";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import CreateCourse from "./components/Admin/CreateCourse/CreateCourse";
import AdminCourses from "./components/Admin/AdminCourses/AdminCourses";
import Users from "./components/Admin/Users/Users";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Request from "./components/Request/Request";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Courses from "./components/Courses/Courses";
import CoursePage from "./components/CoursePage/CoursePage";
import ChangePassword from "./components/Profile/ChangePassword";
import UpdateProfile from "./components/Profile/UpdateProfile";
import ResetPassword from "./components/Auth/ResetPassword";
import ForgotPassword from "./components/Auth/ForgotPassword";
import SeeMore from "./components/SeeMore/SeeMore";

const App = () => {
  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, message, error]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="all">
      <Router>
        {loading ? (
          <HomeLoader />
        ) : (
          <>
            <Navbar isAuthenticated={isAuthenticated} user={user} />
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Profile Routes  */}

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Profile user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/changepassword"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <ChangePassword />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/updateprofile"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <UpdateProfile user={user} />
                  </ProtectedRoute>
                }
              />

              {/* Auth Routes  */}
              <Route
                path="/login"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <Register />
                  </ProtectedRoute>
                }
              />

              {/* Admin routes  */}
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute
                    adminRoute={true}
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === "admin"}
                  >
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/createcourse"
                element={
                  <ProtectedRoute
                    adminRoute={true}
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === "admin"}
                  >
                    <CreateCourse />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/courses"
                element={
                  <ProtectedRoute
                    adminRoute={true}
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === "admin"}
                  >
                    <AdminCourses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <ProtectedRoute
                    adminRoute={true}
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === "admin"}
                  >
                    <Users />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/createcourse"
                element={
                  <ProtectedRoute
                    adminRoute={true}
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === "admin"}
                  >
                    <CreateCourse />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/courses"
                element={
                  <ProtectedRoute
                    adminRoute={true}
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === "admin"}
                  >
                    <AdminCourses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute
                    adminRoute={true}
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === "admin"}
                  >
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              {/* services  */}
              <Route
                path="/explore_services/"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Courses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/course/:id"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <CoursePage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/forgetpassword"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <ForgotPassword />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/resetpassword/:token"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <ResetPassword />
                  </ProtectedRoute>
                }
              />

              <Route path="/contact" element={<Contact />} />
              <Route path="/request" element={<Request />} />
              <Route path="/see_more" element={<SeeMore />} />
              <Route path="/about" element={<About />} />
              <Route path="/howitworks/:id" element={<HowItWorks />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <Toaster />
            <TopDown />
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
