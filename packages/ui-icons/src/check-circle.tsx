import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CheckCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CheckCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCheckCircle} {...props} />;
};

export default CheckCircle;
