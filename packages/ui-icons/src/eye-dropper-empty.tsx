import { faEyeDropperEmpty } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EyeDropperEmpty icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EyeDropperEmpty = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEyeDropperEmpty} {...props} />;
};

export default EyeDropperEmpty;
