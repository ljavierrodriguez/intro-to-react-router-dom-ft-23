import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const Shop = () => {

    // invocar a la funcion navigate que nos permite redirigir al usuario 
    const navigate = useNavigate()

    const location = useLocation()

    const [categories, setCategories] = useState([
        { id: 1, name: "Sports" },
        { id: 2, name: "Technologies" },
        { id: 3, name: "Health" },
        { id: 4, name: "Games" },
    ])

    // hooks que nos permite acceder a las parametos en la url
    const params = useParams()



    return (
        <>
            <div>Shop</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-group">
                            {
                                categories.map((category) => {
                                    return (
                                        <Link key={category.id} className='list-group-item list-group-item-action' to={`/shop/category/${category.id}/${category.name}`}>
                                            {category.name}
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-9">
                        {
                            (params?.id) && (
                                <h4>Category: {params?.id}{params?.name}</h4>
                            )
                        }
                    </div>
                </div>
            </div>
            <button className='btn btn-warning btn-sm' onClick={() => navigate(-1)}>Regresar</button>

        </>
    )
}

export default Shop