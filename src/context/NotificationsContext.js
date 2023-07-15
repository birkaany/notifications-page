import { createContext, useContext, useState } from "react";
import { useUsersContext } from "./UsersContext";

const NotificationsContext = createContext();

export function NotificationsContextWrapper({ children }) {
  const users = useUsersContext();
  const [notifications, setNotifications] = useState([
    {
      userName: users[0]?.name,
      userPicture: users[0]?.profilePic,
      notificationType: "reaction",
      isRead: false,
      activity: "My first chess tournement!",
      activityLink: "#",
    },
    {
      userName: users[1]?.name,
      userPicture: users[1]?.profilePic,
      notificationType: "follow",
      isRead: false,
    },
    {
      userName: users[2]?.name,
      userPicture: users[2]?.profilePic,
      notificationType: "joinGroup",
      isRead: false,
      activity: "Chess Club",
      activityLink: "#",
    },
    {
      userName: users[3]?.name,
      userPicture: users[3]?.profilePic,
      notificationType: "comment",
      isRead: false,
    },
    {
      userName: users[4]?.name,
      userPicture: users[4]?.profilePic,
      notificationType: "leftGroup",
      isRead: false,
    },
  ]);
  return (
    <NotificationsContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotificationsContext() {
  return useContext(NotificationsContext);
}
