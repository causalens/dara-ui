import { fa9 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * char9 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const char9 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={fa9} {...props} />;
};

export default char9;
