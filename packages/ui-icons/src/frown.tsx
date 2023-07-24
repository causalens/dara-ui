import { faFrown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Frown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Frown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFrown} {...props} />;
};

export default Frown;
