import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Check icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Check = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCheck} {...props} />;
};

export default Check;
