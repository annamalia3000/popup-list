import { DropdownItem } from '../DropdownItem/DropdownItem';

import classes from './dropdownList.module.css';

type DropdownListProps = {
    items: Array<{
      name: string;
      id: number;
    }>;
    selectedItem: number | null; 
    onItemSelect: (id: number) => void; 
  };
  
  export const DropdownList: React.FC<DropdownListProps> = ({ items, selectedItem, onItemSelect }) => {
    return (
      <div className={classes['list']}>
        {items.map((item) => (
            <DropdownItem 
            key={item.id} 
            name={item.name}
            id={item.id}
            isSelected={item.id === selectedItem}
            onSelect={onItemSelect}
             />
        ))}
      </div>
    )
  }
  