import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex);
    };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    //const content = isExpanded && <div>{item.content}</div>;
    const icon = <span className="text-rose-400">
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>

    return (
      <div key={item.id}>
        <div className="flex p-3 bg-gray-50 border-b-2 items-center cursor-pointer" onClick={() => handleClick(index)}>
          {icon}
          {item.label}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return (
    <div className="border-x border-t rounded">{renderedItems}</div>
  )
}

export default Accordion;