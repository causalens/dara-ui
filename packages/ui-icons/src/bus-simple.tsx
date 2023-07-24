import { faBusSimple } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BusSimple icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BusSimple = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBusSimple} {...props} />;
};

export default BusSimple;
