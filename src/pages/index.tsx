import FormLogin from "@/components/FormLogin";
import Greeting from "@/components/Greeting";
import { useState } from "react";

const userList = [
  {
    username: "rasita",
    password: "rasita123456",
  },
  {
    username: "yutthana",
    password: "yutthana12345678",
  },
  {
    username: "usage_hybrid01@mailinator.com",
    password: "Test1234",
  },
];

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(false);
  const [currentUsername, setCurrentUsername] = useState("");

  console.log("isLogin", isLogin ? "Yes" : "No");

  if (isLogin) {
    return (
      <Greeting
        username={currentUsername}
        onLogout={() => {
          setIsLogin(false);
          setCurrentUsername("");
        }}
      />
    );
  }

  return (
    <FormLogin
      onSubmit={(username, password) => {
        const logginPassed = userList.find(
          (user) => user.username === username && user.password === password,
        );

        if (logginPassed) {
          setIsLogin(true);
          setCurrentUsername(username);
        } else {
          setIsLogin(false);
          setCurrentUsername("");
        }
      }}
    />
  );
}
