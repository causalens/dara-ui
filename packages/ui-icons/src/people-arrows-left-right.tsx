import { faPeopleArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PeopleArrowsLeftRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PeopleArrowsLeftRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPeopleArrowsLeftRight} {...props} />;
};

export default PeopleArrowsLeftRight;
