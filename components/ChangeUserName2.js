import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

import upload from "../pages/upload";



<head>
  <script src="alert/dist/alertify.min.js"></script>
  <link rel="stylesheet" href="alert/dist/alertify.core.css" />
  <link
    rel="stylesheet"
    href="alert/dist/alertify.default.css"
    id="toggleCSS"
  />
</head>;

function ChangeUserName() {

  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new UserName (Current UserName : ${user.get("username")})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };
  const router = useRouter();

  return (
    <div className="text-sm absolute top-5 right-5 flex flex-grow flex-col p-10 ">
      <button
        className="hover:opacity-75 pb-10 hover:text-cyan-800 uppercase decoration-solid	"
        onClick={setUsername}
        disabled={isUserUpdating}
      >
        Change Your UserName
      </button>
      <button
            type="button"
            className=" hover:opacity-75 pb-10 hover:text-cyan-800 uppercase decoration-solid	shadow-lg border-cyan-900" 
            onClick={() => router.push("/")}
          >
            Back
          </button>
    </div>
  );
}

export default ChangeUserName;
