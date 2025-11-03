import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleNameInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  const handleEmailInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const handlePhoneInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, phone: e.target.value };
    });
  };
  const handlePasswordInput = (e) => {
    setUserInfo((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (
      !userInfo.name ||
      !userInfo.email ||
      !userInfo.phone ||
      !userInfo.password
    ) {
      toast.error("Credential Is Missing");
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
          const user = userCredential.user;

          // Update user's display name in Firebase
          updateProfile(user, {
            displayName: userInfo.name,
            phoneNumber: "userInfo.phone",
            photoURL: "userPhoto.png"
          })
            .then(() => {
              console.log("User Info:");
              console.log("Name:", user.displayName);
              console.log("Email:", user.email);
              console.log("Phone:", userInfo.phone);
              console.log("Password:", userInfo.password);

              // Send verification email
              sendEmailVerification(user)
                .then(() => {
                  toast.success(
                    "Signup successful! Verification email sent. Please check your inbox."
                  );
                  setTimeout(() => {
                    // navigate("/login", {
                    //   state: {
                    //     email: userInfo.email,
                    //     password: userInfo.password
                    //   }
                    // });
                    navigate("/login");
                  }, 1000);
                  console.log(user);
                  
                })
                .catch((error) => {
                  toast.error("Failed to send verification email.");
                  console.error("Email verification error:", error);
                });
            })
            .catch((error) => {
              console.error("Error updating name:", error);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // toast.error("Something Is Missing")
          // console.log(errorMessage);

          const errorCode = error.code;

          const customMessages = {
            "auth/email-already-in-use":
              "This email is already registered. Please log in instead.",
            "auth/invalid-email": "Please enter a valid email address.",
            "auth/weak-password":
              "Your password is too weak. It must be at least 6 characters long.",
            "auth/missing-password": "Please enter your password.",
            "auth/invalid-credential":
              "Invalid credentials. Please check your email or password.",
            "auth/network-request-failed":
              "Network error. Please check your internet connection.",
          };

          const message =
            customMessages[errorCode] ||
            "Something went wrong. Please try again.";
          toast.error(message);
          console.log("Firebase error:", errorCode);
        });
    }
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
              className={`text-[18px] font-bold bg-clip-text text-transparent ${gradientColors}`}>
              Create Account
            </CardTitle>

            {/* Description with subtle gradient underline */}
            <CardDescription className="text-gray-600 dark:text-gray-300 mt-2 relative inline-block">
              Enter your email below to Signup
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full ${gradientColors} rounded-full`}></span>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSignupSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="text" className="text-[#5e5eee]">
                    Name
                  </Label>
                  <Input
                    id="text"
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={handleNameInput}
                    className="focus:border-[#5e5eee] focus:ring-1 focus:ring-[#36b7cc]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-[#5e5eee]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    onChange={handleEmailInput}
                    className="focus:border-[#5e5eee] focus:ring-1 focus:ring-[#36b7cc]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="number" className="text-[#5e5eee]">
                    Phone Number
                  </Label>
                  <Input
                    id="number"
                    type="number"
                    placeholder="+880**********"
                    onChange={handlePhoneInput}
                    className="focus:border-[#5e5eee] focus:ring-1 focus:ring-[#36b7cc] no-spinner"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password" className="text-[#5e5eee]">
                      Password
                    </Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="************"
                    onChange={handlePasswordInput}
                    className="focus:border-[#5e5eee] focus:ring-1 focus:ring-[#36b7cc]"
                  />
                </div>
                <CardFooter className="flex flex-col gap-2 px-0">
                  <Button
                    type="submit"
                    className={`w-full cursor-pointer bg-gradient-to-r from-[#5e5eee] via-[#7858c9] via-[#36b7cc] via-[#3d76dc] to-[#3594d5] text-white hover:opacity-90 transition`}>
                    SignUp
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

export default Signup;
