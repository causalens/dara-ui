import { faU } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charU icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charU = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faU} {...props} />;
};

export default charU;
