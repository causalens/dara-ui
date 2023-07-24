import { faSnowplow } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Snowplow icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Snowplow = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSnowplow} {...props} />;
};

export default Snowplow;
