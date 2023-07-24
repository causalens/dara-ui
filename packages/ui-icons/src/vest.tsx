import { faVest } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Vest icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Vest = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVest} {...props} />;
};

export default Vest;
