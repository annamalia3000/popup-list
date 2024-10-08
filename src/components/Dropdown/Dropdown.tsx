import { useState } from "react";
import { DropdownList} from '../DropdownList/DropdownList';
import classes from './dropdown.module.css';

const lists = [
    {
        name: 'Profile Information',
        id: 21
    }, 
    {
        name: 'Change Password',
        id: 23241
    },
    {
        name: 'Become PRO',
        id: 13214
    },
    {
        name: 'Help',
        id: 43214
    },
    {
        name: 'Log Out',
        id: 913214
    }
];

export const Dropdown: React.FC = () => {
    const [ isShown, setIsShown ] = useState(false);
    const [selectedItem, setSelectedItem] = useState<number | null>(null); 

    const handleClick = () => {
        setIsShown(!isShown);
    };
  
    return (
      <div className={classes['container']}>
          <button 
          className={classes['button']}
          onClick={handleClick}
          >
            Account settings
          </button>
          {isShown && (
            <DropdownList 
            items={lists}
            selectedItem={selectedItem}
            onItemSelect={setSelectedItem}
            />
      )}
      </div>
    )
}
