import { faBabyCarriage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BabyCarriage icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BabyCarriage = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBabyCarriage} {...props} />;
};

export default BabyCarriage;
