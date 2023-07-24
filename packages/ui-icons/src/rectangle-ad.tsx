import { faRectangleAd } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RectangleAd icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RectangleAd = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRectangleAd} {...props} />;
};

export default RectangleAd;
