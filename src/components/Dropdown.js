import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //close the dropdown
    setIsOpen(false);
    // what the option user clicked on?
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return <div
      className="hover:bg-rose-100 rounded cursor-pointer p-1"
      onClick={() => handleOptionClick(option)}
      key={option.value}
    >
      {option.label}
    </div>
  });

  //* ? * used to check either the value is defined or undefined

  return (
    <div className="w-48 relative">
      <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-rose-400 text-lg" />
      </div>
      {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown;
