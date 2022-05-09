import React from 'react';
import './App.css';
import { Layout, Space, Button } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CreateDog from './components/CreateDog';
import UpdateDog from './components/UpdateDog';
import DeleteDog from './components/DeleteDog';
import DetailDog from './components/DetailDog';
import Register from './components/Register';
import Login from './components/Login';
import Notfound from './components/Notfound';
import DogTable from './components/DogTable';

const { Header, Content, Footer } = Layout;

const handleClick = () => {
	localStorage.removeItem('token');
	console.log('logged out!');
};

function App() {
	return (
		<Router>
			<Header>
				<nav>
					<Space>
						<Link to="/">List of Dogs</Link>
						<Link to="/table">Table of Dog</Link>
						<Link to="/create">New Dog</Link>
						<Link to="/update">Update Dog</Link>
						<Link to="/delete">Remove Dog</Link>
						<Link to="/register">Register</Link>
						<Link id="menu-item-60146" to="/login">
							Login
						</Link>
						<Button onClick={handleClick}>Logout</Button>
					</Space>
				</nav>
			</Header>

			<Content>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/table" element={<DogTable />} />
					<Route path="/create" element={<CreateDog />} />
					<Route path="/update" element={<UpdateDog />} />
					<Route path="/delete" element={<DeleteDog />} />
					<Route path="/dog/:aid" element={<DetailDog />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</Content>
			<Footer>Dog API</Footer>
		</Router>
	);
}

export default App;
