import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Headphones icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Headphones = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeadphones} {...props} />;
};

export default Headphones;
