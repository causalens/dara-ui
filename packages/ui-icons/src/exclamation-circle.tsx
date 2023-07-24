import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ExclamationCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ExclamationCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExclamationCircle} {...props} />;
};

export default ExclamationCircle;
