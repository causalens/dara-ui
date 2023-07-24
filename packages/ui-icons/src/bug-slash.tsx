import { faBugSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BugSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BugSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBugSlash} {...props} />;
};

export default BugSlash;
