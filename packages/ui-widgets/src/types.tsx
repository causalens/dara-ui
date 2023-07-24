export interface Operation {
    [key: string]: number | string;
    type: string;
}

export interface FeatureDict {
    column: string;
    name: string;
    ops: Operation[];
}
