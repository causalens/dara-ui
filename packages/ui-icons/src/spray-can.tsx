import { faSprayCan } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SprayCan icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SprayCan = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSprayCan} {...props} />;
};

export default SprayCan;
