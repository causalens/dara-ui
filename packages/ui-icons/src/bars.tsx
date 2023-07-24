import { faBars } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bars icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bars = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBars} {...props} />;
};

export default Bars;
