import { faPeopleRobbery } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PeopleRobbery icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PeopleRobbery = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPeopleRobbery} {...props} />;
};

export default PeopleRobbery;
