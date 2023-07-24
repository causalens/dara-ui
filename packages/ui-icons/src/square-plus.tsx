import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquarePlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquarePlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquarePlus} {...props} />;
};

export default SquarePlus;
