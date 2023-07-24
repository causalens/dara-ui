import { faD } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charD icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charD = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faD} {...props} />;
};

export default charD;
