import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ExclamationTriangle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ExclamationTriangle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExclamationTriangle} {...props} />;
};

export default ExclamationTriangle;
