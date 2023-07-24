import { faB } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charB icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charB = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faB} {...props} />;
};

export default charB;
