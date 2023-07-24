import { faBaseball } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Baseball icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Baseball = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBaseball} {...props} />;
};

export default Baseball;
