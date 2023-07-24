import { faPray } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Pray icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Pray = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPray} {...props} />;
};

export default Pray;
