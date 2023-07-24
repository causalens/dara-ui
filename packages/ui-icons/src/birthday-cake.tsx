import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BirthdayCake icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BirthdayCake = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBirthdayCake} {...props} />;
};

export default BirthdayCake;
