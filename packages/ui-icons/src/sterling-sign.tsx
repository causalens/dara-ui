import { faSterlingSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SterlingSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SterlingSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSterlingSign} {...props} />;
};

export default SterlingSign;
