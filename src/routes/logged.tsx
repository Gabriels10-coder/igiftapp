import React, {useState} from 'react';
import Dashboard from '../pages/logged/dashboard';
import SearchEstablishment from '../pages/logged/search';
import Requests from '../pages/logged/requests';
import {BottomNavigation} from 'react-native-paper';
import User from '../pages/logged/user';

const Logged: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'Inicio', title: 'Início', icon: 'home'},
        {key: 'Search', title: 'Buscar', icon: 'magnify'},
        {key: 'Pedidos', title: 'Pedidos', icon: 'clipboard-text'},
        {key: 'User', title: 'Perfil', icon: 'account'},
    ]);
    const renderScene = BottomNavigation.SceneMap({
        Inicio: Dashboard,
        Search: SearchEstablishment,
        Pedidos: Requests,
        User: User,
    });
    return (
        <BottomNavigation
            shifting={false}
            sceneAnimationEnabled={true}
            activeColor="#1e88e5"
            inactiveColor="#8ac1f2"
            barStyle={{backgroundColor: '#ffff'}}
            onIndexChange={setIndex}
            renderScene={renderScene}
            navigationState={{index, routes}}
        />
    );
};

export default Logged;
