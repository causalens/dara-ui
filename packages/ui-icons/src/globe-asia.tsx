import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GlobeAsia icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GlobeAsia = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlobeAsia} {...props} />;
};

export default GlobeAsia;
