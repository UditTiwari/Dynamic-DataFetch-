import React, { useState } from 'react';

const Clothes = () => {
    let [clothes] = useState([{ id: 1, type: 'clothes', name: 'Jackets', price: '$30', description: 'For Winter' }, 
    { id: 2, type: 'clothes', name: 'Blazers', price: '$35', description: 'Formal Blazers' },
    { id: 3, type: 'clothes', name: 'Shirts', price: '$25', description: 'Half and Full Shirts' },
    { id: 4, type: 'clothes', name: 'Suits', price: '$15', description: 'Ethnic Wear' },
    { id: 5, type: 'clothes', name: 'Track Suit', price: '$33', description: 'Sports Wear' }])
    let [getData, setData] = useState(null)

    const handleDropdown = (e) => {
        let id = e.target.value
        let item = clothes.filter((data)=> data.id == id)[0]
        setData(item)
    }
    return (<div className="container">
        <div className="dropdown" onClick={handleDropdown}>
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Clothes</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                    clothes.map((data) => {
                        return <button key={data.id} value={data.id} className="dropdown-item">{data.name}</button>
                    })
                }

            </div>
        </div>
        {getData && <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top"   src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"  alt="Card "/>
                <div className="card-body">
            <h4 className="card-title">{getData.name}</h4>
            <h2 className="card-text">{getData.description}</h2>
            <h2 className="card-text">{getData.price}</h2>      
                </div>
</div>}

        </div>)
}
export default Clothes