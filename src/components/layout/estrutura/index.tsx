import React from 'react';
import {useAppSelector} from '../../../redux/config/hooks';
import Loading from '../../LoadingPage';

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({children}) => {
    const {loading} = useAppSelector(state => state.utils);

    return <>{loading ? <Loading /> : children}</>;
};

export default Layout;
