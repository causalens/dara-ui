import { faR } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charR icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charR = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faR} {...props} />;
};

export default charR;
