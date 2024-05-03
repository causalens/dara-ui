/**
 * Copyright 2023 Impulse Innovations Limited
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { DropShadowFilter } from '@pixi/filter-drop-shadow';
import { SmoothGraphics } from '@pixi/graphics-smooth';
import * as PIXI from 'pixi.js';

import { SimulationNode, ZoomState } from '@types';

import { SHADOWS } from '../colors';
import { TextureCache } from '../texture-cache';
import { MOUSE_EVENTS, colorToPixi, createKey } from '../utils';
import { GroupContainerState } from './definitions';
import { NodeObject } from '../node';

const GROUP_RECTANGLE = 'GROUP_RECTANGLE';
const GROUP_BORDER = 'GROUP_BORDER';

/**
 * Represents a drawn Node object
 */
export class GroupContainerObject extends PIXI.utils.EventEmitter<(typeof MOUSE_EVENTS)[number]> {
    groupContainerGfx: PIXI.Container;

    /**
     * Current group container state
     */
    state: GroupContainerState = {
        hover: false,
    };

    constructor() {
        super();
        this.groupContainerGfx = this.createGroupContainer();
    }

    /**
     * Create a new group container, including sprites for:
     * - rectangle
     * - border
     */
    private createGroupContainer(): PIXI.Container<PIXI.DisplayObject> {
        const groupContainerGfx = new PIXI.Container();
        groupContainerGfx.interactive = true;
        groupContainerGfx.cursor = 'pointer';

        groupContainerGfx.hitArea = new PIXI.Rectangle(0, 0);

        // send mouse events up
        MOUSE_EVENTS.forEach((eventName) => {
            groupContainerGfx.addEventListener(eventName, (event) => this.emit(eventName, event));
        });

        // rectangle
        const containerRectangle = new PIXI.Sprite();
        containerRectangle.name = GROUP_RECTANGLE;
        containerRectangle.anchor.set(0.5);
        groupContainerGfx.addChild(containerRectangle);

        // border
        const containerBorder = new PIXI.Sprite();
        containerBorder.name = GROUP_BORDER;
        containerBorder.anchor.set(0.5);
        groupContainerGfx.addChild(containerBorder);

        return groupContainerGfx;
    }

    /**
     * Update node style of a given nodeGfx container
     *
     * @param groupContainerGfx node graphics container
     * @param nodeStyle current node style
     * @param textureCache texture cache instance
     */
    static updateContainerStyle(groupContainerGfx: PIXI.Container, nodes: SimulationNode[], textureCache: TextureCache): void {
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

        nodes.forEach(node => {
            console.log('NODE', node.x, node.y, node['meta.rendering_properties.size'] ?? 100)
            const radius = node['meta.rendering_properties.size'] ?? 100;
            minX = Math.min(minX, node.x - radius);
            maxX = Math.max(maxX, node.x + radius);
            minY = Math.min(minY, node.y - radius);
            maxY = Math.max(maxY, node.y + radius);
        });

        console.log('NODES', nodes)

        console.log('DRAWING RECTANGLE', minX, maxX, minY, maxY)

        const borderWidth = 1;

        // const outerRadius = nodeStyle.size + borderWidth;

        // // Adjust hit area
        // (groupContainerGfx.hitArea as PIXI.Circle).radius = outerRadius;

        // // Create filter the first time
        // if (!groupContainerGfx.filters || groupContainerGfx.filters.length === 0) {
        //     groupContainerGfx.filters = [new DropShadowFilter({ offset: { x: 0, y: 0 } })];
        // }
        // const dropShadow = groupContainerGfx.filters[0] as DropShadowFilter;
        // Get/create rectangle texture
        const rectangleTexture = textureCache.get(createKey(GROUP_RECTANGLE, minX, maxX, minY, maxY), () => {
            const graphics = new PIXI.Graphics();
            graphics.lineStyle(2, 0x3796F6, 0.5);  // Half-transparent border
            graphics.beginFill(0xECF2FD, 1);  // Half-transparent red fill
            graphics.drawRoundedRect(minX, minY, maxX - minX, maxY - minY, 8);
            graphics.endFill();
            return graphics;
        });





        console.log(`Drawing rectangle from (${minX}, ${minY}) to (${maxX}, ${maxY})`);


        // Set the node texture and adjust its styles
        const rectangle = groupContainerGfx.getChildByName<PIXI.Sprite>(GROUP_RECTANGLE);
        rectangle.texture = rectangleTexture;
        [rectangle.tint, rectangle.alpha] = colorToPixi('#ECF2FD');

        // // Get/create border texture
        // const borderTexture = textureCache.get(
        //     createKey(GROUP_BORDER, outerRadius, borderWidth, nodeStyle.size),
        //     () => {
        //         const graphics = new SmoothGraphics();
        //         graphics.lineStyle({ color: 0xffffff, width: borderWidth });
        //         graphics.drawCircle(outerRadius, outerRadius, nodeStyle.size);
        //         return graphics;
        //     },
        //     BORDER_PADDING
        // );

        // // Set the border texture and adjust its styles
        // const border = groupContainerGfx.getChildByName<PIXI.Sprite>(GROUP_BORDER);
        // border.texture = borderTexture;
        // [border.tint, border.alpha] = colorToPixi(nodeStyle.highlight_color);

        // // Adjust the filter style based on state
        // const themeShadows = SHADOWS[nodeStyle.theme.themeType];
        // let shadowColor = themeShadows.shadowNormal;
        // let blur = 2;

        // if (nodeStyle.state.selected) {
        //     shadowColor = nodeStyle.highlight_color;
        //     blur = 4;
        // } else if (nodeStyle.state.hover || nodeStyle.isSourceOfNewEdge) {
        //     shadowColor = themeShadows.shadowHover;
        //     blur = 4;
        // }

        // [dropShadow.color, dropShadow.alpha] = colorToPixi(shadowColor);
        // dropShadow.blur = blur;
        // dropShadow.padding = 10;
    }

    /**
     * Update visibility of node elements based on zoomstep
     *
     * @param nodeGfx node graphics container
     * @param zoomStep zoom step
     */
    static updateNodeVisibility(nodeGfx: PIXI.Container, zoomState: ZoomState, state: GroupContainerState): void {
        const shadow = nodeGfx.filters[0] as DropShadowFilter;

        // keep shadow if node is selected
        shadow.enabled = zoomState.shadow;
    }

    /**
     * Moves all group container graphics to given position
     *
     * @param position position to move to
     */
    updatePosition(position: PIXI.IPointData): void {
        this.groupContainerGfx.position.copyFrom(position);
    }

    /**
 * Update styles of all node graphics
 *
 * @param nodeStyle current node style
 * @param textureCache texture cache instance
 */
    updateStyle(nodes: SimulationNode[], textureCache: TextureCache): void {

        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;


        nodes.forEach(node => {
            const radius = node['meta.rendering_properties.size'] ?? 100;
            minX = Math.min(minX, node.x - radius);
            maxX = Math.max(maxX, node.x + radius);
            minY = Math.min(minY, node.y - radius);
            maxY = Math.max(maxY, node.y + radius);
        });

        const centerX = minX + (maxX - minX) / 2;
        const centerY = minY + (maxY - minY) / 2;

        console.log(this.groupContainerGfx)

        GroupContainerObject.updateContainerStyle(this.groupContainerGfx, nodes, textureCache);
        this.groupContainerGfx.position.copyFrom({ x: centerX, y: centerY });

    }

    /**
     * Update visibility of node graphics
     *
     * @param zoomStep current zoom step
     */
    updateVisibility(zoomState: ZoomState): void {
        GroupContainerObject.updateNodeVisibility(this.groupContainerGfx, zoomState, this.state);
    }
}
