import { faRmb } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Rmb icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Rmb = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRmb} {...props} />;
};

export default Rmb;
