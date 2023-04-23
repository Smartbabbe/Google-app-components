import AppsLauncherIcon from "./AppsLauncherIcon";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <div style={{display: "flex", justifyContent: "flex-end", padding: "10px"}}>
      <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
        <MenuItem title = {"Gmail"} />
        <MenuItem title = {"Images"} />
        <AppsLauncherIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
