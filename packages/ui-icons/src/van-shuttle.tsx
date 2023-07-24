import { faVanShuttle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VanShuttle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VanShuttle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVanShuttle} {...props} />;
};

export default VanShuttle;
