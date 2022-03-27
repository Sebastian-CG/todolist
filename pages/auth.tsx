import Image from "next/image";
import useAuth from "hooks/useAuth";
import { ILoginBtnProvider } from "interfaces";
import { TLoginProviders } from "types";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Logo from "public/logo.png";
import styles from "scss/pages/auth.module.scss";

const LogInBtnData: ILoginBtnProvider[] = [
  {
    icon: <FcGoogle />,
    nameProvider: "google",
  },
  {
    icon: <FaGithub />,
    nameProvider: "github",
  },
];

const Auth = () => {
  const { logInWithGoogle, logInWithGithub } = useAuth();

  const handleLogIn = async (provider: TLoginProviders) => {
    try {
      if (provider === "google") await logInWithGoogle();
      if (provider === "github") await logInWithGithub();
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logInContainer}>
        <header className={styles.logoWrapper}>
          <Image src={Logo} width={30} height={30} alt="" />
          <h1 className={styles.logoName}>todolist</h1>
        </header>

        <p className={styles.message}>
          Log in with the provider you chose and if you are new select a
          provider to log in.
        </p>

        <div className={styles.logInBtnsContainer}>
          {LogInBtnData.map(({ icon, nameProvider }) => (
            <button
              key={nameProvider}
              className={styles.logInBtn}
              onClick={() => handleLogIn(nameProvider)}
            >
              <div className={styles.logInBtnIcon}>{icon}</div>
              Log In with{" "}
              {nameProvider.charAt(0).toUpperCase() + nameProvider.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auth;
