import { faJpy } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Jpy icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Jpy = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faJpy} {...props} />;
};

export default Jpy;
