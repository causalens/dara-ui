import { faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeartCircleMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeartCircleMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeartCircleMinus} {...props} />;
};

export default HeartCircleMinus;
