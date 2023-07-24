import { faRadio } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Radio icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Radio = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRadio} {...props} />;
};

export default Radio;
