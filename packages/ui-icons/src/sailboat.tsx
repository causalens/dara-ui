import { faSailboat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sailboat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sailboat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSailboat} {...props} />;
};

export default Sailboat;
