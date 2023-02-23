import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import './CoastersPage.css'

const CoastersPage = () => {

    const [coasters, setCoasters] = useState([])
    const { user } = useContext(AuthContext)

    const loadCoasters = () => {

        fetch('http://localhost:5005/api/coasters')
            .then(res => res.json())
            .then(allCoasters => setCoasters(allCoasters))
    }

    useEffect(() => loadCoasters(), [])

    return (
        <main>
            <h1>Listado de montañas rusas</h1>
            <hr />
            {coasters.map(eachCoaster => {
                return (
                    <article className='coaster-card' key={eachCoaster._id}>
                        <img src={eachCoaster.imageUrl}></img>
                        <Link to={`/detalles/${eachCoaster._id}`}>{eachCoaster.title}</Link> -
                        {
                            user && <Link to={`/detalles/`}>EDITAR</Link>
                        }



                    </article>

                )
            })}
        </main>
    )
}

export default CoastersPage