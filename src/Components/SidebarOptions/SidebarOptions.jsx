const SidebarOption = ({ title, icon, event }) => {
  return (
    <a
      onClick={event}
      className="block active:bg-primary-bold cursor-pointer p-[1rem] text-[1.2rem]"
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
