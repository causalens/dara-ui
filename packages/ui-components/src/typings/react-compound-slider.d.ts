/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
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
