import { faStream } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Stream icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Stream = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStream} {...props} />;
};

export default Stream;
