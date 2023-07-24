import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bullhorn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bullhorn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBullhorn} {...props} />;
};

export default Bullhorn;
