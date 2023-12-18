/**
 * Based on a node attribute checks if the path is in the attribute or in extras, if not found returns undefined
 * @param attributes node object or a sub attribute of the node object
 * @param path path to the attribute
 *  */
export function getPathInNodeAttribute(attributes: Record<string, any>, path: string): any {
    let searchablePath = path;
    // If attribute becomes undefined we have a non valid path within the node
    if (attributes === undefined) {
        throw new Error('Could not find path for rank or group within Node');
    }
    // If path is in meta change it to originalMeta
    if (searchablePath === 'meta') {
        searchablePath = 'originalMeta';
    }
    // Check if path is in node attributes
    if (Object.prototype.hasOwnProperty.call(attributes, searchablePath)) {
        return attributes[searchablePath];
    }
    // If not check if it has been moved to extras
    if (attributes?.extras && searchablePath in attributes.extras) {
        return attributes.extras[searchablePath];
    }
    // If not found the node does not have that attribute
    return undefined;
}
