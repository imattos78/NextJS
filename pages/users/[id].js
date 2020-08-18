
import {useRouter} from 'next/router';
import Container from '../../components/Container';

const User = (props) =>{
    const router = useRouter()
    const {id} = router.query

    return (
       <Container>
           <div className="row">
               <div className="col-md-6 offset-md-3">
                   <div className="card">
                       <div className="card-header text-center">
                           <img src={props.user.avatar} alt={props.user.first_name} style={{borderRadius: '50%'}}/>

                       </div>
                       <div className="card-body text-center">
                           <h3>
                               {id}. {props.user.first_name} {props.user.last_name}
                           </h3>
                           <p>
                               Email: {props.user.email}
                           </p>


                       </div>

                   </div>

               </div>

           </div>
        </Container>
       
    )
}

User.getInitialProps = async (ctx) =>{
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const resJSON = await res.json()
    return {user: resJSON.data}
}

export default User