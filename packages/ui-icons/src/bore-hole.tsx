import { faBoreHole } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BoreHole icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BoreHole = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBoreHole} {...props} />;
};

export default BoreHole;
