import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeadphonesSimple icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeadphonesSimple = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeadphonesSimple} {...props} />;
};

export default HeadphonesSimple;
