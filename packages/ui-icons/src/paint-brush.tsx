import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PaintBrush icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PaintBrush = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPaintBrush} {...props} />;
};

export default PaintBrush;
