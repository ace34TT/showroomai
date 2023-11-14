import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { auth, provider } from "./../configs/firebase.config";
import { login, logout } from "./../features/auth.features";
import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { signUpUserSvc, signInUserSvc } from "./../services/firebase.service";
import { AiOutlineLogout } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import { LuCrown } from "react-icons/lu";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const scrollToSection = () => {
    const section = document.getElementById("app-section");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };
  const authenticate = async () => {
    try {
      setIsLoading(true);
      document.body.classList.add("disableScroll");
      const userCredential = await signInWithPopup(auth, provider);
      const additionalUserInfo = getAdditionalUserInfo(userCredential);
      if (additionalUserInfo.isNewUser) {
        const access = await signUpUserSvc(userCredential.user.uid);
        dispatch(login({ user: userCredential.user, access: access }));
        setIsLoading(false);
        document.body.classList.remove("disableScroll");
      } else {
        const access = await signInUserSvc(userCredential.user.uid);
        dispatch(login({ user: userCredential.user, access: access }));
        setIsLoading(false);
        document.body.classList.remove("disableScroll");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error during sign-in", error);
    }
  };
  // @ts-ignore
  const user = useSelector((state) => state.auth_asdJ4Kh2a.user);
  // @ts-ignore
  const access = useSelector((state) => state.auth_asdJ4Kh2a.access);
  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <header className="fixed z-50 top-0 left-0 w-full h-20 bg-white flex justify-between items-center px-4 md:px-10 shadow-md">
        <button
          onClick={() => navigate("/")}
          className="font-extrabold md:text-2xl text-gray-800"
        >
          showroom <span className="text-[#00d1ff]">ai</span>
        </button>
        <div className="h-full flex items-center gap-2 md:gap-10">
          <div className="sr-only md:not-sr-only">
            <button
              className=" flex gap-2 items-center h-10 px-4 py-2 bg-yellow-400 text-neutral-800 font-bold rounded-xl text-sm md:text-base"
              onClick={() => navigate("plan")}
              disabled={isLoading}
            >
              <LuCrown size={24} />
              Premium
            </button>
          </div>
          <div className=" md:sr-only">
            <button
              className=" flex gap-2 items-center h-10 w-10 justify-center rounded-full bg-yellow-400 text-neutral-800 "
              onClick={() => navigate("plan")}
              disabled={isLoading}
            >
              <LuCrown size={24} />
            </button>
          </div>
          <div className="sr-only md:not-sr-only">
            <button
              className="flex items-center justify-center h-10 px-4 py-2 border-2 border-neutral-900 text-neutral-800 font-bold rounded-xl text-sm md:text-base"
              onClick={scrollToSection}
              disabled={isLoading}
            >
              Start creating
            </button>
          </div>
          {user ? (
            <div className="flex w-fit items-center justify-between gap-2">
              <div className="flex items-center gap-4">
                <button
                  className=" inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground py-2 px-4 relative h-10 w-10 rounded-full"
                  type="button"
                >
                  {/* <div className="not-sr-only md:sr-only text-sm flex justify-center items-center  absolute -top-2 -right-2 z-40 bg-neutral-800 text-white rounded-full  w-6 h-6 font-extrabold">
                    15
                  </div> */}
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                    <img
                      className="aspect-square h-full w-full"
                      alt={user.displayName}
                      src={user.photoURL}
                    />
                  </span>
                </button>
                {/* <p className="sr-only md:not-sr-only border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition">
                  <div className="">
                    <span>{access.credits} </span>credits
                  </div>
                </p> */}
              </div>
              <button
                className="w-10 h-10 border-2 border-neutral-900 flex justify-center items-center rounded-full"
                onClick={() => {
                  setIsLoading(true);
                  dispatch(logout());
                  setTimeout(() => {
                    setIsLoading(false);
                    navigate("/");
                  }, 5000);
                }}
              >
                <AiOutlineLogout size={20} className="font-extrabold" />
              </button>
            </div>
          ) : (
            <>
              <div className="sr-only md:not-sr-only">
                <button
                  className="h-10 px-4 flex items-center gap-2 py-2 bg-zinc-100 text-neutral-800 font-bold rounded-xl ext-sm md:text-base"
                  onClick={authenticate}
                  disabled={isLoading}
                >
                  <FcGoogle />
                  Login
                </button>
              </div>
              <div className=" md:sr-only">
                <button
                  className=" flex gap-2 items-center h-10 w-10 justify-center rounded-full bg-zinc-100 text-neutral-800 "
                  onClick={authenticate}
                  disabled={isLoading}
                >
                  <FcGoogle />
                </button>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
