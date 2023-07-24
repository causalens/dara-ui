import { faCloudShowersWater } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudShowersWater icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudShowersWater = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudShowersWater} {...props} />;
};

export default CloudShowersWater;
