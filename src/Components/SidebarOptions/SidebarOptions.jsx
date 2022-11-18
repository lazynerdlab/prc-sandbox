import "./SidebarOptions.scss";
const SidebarOption = ({ title, icon, event }) => {
  return (
    <div onClick={event} className="sidebaroption">
      {icon && (
        <>
          <p>{title}</p>
          {icon}
        </>
      )}
      {!icon && <h4>{title}</h4>}
    </div>
  );
};

export default SidebarOption;
