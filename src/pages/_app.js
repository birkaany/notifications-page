import "@/styles/globals.css";
import { NotificationsContextWrapper } from "@/context/NotificationsContext";
import { UsersContextWrapper } from "@/context/UsersContext";

export default function App({ Component, pageProps }) {
  return (
    <UsersContextWrapper>
      <NotificationsContextWrapper>
        <Component {...pageProps} />
      </NotificationsContextWrapper>
    </UsersContextWrapper>
  );
}
