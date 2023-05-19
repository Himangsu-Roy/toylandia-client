import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeLayout></HomeLayout>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Home;
