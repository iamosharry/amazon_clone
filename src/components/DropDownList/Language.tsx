import us_flag from "../../assets/us_flag.png";
import { FaCaretDown } from "react-icons/fa";
import all from "../../all.json";
import useBoolean from "../../services/bullean"; // Corrected spelling to 'useBoolean'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const Language: React.FC = () => {
  const { open, setOpen, selectedOption, setSelectedOption } = useBoolean();
  const [text, setText] = useState("");

  const handleLanguageChange = (index: number) => {
    setSelectedOption(index);
    setText(all.language[index].short); // Set the selected language text
    setOpen(); // Close the dropdown after selection
  };

  return (
    <div
      onMouseEnter={() => setOpen()} // Use mouseEnter for better UX
      onMouseLeave={() => setOpen()} // Use mouseLeave for better UX
      className="relative flex items-center space-x-2 bg-gray-200 rounded-lg p-2 cursor-pointer transition duration-300 ease-in-out w-fit"
    >
      <img className="w-8 h-8 object-contain" src={us_flag} alt="US Flag" />
      <div className="flex items-center">
        <span className="font-bold">{text || "EN"}</span>
        <FaCaretDown />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 z-10 w-[280px] bg-gray-200 rounded-md shadow-lg p-3 mt-2"
            initial={{ opacity: 0, y: 300 }} // Initial state
            animate={{ opacity: 1, y: 240 }} // Animation when opening
            exit={{ opacity: 0, y: 340 }} // Animation when closing
            transition={{ duration: 0.3 }} // Transition duration
          >
            <p className="mb-2 font-semibold flex items-center space-x-2">
              <div>Change language</div>
              <div>
                <a
                  href="#"
                  className="text-blue-500 hover:underline text-[13px]"
                >
                  Learn more
                </a>
              </div>
            </p>

            <div className="flex items-center space-x-2 mb-3">
              <div className="w-5 h-5 rounded-full border border-gray-700 flex items-center justify-center">
                <span className="block w-2 h-2 bg-orange-500 rounded-full"></span>
              </div>
              <span>English - EN</span>
            </div>

            <ul className="py-2 border-t border-gray-600">
              {all.language.map((lan, index) => (
                <li
                  key={lan.id}
                  onMouseEnter={() => setSelectedOption(index)} // Use mouseEnter for better UX
                  onClick={() => handleLanguageChange(index)} // Handle language selection
                  className={`flex items-center space-x-2 py-1 transition-colors duration-200 cursor-pointer hover:bg-gray-300 ${
                    selectedOption === index ? "bg-gray-300" : ""
                  }`}
                >
                  <div className="w-5 h-5 rounded-full border border-gray-700 flex items-center justify-center">
                    <span
                      className={`${
                        selectedOption === index
                          ? "bg-orange-500"
                          : "bg-transparent"
                      } w-2 h-2 rounded-full`}
                    />
                  </div>
                  <p
                    className={`transition-colors duration-200 ${
                      selectedOption === index
                        ? "text-orange-500 underline"
                        : ""
                    }`}
                  >
                    {lan.lan}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Language;
