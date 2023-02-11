import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) {
        return;
      }
      //to see whatever elements user clicked on
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false); //to close dropdown automatically
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

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
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-rose-400 text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full">
        {renderedOptions}
      </Panel>
      )}
    </div>
  )
}

export default Dropdown;
