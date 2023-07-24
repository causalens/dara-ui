import { faEquals } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Equals icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Equals = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEquals} {...props} />;
};

export default Equals;
