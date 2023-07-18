import FormLogin from "@/components/FormLogin";
import Greeting from "@/components/Greeting";
import { useState } from "react";

type User = {
  username: string;
  password: string;
};

const userList: User[] = [
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

function validateUsernameAndPassword({ username, password }: User): boolean {
  const foundUser = userList.find((user) => {
    return user.username === username && user.password === password;
  });

  return !!foundUser;
}

async function loginApi(user: User): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isUserValid = validateUsernameAndPassword(user);

      if (isUserValid) resolve(true);
      else resolve(false);
    }, 1000);
  });
}

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [currentUsername, setCurrentUsername] = useState("");

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
      isLoading={isLoading}
      onSubmit={async (user) => {
        setLoading(true);

        const isLoginPass = await loginApi(user);

        if (isLoginPass) {
          setIsLogin(true);
          setCurrentUsername(user.username);
        } else {
          setIsLogin(false);
          setCurrentUsername("");
        }

        setLoading(false);
      }}
    />
  );
}
