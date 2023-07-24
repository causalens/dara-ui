import { faGrinTongueWink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinTongueWink icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinTongueWink = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinTongueWink} {...props} />;
};

export default GrinTongueWink;
