import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { logo, categories } from '../utils/constants';
import { SearchBar } from './';

export const Navbar = () => (
    <Stack component="nav" direction="rou" alignItems="center" p={2}
        sx={{ position: "sticky", backgroundColor: "#000", top: 0, justifyContent: "space-between", zIndex: 10 }}>
        
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
    </Stack>
)

export default Navbar