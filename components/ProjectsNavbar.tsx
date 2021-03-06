import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem:FunctionComponent<{value:Category | 'All', handleFilterCategory:Function, active: string}> = ({value, handleFilterCategory, active}) => {
    
    let className = 'capitalize cursor-pointer hover:text-green'
    if(active === value) 
        className += ' text-green'
    
    return <li className={className} onClick={() => handleFilterCategory(value)}>
        {value}
    </li>

}


const ProjectsNavbar: FunctionComponent<{handleFilterCategory:Function, active: string}> = (props) => {
    return (
        <div className="flex px-6 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value='All' {...props}/>
            <NavItem value='react' {...props}/>
            <NavItem value='flutter' {...props}/>
            <NavItem value='python' {...props}/>
        </div>
    )
}

export default ProjectsNavbar
