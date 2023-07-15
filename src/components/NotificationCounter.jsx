import { useNotificationsContext } from "@/context/NotificationsContext";
import styles from "../styles/NotificationCounter.module.css";
export const NotificationCounter = () => {
  const { notifications } = useNotificationsContext();
  let notificationCount = 0;
  notifications.forEach((notification) => {
    if (notification.isRead == false) {
      notificationCount += 1;
    }
  });
  return <div className={styles.notificationCount}>{notificationCount}</div>;
};
