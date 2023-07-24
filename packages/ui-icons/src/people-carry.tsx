import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PeopleCarry icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PeopleCarry = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPeopleCarry} {...props} />;
};

export default PeopleCarry;
