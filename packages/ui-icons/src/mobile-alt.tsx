import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MobileAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MobileAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMobileAlt} {...props} />;
};

export default MobileAlt;
