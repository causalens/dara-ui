import { faBan } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ban icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ban = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBan} {...props} />;
};

export default Ban;
