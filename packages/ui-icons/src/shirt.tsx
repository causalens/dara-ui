import { faShirt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Shirt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Shirt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShirt} {...props} />;
};

export default Shirt;
