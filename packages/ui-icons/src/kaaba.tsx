import { faKaaba } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Kaaba icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Kaaba = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKaaba} {...props} />;
};

export default Kaaba;
