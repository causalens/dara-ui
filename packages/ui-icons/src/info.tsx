import { faInfo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Info icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Info = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faInfo} {...props} />;
};

export default Info;
