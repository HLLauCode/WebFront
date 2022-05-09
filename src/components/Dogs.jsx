import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Spin, Image } from 'antd';
import http from '../common/http-common.js';
import { LoadingOutlined } from '@ant-design/icons';

function Dogs() {
	const [loading, setLoading] = React.useState(true);
	const [dogs, setDogs] = React.useState(null);
	React.useEffect(() => {
		http
			.get('/dogs')
			.then(response => {
				setDogs(response.data);
			})
			.then(() => {
				setLoading(false);
			});
	}, []);

	if (loading) {
		const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
		return (<Spin indicator={antIcon} />)
	} else {
		if (!dogs) {
			return <div>There is no dog available now.</div>;
		} else {
			return (
				<Row justify="space-around">
					{dogs &&
						dogs.map(({ id, name, imageurl }) => (
							<Col span={6} key={id}>
								<Card title={id} style={{ width: 300 }}>
                  <Image width={200} height={200} src={`${imageurl}`}/>
									<h1>{name}</h1>
									<p />
									<Link to={`/dog/${id}`}>Details</Link>
								</Card>
							</Col>
						))}
				</Row>
			);
		}
	}
}

export default Dogs;
