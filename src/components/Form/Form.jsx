import React, { useState } from 'react'
import './Form.css';

const Form = () => {
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
        localStorage.setItem('reserva', JSON.stringify(data))
        clearValues();
        setTimeout(() => {
            navigate("/");
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
            value={data.name} />

        <input
            type="text"
            name="author"
            id="author"
            placeholder="Author"
            onChange={handleInputChange}
            value={data.name} />

        <input
            type="text"
            name="Author"
            id="description"
            placeholder="Description"
            onChange={handleInputChange}
            value={data.name}
        />

        <button type="submit">Send</button>
    </form>
}

export default Form