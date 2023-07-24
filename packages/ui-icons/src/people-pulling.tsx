import { faPeoplePulling } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PeoplePulling icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PeoplePulling = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPeoplePulling} {...props} />;
};

export default PeoplePulling;
