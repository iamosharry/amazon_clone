import { FaCaretDown } from "react-icons/fa";
import useBullean from "../../services/bullean";
import all from "../../all.json";

const DepartmentList = () => {
  const { open, setOpen } = useBullean();

  const { selectedOption, setSelectedOption } = useBullean();
  return (
    <>
      <div className="relative border max-w-fit">
        <button
          onClick={() => setOpen()}
          className={` flex items-center space-x-2  bg-[#D4D4D4] w-fit p-2 rounded-l-[7px] ${
            open ? "border-2 border-yellow-500" : ""
          }`}
        >
          <span className="">{selectedOption || "All"}</span>
          <span>
            <FaCaretDown className="text-[#6A6A6A]" />
          </span>
        </button>
        {open && (
          <div className="absolute  z-50 bg-white border w-fit mt-2 overflow-hidden rounded-lg ">
            <div className="h-[400px] w-[250px] rounded-xl   overflow-y-auto">
              {all.depart.map((dep) => (
                <p
                  onClick={() => setSelectedOption(dep.department)}
                  className={`px-2 p-1 text-[13px] font-semibold cursor-pointer hover:bg-blue-600 hover:text-white`}
                  key={dep.id}
                >
                  {dep.department}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DepartmentList;
