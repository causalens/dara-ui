import { faN } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charN icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charN = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faN} {...props} />;
};

export default charN;
