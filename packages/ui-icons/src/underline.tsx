import { faUnderline } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Underline icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Underline = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUnderline} {...props} />;
};

export default Underline;
