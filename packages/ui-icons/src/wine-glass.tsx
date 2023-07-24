import { faWineGlass } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WineGlass icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WineGlass = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWineGlass} {...props} />;
};

export default WineGlass;
