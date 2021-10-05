import './headerStyler.css'
import React, {useState} from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {VscColorMode} from 'react-icons/vsc'
import {FaThList} from 'react-icons/fa'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
  import ModalAddRepo from '../Modal/new-modal-repository-github'
  import {Input} from 'reactstrap';
  import {EventEmitter} from '../../events';


const HeaderGithub = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filterValue, setFilterValue] = React.useState('');

    const toggle = () => setIsOpen(!isOpen);

    const handleChange = (event) => {
    setFilterValue(event.target.value);
      }
    
    const searchFilter = (event) => {
        if(event.key === 'Enter'){
            EventEmitter.dispatch('filter', filterValue);
        }
      }

    return (
    <div className="spacing-header-card">
        <Navbar className="header-color" light expand="md">
          <NavbarBrand className="spacing-icon-github" href="/"><AiFillGithub/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
                <Nav className="size-header" navbar>
                    <NavItem className="size-text-header">
                        <NavLink>Github Compare</NavLink>
                    </NavItem>
                    <UncontrolledDropdown className="spacing-filter" nav inNavbar>
                            <DropdownToggle nav caret>
                            Filter and order
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                Stars
                            </DropdownItem>
                            <DropdownItem>
                                Forks
                            </DropdownItem>
                            <DropdownItem>
                                Open Issues
                            </DropdownItem>
                            <DropdownItem>
                                Age
                            </DropdownItem>
                            <DropdownItem>
                                Last Commit
                            </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                        <Input className="size-input-search" type='search' placeholder="Search" onChange={handleChange} onKeyPress={searchFilter}  />
                        <div className="spacing-button">
                            <NavbarBrand href="/"><AiOutlineStar/></NavbarBrand>
                            <NavbarBrand href="/"><VscColorMode/></NavbarBrand>
                            <NavbarBrand href="/"><FaThList/></NavbarBrand>
                        </div>  
                        <ModalAddRepo></ModalAddRepo>
                </Nav>
          </Collapse>
        </Navbar>
    </div>
    );
  }
export  default HeaderGithub;
