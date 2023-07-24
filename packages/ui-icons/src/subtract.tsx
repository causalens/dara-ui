import { faSubtract } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Subtract icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Subtract = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSubtract} {...props} />;
};

export default Subtract;
