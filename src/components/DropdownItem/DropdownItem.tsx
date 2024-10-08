import classes from './dropdownItem.module.css';

type DropdownItemProps = {
    name: string;
    id: number;
    isSelected: boolean; 
    onSelect: (id: number) => void;
  }
  
  export const DropdownItem: React.FC<DropdownItemProps> = ({ name, id, isSelected, onSelect }) => {
    const handleClick = () => {
        onSelect(id); 
      };

    return (
      <div className={classes['listitem']}
      onClick={handleClick} 
      style={{ 
        color: isSelected ? '#517cfa' : 'grey' 
      }}
      >
         {name}
      </div>
    )
  }
  