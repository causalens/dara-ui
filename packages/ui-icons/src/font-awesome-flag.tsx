import { faFontAwesomeFlag } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FontAwesomeFlag icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FontAwesomeFlag = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFontAwesomeFlag} {...props} />;
};

export default FontAwesomeFlag;
