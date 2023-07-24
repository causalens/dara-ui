import { faBroom } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Broom icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Broom = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBroom} {...props} />;
};

export default Broom;
