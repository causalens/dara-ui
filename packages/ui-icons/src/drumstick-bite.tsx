import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DrumstickBite icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DrumstickBite = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDrumstickBite} {...props} />;
};

export default DrumstickBite;
