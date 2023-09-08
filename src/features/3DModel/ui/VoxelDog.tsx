import React, { JSX, useCallback, useEffect, useRef, useState } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './VoxelDog.module.scss';
import Skeleton from '@/shared/ui/Skeleton';
import {
    AmbientLight,
    OrthographicCamera,
    Scene,
    sRGBEncoding,
    Vector3,
    WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import loadGLTFModel from '@/features/3DModel/lib/loadGLTFModel';
import easeOutCirc from '@/features/3DModel/lib/easeOutCirc';

interface IVoxelDogProps {
    className?: string;
}

const defaultCameraPositionsX = 20 * Math.sin(0.2 * Math.PI);
const defaultCameraPositionsY = 10;
const defaultCameraPositionsZ = 20 * Math.cos(0.2 * Math.PI);

const VoxelDog: React.FC<IVoxelDogProps> = ({
    className,
}: IVoxelDogProps): JSX.Element => {
    const refContainer = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [renderer, setRenderer] = useState<WebGLRenderer>();
    const [_camera, setCamera] = useState<OrthographicCamera>();
    const [target] = useState(new Vector3(-0.5, 1.2, 0));
    const [initialCameraPosition] = useState(
        new Vector3(
            defaultCameraPositionsX,
            defaultCameraPositionsY,
            defaultCameraPositionsZ,
        ),
    );
    const [scene] = useState(new Scene());
    const [_controls, setControls] = useState<OrbitControls>();

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const { current: container } = refContainer;
        if (container && !renderer) {
            const sceneWidth = container.clientWidth;
            const sceneHeight = container.clientHeight;

            const renderer = new WebGLRenderer({
                antialias: true,
                alpha: true,
            });

            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(sceneWidth, sceneHeight);
            renderer.outputEncoding = sRGBEncoding;
            container.appendChild(renderer.domElement);
            setRenderer(renderer);

            const scale = sceneHeight * 0.005 + 4.8;
            const camera = new OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000,
            );

            camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            setCamera(camera);

            const ambientLight = new AmbientLight(0xcccccc, 1);
            scene.add(ambientLight);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.autoRotate = true;
            controls.target = target;

            setControls(controls);

            loadGLTFModel({
                scene: scene,
                glbPath: '/dog.glb',
                option: {
                    receiveShadow: false,
                    castShadow: false,
                },
            }).then(() => {
                animate();
                setIsLoading(false);
            });

            let req: number | null = null;
            let frame: number = 0;
            const animate = () => {
                req = requestAnimationFrame(animate);

                frame = frame <= 100 ? frame + 1 : frame;

                if (frame <= 100) {
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

                    camera.position.y = 10;
                    camera.position.x =
                        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
                    camera.position.z =
                        p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);

                    camera.lookAt(target);
                } else {
                    controls.update();
                }

                renderer.render(scene, camera);
            };

            return () => {
                cancelAnimationFrame(req!);
                renderer.domElement.remove();
                renderer.dispose();
            };
        }
    }, []);

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer;
        if (container && renderer) {
            const sceneWidth = container.clientWidth;
            const sceneHeight = container.clientHeight;

            renderer.setSize(sceneWidth, sceneHeight);
        }
    }, [renderer]);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false);
        return () => {
            window.removeEventListener('resize', handleWindowResize, false);
        };
    }, [handleWindowResize]);

    return (
        <div
            ref={refContainer}
            className={classNames(cls.containerDog, {}, [className])}
        ></div>
    );
};

export default VoxelDog;
