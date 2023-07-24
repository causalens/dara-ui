import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * InfoCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const InfoCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faInfoCircle} {...props} />;
};

export default InfoCircle;
