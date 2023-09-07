import React, { JSX, useEffect, useRef, useState } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './VoxelDog.module.scss';
import Skeleton from '@/shared/ui/Skeleton';
import { OrthographicCamera, Scene, sRGBEncoding, Vector3, WebGLRenderer } from 'three';

interface IVoxelDogProps {
    className?: string
}

const defaultCameraPositionsX = 20 * Math.sin(0.2 * Math.PI);
const defaultCameraPositionsY = 10;
const defaultCameraPositionsZ = 20 * Math.sin(0.2 * Math.PI);

const VoxelDog: React.FC<IVoxelDogProps> = ({className}: IVoxelDogProps): JSX.Element => {
    const refContainer = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [renderer, setRenderer] = useState<WebGLRenderer>();
    const [camera, setCamera] = useState<OrthographicCamera>();
    const [target] = useState(new Vector3(-0.5, 1.2, 0));
    const [initialCameraPosition] = useState(new Vector3(defaultCameraPositionsX, defaultCameraPositionsY, defaultCameraPositionsZ));
    const [scene] = useState(new Scene());
    const [controls, setControls] = useState();

    useEffect(() => {
        const {current: container} = refContainer;
        if(container && !renderer) {
            const sceneWidth = container.clientWidth;
            const sceneHeight = container.clientHeight;

            const renderer = new WebGLRenderer({
                antialias: true,
                alpha: true,
            })

            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(sceneWidth, sceneHeight);
            renderer.outputEncoding = sRGBEncoding;
            container.appendChild(renderer.domElement);
            setRenderer(renderer);

            const scale = sceneHeight * 0.005 + 4.8;
            const camera = new OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);

            camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            setCamera(camera)

            const am
        }
    }, [initialCameraPosition, renderer, target])



    if(isLoading) {
        return <Skeleton borderRadius={'16px'} width={280} height={280}/>
    }

    return (
        <div ref={refContainer} className={classNames(cls.voxelDog, {}, [className])}>
            Dogg!!
        </div>
    );
};

export default VoxelDog;


