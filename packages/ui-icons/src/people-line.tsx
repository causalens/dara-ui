import { faPeopleLine } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PeopleLine icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PeopleLine = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPeopleLine} {...props} />;
};

export default PeopleLine;
