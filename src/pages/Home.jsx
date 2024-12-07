import React, {Suspense, lazy} from 'react'
import Hero from '../sections/Hero/Hero';
import NavigationBar from '../Components/NavBar/NavigationBar';
import Footer from '../Components/Footer/Footer';
import About from '../sections/About/About';

const ProfileCards = lazy(()=> import("../sections/ProfileCard/ProfileCards"));

function Home(){
    return (
    <>
    <NavigationBar/>
    <Hero/>
    <About/>
    <ProfileCards/>
    <Footer/>
    </>
)
}
export default Home;