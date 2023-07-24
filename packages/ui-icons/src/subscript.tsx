import { faSubscript } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Subscript icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Subscript = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSubscript} {...props} />;
};

export default Subscript;
