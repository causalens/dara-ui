import { faRetweet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Retweet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Retweet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRetweet} {...props} />;
};

export default Retweet;
