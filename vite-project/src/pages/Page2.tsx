import styles from "./Page2.module.css";
import { Link } from 'react-router-dom';

function Page2() {
  return (
    <div className={styles.messengercontainer}>
      <div className={styles.userpanel}>
        <div className={styles.avatar}>ME</div>
        <div className={styles.username}>BURATKA</div>
      </div>
      <div className={styles.chatlist}>
        <h2>Chats</h2>
        <p>Welcome to Messenger!</p>
      </div>

<Link to="/sign_in">Go to Sign In</Link>
    </div>
  );
}

export default Page2;