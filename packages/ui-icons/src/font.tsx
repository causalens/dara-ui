import { faFont } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Font icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Font = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFont} {...props} />;
};

export default Font;
