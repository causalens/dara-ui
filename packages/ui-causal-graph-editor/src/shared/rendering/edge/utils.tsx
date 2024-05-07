export function calculateSquareBoundPosition(centerX: number, centerY: number, rotation: number, nodeSize: number) {
    // Calculate half size of the square
    const halfSize = nodeSize / 2;

    // Normalize rotation angle to be within [0, 2π)
    rotation = (rotation % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

    let x, y;

    if (rotation >= 0 && rotation < Math.PI / 2) {
        // Intersection with top or right side
        if (rotation <= Math.atan(halfSize / halfSize)) {
            // Intersection with top side
            x = centerX + halfSize;
            y = centerY - Math.tan(rotation) * halfSize;
        } else {
            // Intersection with right side
            x = centerX + halfSize / Math.tan(rotation);
            y = centerY + halfSize;
        }
    } else if (rotation >= Math.PI / 2 && rotation < Math.PI) {
        // Intersection with right or bottom side
        if (rotation <= Math.atan(halfSize / halfSize)) {
            // Intersection with right side
            x = centerX + halfSize / Math.tan(rotation);
            y = centerY + halfSize;
        } else {
            // Intersection with bottom side
            x = centerX - halfSize;
            y = centerY + Math.tan(Math.PI - rotation) * halfSize;
        }
    } else if (rotation >= Math.PI && rotation < (3 * Math.PI) / 2) {
        // Intersection with bottom or left side
        if (rotation <= Math.atan(halfSize / halfSize)) {
            // Intersection with bottom side
            x = centerX - halfSize;
            y = centerY + Math.tan(Math.PI - rotation) * halfSize;
        } else {
            // Intersection with left side
            x = centerX - halfSize / Math.tan(rotation);
            y = centerY - halfSize;
        }
    } else {
        // Intersection with left or top side
        if (rotation <= Math.atan(halfSize / halfSize)) {
            // Intersection with left side
            x = centerX - halfSize / Math.tan(rotation);
            y = centerY - halfSize;
        } else {
            // Intersection with top side
            x = centerX + halfSize;
            y = centerY - Math.tan(rotation) * halfSize;
        }
    }

    return { x, y };
}