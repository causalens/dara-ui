import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BorderStyle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BorderStyle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBorderStyle} {...props} />;
};

export default BorderStyle;
