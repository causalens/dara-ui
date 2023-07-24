import { faRainbow } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Rainbow icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Rainbow = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRainbow} {...props} />;
};

export default Rainbow;
