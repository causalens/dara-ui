import { faYen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Yen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Yen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faYen} {...props} />;
};

export default Yen;
