import TransferModal from "../../Components/Modals/TransferModal";
const Transfer = () => {
  return (
    <div className="flex h-[70vh] align-center items-center justify-center">
      <TransferModal action={"Transfer"} type={"decrease"} />
    </div>
  );
};

export default Transfer;
