import { faG } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charG icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charG = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faG} {...props} />;
};

export default charG;
