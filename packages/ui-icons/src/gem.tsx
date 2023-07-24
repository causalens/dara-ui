import { faGem } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Gem icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Gem = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGem} {...props} />;
};

export default Gem;
