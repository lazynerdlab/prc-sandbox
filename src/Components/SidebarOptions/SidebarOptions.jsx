import { useLocation } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
const SidebarOption = ({ title, icon, event }) => {
  const { pathname } = useLocation();
  const [path, setPath] = useState("");
  useLayoutEffect(() => {
    if (pathname === "/") {
      setPath("/dashboard");
      return;
    }
    setPath(pathname);
    return;
  }, [path, pathname]);
  return (
    <a
      onClick={event}
      className="block w-full active:bg-primary-bold cursor-pointer p-[1rem] text-[1.2rem]"
      style={
        title.split(" ").join("").toLowerCase().includes(path.split("/")[1])
          ? {
              color: "#000",
            }
          : { color: "#fff" }
      }
    >
      {icon && (
        <div className="flex justify-start items-center">
          {icon}
          <p className="ml-[0.5rem]">{title}</p>
        </div>
      )}
      {!icon && <h4 className="ml-[0.5rem]">{title}</h4>}
    </a>
  );
};

export default SidebarOption;
