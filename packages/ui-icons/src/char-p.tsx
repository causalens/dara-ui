import { faP } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charP icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charP = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faP} {...props} />;
};

export default charP;
