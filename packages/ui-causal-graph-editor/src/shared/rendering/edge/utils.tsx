/**
 * Calculates the x and y position that the edge should be connected to a square node
 * 
 * @param centerX 
 * @param centerY 
 * @param rotation 
 * @param nodeSize 
 */
export function calculateTargetBoundPosition(centerX: number, centerY: number, rotation: number, nodeSize: number) {

    // Calculate half size of the square
    const halfSize = nodeSize / 2;

    // Normalize rotation angle to be within [0, 2π)
    rotation = (rotation % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

    let x, y;

    if (rotation >= 0 && rotation < Math.PI / 4) {
        // console.log('1', { centerX, centerY })
        x = centerX + Math.tan(rotation) * halfSize;
        y = centerY + halfSize;
    } else if (rotation >= Math.PI / 4 && rotation < Math.PI / 2) {
        // console.log('2', { centerX, centerY })
        x = centerX + halfSize;
        y = centerY + Math.tan(Math.PI / 2 - rotation) * halfSize;
    } else if (rotation >= Math.PI / 2 && rotation < 3 * Math.PI / 4) {
        // console.log('3', { centerX, centerY })
        // y = centerY - halfSize;
        // x = centerX - Math.tan(rotation - Math.PI / 2) * halfSize;
        x = centerX + halfSize;
        y = centerY - Math.tan(rotation - Math.PI / 2) * halfSize;

    }
    else if (rotation >= 3 * Math.PI / 4 && rotation < Math.PI) {
        // console.log('4', { centerX, centerY })
        x = centerX + Math.tan(Math.PI - rotation) * halfSize;
        y = centerY - halfSize;
    }
    else if (rotation >= Math.PI && rotation < 5 * Math.PI / 4) {
        // console.log('5', { centerX, centerY })
        x = centerX - Math.tan(rotation - Math.PI) * halfSize;
        y = centerY - halfSize;
    }
    else if (rotation >= 5 * Math.PI / 4 && rotation < 3 * Math.PI / 2) {
        // console.log('6', { centerX, centerY })
        x = centerX - halfSize;
        y = centerY - Math.tan(3 * Math.PI / 2 - rotation) * halfSize;
    }
    else if (rotation >= 3 * Math.PI / 2 && rotation < 7 * Math.PI / 4) {
        // console.log('7', { centerX, centerY })

        x = centerX - halfSize;
        y = centerY + Math.tan(rotation - 3 * Math.PI / 2) * halfSize;
    }
    else {
        // console.log('8', { centerX, centerY })
        x = centerX - halfSize;
        y = centerY + Math.tan(2 * Math.PI - rotation) * halfSize;
    }
    // console.log('calculateTargetBoundPosition', { centerX, centerY, x, y })


    return { x, y };
}

/**
 * Calculates the x and y position that the edge should be connected to a square node
 * 
 * @param centerX 
 * @param centerY 
 * @param rotation 
 * @param nodeSize 
 */
export function calculateSourceBoundPosition(centerX: number, centerY: number, rotation: number, nodeSize: number) {

    // Calculate half size of the square
    const halfSize = nodeSize / 2;

    // Normalize rotation angle to be within [0, 2π)
    rotation = (rotation % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

    let x, y;

    if (rotation >= 0 && rotation < Math.PI / 4) {
        console.log('1', { centerX, centerY })
        x = centerX - Math.tan(rotation) * halfSize;
        y = centerY - halfSize;
    } else if (rotation >= Math.PI / 4 && rotation < Math.PI / 2) {
        console.log('2', { centerX, centerY })
        x = centerX - halfSize;
        y = centerY - Math.tan(Math.PI / 2 - rotation) * halfSize;
    } else if (rotation >= Math.PI / 2 && rotation < 3 * Math.PI / 4) {
        console.log('3', { centerX, centerY })
        x = centerX - halfSize;
        y = centerY + Math.tan(rotation - Math.PI / 2) * halfSize;
    }
    else if (rotation >= 3 * Math.PI / 4 && rotation < Math.PI) {
        console.log('4', { centerX, centerY })
        x = centerX - Math.tan(Math.PI - rotation) * halfSize;
        y = centerY + halfSize;
    }
    else if (rotation >= Math.PI && rotation < 5 * Math.PI / 4) {
        console.log('5', { centerX, centerY })
        x = centerX + Math.tan(rotation - Math.PI) * halfSize;
        y = centerY + halfSize;
    }
    else if (rotation >= 5 * Math.PI / 4 && rotation < 3 * Math.PI / 2) {
        console.log('6', { centerX, centerY })
        x = centerX + halfSize;
        y = centerY + Math.tan(3 * Math.PI / 2 - rotation) * halfSize;
    }
    else if (rotation >= 3 * Math.PI / 2 && rotation < 7 * Math.PI / 4) {
        console.log('7', { centerX, centerY })

        x = centerX + halfSize;
        y = centerY - Math.tan(rotation - 3 * Math.PI / 2) * halfSize;
    }
    else {
        console.log('8', { centerX, centerY })
        x = centerX + halfSize;
        y = centerY - Math.tan(2 * Math.PI - rotation) * halfSize;
    }

    console.log('calculateSourceBoundPosition', { centerX, centerY, x, y })


    return { x, y };
}