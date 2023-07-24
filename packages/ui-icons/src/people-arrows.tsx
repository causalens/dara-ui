import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PeopleArrows icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PeopleArrows = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPeopleArrows} {...props} />;
};

export default PeopleArrows;
