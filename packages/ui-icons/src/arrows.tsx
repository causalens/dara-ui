import { faArrows } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Arrows icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Arrows = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrows} {...props} />;
};

export default Arrows;
