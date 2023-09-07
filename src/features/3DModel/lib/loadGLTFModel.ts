import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import three, { Scene } from 'three';

interface ILoadGLTFModelOptions {
    scene: Scene;
    glbPath: string;
    option: {
        receiveShadow: boolean;
        castShadow: boolean;
    };
}

function loadGLTFModel(options: ILoadGLTFModelOptions) {
    const { scene, glbPath } = options;
    const { castShadow, receiveShadow } = options.option;
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(
            glbPath,
            (gltf) => {
                const obj = gltf.scene;
                obj.name = 'dog';
                obj.position.y = 0;
                obj.position.x = 0;
                obj.receiveShadow = receiveShadow;
                obj.castShadow = castShadow;
                scene.add(obj);

                obj.traverse(function (child) {
                    if ((<three.Mesh>child).isMesh) {
                        child.castShadow = castShadow;
                        child.receiveShadow = receiveShadow;
                    }
                });
                resolve(obj);
            },
            undefined,
            function (err) {
                reject(err);
            },
        );
    });
}

export default loadGLTFModel;
