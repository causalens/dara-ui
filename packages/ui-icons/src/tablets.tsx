import { faTablets } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tablets icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tablets = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTablets} {...props} />;
};

export default Tablets;
