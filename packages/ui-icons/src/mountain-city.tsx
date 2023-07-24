import { faMountainCity } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MountainCity icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MountainCity = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMountainCity} {...props} />;
};

export default MountainCity;
