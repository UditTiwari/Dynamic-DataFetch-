import React, { useState } from 'react';

//Electronics
const Main = () => {                 // 1.created functional component //2. then created array of object  
    let [electronics] = useState([{ id: 1, type: 'mobile', name: 'Google Pixel', price: '$300', description: 'Best phone' }, 
    { id: 2, type: 'mobile', name: 'Oppo', price: '$350', description: 'Very costly plus waste of money' },
    { id: 3, type: 'mobile', name: 'Iphone', price: '$2500', description: 'Good phone but costly' },
    { id: 4, type: 'mobile', name: 'Motorola', price: '$150', description: 'Good Phone' },
    { id: 5, type: 'mobile', name: 'Vivo', price: '$30', description: 'Very cheap' }])
    //array destructing 
    let [getData, setData] = useState(null)

    const handleDropdown = (e) => {
        let id = e.target.value
        let item = electronics.filter((data)=> data.id == id)[0]  // filter array by id one by one 
        setData(item)    // hooks concept 
    }
    //3. here we define handleDropdown in on-click method
    return (<div className="container">
        
        <div className="dropdown" onClick={handleDropdown}>  
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Electronics</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                {
                    electronics.map((data) => {
                        return <button key={data.id} value={data.id} className="dropdown-item">{data.name}</button>
                    })
                }

            </div>
        </div>
        {getData && <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1574944982455-1c850c6e0fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Image"/>
                <div className="card-body">
            <h4 className="card-title " >{getData.name}</h4>
            <h2 className="card-text">{getData.description}</h2>
            <h2 className="card-text">{getData.price}</h2>      
                </div>
</div>}

        </div>)
}
export default Main