/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
import { HandlesProps, RailProps, TracksProps } from 'react-compound-slider';

// Override the types for the react-compound-slider package, updating the render return type to match @types/react@18
declare module 'react-compound-slider' {
    export class Rail extends Component<RailProps> {
        render():
            | string
            | number
            | boolean
            | React.ReactElement<
                  any,
                  | string
                  | ((
                        props: any
                    ) => React.ReactElement<
                        any,
                        string | any | (new (props: any) => React.Component<any, any, any>)
                    > | null)
                  | (new (props: any) => React.Component<any, any, any>)
              >
            | React.ReactPortal
            | null
            | undefined;
    }

    export class Handles extends Component<HandlesProps> {
        render():
            | string
            | number
            | boolean
            | React.ReactElement<
                  any,
                  | string
                  | ((
                        props: any
                    ) => React.ReactElement<
                        any,
                        string | any | (new (props: any) => React.Component<any, any, any>)
                    > | null)
                  | (new (props: any) => React.Component<any, any, any>)
              >
            | React.ReactPortal
            | null
            | undefined;
    }

    export class Tracks extends Component<TracksProps> {
        render():
            | string
            | number
            | boolean
            | React.ReactElement<
                  any,
                  | string
                  | ((
                        props: any
                    ) => React.ReactElement<
                        any,
                        string | any | (new (props: any) => React.Component<any, any, any>)
                    > | null)
                  | (new (props: any) => React.Component<any, any, any>)
              >
            | React.ReactPortal
            | null
            | undefined;
    }
}
