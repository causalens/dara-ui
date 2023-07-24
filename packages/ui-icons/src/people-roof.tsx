import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PeopleRoof icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PeopleRoof = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPeopleRoof} {...props} />;
};

export default PeopleRoof;
