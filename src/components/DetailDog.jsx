import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Image, Spin } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import http from '../common/http-common.js';
import { LoadingOutlined } from '@ant-design/icons';

function DetailDog(props) {
	const { aid } = useParams();
	const navigate = useNavigate();
	const [dog, setDog] = React.useState(null);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		http
			.get(`/dogs/${aid}`)
			.then(response => {
				setDog(response.data);
			})
			.then(() => {
				setLoading(false);
			});
	}, []);
	if (loading) {
		const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
		return <Spin indicator={antIcon} />;
	} else {
		if (dog) {
			return (
				<>
					<Image width={500} height={500} src={`${dog.imageurl}`} />
					<h1>Name : {dog.name}</h1>
					<p>Gender : {dog.gender}</p>
					<p>Age : {dog.age}</p>
					<p>Breed : {dog.breed}</p>
          <p>Height : {dog.height} CM</p>
          <p>Weight : {dog.weight} KG</p>
					<p>Summary of the dog : {dog.summary}</p>
					<Button
						type="primary"
						icon={<RollbackOutlined />}
						onClick={() => navigate(-1)}
					/>
				</>
			);
		} else {
			return (
				<>
					<div>No such dog</div>
				</>
			);
		}
	}
}

export default DetailDog;
