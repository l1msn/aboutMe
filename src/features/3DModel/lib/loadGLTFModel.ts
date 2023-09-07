import {GLTFLoader, GLTF} from 'three/examples/jsm/loaders/GLTFLoader';

interface ILoadGLTFModelOptions {
    scene: GLTF,
    glbPath: string,
    option: {
        receiveShadow: boolean;
        castShadow: boolean;
    }
}

function loadGLTFModel(options: ILoadGLTFModelOptions) {
    const {scene, glbPath} = options;
    const {castShadow, receiveShadow} = options.option;
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        loader.load(glbPath, gltf => {
            const obj = gltf.scene;
            obj.name = 'dog';
            obj.position.y = 0;
            obj.position.x = 0;
            obj.receiveShadow = receiveShadow;
            obj.castShadow = castShadow;
            gltf.scene.add(obj);

            obj.traverse(function(child) {
                // ts сильно разнится с библиотекой three, поэтому иногда методы недоступны
                // но они есть)
                // @ts-ignore
                if(child.isMesh) {
                    child.castShadow = castShadow;
                    child.receiveShadow = receiveShadow;

                }
            })
            resolve(obj);
        }, undefined, function(err) {
            reject(err)
        })
    })
}

export default loadGLTFModel;