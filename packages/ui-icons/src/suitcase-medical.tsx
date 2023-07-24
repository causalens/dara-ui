import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SuitcaseMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SuitcaseMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSuitcaseMedical} {...props} />;
};

export default SuitcaseMedical;
