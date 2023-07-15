import { useState } from "react";
import styles from "../styles/NotificationList.module.css";
import { SingleNotification } from "./SingleNotification";

export const NotificationList = ({ users }) => {
  const [notifications, setNotifications] = useState([
    {
      userName: users[0].name,
      userPicture: users[0].profilePic,
      notificationType: "reaction",
      isRead: false,
      activity: "My first chess tournement!",
      activityLink: "#",
    },
    {
      userName: users[1].name,
      userPicture: users[1].profilePic,
      notificationType: "follow",
      isRead: false,
    },
    {
      userName: users[2].name,
      userPicture: users[2].profilePic,
      notificationType: "joinGroup",
      isRead: false,
      activity: "Chess Club",
      activityLink: "#",
    },
  ]);

  function changeReadStatus(index) {
    const updateReadStatus = notifications.map((notification, i) => {
      if (i === index) {
        return {
          ...notification,
          isRead: true,
        };
      }
      return notification;
    });
    setNotifications(updateReadStatus);
  }

  return (
    <div className={styles.wrapper}>
      {notifications.map((notification, index) => {
        return (
          <SingleNotification
            key={index}
            userName={notification.userName}
            userPicture={notification.userPicture}
            actionName={notification.notificationType}
            isRead={notification.isRead}
            activity={notification.activity}
            activityLink={notification.activityLink}
            handleClick={changeReadStatus}
            index={index}
          />
        );
      })}
    </div>
  );
};
