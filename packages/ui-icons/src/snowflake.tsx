import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Snowflake icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Snowflake = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSnowflake} {...props} />;
};

export default Snowflake;
