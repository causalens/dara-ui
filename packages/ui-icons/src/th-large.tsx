import { faThLarge } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ThLarge icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ThLarge = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThLarge} {...props} />;
};

export default ThLarge;
