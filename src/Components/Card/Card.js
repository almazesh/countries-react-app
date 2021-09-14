
import Loader from '../Loader/Loader';
const Card = ({base}) =>{
    return(
        <>
           {
               base ? (
                    base.map(item =>{
                        return(
                            <div key={item.name} className="col-xl-4 mt-4">
                                <div className="card">
                                    <div className="card-header text-center">
                                         {item.name}
                                    </div>
                                    <div className="card-image">
                                        <img 
                                            src={item.flag} 
                                            className="w-100" 
                                            style={{height:'200px' , objectFit:"cover"}} 
                                            alt=''
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h6>Capital: <span className="text-success">{item.capital}</span></h6>
                                        <h6>Region: <span className="text-success">{item.region}</span></h6>
                                        <h6>Population: <span className="text-success">{item.population}</span></h6>
                                        <h6>Timezones: <span className="text-success">{item.timezones}</span></h6>
                                        <h6>Native name: <span className="text-success">{item.nativeName}</span></h6>

                                    </div>
                                       
                                </div>
                            </div>  
                        )
                    })
               ) : (
                   <div style={{display:'flex' , justifyContent:"center" , alignItems:'center', height:"100vh"}}>
                       <Loader />
                   </div>
               )
           } 
        </> 
    )       
}

export default Card;