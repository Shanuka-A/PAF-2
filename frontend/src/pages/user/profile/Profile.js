/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from "react";
import "./Profile.css";
import CreatePost from "../../../components/CreatePost";
import Post from "../../../components/Post";
import {
  deleteProfileById,
  getAllPost,
  getCurrentUser
} from "../../../util/APIUtils";
import { toast } from "react-toastify";
import { ACCESS_TOKEN } from "../../../constants";
import { useNavigate } from "react-router";
import EditUserModal from "../../../components/EditUserModal";
import  Sidebar from  '../../../common/Sidebar'
import Badge from "react-bootstrap/Badge";
import WorkoutPlan from "../../WorkoutPlan";
import MealPlan from "../../mealplan/MealPlan";

const Profile = ({ currentUser }) => {
  const [user, setUser] = useState(currentUser);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const refetchUser = async () => {
    try {
      const response = await getCurrentUser();
      if (!response) return;

      setUser(response);
    } catch (error) {
      toast("Oops something went wrong!", { type: "error",position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark", });
    }
  };

  const fetchAllPost = useCallback(async () => {
    try {
      const response = await getAllPost();
      if (!response.length) return;

      setPosts(response.reverse().filter(post => post.userId === user.id));
    } catch (error) {
      toast("Oops something went wrong!", { type: "error" ,position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",});
    }
  }, [user.id]);

  useEffect(() => {
    fetchAllPost();
  }, [fetchAllPost]);

  const editProfile = async () => {
    setOpen(true);
  };

  const deleteProfile = async () => {
    try {
      const response = await deleteProfileById(user.id);
      if (response != null) {
        toast("profile remove successfully", { type: "success" ,position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",});
        localStorage.removeItem(ACCESS_TOKEN);
        window.location.href = "/login";
      }
    } catch (error) {
      toast("Oops something went wrong!", { type: "error" ,position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark", });
    }
  };

  const handleSharedPosts = () => {
    navigate("/shared");
  };

  return (
    <>
      <Sidebar/>
      <header aria-label="Page Header" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp5339178.jpg')" }}>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mt-8 flex flex-col items-center justify-center">
            <a href="#" className="block shrink-0">
              <span className="sr-only">Profile</span>
              <img
                alt={user.name}
                src={user.imageUrl}
                className="h-100 w-100 mb-2 rounded-full object-cover"
              />
            </a>
            <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl">
             {user.name}
            </h1>

            <p className="mt-1.5 text-sm text-gray-200">{user.email}</p>
            <Badge bg="success">connected</Badge>
          </div>

          <div className="flex mt-4 selection:items-center justify-center gap-4">
            <div className="flex items-center gap-4">

              <div className="relative">
                <div
                  onClick={editProfile}
                  className="rounded-md p-1 px-4 font-semibold cursor-pointer text-gray-100 bg-orange-600 ml-auto"
                >
                  Edit Profile
                </div>
              </div>

              <div
                onClick={deleteProfile}
                className="rounded-md p-1 px-4 font-semibold cursor-pointer text-gray-100 bg-red-700 ml-auto"
              >
                Delete Profile
              </div>

              <div
                onClick={MealPlan}
                className="rounded-md p-1 px-4 font-semibold cursor-pointer text-gray-100 bg-red-700 ml-auto"
              >
                WorkoutPlan
              </div>

            </div>
          </div>
        </div>
        <div className="count ml-auto">
          <div className="buttons flex"></div>
        </div>
      </header>

      <div className="home-container bg-gray-300">
        <div className="container" >
          <CreatePost currentUser={user} refetchPosts={fetchAllPost} />

          {posts.map(post => (
            <Post
              key={post.id}
              currentUser={user}
              refetchPosts={fetchAllPost}
              {...post}
            />
          ))}
        </div>
      </div>

      <EditUserModal
        open={open}
        setOpen={setOpen}
        currentUser={user}
        refetchUser={refetchUser}
      />

    </>
  );
};

export default Profile;
