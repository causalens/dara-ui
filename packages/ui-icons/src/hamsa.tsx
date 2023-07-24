import { faHamsa } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hamsa icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hamsa = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHamsa} {...props} />;
};

export default Hamsa;
