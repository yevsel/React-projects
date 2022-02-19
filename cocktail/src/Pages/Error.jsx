import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div className='text-center'>
            <h2 className='m-5 text-light'>
                Nothing To see here
            </h2>
            <Link to='/'>
                <button className='btn btn-success'>Back Home</button>
            </Link>
        </div>
     );
}
 
export default ErrorPage;