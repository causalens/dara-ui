import { faGrinHearts } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinHearts icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinHearts = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinHearts} {...props} />;
};

export default GrinHearts;
