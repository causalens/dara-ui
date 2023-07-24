/**
 * Get the directory name for a given file path location
 *
 * @param path the path to get the dirname of
 */
export function dirname(path: string): string {
    const splitPath = path.split('/');
    if (splitPath.length <= 2) {
        return '/';
    }
    return `${splitPath.slice(0, splitPath.length - 1).join('/')}/`;
}
