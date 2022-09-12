import * as THREE from 'three'
import Experience from './Experience.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setDummy()
            }
        })
    }

    setDummy()
    {
        this.resources.items.lennaTexture.encoding = THREE.sRGBEncoding
        
        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ map: this.resources.items.lennaTexture})
        )
        this.scene.add(this.cube)    

        this.debugObjects()
    }

    debugObjects()
    {
        
    }

    resize()
    {
    }

    update()
    {
        
    }

    destroy()
    {
    }
}