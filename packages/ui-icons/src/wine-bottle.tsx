import { faWineBottle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WineBottle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WineBottle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWineBottle} {...props} />;
};

export default WineBottle;
