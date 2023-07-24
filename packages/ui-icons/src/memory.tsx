import { faMemory } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Memory icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Memory = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMemory} {...props} />;
};

export default Memory;
