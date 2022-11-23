import { noUserImageUri } from "../../consts";

function UserImage({ src, styles = {}, alt }) {
  return (
    <img className={styles} src={`${src ? src : noUserImageUri}`} alt={alt} />
  );
}

export default UserImage;
