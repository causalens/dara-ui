import { faHelmetUn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HelmetUn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HelmetUn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHelmetUn} {...props} />;
};

export default HelmetUn;
