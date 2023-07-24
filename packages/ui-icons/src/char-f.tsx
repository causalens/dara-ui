import { faF } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charF icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charF = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faF} {...props} />;
};

export default charF;
