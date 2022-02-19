import FoodContainer from "../components/FoodContainer";
import SideBar from "../components/SideBar";


const Home = () => {
    return ( 
        <main className='home'>
            <SideBar/>
            <FoodContainer/>
        </main>
     );
}
 
export default Home;