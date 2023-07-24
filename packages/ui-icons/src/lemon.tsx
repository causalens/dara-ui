import { faLemon } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Lemon icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Lemon = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLemon} {...props} />;
};

export default Lemon;
