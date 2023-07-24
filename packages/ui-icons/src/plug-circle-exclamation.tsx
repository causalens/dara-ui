import { faPlugCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlugCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlugCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlugCircleExclamation} {...props} />;
};

export default PlugCircleExclamation;
