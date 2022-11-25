import "./SidebarOptions.scss";
const SidebarOption = ({ title, icon, event }) => {
  return (
    <a
      onClick={event}
      className="sidebaroption block active:bg-primary-bold cursor-pointer p-[1rem] text-[1.5rem]"
    >
      {icon && (
        <>
          <p>{title}</p>
          {icon}
        </>
      )}
      {!icon && <h4>{title}</h4>}
    </a>
  );
};

export default SidebarOption;
