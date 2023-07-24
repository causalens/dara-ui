import { faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeartCircleBolt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeartCircleBolt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeartCircleBolt} {...props} />;
};

export default HeartCircleBolt;
