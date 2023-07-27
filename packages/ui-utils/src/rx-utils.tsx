/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';

/**
 * A helper hook that wraps a subscription and makes sure that it is properly cleaned up at the end of the component
 * lifecycle, returns a function that should wrap the call to subscribe
 *
 * @param sub the subscription to cleanup
 */
export function useSubscription(): (sub: Subscription) => void {
    const [subscription, setSubscription] = useState<Subscription>();

    useEffect(() => {
        if (subscription) {
            return () => subscription.unsubscribe();
        }
    }, [subscription]);

    return setSubscription;
}
