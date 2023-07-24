import { faGrinWink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GrinWink icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GrinWink = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrinWink} {...props} />;
};

export default GrinWink;
