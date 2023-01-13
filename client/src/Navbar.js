import { Nav, NavItem, Button } from 'reactstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './App'

function Navbar(){

    const [ user, setUser ] = useContext(UserContext)
    const history = useHistory()

    function logout(){
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok) {
                setUser({})
                history.push('/login')
            }
        })
    }
    return (
        <Nav
            fill
            pills
            >
        
            <NavItem>
                <NavLink
                to={user.username ? "/my-notes" : "/login"}>
                    <strong>My Notes</strong>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink
                to="/new-note">
                    <strong>New Note</strong>
                </NavLink>
            </NavItem>

            <NavItem>
                { user.username ? <Button onClick={logout}>Logout</Button>:(
                    <NavLink
                    to="/login">
                        <strong>Login</strong>
                    </NavLink>
                )}
                </NavItem>

        </Nav>
    )
}

export default Navbar