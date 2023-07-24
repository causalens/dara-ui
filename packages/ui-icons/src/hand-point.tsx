import { faHandPointDown } from '@fortawesome/free-regular-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * A HandPoint icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandPoint = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandPointDown} {...props} />;
};

export default HandPoint;
