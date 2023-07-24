import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GreaterThan icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GreaterThan = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGreaterThan} {...props} />;
};

export default GreaterThan;
