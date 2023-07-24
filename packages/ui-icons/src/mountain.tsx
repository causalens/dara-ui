import { faMountain } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Mountain icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Mountain = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMountain} {...props} />;
};

export default Mountain;
