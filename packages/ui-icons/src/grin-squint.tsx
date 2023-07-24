import { faGrinSquint } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinSquint icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinSquint = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinSquint} {...props} />;
};

export default GrinSquint;
