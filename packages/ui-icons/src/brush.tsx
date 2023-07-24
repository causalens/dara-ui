import { faBrush } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Brush icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Brush = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBrush} {...props} />;
};

export default Brush;
