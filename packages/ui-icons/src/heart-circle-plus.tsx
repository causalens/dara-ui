import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeartCirclePlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeartCirclePlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeartCirclePlus} {...props} />;
};

export default HeartCirclePlus;
