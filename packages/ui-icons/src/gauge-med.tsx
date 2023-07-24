import { faGaugeMed } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GaugeMed icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GaugeMed = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGaugeMed} {...props} />;
};

export default GaugeMed;
