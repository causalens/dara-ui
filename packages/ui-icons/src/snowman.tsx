import { faSnowman } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Snowman icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Snowman = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSnowman} {...props} />;
};

export default Snowman;
