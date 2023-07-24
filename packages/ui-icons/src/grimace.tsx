import { faGrimace } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Grimace icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Grimace = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrimace} {...props} />;
};

export default Grimace;
