import { faHaykal } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Haykal icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Haykal = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHaykal} {...props} />;
};

export default Haykal;
