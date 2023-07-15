import styles from "../styles/NotificationList.module.css";

import { SingleNotification } from "./SingleNotification";
import { useNotificationsContext } from "../context/NotificationsContext";
import { useUsersContext } from "../context/UsersContext";

export const NotificationList = () => {
  const { notifications, setNotifications } = useNotificationsContext();
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
