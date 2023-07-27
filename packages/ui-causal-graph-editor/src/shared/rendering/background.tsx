/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { SmoothGraphics } from '@pixi/graphics-smooth';
import { Viewport } from 'pixi-viewport';
import * as PIXI from 'pixi.js';

import { DefaultTheme } from '@darajs/styled-components';

import { TextureCache } from './texture-cache';
import { colorToPixi, createKey } from './utils';

const DOT_DISTANCE = 20;
const SCALE = 0.5;

export class Background extends PIXI.utils.EventEmitter<'click'> {
    public sprite: PIXI.TilingSprite;

    constructor(theme: DefaultTheme, textureCache: TextureCache, viewport: Viewport) {
        super();
        this.sprite = new PIXI.TilingSprite(PIXI.Texture.EMPTY);
        this.sprite.tileScale.x = SCALE;
        this.sprite.tileScale.y = SCALE;
        this.sprite.tilePosition.x = DOT_DISTANCE;
        this.sprite.tilePosition.y = DOT_DISTANCE;
        this.setupListeners(viewport);
        this.updateTexture(theme, textureCache);
    }

    /**
     * Setup the listeners for the background clicks.
     *
     * The listener is set on the viewport itself as the background is behind
     * the viewport so it does not receive clicks itself.
     *
     * @param viewport viewport to listen to
     */
    private setupListeners(viewport: Viewport): void {
        let bgClickLocation: PIXI.IPointData = null;
        viewport.on('mousedown', (ev) => {
            if (ev.target === viewport) {
                bgClickLocation = ev.client.clone();
            }
        });
        viewport.on('mouseup', (ev) => {
            if (ev.target === viewport) {
                if (bgClickLocation && bgClickLocation.x === ev.client.x && bgClickLocation.y === ev.client.y) {
                    this.emit('click');
                }
            }
        });
    }

    // eslint-disable-next-line class-methods-use-this
    private createGfx(theme: DefaultTheme): SmoothGraphics {
        const gfx = new SmoothGraphics();
        const [color] = colorToPixi(theme.colors.grey2);
        gfx.beginFill(color, 1, true);
        // we're applying scale to tileSprite, so we need to scale the distance between dots
        const distance = DOT_DISTANCE / SCALE;
        gfx.drawCircle(0, distance, 1);
        gfx.drawCircle(distance, distance, 1);
        gfx.drawCircle(0, 0, 1);
        gfx.drawCircle(distance, 0, 1);
        gfx.endFill();

        return gfx;
    }

    /**
     * Update the size of the background to fit container
     *
     * @param container
     */
    public updatePosition(container: HTMLElement): void {
        this.sprite.width = container.clientWidth;
        this.sprite.height = container.clientHeight;

        this.sprite.hitArea = new PIXI.Rectangle(0, 0, container.clientWidth, container.clientHeight);
    }

    /**
     * Update the texture of the sprite based on the theme
     *
     * @param theme theme to get bg color from
     * @param textureCache texture cache to get texture from
     */
    public updateTexture(theme: DefaultTheme, textureCache: TextureCache): void {
        const texture = textureCache.get(createKey('bg', theme.themeType), () => this.createGfx(theme));
        this.sprite.texture = texture;
    }
}
