import { faT } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charT icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charT = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faT} {...props} />;
};

export default charT;
