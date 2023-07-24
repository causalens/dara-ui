import { faGrinTongueSquint } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinTongueSquint icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinTongueSquint = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinTongueSquint} {...props} />;
};

export default GrinTongueSquint;
