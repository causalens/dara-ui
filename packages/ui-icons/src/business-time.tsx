import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BusinessTime icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BusinessTime = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBusinessTime} {...props} />;
};

export default BusinessTime;
