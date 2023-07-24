import { faTry } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Try icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Try = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTry} {...props} />;
};

export default Try;
