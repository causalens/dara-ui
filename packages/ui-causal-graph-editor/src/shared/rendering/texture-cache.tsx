/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { SCALE_MODES } from '@pixi/constants';
import { IRenderer, Texture } from '@pixi/core';
import { Container } from '@pixi/display';
import { Rectangle } from '@pixi/math';

/**
 * Utility cache to create and store textures
 */
export class TextureCache {
    renderer: IRenderer;

    private textures = new Map<string, Texture>();

    constructor(renderer: IRenderer) {
        this.renderer = renderer;
    }

    /**
     * Get a texture for a given cache key or create a default one
     *
     * @param key unique key to identify the texture
     * @param defaultCallback callback to create a new texture if one doesn't exist
     */
    get(key: string, defaultCallback: () => Container, padding = 0): Texture {
        let texture = this.textures.get(key);
        if (!texture) {
            const container = defaultCallback();
            const region = container.getLocalBounds(undefined, true);
            const roundedRegion = new Rectangle(
                Math.floor(region.x) - padding / 2,
                Math.floor(region.y) - padding / 2,
                Math.ceil(region.width) + padding,
                Math.ceil(region.height) + padding
            );
            texture = this.renderer.generateTexture(container, {
                region: roundedRegion,
                resolution: this.renderer.resolution * 2,
                scaleMode: SCALE_MODES.LINEAR,
            });
            this.textures.set(key, texture);
        }
        return texture;
    }

    /**
     * Delete texture for given cache key
     *
     * @param key cache key to delete texture for
     */
    delete(key: string): void {
        const texture = this.textures.get(key);
        if (!texture) {
            return;
        }

        texture.destroy();
        this.textures.delete(key);
    }

    /**
     * Clear out all stored textures
     */
    clear(): void {
        Array.from(this.textures.keys()).forEach((key) => {
            this.delete(key);
        });
    }

    /**
     * Destroy the texture cache
     */
    destroy(): void {
        this.clear();
    }
}
