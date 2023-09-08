import React, { JSX } from 'react';
import { BarLoader } from 'react-spinners';

interface IPreloaderProps {
    loading: boolean;
}

const Preloader: React.FC<IPreloaderProps> = ({
    loading,
}: IPreloaderProps): JSX.Element => {
    return <BarLoader color="#36d7b7" loading={loading} />;
};

export default Preloader;
