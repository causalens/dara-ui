import { faThLarge } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * A Blocks icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Blocks = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThLarge} {...props} />;
};

export default Blocks;
