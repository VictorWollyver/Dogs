import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Components/Feed/Feed'
import Head from '../Components/Head';
import { UserContext } from '../userContext';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats';

const User = () => {
  const { dados } = React.useContext(UserContext)
  return (
    <section>
      <Head title='Minha conta' />

      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={dados.id} />} />
        <Route path='/post' element={<UserPhotoPost />} />
        <Route path='/stats' element={<UserStats />} />
      </Routes>
    </section>
  )
};

export default User;
