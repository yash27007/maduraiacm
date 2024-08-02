import React from 'react'
import Hero from '../sections/Hero/Hero';
import ProfileCards from '../sections/ProfileCard/ProfileCards';
import NavigationBar from '../Components/NavBar/NavigationBar';
import Footer from '../Components/Footer/Footer';
import About from '../sections/About/About';

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