import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
    const navigate = useNavigate();
    const initialValues = {
        name: "",
        title: "",
        author: "",
        description: ""

    }

    const clearValues = () => {
        setData(initialValues)
    }
    const [data,setData] = useState(initialValues)


    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('form', JSON.stringify(data))
        clearValues();
        setTimeout(() => {
            navigate("/list");
          }, 1000)
    }

    
    return <form onSubmit={handleSubmit}>
        <h3>Insert your favorite best seller</h3>
        <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            onChange={handleInputChange}
            value={data.name}
        />
        <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            onChange={handleInputChange}
            value={data.title} />

        <input
            type="text"
            name="author"
            id="author"
            placeholder="Author"
            onChange={handleInputChange}
            value={data.author} />

        <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            onChange={handleInputChange}
            value={data.description}
        />

        <button type="submit">Send</button>
    </form>
}

export default Form