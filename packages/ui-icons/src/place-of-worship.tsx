import { faPlaceOfWorship } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlaceOfWorship icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlaceOfWorship = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlaceOfWorship} {...props} />;
};

export default PlaceOfWorship;
