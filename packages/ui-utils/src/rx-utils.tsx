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
