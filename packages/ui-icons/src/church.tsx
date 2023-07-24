import { faChurch } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Church icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Church = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChurch} {...props} />;
};

export default Church;
