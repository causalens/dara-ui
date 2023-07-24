import { faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PeopleCarryBox icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PeopleCarryBox = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPeopleCarryBox} {...props} />;
};

export default PeopleCarryBox;
