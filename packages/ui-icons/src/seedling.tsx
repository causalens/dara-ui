import { faSeedling } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Seedling icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Seedling = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSeedling} {...props} />;
};

export default Seedling;
