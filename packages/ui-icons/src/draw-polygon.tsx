import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DrawPolygon icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DrawPolygon = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDrawPolygon} {...props} />;
};

export default DrawPolygon;
