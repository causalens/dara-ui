import { faDeafness } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Deafness icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Deafness = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDeafness} {...props} />;
};

export default Deafness;
