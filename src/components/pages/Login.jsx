import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast, { Toaster } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // const location = useLocation();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    navigate("/signup");
  };


//   useEffect(() => {
//   if (location.state) {
//     setUserInfo({
//       email: location.state.email || "",
//       password: location.state.password || "",
//     });
//   }
// }, [location]);

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          toast.success("Login successful!");
          setTimeout(() => {
                    navigate("/dashboard");
                  }, 1000);
        } else {
          toast.error("Please verify your email before logging in.");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const customMessages = {
          "auth/invalid-credential": "Invalid email or password.",
          "auth/invalid-email": "Invalid email format.",
          "auth/user-not-found": "User not found. Please sign up first.",
          "auth/wrong-password": "Incorrect password.",
          "auth/network-request-failed": "Network error. Try again.",
        };

        const message =
          customMessages[errorCode] ||
          "Something went wrong. Please try again.";
        toast.error(message);
        console.error("Login error:", errorCode);
      });
  };


  const handleGoogleLogin = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      toast.success(`Welcome ${user.displayName || "User"}!`);
      navigate("/dashboard"); 
      console.log("Google User Info:", user);
    })
    .catch((error) => {
      console.error("Google login error:", error);
      toast.error("Google login failed. Please try again.");
    });
};



  const gradientColors =
    "bg-gradient-to-r from-[#5e5eee] via-[#7858c9] via-[#36b7cc] via-[#3d76dc] to-[#3594d5]";
  return (
    <>
      <Toaster />
      <div className={"py-6 bg-[#3594d5]"}>
        <Card className="w-full max-w-sm mx-auto shadow-lg font-lexend">
          <CardHeader className="text-center">
            {/* Title with Gradient */}
            <CardTitle
              className={`text-[20px] font-bold bg-clip-text text-transparent ${gradientColors}`}>
              Login to your account
            </CardTitle>

            {/* Description with subtle gradient underline */}
            <CardDescription className="text-gray-600 dark:text-gray-300 mt-2 relative inline-block">
              Enter your email below to login
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full ${gradientColors} rounded-full`}></span>
            </CardDescription>

            <CardAction className="mt-3">
              <Button
                variant="link"
                className="text-[#5e5eee] hover:text-[#36b7cc] cursor-pointer"
                onClick={handleSignUp}>
                Sign Up
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-[#5e5eee]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                    className="focus:border-0 focus:ring-0"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password" className="text-[#5e5eee]">
                      Password
                    </Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-[#3d76dc]">
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="***********"
                    value={userInfo.password}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    required
                    className="focus:border-0 focus:ring-0"
                  />
                </div>
                <CardFooter className="flex flex-col gap-2 px-0">
                  <Button
                    type="submit"
                    className={`w-full cursor-pointer bg-gradient-to-r from-[#5e5eee] via-[#7858c9] via-[#36b7cc] via-[#3d76dc] to-[#3594d5] text-white hover:opacity-90 transition`}>
                    Login
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleGoogleLogin}
                    className={`w-full cursor-pointer border-[#5e5eee] text-[#5e5eee] hover:bg-[#5e5eee]/10 hover:text-[#3d76dc] transition`}>
                    <FcGoogle/> Login with Google
                  </Button>
                </CardFooter>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
