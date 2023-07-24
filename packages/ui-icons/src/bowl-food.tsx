import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BowlFood icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BowlFood = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBowlFood} {...props} />;
};

export default BowlFood;
