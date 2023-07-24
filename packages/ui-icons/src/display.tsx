import { faDisplay } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Display icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Display = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDisplay} {...props} />;
};

export default Display;
