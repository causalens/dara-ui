import { faPenNib } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PenNib icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PenNib = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPenNib} {...props} />;
};

export default PenNib;
