import { faEyeDropper } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EyeDropper icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EyeDropper = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEyeDropper} {...props} />;
};

export default EyeDropper;
