import { faInfinity } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * InfinitySign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const InfinitySign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faInfinity} {...props} />;
};

export default InfinitySign;
