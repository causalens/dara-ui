import { faBugs } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bugs icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bugs = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBugs} {...props} />;
};

export default Bugs;
