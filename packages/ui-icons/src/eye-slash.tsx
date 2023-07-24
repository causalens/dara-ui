import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EyeSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EyeSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEyeSlash} {...props} />;
};

export default EyeSlash;
