import React, { useEffect } from 'react';
import { Input, Button, Select, } from 'antd';

const { Option } = Select;

const handleChange = () => {
    alert('todo eklendi...');
}

const Header = (props) => {

    useEffect(() => {
        
    }, []);

    return (
        <div>
            <h1>Getir Todo App</h1>
            <h3>Todo yazın</h3>
            <Input className='input' placeholder='add todo'/>
            <h3>Öncelik Sırası</h3>
            <Select defaultValue="low" style={{ width: '100%'}} onChange={handleChange}>
                <Option value="low">Low</Option>
                <Option value="heigh">Heigh</Option>
            </Select>
            <h3>Deadline tarihi</h3>
             <Input type='date' style={{ marginBottom: 10}}/>

            <Button type="primary" style={{ width: '100%'}}>Add Todo</Button>
        </div>
    )
}

export default Header;