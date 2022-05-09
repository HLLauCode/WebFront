import React, { useState } from 'react';
import { Table, Spin, Input, Button } from 'antd';
import http from '../common/http-common.js';
import { LoadingOutlined, SearchOutlined } from '@ant-design/icons';

function DogTable() {
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

	const columns = [
		{
      key: "dogName",
			title: 'Name',
			dataIndex: 'name',
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
        return (
          <>
          <Input 
            key="filterkeyname"
            autoFocus 
            placeholder="Type dog name here"
            value={selectedKeys[0]}
            onChange={(e)=>{
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }}
            onPressEnter={()=>{
              confirm();
            }}
            onBlur={()=>{
              confirm();
            }}
           ></Input>
            <Button 
              key="buttonkey1"
              onClick={()=>{
                confirm();
              }}
              type="primary"
              >
              Search
              </Button>
            <Button 
              key="buttonkey2"
              onClick={()=>{
                clearFilters();
                confirm();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: ()=>{
        return <SearchOutlined key="searchoutlinedkey1" />
      },
      onFilter:(value, record)=>{
        return record.name.toLowerCase().includes(value.toLowerCase())
      },
		},
		{
      key: "dogGender",
			title: 'Gender',
			dataIndex: 'gender',
      filters:[
        {text:'F', value:'F'},
        {text:'M', value:'M'}
      ],
      onFilter:(value, record)=>{
        return record.gender == value
      }
		},
		{
      key: "dogAge",
			title: 'Age',
			dataIndex: 'age',
      sorter: {
        compare: (a, b) => a.age - b.age
      }
		},
		{
      key: "dogBreed",
			title: 'Breed',
			dataIndex: 'breed',
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
        return (
          <>
          <Input 
            key="filterkeybreed"
            autoFocus 
            placeholder="Type breed here"
            value={selectedKeys[0]}
            onChange={(e)=>{
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }}
            onPressEnter={()=>{
              confirm();
            }}
            onBlur={()=>{
              confirm();
            }}
           ></Input>
            <Button 
              key="filterbuttonbreedS"
              onClick={()=>{
                confirm();
              }}
              type="primary"
              >
              Search
              </Button>
            <Button 
              key="filterbuttonbreedC"
              onClick={()=>{
                clearFilters();
                confirm();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: ()=>{
        return <SearchOutlined key="searchoutlinedkey2" />
      },
      onFilter:(value, record)=>{
        return record.breed.toLowerCase().includes(value.toLowerCase())
      },
		},
		{
      key: "dogHeight",
			title: 'Height',
			dataIndex: 'height',
      sorter: {
        compare: (a, b) => a.height - b.height
      }
		},
		{
      key: "dogWeight",
			title: 'Weight',
			dataIndex: 'weight',
      sorter: {
        compare: (a, b) => a.weight - b.weight
      }
		},
		{
      key: "dogSummary",
			title: 'Summary',
			dataIndex: 'summary'
		}
	];

	if (loading) {
		const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
		return <Spin indicator={antIcon} />;
	} else {

		return (
			<>
				<Table columns={columns} dataSource={dogs} rowKey={dogs => dogs.id} />
			</>
    )
	}
        
}

export default DogTable;
