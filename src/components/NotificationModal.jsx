import styles from "../styles/NotificationModal.module.css";
import { NotificationCounter } from "./NotificationCounter";
import { NotificationList } from "./NotificationList";
export const NotificationModal = ({ users }) => {
  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.h1}>Notifications</h1>
          <NotificationCounter />
        </div>
        <button className={styles.btnMarkAll}>Mark all as read</button>
      </header>
      <NotificationList users={users} />
    </main>
  );
};
