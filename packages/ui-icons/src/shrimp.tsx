import { faShrimp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Shrimp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Shrimp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShrimp} {...props} />;
};

export default Shrimp;
