import React, { useState } from 'react';

const Grocery = () => {
    let [grocery] = useState([{ id: 1, type: 'grocery', name: 'Apple', price: '$300', description: 'Fruit Item' }, 
    { id: 2, type: 'grocery', name: 'Eggs', price: '$350', description: 'Non-Veg' },
    { id: 3, type: 'grocery', name: 'coffee', price: '$2500', description: 'Out Of stock' },
    { id: 4, type: 'grocery', name: 'Pasta', price: '$150', description: 'Italian item' },
    { id: 5, type: 'grocery', name: 'Rice', price: '$30', description: 'Ceral g' }])
    let [getData, setData] = useState(null)

    const handleDropdown = (e) => {
        let id = e.target.value
        let item = grocery.filter((data)=> data.id == id)[0]
        setData(item)
    }
    return (<div className="containercontainer">
        <div className="dropdown" onClick={handleDropdown}>
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Grocery</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                    grocery.map((data) => {
                        return <button key={data.id} value={data.id} className="dropdown-item">{data.name}</button>
                    })
                }

            </div>
        </div>
        {getData && <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src=" https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card "/>
                <div className="card-body">
            <h4 className="card-title">{getData.name}</h4>
            <h2 className="card-text">{getData.description}</h2>
            <h2 className="card-text">{getData.price}</h2>      
                </div>
</div>}

        </div>)
}
export default Grocery