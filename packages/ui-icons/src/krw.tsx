import { faKrw } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Krw icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Krw = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKrw} {...props} />;
};

export default Krw;
