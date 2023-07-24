import { faFishFins } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FishFins icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FishFins = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFishFins} {...props} />;
};

export default FishFins;
