import { faDrumSteelpan } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DrumSteelpan icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DrumSteelpan = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDrumSteelpan} {...props} />;
};

export default DrumSteelpan;
