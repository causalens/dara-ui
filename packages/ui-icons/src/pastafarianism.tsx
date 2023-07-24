import { faPastafarianism } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Pastafarianism icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Pastafarianism = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPastafarianism} {...props} />;
};

export default Pastafarianism;
