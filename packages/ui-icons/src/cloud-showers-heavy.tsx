import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudShowersHeavy icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudShowersHeavy = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudShowersHeavy} {...props} />;
};

export default CloudShowersHeavy;
