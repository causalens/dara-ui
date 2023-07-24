import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeadphonesAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeadphonesAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeadphonesAlt} {...props} />;
};

export default HeadphonesAlt;
