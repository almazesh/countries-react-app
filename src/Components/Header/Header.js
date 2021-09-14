import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../util/Route';
import { getApp } from '../../api/index';
import Card from '../Card/Card';

const Header = () =>{
    const [base , setBase] = useState(null)
    useEffect(() =>{
        getApp('all')
        .then(res => res.json())
        .then(r => {
            setBase(r)
        })

    }, [])

    const chooseRoute = route => {
        getApp(route !== 'all' ? `region/${route}` : route === 'all' ? 'all' : console.log('Hi'))
        .then(res => res.json())
        .then(r => setBase(r))
    }

    const filteredCountry = (e) =>{
        const value = e.target.value.toUpperCase()
        const filters = base.filter(({name}) => name.toUpperCase().includes(value))
        setBase(filters)

     }

    return(
        <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" >Countries App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                Routes.map((item , index) => (
                                    <li className="nav-item" key={index}>
                                        <Link
                                            onClick={() => chooseRoute(item.route)} 
                                            to={`${item.route}`} className="nav-link">{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <form className="d-flex">
                            <input 
                                onChange={filteredCountry} className="form-control me-2" 
                                type="search" 
                                placeholder="Search by the name"
                                aria-label="Search" />
                        </form>
                        </div>
                    </div>
                </nav>    
                <div className="container">
                    <div className="row">
                        <Card base={base} />
                    </div>
                </div>
        </>
    )
}

export default Header;