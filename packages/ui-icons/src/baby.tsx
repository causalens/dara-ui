import { faBaby } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Baby icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Baby = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBaby} {...props} />;
};

export default Baby;
