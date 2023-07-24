import { faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WhiskeyGlass icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WhiskeyGlass = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWhiskeyGlass} {...props} />;
};

export default WhiskeyGlass;
