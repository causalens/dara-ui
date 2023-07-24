import { faKhanda } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Khanda icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Khanda = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKhanda} {...props} />;
};

export default Khanda;
