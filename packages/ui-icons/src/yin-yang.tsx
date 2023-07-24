import { faYinYang } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * YinYang icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const YinYang = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faYinYang} {...props} />;
};

export default YinYang;
