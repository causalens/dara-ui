import { faHanukiah } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hanukiah icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hanukiah = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHanukiah} {...props} />;
};

export default Hanukiah;
