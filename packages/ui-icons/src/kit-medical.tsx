import { faKitMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * KitMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const KitMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKitMedical} {...props} />;
};

export default KitMedical;
