import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PeopleGroup icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PeopleGroup = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPeopleGroup} {...props} />;
};

export default PeopleGroup;
